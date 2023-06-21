import React from 'react'
import { Button } from 'uxp/components'
import { IContextProvider } from './uxp';

interface CategoryComponentProps {
    category: any;
    uxpContext: IContextProvider;
    modelName: string;
    ENERGY : string;
    MONTHS : string[];
  }

const CategoryComponent : React.FC<CategoryComponentProps> = ({category , uxpContext ,modelName , ENERGY , MONTHS}) => {


    const onCategoryClick = async (category?: any) => {
        if (category) {
          setDefaultClick(false);
          set_id(category?._id);
          setCategoryId(category?.id);
          setCategory(category?.label);
          setId(category?.id);
          setName(category?.label);
        }
    
        const response = await uxpContext.executeService("Lucy", "GetPaginatedDocs", {
          collectionName: 'budget',
          modelName,
          max: 20,
          filter: JSON.stringify({ category: category?.id ? category?.id : "Default" })
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
      
  return (
    <Button key={category?._id} className='category-button' title={category?.label} onClick={() => onCategoryClick(category)} />
  )
}

export default CategoryComponent