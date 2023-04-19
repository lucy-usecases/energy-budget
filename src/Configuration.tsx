import React from 'react';
import './styles.scss';
import { Button, BuyOnSpaceworxButton, Input, Modal, useAlert } from 'uxp/components';
import { IContextProvider } from './uxp';

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
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [addCategory, setAddCategory] = React.useState(false);
  const [monthlyBudget, setMonthlyBudget] = React.useState(false);
  const [buySpaceworx, setBuySpaceworx] = React.useState(false);
  const [error, setError] = React.useState(false);

  const [categories, setcategories] = React.useState([]);
  const [category, setCategory] = React.useState('');
  const [categoryId, setCategoryId] = React.useState('');
  const [budgetDetails, setBudgetDetails] = React.useState({});
  const [modelKey, setModelKey] = React.useState('');
  const [values, setValues] = React.useState(Array(MONTHS.length).fill(ENERGY));

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
    setcategories(JSON.parse(data));
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
      alert.show(`${name} added succefully!!!`)
    } catch (err) {
      console.log(err);
    }
  };

  const handleValueChange = (index: any, value: any) => {
    const newValues = [...values];
    newValues[index] = parseInt(value);
    setValues(newValues);
  };

  const onCategoryClick = async (c: any) => {
    setCategoryId(c?.id);
    setCategory(c?.label);
    const response = await props.uxpContext.executeService("Lucy", "GetPaginatedDocs", {
      collectionName: 'budget',
      modelName,
      max: 20,
      filter: JSON.stringify({ category: c.id })
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
    if (id || name) {
      const body = (id && name) ? { id, label: name } : (id) ? { id } : { label: name };
      await props.uxpContext.executeService("Lucy", "UpdateDocument", {
        _id: categoryId,
        document: JSON.stringify(body),
        model: modelKey,
        collection: 'categories',
        replace: ''
      })
    }
    setId('');
    setName('');

    const budgetBody = { location: 'building', values, category: categoryId };

    if (Object.keys(budgetDetails).length > 0) {
      const { _id } = budgetDetails as any;
      await props.uxpContext.executeService("Lucy", "UpdateDocument", {
        _id,
        document: JSON.stringify(budgetBody),
        model: modelKey,
        collection: 'budget',
        replace: ''
      });

      alert.show(`Budget for ${category} updated successfully!!!`);
    } else {
      await props.uxpContext.executeService("Lucy", "AddNewDocument", {
        document: JSON.stringify(budgetBody),
        modelName,
        collection: 'budget'
      });
      alert.show(`Budget for ${category} added successfully!!!`);
    }
    setMonthlyBudget(false);

  };

  return (
    <div className='config'>
      <div className='header'>
        <span>Energy Management</span>
        <div className='actions'>
          <Button className='primary' title='Setup Budgets and Categories' onClick={() => { }}></Button>
          <Button title='Connect Meters' onClick={() => { }}></Button>
        </div>
      </div>

      {!buySpaceworx ?
        <div className='content'>
          <Button className='category-button' title='Default' onClick={() => { setMonthlyBudget(true) }}></Button>
          {categories.map(c => {
            return <Button key={c?._id} className='category-button' title={c?.label} onClick={() => onCategoryClick(c)} />
          })}
          <Button className='add' title='+' onClick={() => setAddCategory(true)}></Button>
        </div> :
        <div className='documentation'>
          <a href="">View   API Docs To send data</a>
          <BuyOnSpaceworxButton link='#' />
        </div>
      }

      {addCategory ?
        <Modal
          className='add-category'
          title='New Category'
          show={addCategory}
          onClose={() => setAddCategory(false)}>

          <Input value={id} placeholder='ID' onChange={(val) => { setError(false); setId(val) }} />
          <Input value={name} placeholder='Name' onChange={(val) => { setError(false); setName(val) }} />
          {error ? <span style={{ color: 'red', margin: "5px 5px 10px 5px", textAlign: 'end' }}>Please fill above fields</span> : null}

          <div className='save-button'>
            <Button className='button' title='Save' onClick={() => { newCategory() }} />
          </div>

        </Modal>
        : null
      };

      {monthlyBudget ?
        <Modal
          className='monthly-budget'
          title={category}
          show={monthlyBudget}
          onClose={() => setMonthlyBudget(false)}>

          <div className='inputs'>
            <Input placeholder='ID' value={id} onChange={(val) => { setError(false); setId(val) }} />
            <Input placeholder='Name' value={name} onChange={(val) => { setError(false); setName(val) }} />
          </div>

          <div className='budgets'>
            {MONTHS.map((M, i) => {
              return <div key={M} className='budget'>
                <div>
                  <Input value={values[i]} type='number' onChange={(val) => handleValueChange(i, val)} />kWh
                </div>
                <span>{M}</span>
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
