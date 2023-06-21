import React from 'react';
import { Button, IAlertResult, IToastResult, useAlert, useToast } from 'uxp/components';
import { IContextProvider } from './uxp';

import { completeInstallation } from './config-util';
import BudgetModal from './BudgetModal';
import CategoryListComponent from './CategoryListComponent';
import NewCategoryModal from './NewCategoryModal';

interface TypesComponentProps {
  categories: any[];
  uxpContext: IContextProvider;
  modelKey: string;
  modelName: string;
  ENERGY: number;
  getCategories: () => Promise<void>;
  values: any[];
  setValues: React.Dispatch<React.SetStateAction<any[]>>;
  MONTHS: string[];
  DEFAULT_BUILDING: string;
}

const TypesComponent: React.FC<TypesComponentProps> = ({ categories, uxpContext, modelKey, modelName, ENERGY, getCategories, values, setValues, MONTHS, DEFAULT_BUILDING }) => {

  return (
    <>
      <div className='config-container'>
        <div className='instructions'>
          Setup your energy categories and monthly budgets for each category.
        </div>

        <div className='content'>
          <CategoryListComponent
            categories={categories}
            uxpContext={uxpContext}
            modelKey={modelKey}
            modelName={modelName}
            ENERGY={ENERGY}
            getCategories={getCategories}
            MONTHS={MONTHS}
            DEFAULT_BUILDING={DEFAULT_BUILDING}
            values={values}
            setValues={setValues} />
          <NewCategoryModal
            uxpContext={uxpContext}
            modelName={modelName}
            getCategories={getCategories} />
        </div>
      </div>



    </>
  )
};

export default TypesComponent;
