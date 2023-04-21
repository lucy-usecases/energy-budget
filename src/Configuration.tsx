import React, { useState } from 'react';
import './styles.scss';
import './config.scss';
import { AsyncButton, Button, BuyOnSpaceworxButton, DatePicker, Input, Modal, useAlert, useToast } from 'uxp/components';
import { IContextProvider } from './uxp';
import { completeInstallation } from './config-util';

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
  const alert = useAlert();
  const toast = useToast();
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [addCategory, setAddCategory] = React.useState(false);
  const [monthlyBudget, setMonthlyBudget] = React.useState(false);
  const [defaultClick, setDefaultClick] = React.useState(false);
  const [upload, setUpload] = React.useState(false);
  const [date, setDate] = useState(new Date());

  const [setup, setSetup] = React.useState(true);
  const [error, setError] = React.useState(false);

  const [categories, setcategories] = React.useState([]);
  const [_id, set_id] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [categoryId, setCategoryId] = React.useState('');
  const [budgetDetails, setBudgetDetails] = React.useState({});
  const [modelKey, setModelKey] = React.useState('');
  const [values, setValues] = React.useState(Array(MONTHS.length).fill(ENERGY));
  const [uploadValues, setUploadValues] = React.useState([]);

  React.useEffect(() => {
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
    setcategories(catArray);
    setUploadValues(Array(catArray.length).fill(ENERGY))
  }

  const newCategory = async () => {
    try {
      if (!id || !name) {
        setError(true);
        return;
      }
      await props.uxpContext.executeService("Lucy", "AddNewDocument", {
        document: JSON.stringify({ id, label: name }),
        modelName,
        collection: 'categories'
      });
      setId('');
      setName('');
      setAddCategory(false);

      toast.success(`${name} added succefully!!!`);
      await completeInstallation(props.uxpContext);
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleValueChange = (index: any, value: any) => {
    const newValues = [...values];
    newValues[index] = parseInt(value);
    setValues(newValues);
  };

  const changeUploadValues = (index: any, value: any) => {
    const newValues = [...uploadValues];
    newValues[index] = parseInt(value);
    setUploadValues(newValues);
  };

  const onCategoryClick = async (c?: any) => {
    if (c) {
      setDefaultClick(false);
      set_id(c?._id);
      setCategoryId(c?.id);
      setCategory(c?.label);
      setId(c?.id);
      setName(c?.label);
    }

    const response = await props.uxpContext.executeService("Lucy", "GetPaginatedDocs", {
      collectionName: 'budget',
      modelName,
      max: 20,
      filter: JSON.stringify({ category: c?.id ? c?.id : "Default" })
    });
    const [result] = JSON.parse(response);
    const { data } = result;
    const [categoryResult] = JSON.parse(data);

    if (categoryResult?.values) {
      setValues(categoryResult?.values);
      setBudgetDetails(categoryResult);
    } else {
      setValues(Array(MONTHS.length).fill(ENERGY));
      setBudgetDetails({});
    }

    setMonthlyBudget(true);
  };

  const setBudgetandUpdateCategory = async (categoryId: string) => {
    if (!defaultClick) {
      if (id || name) {
        const body = (id && name) ? { id, label: name } : (id) ? { id } : { label: name };
        await props.uxpContext.executeService("Lucy", "UpdateDocument", {
          _id,
          document: JSON.stringify(body),
          model: modelKey,
          collection: 'categories',
          replace: ''
        })
      }
    }

    const budgetBody = { location: 'building', values, category: defaultClick ? 'Default' : id };
    const cat = defaultClick ? "Default" : category;

    if (Object.keys(budgetDetails).length > 0) {
      const { _id } = budgetDetails as any;
      await props.uxpContext.executeService("Lucy", "UpdateDocument", {
        _id,
        document: JSON.stringify(budgetBody),
        model: modelKey,
        collection: 'budget',
        replace: ''
      });

      toast.success(`Budget for ${cat} updated`);
    } else {
      await props.uxpContext.executeService("Lucy", "AddNewDocument", {
        document: JSON.stringify(budgetBody),
        modelName,
        collection: 'budget'
      });
      toast.success(`Budget for ${cat} added successfully.`);
    }
    setMonthlyBudget(false);
    // window.location.reload();
  };

  const uploadValuesManually = async () => {
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    let i = 0;
    for(let cat of categories) {
      await props.uxpContext.executeAction("EnergyBudget", "AddValue",
      {
        month,
        year,
        location: 'building',
        category: cat.id,
        value: uploadValues[i]
      });
      i++;
    }
    setUpload(false);
    toast.success('Energy data has been uploaded');
  };

  return (
    <div className='config'>
      <div className='header'>
        <span>Energy Management</span>
        <div className='actions'>
          <Button className={setup ? 'active primary' : 'primary'} title='Setup Budgets and Categories' onClick={() => { setSetup(true); }}></Button>
          <Button className={!setup ? 'active primary' : 'primary'} title='Connect Meters' onClick={() => { setSetup(false); }}></Button>
        </div>
      </div>

      {setup ?
        <div className='content'>
          <Button className='category-button' title='Default' onClick={() => { setDefaultClick(true); setMonthlyBudget(true); onCategoryClick() }}></Button>
          {categories.map(c => {
            return <Button key={c?._id} className='category-button' title={c?.label} onClick={() => onCategoryClick(c)} />
          })}
          <Button className='add' title='+' onClick={() => {setId('');setName('');setAddCategory(true)}}></Button>
        </div>
        :
        <div className='documentation'>
          <div className='doc-item'  onClick={()=>{setUpload(true)}}>
            <div className='icon icon-upload'  />
            <div className='label'>Manually upload energy data</div>
          </div>
          {/* <div className='doc-item'>
            <div className='icon' />
            <div className='label'>Send data via API</div>
          </div> */}
          <div className='doc-item'>
            <div className='label'>Get Smart Meters</div>
            <BuyOnSpaceworxButton link='#' className='spaceworx' />
          </div>
        </div>
      }

      {addCategory ?
        <Modal
          autoSize={true}
          className='add-category'
          title='New Category'
          show={addCategory}
          onClose={() => setAddCategory(false)}>
           <label>Category Name</label>
          <Input value={name} placeholder='Label' onChange={(val) => { 
            setError(false); 
            setName(val) ;
            setId(val.toLowerCase().replace(/\s+/g,'-'));
            }} />

          <label>Category ID</label>
          <Input value={id} placeholder='ID' onChange={(val) => { setError(false); setId(val) }} />
          {error ? <span style={{ color: 'red', margin: "5px 5px 10px 5px", textAlign: 'end' }}>Please fill above fields</span> : null}

          <div className='save-button'>
            <Button className='button' title='Save' onClick={() => { newCategory() }} />
          </div>

        </Modal>
        : null
      };


      <Modal
        className='uploadValuesModal'
        show={upload}
        autoSize={true}
        title='Update Monthly Energy Consumption'
        onClose={() => setUpload(false)}
      >
      
        <div className='categories'>
        <div className='single-category'>
          <span>Date</span>
        <DatePicker title='' date={date} onChange={val => setDate(val)} />
        </div>
          {categories.map((c, i) => {
            return <div className='single-category'>
              <span>{c?.label}</span>
              <Input value={uploadValues[i]} type='number' onChange={(v) => changeUploadValues(i, v)} />
              <label>kwh</label>
            </div>
          })}
        </div>
        <AsyncButton title='Save' onClick={async () => await uploadValuesManually()} />
      </Modal>


      {monthlyBudget ?
        <Modal
          className='monthly-budget'
          title={defaultClick ? "Default" : category}
          show={monthlyBudget}
          onClose={() => setMonthlyBudget(false)}>

          {!defaultClick ?
            <div className='inputs'>
              <label>ID</label>
              <Input placeholder='ID' value={id} onChange={(val) => { setError(false); setId(val) }} />
              <label>Label</label>
              <Input placeholder='Name' value={name} onChange={(val) => { setError(false); setName(val) }} />
            </div>
            :
            null
          }
          <div className='budget-label'>Set monthly energy consumption budgets for this  category</div>
          <div className='budgets'>
            {MONTHS.map((M, i) => {
              return <div key={M} className='budget'>
                <div>
                  <Input value={values[i]} type='number' onChange={(val) => handleValueChange(i, val)} />kWh
                </div>
                <span className='month'>{M}</span>
              </div>
            })}
          </div>

          <div className='save-button'>
            <Button title='Save' onClick={() => { setBudgetandUpdateCategory(categoryId) }} />
          </div>

        </Modal>
        : null
      }
    </div>
  )
}

export default Configuration;
