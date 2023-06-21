import React, { Dispatch, SetStateAction } from 'react';
import { AsyncButton, Input, ItemCard, Select, useAlert, useToast } from 'uxp/components';
import { IContextProvider } from './uxp';


interface Co2ComponentProps {
  uxpContext: IContextProvider
}

interface ICarbonData {
  countryCode: string;
  name: string;
  value: number;
}

const CARBON_DATASET_URL = 'https://s3.amazonaws.com/ecyber.public/datasets/carbon-intensity-electricity.json';

const Co2Component: React.FC<Co2ComponentProps> = ({
  uxpContext,
}) => {

  const [country, setCountry] = React.useState('');
  const [emission, setEmission] = React.useState('');
  const [carbonData, setCarbonData] = React.useState<ICarbonData[]>(null);

  const alerts = useAlert();
  const toast = useToast();

  async function getCarbonData() {
    let resp = await fetch(CARBON_DATASET_URL);
    let json = await resp.json();
    setCarbonData(json);
  }

  React.useEffect(() => {

    getCarbonData();
  }, []);

  return (
    <div className='co2-container'>
      <div className='instructions'>Select your region to calculate your overall carbon emission</div>
      <div className='gmap'>

        <Select
          placeholder='Select your region'
          renderOption={(option) => <ItemCard className='co2-emission-card' item={option} image={`https://static.iviva.com/flags/${option.countryCode?.toLowerCase()}.svg`} titleField='name' subTitle={`Emission Intensity: ${option?.value?.toFixed(2)} gCO2/kwh`} />}
          options={carbonData} labelField='name' valueField='countryCode' selected={country} onChange={(v, opt) => {
            setCountry(v);
            let ev = carbonData.find((x) => x.countryCode == v)?.value;
            if (ev) {
              setEmission(ev + '');
            }
          }} />
      </div>
      <div className='amount'>
        <Input onChange={setEmission} value={emission} />
        <label>gCO2/kWH</label>
      </div>
      <div className='action'>
        <AsyncButton title='Update' onClick={async () => {
          let v = Number(emission);
          if (!v) {
            alerts.show('Please enter a valid emission intensity value. You can select your country to pick a reasonable value');
            return;
          }
          await uxpContext.executeAction('EnergyBudget', 'UpdateLocationEmissionInfo', { location: 'building', 'co2': emission });
          toast.success('Emission data updated');
        }} />
      </div>
    </div>
  )
}

export default Co2Component;
