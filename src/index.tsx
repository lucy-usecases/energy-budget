import * as React from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip, ComposedChart, Line, Area } from 'recharts';
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper, Select, useUpdateWidgetProps, RadialGauge } from "uxp/components";
import './styles.scss';



const EnergyIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC44NDgiIGhlaWdodD0iMzAuODQ5IiB2aWV3Qm94PSIwIDAgMzAuODQ4IDMwLjg0OSI+CiAgPHBhdGggaWQ9Ikljb25fbWV0cm8tcG93ZXIiIGRhdGEtbmFtZT0iSWNvbiBtZXRyby1wb3dlciIgZD0iTTE0LjEzOSwxLjkyOCwyLjU3MSwxNy4zNTJIMTQuMTM5TDYuNDI3LDMyLjc3NywzMy40MTksMTMuNUgxNy45OTVMMjkuNTYzLDEuOTI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTcxIC0xLjkyOCkiLz4KPC9zdmc+Cg==';
interface IWidgetProps {
  uxpContext?: IContextProvider;
  building: string;
  year: string;
  instanceId: string;
  category:string;
}

let startYear = new Date().getFullYear();
let Years: any[] = [];
for (var i = 0; i < 3; i++) {
  let y = startYear - i;
  Years.push({ label: '' + y, value: '' + y });
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
function getMonthName(year: number, month: number) {
  return ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][month - 1] + ' - ' + year;
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
        <FilterPanel>
          <Select placeholder={'Year'} onChange={(year) => setYear(year)}
            options={Years} selected={year}
          />
          <Select placeholder={'Location'} onChange={(b) => selectBuilding(b)} selected={selectedBuilding}
            options={buildings} labelField={'location'} valueField={'location'} />

          <Select placeholder={'Energy Type'} onChange={(b) => selectCategory(b)} selected={selectedCategory}
            options={categories} labelField={'label'} valueField={'id'} />
        </FilterPanel>
      </TitleBar>
      <div style={{ flex: 1 }}>
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
            <CartesianGrid strokeWidth={0} />
            <XAxis dataKey="name" />
            <YAxis />
            <YAxis orientation={'right'} yAxisId={'cummulative'} />
            <Tooltip />
            <Legend />
            <Bar dataKey="energy" fill="#8884d8" />
            <Bar dataKey="budgeted" fill="#82ca9d" />
            <Line strokeWidth={2} yAxisId={'cummulative'} type="monotone" fill={'red'} fillOpacity={0.1} dataKey="cummulativeBudget" stroke="#ff7300" />
            <Area yAxisId={'cummulative'} type="monotone" fill={'blue'} fillOpacity={0.1} dataKey="cummulativeEnergy" stroke="#06f" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </WidgetWrapper>
  )
};
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
  React.useEffect(()=>{
    let year = new Date().getFullYear();
    let month = new Date().getMonth()+1;
    props.uxpContext.executeAction(model,'ConsumptionForLocationMonth',{location:building,year,month,category:selectedCategory},{json:true})
    .then((data:any)=>{
      if (data && data[0] && data[0].value) {
        setValue(Number(data[0].value));
      }

    updater(props.instanceId,{category:selectedCategory,building});

    }).catch(e => {
      console.log('Error loading latest monthly data',e);
    });
  },[building,budget,selectedCategory]);
  console.log('BUDGET',budget);
  return <WidgetWrapper>
    <TitleBar title={'Current Monthly Energy Usage'} >
      <FilterPanel>
        <Select onChange={selectBuilding} selected={building}
          options={buildings} labelField={'location'} valueField={'location'} />
        <Select placeholder={'Energy Type'} onChange={(b) => selectCategory(b)} selected={selectedCategory}
          options={categories} labelField={'label'} valueField={'id'} />
      </FilterPanel>
      </TitleBar>
    <div style={{ flex: 1 ,position:'relative'}}>
    <RadialGauge tickColor={'#424242'} thickness={40} gradient={true} max={Number(budget)} value={value} min={0} />

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
