import * as React from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip, ComposedChart, Line, Area } from 'recharts';
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper, Select, useUpdateWidgetProps } from "uxp/components";
import './styles.scss';
import { Gauge } from "./gauge";


const EnergyIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC44NDgiIGhlaWdodD0iMzAuODQ5IiB2aWV3Qm94PSIwIDAgMzAuODQ4IDMwLjg0OSI+CiAgPHBhdGggaWQ9Ikljb25fbWV0cm8tcG93ZXIiIGRhdGEtbmFtZT0iSWNvbiBtZXRyby1wb3dlciIgZD0iTTE0LjEzOSwxLjkyOCwyLjU3MSwxNy4zNTJIMTQuMTM5TDYuNDI3LDMyLjc3NywzMy40MTksMTMuNUgxNy45OTVMMjkuNTYzLDEuOTI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTcxIC0xLjkyOCkiLz4KPC9zdmc+Cg==';
interface IWidgetProps {
  uxpContext?: IContextProvider;
  building: string;
  year: string;
  instanceId: string;
}

let startYear = new Date().getFullYear();
let Years: any[] = [];
for (var i = 0; i < 3; i++) {
  let y = startYear - i;
  Years.push({ label: '' + y, value: '' + y });
}

function getMonthName(year: number, month: number) {
  return ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][month - 1] + ' - ' + year;
}
const EnergyBudgetWidget: React.FunctionComponent<IWidgetProps> = (props) => {
  let model = 'EnergyBudget';
  let [year, setYear] = React.useState('');
  let [buildings, setBuildings] = React.useState<any[]>([]);
  let [selectedBuilding, setSelectedBuilding] = React.useState('');
  let [selectedBudget, setSelectedBudget] = React.useState<number[]>([]);
  let [chartData, setChartData] = React.useState<any[]>([]);
  let updater = useUpdateWidgetProps();

  async function loadLocations() {
    let locations = await props.uxpContext.executeAction(model, 'GetLocations', {}, { json: true }) as any[];
    setBuildings(locations);
    // if (locations.length>0 && !props.building) {
    //   setSelectedBuilding(locations[0].location);
    //   setSelectedBudget(locations[0].values);
    // }

  }
  React.useEffect(() => {
    debugger;
    if (!buildings) {
      return;
    }
    if (props.building) {
      selectBuilding(props.building);
    }
    if (props.year) {
      setYear(props.year);
    }
  }, [buildings]);

  function selectBuilding(name: string) {
    let item = buildings.find(b => b.location == name);
    if (!item) {
      return;
    }
    setSelectedBuilding(item.location);
    setSelectedBudget(item.values);
  }

  React.useEffect(() => {
    loadLocations().then(_ => { });
  }, []);



  React.useEffect(() => {
    props.uxpContext.executeAction(model, 'ConsumptionForLocation', { year, location: selectedBuilding }, { json: true }).then((data: any[]) => {
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
      updater(props.instanceId, { year, building: selectedBuilding });

    });
  }, [year, selectedBuilding]);



  return (
    <WidgetWrapper>
      <TitleBar icon={EnergyIcon} title={'Yearly Energy Budgeted vs Actual ' + (selectedBuilding ? `${selectedBuilding} - ${year}` : '')}>
        <FilterPanel>
          <Select onChange={(year) => setYear(year)}
            options={Years} selected={year}
          />
          <Select onChange={(b) => selectBuilding(b)} selected={selectedBuilding}
            options={buildings} labelField={'location'} valueField={'location'} />
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

export const CurrentUsage: React.FunctionComponent<IWidgetProps> = (props) => {
  let radius = '50%';
  let value = 75;
  return <WidgetWrapper>
    <TitleBar title={'Current Energy'} />
    <div style={{ flex: 1 ,position:'relative'}}>
    <Gauge value={value} min={0} max={100} colors={['red','yellow','green','yellow','red']} />
    </div>
    <div style={{fontSize:'4em',textAlign:'center',padding:'10px'}}>
      {value}
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
