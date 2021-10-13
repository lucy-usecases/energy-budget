import * as React from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip, ComposedChart, Line, Area, PieChart, Pie, Cell } from 'recharts';
import { registerWidget, registerLink, registerUI, IContextProvider, IConfigPanelProps, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper, Select, useUpdateWidgetProps, RadialGauge, Checkbox, useMessageBus, DataGrid, ItemCard, FormField, Label, Input, Button, useToast } from "uxp/components";
import './styles.scss';



const EnergyIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMC44NDgiIGhlaWdodD0iMzAuODQ5IiB2aWV3Qm94PSIwIDAgMzAuODQ4IDMwLjg0OSI+CiAgPHBhdGggaWQ9Ikljb25fbWV0cm8tcG93ZXIiIGRhdGEtbmFtZT0iSWNvbiBtZXRyby1wb3dlciIgZD0iTTE0LjEzOSwxLjkyOCwyLjU3MSwxNy4zNTJIMTQuMTM5TDYuNDI3LDMyLjc3NywzMy40MTksMTMuNUgxNy45OTVMMjkuNTYzLDEuOTI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNTcxIC0xLjkyOCkiLz4KPC9zdmc+Cg==';
const PowerIcon = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33"%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23535353;%7D.b%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ccircle class="a" cx="16.5" cy="16.5" r="16.5"/%3E%3Cpath class="b" d="M7.316,1.928,2.571,8.256H7.316L4.153,14.583,15.226,6.674H8.9l4.746-4.746Z" transform="translate(7.385 8.602)"/%3E%3C/svg%3E';
const Co2Icon = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33"%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23535353;%7D.b%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ccircle class="a" cx="16.5" cy="16.5" r="16.5"/%3E%3Cpath class="b" d="M7.608,12.061a3.251,3.251,0,0,1,.734-2.08A3.188,3.188,0,0,1,10.2,8.817a4.046,4.046,0,0,1,6.454-2.311,3.955,3.955,0,0,1,1.428,2.22H18.3A3.258,3.258,0,0,1,20.68,9.7a3.2,3.2,0,0,1,.982,2.352,3.253,3.253,0,0,1-.305,1.4,3.377,3.377,0,0,1-.85,1.131v.025a2.07,2.07,0,0,1-.462,1.312,2.007,2.007,0,0,1-1.155.734,2.574,2.574,0,0,1-2.1,1.964,1.443,1.443,0,0,1-1.081,2.385,1.36,1.36,0,0,1-1.015-.429,1.4,1.4,0,0,1-.421-1.023,1.347,1.347,0,0,1,.083-.47h-.083a1.775,1.775,0,0,1-1.758-1.758,1.6,1.6,0,0,1,.248-.883,2.05,2.05,0,0,1-.924-1.032H10.785V15.4a3.323,3.323,0,0,1-2.253-1.048A3.184,3.184,0,0,1,7.608,12.061Zm1.155-.206a2.367,2.367,0,0,0,2.368,2.377,2.32,2.32,0,0,0,1.131-.281,2.529,2.529,0,0,0,.858,1.535,2.448,2.448,0,0,0,1.667.611,2.5,2.5,0,0,0,1.832-.759,1.591,1.591,0,0,0,1.271.586,1.691,1.691,0,0,0,1.7-1.7,2.374,2.374,0,0,0,.784-.858,2.327,2.327,0,0,0,.289-1.131,2.232,2.232,0,0,0-.7-1.667,2.349,2.349,0,0,0-1.692-.685,2.323,2.323,0,0,0-1.263.363,2.729,2.729,0,0,0,.066-.652,2.743,2.743,0,0,0-.85-2.03,2.931,2.931,0,0,0-4.06-.033,2.724,2.724,0,0,0-.883,1.956h-.14a2.3,2.3,0,0,0-1.675.693A2.276,2.276,0,0,0,8.763,11.854Z" transform="translate(1.332 3.3)"/%3E%3C/svg%3E';
const TreesIcon = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33"%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23535353;%7D.b%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ccircle class="a" cx="16.5" cy="16.5" r="16.5"/%3E%3Cpath class="b" d="M14.215,4.221a.43.43,0,0,1-.2-.369,4.239,4.239,0,0,0-8.443,0,.432.432,0,0,1-.2.369A4.25,4.25,0,0,0,6.717,11.8a1.159,1.159,0,0,0,.738.039,1.953,1.953,0,0,0,.369-1.433,1.4,1.4,0,0,0-.657-.328A2.506,2.506,0,0,1,5.324,7.664,2.466,2.466,0,0,1,5.98,5.981a2.3,2.3,0,0,1,.614-.49,1.451,1.451,0,0,0,.738-1.272,2.357,2.357,0,0,1,.122-.778,2.5,2.5,0,0,1,4.753,0,2.357,2.357,0,0,1,.122.778,1.365,1.365,0,0,0,.739,1.264,1.722,1.722,0,0,1,.612.487,2.445,2.445,0,0,1,.657,1.682,2.485,2.485,0,0,1-2.5,2.5,2.87,2.87,0,0,0-2.869,2.859v1.633a1.528,1.528,0,0,0,.123.739,1.849,1.849,0,0,0,1.475,0,1.421,1.421,0,0,0,.126-.739V12.973A1.109,1.109,0,0,1,11.8,11.864,4.211,4.211,0,0,0,14.225,4.2l-.01.021Z" transform="translate(7 8.769)"/%3E%3C/svg%3E';

interface IWidgetProps {
	uxpContext?: IContextProvider;
	building: string;
	year: string;
	instanceId: string;
	category: string;
}
interface IBreakdownWidgetProps {
	uxpContext?: IContextProvider;
	building: string;
	year: string;
	month: string;
	instanceId: string;
	categories: string[];

}

let startYear = new Date().getFullYear();
let Years: any[] = [];
for (var i = 0; i < 3; i++) {
	let y = startYear - i;
	Years.push({ label: '' + y, value: '' + y });
}

function useEffectWithPolling(context: any, channel: string, interval: number, callback: () => Promise<void>, deps: any[]) {
	let [tick, setTick] = React.useState(0);
	let [timer, setTimer] = React.useState(null);

	let newDeps = deps.slice();
	newDeps.push(tick);

	function startTimer() {
		clearTimeout(timer);
		setTimer(setTimeout(() => {
			setTick((x) => x + 1);
		}, interval));
	}

	React.useEffect(() => {
		clearTimeout(timer);
		console.log('running poll job');
		callback().then(() => {
			startTimer();
		}).catch(e => {
			console.log('Error in useEffectWithPolling', channel, e);
			startTimer();
		})
		return () => timer && clearTimeout(timer);
	}, newDeps);

	useMessageBus(context, channel, (p, ch) => {
		setTick((x) => x + 1);
		return "";
	});

}

interface ILocation { location: string; categories: { [name: string]: number[] } };
/**
 *  Transform a location/category/value tuple to a list of locations with a category/values map.
 */

function transformLocations(locations: Array<{ location: string, category: string, values: number[] }>): Array<ILocation> {
	let result: ILocation[] = [];
	for (let l of locations) {
		let item = result.find(x => x.location == l.location);
		if (!item) {
			item = { location: l.location, categories: {} };
			result.push(item);
		}
		if (!item.categories[l.category]) {
			item.categories[l.category] = [];
		}
		item.categories[l.category] = l.values;
	}
	return result;
}

interface ICategory { id: string, label: string, values: number[] };
function transformCategories(categories: ICategory[]) {
	return categories.map(c => {
		if (!c.label) c.label = c.id;
		return c;
	});
}
const Months = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
function getMonthName(year: number, month: number) {
	return Months[month - 1];// + ' - ' + year;
}


// energy budget widget
interface IEnergyBudgetWidgetProps extends IWidgetProps {
	colors: {
		baseline: string,
		consumption: string
		cumulativeConsumption: string,
		cumulativeBudget: string
	},
	labels: {
		xAxis: string,
		yAxis: string
	}
}

const model = 'EnergyBudget';
const EnergyBudgetWidget: React.FunctionComponent<IEnergyBudgetWidgetProps> = (props) => {

	let { colors, labels} = props

	let [yearList, setYearList] = React.useState(Years);
	let [buildings, setBuildings] = React.useState<ILocation[]>([]);
	let [categories, setCategories] = React.useState<any[]>([]);

	let [selectedBudget, setSelectedBudget] = React.useState<number[]>([]);
	let [chartData, setChartData] = React.useState<any[]>([]);
	let [co2, setCo2] = React.useState(0);

	// configurable states 
	// get defaults from props  
	let [year, setYear] = React.useState('');
	let [selectedBuilding, setSelectedBuilding] = React.useState('');
	let [selectedCategory, setSelectedCategory] = React.useState('');

	let updater = useUpdateWidgetProps();

	async function loadLocations() {
		let { locations, categories } = await props.uxpContext.executeAction(model, 'GetLocationsAndCategories', {}, { json: true }) as ILC;
		setBuildings(transformLocations(locations));
		setCategories(transformCategories(categories));

	}
	React.useEffect(() => {
		if (!buildings) {
			return;
		}
		if (props.building) {
			selectBuilding(props.building || "");
		}
		if (props.year) {
			setYear(props.year || "");
		}
		if (props.category) {
			selectCategory(props.category || "");
		}
	}, [buildings, categories, yearList]);

	function selectBuilding(name: string) {
		let item = buildings.find(b => b.location == name);
		if (!item) {
			return;
		}
		setSelectedBuilding(item.location);
		let values = item.categories[selectedCategory] || [];
		setSelectedBudget(values);
	}

	function selectCategory(name: string) {
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
		props.uxpContext.executeAction(model, 'ConsumptionForLocationWithEmission', { year, location: selectedBuilding, category: selectedCategory }, { json: true }).then((data: any[]) => {
			let consumptionData: any = {};
			let _co2 = 0;
			for (var j in data) {
				let row = data[j];
				consumptionData[Number(row.month)] = Number(row.value);
				_co2 = Number(row.co2) || 0;
			}
			setCo2(_co2);

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
			updater(props.instanceId, { year, building: selectedBuilding, category: selectedCategory });

		});
	}, [year, selectedBuilding, selectedCategory]);

	let totalConsumption = 0;
	if (chartData && chartData.length > 0) {
		totalConsumption = chartData[chartData.length - 1].cummulativeEnergy;
	}
	let showCO2 = false;
	let emissions = totalConsumption * co2 / (1000 * 1000);
	let trees = 16.5 * emissions;
	if (co2 > 0) showCO2 = true;

	return (
		<WidgetWrapper>
			<TitleBar icon={EnergyIcon} title={'Yearly Energy Budgeted vs Actual ' + (selectedBuilding ? `${selectedBuilding} - ${year}` : '') + ' ' + (selectedCategory ? `[${selectedCategory}]` : '')}>
				<FilterPanel enableClear={false}>
					<Select className={'selector-energy'} placeholder={'Year'} onChange={(year) => setYear(year)}
						options={yearList} selected={year}
					/>
					<Select className={'selector-energy'} placeholder={'Location'} onChange={(b) => selectBuilding(b)} selected={selectedBuilding}
						options={buildings} labelField={'location'} valueField={'location'} />

					<Select className={'selector-energy'} placeholder={'Energy Type'} onChange={(b) => selectCategory(b)} selected={selectedCategory}
						options={categories} labelField={'label'} valueField={'id'} />
				</FilterPanel>
			</TitleBar>
			{
				showCO2 && <div className={'carbon-footprint'}>
					<DataGrid className='cf-grid' data={[
						{ 'title': 'power consumed', value: `${totalConsumption} kWh`, image: PowerIcon },
						{ 'title': 'co2 emitted', value: `${(emissions).toFixed(1)} tonnes`, image: Co2Icon },
						{ 'title': 'trees to offset co2', value: `${(trees).toFixed(0)} `, image: TreesIcon },

					]}
						columns={3}
						renderItem={(item) => {
							return <ItemCard imageField={'image'} item={item} titleField={'value'} subTitleField={'title'} />
						}}
					/>
				</div>
			}
			<div style={{ flex: 1, padding: '30px' }}>
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
						<CartesianGrid strokeWidth={1} vertical={false} strokeOpacity={0.5} />
						<XAxis dataKey="name"
							label={{
								position: "center",
								value: labels.xAxis,
								dy: 15
							}}
						/>
						<YAxis axisLine={false}
							label={{
								position: "center",
								value: labels.yAxis,
								angle: -90,
							}}
						/>
						<YAxis axisLine={false} orientation={'right'} yAxisId={'cummulative'} />

						<Tooltip />
						<Legend align="center" verticalAlign="bottom" wrapperStyle={{ paddingTop: 20 }} />
						<Area
							filter="url(#shadow)"
							name={'Cumulative Consumption'}
							yAxisId={'cummulative'}
							fill={colors.cumulativeConsumption}
							fillOpacity={0.5}
							stroke={'#06F'}
							dataKey={colors.cumulativeConsumption}
						/>
						<Bar
							name={'Consumption'}
							barSize={15}
							dataKey="energy"
							fill={colors.consumption}
						/>
						<Bar
							name={'Baseline'}
							barSize={15}
							dataKey="budgeted"
							fill={colors.baseline}
						/>
						<Line
							name={'Cumulative Budget'}
							strokeDasharray={'0 1 1 1'}
							strokeDashoffset={3}
							strokeOpacity={0.8}
							strokeWidth={2}
							yAxisId={'cummulative'}
							type="monotone" fill={'red'}
							fillOpacity={0.1}
							dataKey="cummulativeBudget"
							stroke={colors.cumulativeBudget}
						/>

					</ComposedChart>
				</ResponsiveContainer>
			</div>
		</WidgetWrapper>
	)
};

const EnergyBudgetWidgetConfigPanel: React.FunctionComponent<IConfigPanelProps> = (props) => {

	let { onSubmit, onCancel, configs } = props
	let toast = useToast();

	let [baseline, setBaseline] = React.useState("")
	let [consumption, setConsumption] = React.useState("")
	let [cumulativeConsumption, setCumulativeConsumption] = React.useState("")
	let [cumulativeBudget, setCumulativeBudget] = React.useState("")
	let [xAxis, setXAxis] = React.useState("")
	let [yAxis, setYAxis] = React.useState("")

	React.useEffect(() => {
		console.log("configs ", configs)

		if (configs) {
			if (configs.colors.baseline) setBaseline(configs.colors.baseline)
			if (configs.colors.consumption) setConsumption(configs.colors.consumption)
			if (configs.colors.cumulativeConsumption) setCumulativeConsumption(configs.colors.cumulativeConsumption)
			if (configs.colors.cumulativeBudget) setCumulativeBudget(configs.colors.cumulativeBudget)
			if (configs.labels.xAxis) setXAxis(configs.labels.xAxis)
			if (configs.labels.yAxis) setYAxis(configs.labels.yAxis)
		}
	}, [configs])

	// validate 
	function isValid() {
		let isValid = true
		if (!baseline || baseline.trim().length == 0) {
			isValid = false;
		}
		if (!consumption || consumption.trim().length == 0) {
			isValid = false;
		}
		if (!cumulativeConsumption || cumulativeConsumption.trim().length == 0) {
			isValid = false;
		}
		if (!consumption || consumption.trim().length == 0) {
			isValid = false;
		}
		if (!cumulativeBudget || cumulativeBudget.trim().length == 0) {
			isValid = false;
		}
		if (!xAxis || xAxis.trim().length == 0) {
			isValid = false;
		}
		if (!yAxis || yAxis.trim().length == 0) {
			isValid = false;
		}
		return isValid
	}

	function save() {
		let valid = isValid()
		if (valid) {
			onSubmit({
				colors: { baseline, consumption, cumulativeBudget, cumulativeConsumption },
				labels: { xAxis: xAxis, yAxis: yAxis }
			})
		}
		else {
			toast.error("Please complete the form. All fields are required")
		}
	}

	function cancel() {
		onCancel()
	}

	return <div className="energy-budget-widget-config-panel">
		<h4>Chart Colors</h4>
		<div className="row">
			<FormField>
				<Label>Baseline</Label>
				<Input value={baseline || ""} onChange={setBaseline} />
			</FormField>
			<FormField>
				<Label>Consumption</Label>
				<Input value={consumption || ""} onChange={setConsumption} />
			</FormField>
		</div>

		<div className="row">

			<FormField>
				<Label>Cumulative Consumption</Label>
				<Input value={cumulativeConsumption || ""} onChange={setCumulativeConsumption} />
			</FormField>
			<FormField>
				<Label>Cumulative Budget</Label>
				<Input value={cumulativeBudget || ""} onChange={setCumulativeBudget} />
			</FormField>
		</div>

		<h4>Axis Labels</h4>
		<div className="row">
			<FormField>
				<Label>X Axis</Label>
				<Input value={xAxis || ""} onChange={setXAxis} />
			</FormField>
			<FormField>
				<Label>Y Axis</Label>
				<Input value={yAxis || ""} onChange={setYAxis} />
			</FormField>
		</div>

		<FormField className="button-row">
			<Button className="cancel" title="Cancel" onClick={cancel} />
			<Button className="save" title="Save" onClick={save} active={isValid()} />
		</FormField>
	</div>
}

export const EnergyBreakdown: React.FunctionComponent<IBreakdownWidgetProps> = (props) => {
	let [year, setYear] = React.useState('');
	let [month, setMonth] = React.useState('');
	let [building, setBuilding] = React.useState('');
	let [categories, setCategories] = React.useState([]);
	let [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
	let [buildings, setBuildings] = React.useState([]);
	let [utilityData, setUtilityData] = React.useState([]);

	let propsUpdater = useUpdateWidgetProps();

	function lookupCategory(cat: string) {
		let i = categories.find(c => c.id == cat);
		if (!i) {
			return cat;
		}
		return i?.label;
	}
	async function loadLocations() {
		let { locations, categories } = await props.uxpContext.executeAction(model, 'GetLocationsAndCategories', {}, { json: true }) as ILC;
		setBuildings(transformLocations(locations));
		setCategories(transformCategories(categories));

	}
	React.useEffect(() => {
		props.uxpContext.executeAction(model, 'ConsumptionBreakdownForLocationMonth', { location: building, year, month: Number(month) + 1 }, { json: true }).then(data => {
			setUtilityData(data.map((item: any) => ({ value: Number(item.value), category: item.category, label: lookupCategory(item.category) })));
			propsUpdater(props.instanceId, { building, year, month: Number(month) + 1, categories: selectedCategories });

		});

	}, [building, year, month, selectedCategories]);
	React.useEffect(() => {
		if (buildings && props.building) {
			selectBuilding(props.building);
		}
		if (props.year) {
			setYear(props.year);
		}
		if (props.month) {
			setMonth('' + (Number(props.month) - 1));
		}
		if (props.categories) {
			setSelectedCategories(props.categories);
		}
	}, [buildings, categories]);
	React.useEffect(() => {
		loadLocations();
	}, []);
	function selectBuilding(name: string) {
		setBuilding(name);
	}

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
	let consumptionData = utilityData.filter(x => selectedCategories.indexOf(x.category) >= 0);
	return <WidgetWrapper>
		<TitleBar icon={EnergyIcon} title={'Energy Consumption Category-Wise '}>
			<FilterPanel enableClear={false}>
				<Select className={'selector-energy'} placeholder={'Year'} onChange={(year) => setYear(year)}
					options={Years} selected={year}
				/>

				<Select className={'selector-energy'} placeholder={'Month'} onChange={(month) => setMonth(month)}
					options={Months.map((m, i) => ({ label: m, value: '' + i }))} selected={'' + month} />

				<Select className={'selector-energy'} placeholder={'Location'} onChange={(b) => selectBuilding(b)} selected={building}
					options={buildings} labelField={'location'} valueField={'location'} />

				<div className='cat-list'>
					{
						categories.filter(c => !(c?.subcategories?.length)).map(c => {
							let category = c.id;
							return <Checkbox checked={selectedCategories.indexOf(category) >= 0} label={c.label} onChange={(checked) => {
								let i = selectedCategories.indexOf(category);
								if (checked) {
									if (i < 0) {
										selectedCategories.push(category);
									}
								}
								if (!checked) {
									if (i >= 0) {
										selectedCategories.splice(i, 1);
									}
								}
								setSelectedCategories(selectedCategories.slice());
							}} />
						})
					}
				</div>
			</FilterPanel>
		</TitleBar>
		<div style={{ flex: 1, padding: '30px', paddingBottom: '45px' }}>
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
							<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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

	let [buildings, setBuildings] = React.useState([]);
	let [building, setBuilding] = React.useState('');
	let [value, setValue] = React.useState(0);
	let [budget, setBudget] = React.useState(0);
	let updater = useUpdateWidgetProps();

	let [categories, setCategories] = React.useState<any[]>([]);
	let [selectedCategory, setSelectedCategory] = React.useState('');


	async function loadLocations() {
		let { locations, categories } = await props.uxpContext.executeAction(model, 'GetLocationsAndCategories', {}, { json: true }) as ILC;
		setBuildings(transformLocations(locations));
		setCategories(transformCategories(categories));

	}

	React.useEffect(() => {
		loadLocations().then(_ => {

		});
	}, []);
	React.useEffect(() => {
		if (props.building && buildings && buildings.length) {
			setBuilding(props.building);
			selectBuilding(props.building);
		}
		if (props.category && categories && categories.length) {
			setSelectedCategory(props.category);
			selectCategory(props.category);
		}
	}, [buildings, categories]);


	function selectBuilding(b: string) {
		let o = buildings.find(x => x.location == b);
		if (!o) {
			console.log('Unable to find building', b);
			alert('Unable to load building details for ' + b);
			return;
		}
		setBuilding(o.location);
		let values = o.categories[selectedCategory] || [];
		setBudget(values[new Date().getMonth() + 1] || 1);

	}



	function selectCategory(name: string) {
		let item = categories.find(c => c.id == name);
		if (!item) {
			return;
		}
		setSelectedCategory(item.id);

		let l = buildings.find(b => b.location == building);
		if (l) {
			let values = l?.categories[item.id] || [];
			setBudget(values[new Date().getMonth() + 1]);

		}

	}
	useEffectWithPolling(props.uxpContext, "lxp/energy", 15 * 60 * 1000, async () => {
		let year = new Date().getFullYear();
		let month = new Date().getMonth() + 1;
		let data = await props.uxpContext.executeAction(model, 'ConsumptionForLocationMonth', { location: building, year, month, category: selectedCategory }, { json: true });
		if (data && data[0] && data[0].value) {
			setValue(Number(data[0].value));
		}
		updater(props.instanceId, { category: selectedCategory, building });


	}, [building, budget, selectedCategory]);
	let budgetValue = Number(budget);
	return <WidgetWrapper className='energy-gauge'>
		<TitleBar title={'Current Monthly Energy Usage'} >
			<FilterPanel enableClear={false}>
				<Select className={'selector-energy'} onChange={selectBuilding} selected={building}
					options={buildings} labelField={'location'} valueField={'location'} />
				<Select className={'selector-energy'} placeholder={'Energy Type'} onChange={(b) => selectCategory(b)} selected={selectedCategory}
					options={categories} labelField={'label'} valueField={'id'} />
			</FilterPanel>
		</TitleBar>
		<div style={{ flex: 1, position: 'relative' }}>
			<RadialGauge tickColor={'#424242'} thickness={40} gradient={true}
				colors={[
					{ color: 'lightblue', stopAt: 0.25 * budgetValue },
					{ color: 'lightgreen', stopAt: 0.33 * budgetValue },

					{ color: 'orange', stopAt: 0.65 * budgetValue },
					{ color: 'coral', stopAt: 0.80 * budgetValue }

				]}
				max={budgetValue} value={value} min={0} />

		</div>
		<div style={{ fontSize: '1em', textAlign: 'center', padding: '10px', marginTop: '20px' }}>
			<span style={{ height: '20px', backgroundSize: 'contain', display: 'inline-block', verticalAlign: 'middle', width: '14px', backgroundRepeat: 'no-repeat', marginRight: '10px', backgroundImage: `url(${EnergyIcon})` }}></span>
			<span style={{ textTransform: 'uppercase' }}>This Month's Consumption</span>
		</div>

		<div style={{ fontSize: '4em', textAlign: 'center', padding: '10px' }}>
			{value}<span style={{ fontSize: '0.3em', opacity: 0.5 }}>KWH</span>
			<span style={{ marginLeft: '10px', opacity: 0.8, textTransform: 'uppercase', fontSize: '0.3em' }}>{'of ' + budget}</span><span style={{ fontSize: '0.3em', opacity: 0.5 }}>KWH</span>
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
		props: [
			{
				name: "colors",
				label: "Colors",
				type: "string"
			},
			{
				name: "labels",
				label: "axis labels",
				type: "string"
			}
		],
		configPanel: EnergyBudgetWidgetConfigPanel
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



