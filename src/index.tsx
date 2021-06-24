import * as React from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip, ComposedChart, Line, Area, PieChart, Pie, Cell } from 'recharts';
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper, Select, useUpdateWidgetProps, RadialGauge, Checkbox, useMessageBus } from "uxp/components";
import './styles.scss';
import { getPositionOfLineAndCharacter } from "typescript";



const EnergyIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC44NDgiIGhlaWdodD0iMzAuODQ5IiB2aWV3Qm94PSIwIDAgMzAuODQ4IDMwLjg0OSI+CiAgPHBhdGggaWQ9Ikljb25fbWV0cm8tcG93ZXIiIGRhdGEtbmFtZT0iSWNvbiBtZXRyby1wb3dlciIgZD0iTTE0LjEzOSwxLjkyOCwyLjU3MSwxNy4zNTJIMTQuMTM5TDYuNDI3LDMyLjc3NywzMy40MTksMTMuNUgxNy45OTVMMjkuNTYzLDEuOTI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTcxIC0xLjkyOCkiLz4KPC9zdmc+Cg==';
interface IWidgetProps {
  uxpContext?: IContextProvider;
  building: string;
  year: string;
  instanceId: string;
  category:string;
}
interface IBreakdownWidgetProps {
  uxpContext?: IContextProvider;
  building: string;
  year: string;
  month: string;
  instanceId: string;
  categories:string[];

}

let startYear = new Date().getFullYear();
let Years: any[] = [];
for (var i = 0; i < 3; i++) {
  let y = startYear - i;
  Years.push({ label: '' + y, value: '' + y });
}

function useEffectWithPolling(context:any, channel: string, interval: number, callback:()=>Promise<void>,deps:any[]) {
  let [tick,setTick] = React.useState(0);
  let [timer,setTimer] = React.useState(null);

  let newDeps = deps.slice();
  newDeps.push(tick);
 
  function startTimer() {
    clearTimeout(timer);
    setTimer(setTimeout(()=>{
      setTick((x)=>x+1);
    },interval));
  }

  React.useEffect(()=>{
    clearTimeout(timer);
    console.log('running poll job');
    callback().then(()=>{
      startTimer();
    }).catch(e=>{
      console.log('Error in useEffectWithPolling',channel,e);
      startTimer();
    })
    return () => timer && clearTimeout(timer);
  },newDeps);
  
  useMessageBus(context,channel,(p,ch)=>{
    setTick((x)=>x+1);
    return "";
  });

}

interface ILocation {location:string;categories:{[name:string]:number[]}};
/**
 *  Transform a location/category/value tuple to a list of locations with a category/values map.
 */

function transformLocations(locations:Array<{location:string,category:string,values:number[]}>):Array<ILocation> {
  let result:ILocation[] = [];
  for(let l of locations) {
    let item = result.find(x => x.location == l.location);
    if (!item) {
      item = {location:l.location,categories:{}};
      result.push(item);
    }
    if (!item.categories[l.category]) {
      item.categories[l.category] = [];
    }
    item.categories[l.category] = l.values;
  }
  return result;
}

interface ICategory {id:string,label:string,values:number[]};
function transformCategories(categories:ICategory[]) {
  return categories.map(c => {
    if (!c.label) c.label = c.id;
    return c;
  });
}
const Months =  ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
function getMonthName(year: number, month: number) {
  return Months[month - 1];// + ' - ' + year;
}


const model = 'EnergyBudget';
const EnergyBudgetWidget: React.FunctionComponent<IWidgetProps> = (props) => {
  let [year, setYear] = React.useState('');
  let [buildings, setBuildings] = React.useState<ILocation[]>([]);
  let [selectedBuilding, setSelectedBuilding] = React.useState('');
  let [selectedBudget, setSelectedBudget] = React.useState<number[]>([]);
  let [chartData, setChartData] = React.useState<any[]>([]);
  let [categories,setCategories] = React.useState<any[]>([]);
  let [selectedCategory,setSelectedCategory] = React.useState('');

  let updater = useUpdateWidgetProps();
 
  async function loadLocations() {
    let {locations,categories} = await props.uxpContext.executeAction(model, 'GetLocationsAndCategories', {}, { json: true }) as ILC;
    setBuildings(transformLocations(locations));
    setCategories(transformCategories(categories));

  }
  React.useEffect(() => {
    if (!buildings) {
      return;
    }
    if (props.building) {
      selectBuilding(props.building);
    }
    if (props.year) {
      setYear(props.year);
    }
    if (props.category) {
      selectCategory(props.category);
    }
  }, [buildings,categories]);

  function selectBuilding(name: string) {
    let item = buildings.find(b => b.location == name);
    if (!item) {
      return;
    }
    setSelectedBuilding(item.location);
    let values = item.categories[selectedCategory] || [];
    setSelectedBudget(values);
  }

  function selectCategory(name:string) {
    let item = categories.find(c => c.id == name);
    if (!item) {
      return;
    }
    setSelectedCategory(item.id);

    let l = buildings.find(b => b.location == selectedBuilding);
    if (l) {
      let values = l?.categories[item.id] || [];
      setSelectedBudget(values);
    }
  }

  React.useEffect(() => {
    loadLocations().then(_ => { });
  }, []);



  React.useEffect(() => {
    props.uxpContext.executeAction(model, 'ConsumptionForLocation', { year, location: selectedBuilding,category:selectedCategory }, { json: true }).then((data: any[]) => {
      let consumptionData: any = {};
      for (var j in data) {
        let row = data[j];
        consumptionData[Number(row.month)] = Number(row.value);
      }
      chartData = [];
      let cummulativeBudget = 0;
      let cummulativeEnergy = 0;
      for (var i = 1; i < 13; i++) {
        cummulativeBudget += selectedBudget[i - 1] || 0;
        cummulativeEnergy += consumptionData[i] || 0;
        chartData.push({
          name: getMonthName(Number(year), i),
          energy: consumptionData[i] || 0,
          budgeted: selectedBudget[i - 1] || 0,
          cummulativeBudget,
          cummulativeEnergy,
        });
      }
      setChartData(chartData);
      updater(props.instanceId, { year, building: selectedBuilding ,category:selectedCategory});

    });
  }, [year, selectedBuilding,selectedCategory]);



  return (
    <WidgetWrapper>
      <TitleBar icon={EnergyIcon} title={'Yearly Energy Budgeted vs Actual ' + (selectedBuilding ? `${selectedBuilding} - ${year}` : '') + ' ' + (selectedCategory?`[${selectedCategory}]`:'')}>
        <FilterPanel enableClear={false}>
          <Select className={'selector-energy'}   placeholder={'Year'} onChange={(year) => setYear(year)}
            options={Years} selected={year}
          />
          <Select className={'selector-energy'}   placeholder={'Location'} onChange={(b) => selectBuilding(b)} selected={selectedBuilding}
            options={buildings} labelField={'location'} valueField={'location'} />

          <Select className={'selector-energy'}   placeholder={'Energy Type'} onChange={(b) => selectCategory(b)} selected={selectedCategory}
            options={categories} labelField={'label'} valueField={'id'} />
        </FilterPanel>
      </TitleBar>
      <div style={{ flex: 1,padding:'30px' ,paddingBottom:'45px'}}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
               <defs>
        <filter id="shadow" height="200%">
        <feDropShadow dx="4" dy="4" stdDeviation="4" />    
        </filter>
    </defs>
            <CartesianGrid strokeWidth={1} vertical={false} strokeOpacity={0.5}/>
            <XAxis dataKey="name" />
            <YAxis axisLine={false} />
            <YAxis  axisLine={false} orientation={'right'} yAxisId={'cummulative'} />
        
            <Tooltip />
            <Legend />
            <Bar name={'Consumption'} barSize={15} dataKey="energy" fill='#F78FAA'  />
            <Bar name={'Baseline'}    barSize={15} dataKey="budgeted" fill="#79B7B6"/>
            <Line name={'Cummulative Budget'} strokeDasharray={'0 1 1 1'} strokeDashoffset={3} strokeOpacity={0.8} strokeWidth={2} yAxisId={'cummulative'} type="monotone" fill={'red'} fillOpacity={0.1} dataKey="cummulativeBudget" stroke="#ff7300" />
            <Area filter="url(#shadow)"  name={'Cummulative Consumption'} yAxisId={'cummulative'} 
             fill={'#06F'} fillOpacity={0.5} 
            stroke={'#06F'}
            dataKey="cummulativeEnergy" /> 

          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </WidgetWrapper>
  )
};

export const EnergyBreakdown: React.FunctionComponent<IBreakdownWidgetProps> = (props) => {
  let [year,setYear] = React.useState('');
  let [month,setMonth] = React.useState('');
  let [building,setBuilding] = React.useState('');
  let [categories,setCategories] = React.useState([]);
  let [selectedCategories,setSelectedCategories] = React.useState<string[]>([]);
  let [buildings,setBuildings] = React.useState([]);
  let [utilityData,setUtilityData] = React.useState([]);

  let propsUpdater = useUpdateWidgetProps();

  function lookupCategory(cat:string) {
    let i = categories.find(c => c.id == cat);
    if (!i) {
      return cat;
    }
    return i?.label;
  }
  async function loadLocations() {
    let {locations,categories} = await props.uxpContext.executeAction(model, 'GetLocationsAndCategories', {}, { json: true }) as ILC;
    setBuildings(transformLocations(locations));
    setCategories(transformCategories(categories));

  }
  React.useEffect(()=>{
    props.uxpContext.executeAction(model,'ConsumptionBreakdownForLocationMonth',{location:building,year,month:Number(month)+1},{json:true}).then(data=>{
      setUtilityData(data.map((item:any) => ({value:Number(item.value),category:item.category,label:lookupCategory(item.category)})));
      propsUpdater(props.instanceId,{building,year,month:Number(month)+1,categories:selectedCategories});

    });

  },[building,year,month,selectedCategories]);
  React.useEffect(() => {
    if (buildings && props.building) {
      selectBuilding(props.building);
    }
    if (props.year) {
      setYear(props.year);
    }
    if (props.month) {
      setMonth(''+(Number(props.month) - 1));
    }
    if (props.categories) {
      setSelectedCategories(props.categories);
    }
  }, [buildings,categories]);
  React.useEffect(()=>{
    loadLocations();
  },[]);
  function selectBuilding(name: string) {
    setBuilding(name);
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  let consumptionData = utilityData.filter(x => selectedCategories.indexOf(x.category)>=0);
  return <WidgetWrapper>
     <TitleBar icon={EnergyIcon} title={'Energy Consumption Category-Wise '}>
        <FilterPanel enableClear={false}>
          <Select className={'selector-energy'}  placeholder={'Year'} onChange={(year) => setYear(year)}
            options={Years} selected={year}
          />

          <Select className={'selector-energy'} placeholder={'Month'} onChange={(month) =>setMonth(month)}
          options={Months.map( (m,i)=> ({label:m,value:''+i}))} selected={''+month} />

          <Select className={'selector-energy'} placeholder={'Location'} onChange={(b) => selectBuilding(b)} selected={building}
            options={buildings} labelField={'location'} valueField={'location'} />

        <div className='cat-list'>
          {
            categories.filter(c => !(c?.subcategories?.length)).map(c => {
              let category = c.id;
              return <Checkbox checked={selectedCategories.indexOf(category)>=0} label={c.label} onChange={(checked)=>{
                let i = selectedCategories.indexOf(category);
                if (checked) {
                  if (i < 0) {
                    selectedCategories.push(category);
                  }
                }
                if (!checked) {
                  if (i >= 0) {
                     selectedCategories.splice(i,1);
                  }
                }
                setSelectedCategories(selectedCategories.slice());
              }} />
            })
          }
        </div>
        </FilterPanel>
      </TitleBar>
      <div style={{ flex: 1,padding:'30px' ,paddingBottom:'45px'}}>
    <ResponsiveContainer width="100%" height="100%">
            <PieChart>

                <Legend verticalAlign="top" height={36} />
                <Pie

                    data={consumptionData}
                    label={true}
                      cx={'50%'}
                      nameKey={'label'}
                      cy={'50%'}
                    innerRadius={'55%'}
                    outerRadius={'85%'}

                    paddingAngle={5}
                    dataKey="value"
                  

                >
              {consumptionData.map((entry, index) => (
            <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}                  
                </Pie>
            </PieChart>
        </ResponsiveContainer>
        </div>
  </WidgetWrapper>;
}
interface ILC {
  locations: any[];
  categories: any[];
}
export const CurrentUsage: React.FunctionComponent<IWidgetProps> = (props) => {
  let radius = '50%';

  let [buildings,setBuildings] = React.useState([]);
  let [building,setBuilding] = React.useState('');
  let [value,setValue] = React.useState(0);
  let [budget,setBudget] = React.useState(0);
  let updater = useUpdateWidgetProps();

  let [categories,setCategories] = React.useState<any[]>([]);
  let [selectedCategory,setSelectedCategory] = React.useState('');


  async function loadLocations() {
    let {locations,categories} = await props.uxpContext.executeAction(model, 'GetLocationsAndCategories', {}, { json: true }) as ILC;
    setBuildings(transformLocations(locations));
    setCategories(transformCategories(categories));

  }
  
  React.useEffect(()=>{
    loadLocations().then(_=>{
      
    });
  },[]);
  React.useEffect(()=>{
    if (props.building && buildings && buildings.length) {
      setBuilding(props.building);
      selectBuilding(props.building);
    }
    if (props.category && categories && categories.length) {
      setSelectedCategory(props.category);
      selectCategory(props.category);
    }
  },[buildings,categories]);

 
  function selectBuilding(b:string) {
    let o = buildings.find( x=>x.location == b);
    if (!o) {
      console.log('Unable to find building',b);
      alert('Unable to load building details for ' + b);
      return;
    }
    setBuilding(o.location);
    let values = o.categories[selectedCategory] || [];
    setBudget(values[new Date().getMonth()+1]||1);

  }



  function selectCategory(name:string) {
    let item = categories.find(c => c.id == name);
    if (!item) {
      return;
    }
    setSelectedCategory(item.id);

    let l = buildings.find(b => b.location == building);
    if (l) {
      let values = l?.categories[item.id] || [];
      setBudget(values[new Date().getMonth()+1]);

    }

  }
  useEffectWithPolling(props.uxpContext,"lxp/energy",15*60*1000,async ()=>{
    let year = new Date().getFullYear();
    let month = new Date().getMonth()+1;
    let data = await props.uxpContext.executeAction(model,'ConsumptionForLocationMonth',{location:building,year,month,category:selectedCategory},{json:true});
    if (data && data[0] && data[0].value) {
      setValue(Number(data[0].value));
    }
    updater(props.instanceId,{category:selectedCategory,building});

   
  },[building,budget,selectedCategory]);
  let budgetValue = Number(budget);
  return <WidgetWrapper>
    <TitleBar title={'Current Monthly Energy Usage'} >
      <FilterPanel enableClear={false}>
        <Select className={'selector-energy'}  onChange={selectBuilding} selected={building}
          options={buildings} labelField={'location'} valueField={'location'} />
        <Select className={'selector-energy'}  placeholder={'Energy Type'} onChange={(b) => selectCategory(b)} selected={selectedCategory}
          options={categories} labelField={'label'} valueField={'id'} />
      </FilterPanel>
      </TitleBar>
    <div style={{ flex: 1 ,position:'relative'}}>
    <RadialGauge tickColor={'#424242'} thickness={40} gradient={true}
        colors={[
          { color: 'lightblue', stopAt: 0.25 * budgetValue },
          { color: 'lightgreen', stopAt: 0.33 * budgetValue },

          { color: 'orange', stopAt: 0.65 * budgetValue },
          { color: 'coral', stopAt: 0.80 * budgetValue }

        ]}
    max={budgetValue} value={value} min={0} />

    </div>
    <div style={{fontSize:'1em',textAlign:'center',padding:'10px',marginTop:'20px'}}>
      <span style={{height:'20px',backgroundSize:'contain',display:'inline-block',verticalAlign:'middle',width:'14px',backgroundRepeat:'no-repeat',marginRight:'10px',backgroundImage:`url(${EnergyIcon})`}}></span>
      <span style={{textTransform:'uppercase'}}>This Month's Consumption</span>
    </div>

    <div style={{fontSize:'4em',textAlign:'center',padding:'10px'}}>
      {value}<span style={{fontSize:'0.3em',opacity:0.5}}>KWH</span>  
      <span style={{marginLeft:'10px',opacity:0.8,textTransform:'uppercase',fontSize:'0.3em'}}>{'of ' + budget}</span><span style={{fontSize:'0.3em',opacity:0.5}}>KWH</span>
    </div>
  </WidgetWrapper>;
}

/**
 * Register as a Widget
 */
registerWidget({
  id: "energy-budget",
  name: "Energy Budget",
  widget: EnergyBudgetWidget,

  configs: {
    layout: {

    },
  },

});

registerWidget({
  id: "current-monthly-energy",
  name: "Current Energy Usage",
  widget: CurrentUsage,

  configs: {
    layout: {

    },
  },

});


registerWidget({
  id: "energy-breakdown",
  name: "Energy Breakdown by Type",
  widget: EnergyBreakdown,

  configs: {
    layout: {

    },
  },

});



