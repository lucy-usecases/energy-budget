import React from 'react';
import { Input, Button, Modal, useAlert, useToast } from 'uxp/components';
import { IContextProvider } from './uxp';

interface BudgetModalProps {
  monthlyBudget: boolean;
  defaultClick: boolean;
  categoryId: string;
  categoryLabel: string;
  values: number[];
  setMonthlyBudget: (value: boolean) => void;
  setCategoryId: (value: string) => void;
  setCategoryLabel: (value: string) => void;
  setBudgetandUpdateCategory: (id: string) => void;
  MONTHS: string[];
  setValues: React.Dispatch<React.SetStateAction<any[]>>;
  uxpContext: IContextProvider;
  getCategories: () => Promise<void>;
  modelName: string;
}

const BudgetModal: React.FC<BudgetModalProps> = ({
  monthlyBudget,
  defaultClick,
  categoryId,
  setCategoryId,
  categoryLabel,
  setCategoryLabel,
  setMonthlyBudget,
  setBudgetandUpdateCategory,
  MONTHS,
  values,
  setValues,
  uxpContext,
  getCategories,
  modelName
}) => {

  const alerts = useAlert();
  const toast = useToast();

  async function deleteCategory(id: string) {
    let b = await alerts.confirm('Are you sure you want to delete this category and monthly budgets? This will not remove any existing meter data. You can add the category again later');
    if (!b) {
      return;
    }
    await uxpContext.executeAction(modelName, 'DeleteCategory', { category: id }, { json: true });
    toast.success('Category deleted');
    await getCategories();

  }

  const handleValueChange = (index: any, value: any) => {
    const newValues = [...values];
    newValues[index] = parseInt(value);
    setValues(newValues);
  };

  return (
    <Modal
      className='monthly-budget'
      title={defaultClick ? "Default" : categoryId}
      show={monthlyBudget}
      onClose={() => setMonthlyBudget(false)}
    >

      {!defaultClick ?
        <div className='inputs'>
          <label>ID</label>
          <Input placeholder='ID' value={categoryId} onChange={(val) => { setCategoryId(val) }} />
          <label>Label</label>
          <Input placeholder='Name' value={categoryLabel} onChange={(val) => { setCategoryLabel(val) }} />
        </div>
        :
        null
      }
      <div className='budget-label'>Set monthly energy consumption budgets for this  category</div>
      <div className='budgets'>
        {MONTHS.map((M, i) => {
          return <div key={M} className='budget'>
            <div>
              <Input value={values[i].toString()} type='number' onChange={(val) => handleValueChange(i, Number(val))} />kWh
            </div>
            <span className='month'>{M}</span>
          </div>
        })}
      </div>
      <div className='actions'>
        <div className='delete-button'>
          <a href='#' onClick={() => deleteCategory(categoryId).then(() => setMonthlyBudget(false))}>Delete this category</a>
        </div>
        <div className='save-button'>
          <Button title='Save' onClick={() => { setBudgetandUpdateCategory(categoryId) }} />
        </div>
      </div>

    </Modal>
  );
}

export default BudgetModal;
