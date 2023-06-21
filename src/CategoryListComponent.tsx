import React from 'react'
import { Button, useToast } from 'uxp/components';
import BudgetModal from './BudgetModal';
import { IContextProvider } from './uxp';

interface CategoryListComponentProps {
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

const CategoryListComponent: React.FC<CategoryListComponentProps> = ({ 
    uxpContext, 
    modelKey, 
    DEFAULT_BUILDING, 
    modelName, 
    values ,
    setValues ,
    categories ,
    getCategories , 
    MONTHS ,
    ENERGY,
 }) => {
    const [defaultClick, setDefaultClick] = React.useState(false);
    const [_id, set_id] = React.useState('');
    const [categoryId, setCategoryId] = React.useState('');
    const [categoryLabel, setCategoryLabel] = React.useState('');
    const [budgetDetails, setBudgetDetails] = React.useState({});
    const [monthlyBudget, setMonthlyBudget] = React.useState(false);
    const toast = useToast();

    const onCategoryClick = async (c?: any) => {
        if (c) {
            setDefaultClick(false);
            set_id(c?._id);
            setCategoryId(c?.id);
            setCategoryLabel(c?.label);
        }

        const response = await uxpContext.executeService("Lucy", "GetPaginatedDocs", {
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
            if (categoryId || categoryLabel) {
                const body = (categoryId && categoryLabel) ? { categoryId, label: categoryLabel } : (categoryId) ? { categoryId } : { label: categoryLabel };
                await uxpContext.executeService("Lucy", "UpdateDocument", {
                    _id,
                    document: JSON.stringify(body),
                    model: modelKey,
                    collection: 'categories',
                    replace: ''
                })
            }
        }

        const budgetBody = { location: DEFAULT_BUILDING, values, category: defaultClick ? 'Default' : categoryId };
        const cat = defaultClick ? "Default" : categoryLabel;

        if (Object.keys(budgetDetails).length > 0) {
            const { _id } = budgetDetails as any;
            await uxpContext.executeService("Lucy", "UpdateDocument", {
                _id,
                document: JSON.stringify(budgetBody),
                model: modelKey,
                collection: 'budget',
                replace: ''
            });

            toast.success(`Budget for ${cat} updated`);
        } else {
            await uxpContext.executeService("Lucy", "AddNewDocument", {
                document: JSON.stringify(budgetBody),
                modelName,
                collection: 'budget'
            });
            toast.success(`Budget for ${cat} added successfully.`);
        }
        setMonthlyBudget(false);
        await getCategories();
        // window.location.reload();
    };
    return (
        <>
            <Button className='category-button' title='Default' onClick={() => { setDefaultClick(true); setMonthlyBudget(true); onCategoryClick() }}></Button>
            {categories.map(c => {
                return <Button key={c?._id} className='category-button' title={c?.label} onClick={() => onCategoryClick(c)} />
            })}
            <BudgetModal
                monthlyBudget={monthlyBudget}
                setMonthlyBudget={setMonthlyBudget}
                defaultClick={defaultClick}
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                categoryLabel={categoryLabel}
                setCategoryLabel={setCategoryLabel}
                values={values}
                setValues={setValues}
                setBudgetandUpdateCategory={setBudgetandUpdateCategory}
                MONTHS={MONTHS}
                uxpContext={uxpContext}
                getCategories={getCategories}
                modelName={modelName} />
        </>
    )
}

export default CategoryListComponent