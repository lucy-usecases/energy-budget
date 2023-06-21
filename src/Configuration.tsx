import React, { useState } from 'react';
import './styles.scss';
import './config.scss';
import { useAlert, useToast } from 'uxp/components';
import { IContextProvider } from './uxp';
import { completeInstallation } from './config-util';
import HeaderComponent from './HeaderComponent';
import TypesComponent from './TypesComponent';
import UploadComponent from './UploadComponent';
import Co2Component from './Co2Component';


const DEFAULT_BUILDING = 'building';

export interface IConfigUIProps {
  uxpContext: IContextProvider;
  packageUrl: string;
  loadConfigUI: (ui: string) => void;
  onClose: () => void;
}


const ENERGY = 230;
const modelName = 'EnergyBudget';
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Configuration: React.FunctionComponent<IConfigUIProps> = (props) => {

  const [mode, setMode] = React.useState<'types' | 'upload' | 'co2'>('types');
  const [categories, setCategories] = React.useState([]);
  const [values, setValues] = React.useState(Array(MONTHS.length).fill(ENERGY));
  const [modelKey, setModelKey] = React.useState('');
  const [uploadValues, setUploadValues] = React.useState([]);
  

  React.useEffect(() => {
    /* mark as completed when the config page opens */
    completeInstallation(props.uxpContext);
    getModelKey();
    getCategories();
    
  }, []);

 
  async function getModelKey() {
    const result = await props.uxpContext.executeService('System', 'MetadataMap:KeyByname', { Name: modelName });
    const details = JSON.parse(result);
    const { Key } = details[0];
    setModelKey(Key);
  }

  async function getCategories() {
    const res = await props.uxpContext.executeService("Lucy", "GetPaginatedDocs", {
      collectionName: 'categories',
      modelName,
      max: 20,
      filter: JSON.stringify({})
    });
    const { data } = JSON.parse(res)[0];
    const catArray = JSON.parse(data);
    setCategories(catArray);
    setUploadValues(Array(catArray.length).fill(ENERGY))
  }


  return (
    <div className='config'>
      <HeaderComponent mode={mode} setMode={setMode} />

      {(mode == 'upload') && <UploadComponent
        categories={categories}
        uxpContext={props.uxpContext}
        DEFAULT_BUILDING={DEFAULT_BUILDING}
        getCategories={getCategories}
        modelName={modelName}
        values={values}
        uploadValues={uploadValues} 
        setUploadValues={setUploadValues}/>}


      {mode === 'types' && <TypesComponent
        categories={categories}
        uxpContext={props.uxpContext}
        modelName={modelName}
        ENERGY={ENERGY}
        getCategories={getCategories}
        values={values}
        setValues={setValues}
        MONTHS={MONTHS} 
        modelKey={modelKey} 
        DEFAULT_BUILDING={DEFAULT_BUILDING} />}

      {mode === 'co2' && <Co2Component
        uxpContext={props.uxpContext} />}
      
    </div>
  )
}

export default Configuration;
