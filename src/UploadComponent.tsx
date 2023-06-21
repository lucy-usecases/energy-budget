import React from 'react';
import { BuyOnSpaceworxButton, IAlertResult, IToastResult, useAlert, useToast } from 'uxp/components';
import UploadValuesModal from './UploadValuesModal';
import { IContextProvider } from './uxp';
import { completeInstallation } from './config-util';

interface UploadComponentProps {
  categories: any[];
  uxpContext: IContextProvider;
 
  DEFAULT_BUILDING : string;
  getCategories: () => Promise<void>;
  modelName: string;
  
  values : any[];
  uploadValues : any[];
  setUploadValues : React.Dispatch<React.SetStateAction<any[]>>;
}

const productIds =['60a7514811463a1ec3e13528', '6284e77efe60b4e6386f8e97', '6284d138fe60b4e6386f8e8b', '63fc771953a83942be8e7be5'];

const UploadComponent: React.FC<UploadComponentProps> = ({   categories , uxpContext  , DEFAULT_BUILDING , getCategories,modelName  , values , uploadValues , setUploadValues}) => {
  
  const [upload, setUpload] = React.useState(false);
  const alerts = useAlert();
 
  const addNewCategory = async (cid: string, cname: string, budget: number[]) => {
    await uxpContext.executeService("Lucy", "AddNewDocument", {
      document: JSON.stringify({ id: cid, label: cname }),
      modelName,
      collection: 'categories',
      replace: ''
    });
    await uxpContext.executeService("Lucy", "AddNewDocument", {
      document: JSON.stringify({ location: DEFAULT_BUILDING, values: budget, category: cid }),
      modelName,
      collection: 'budget',
    });

  }

  async function uploadData() {
    if (categories.length < 1) {
      let options = await alerts.form({
        title: 'Setup your categories first',
        content: 'You need to setup at least one energy category and budget before entering data. You can start simple. Lets create a single category. Call it "Overall Energy" or something.',
        formStructure: [
          { label: 'Category Name', validate: { required: true }, name: 'category', type: 'string', placeholder: 'Overall Energy' },
        ]
      });
      let { category } = options;
      if (!category) {
        return;
      }
      //use last set budget values or defaults
      let cid = category.toLowerCase().replace(/\s+/g, '-');
      await addNewCategory(cid, category, values);
      await getCategories();
      setUpload(true);
      return;
    } else {
      setUpload(true);
    }
  }


  return (
    <>
    <div className='connect-container'>
      <div className='instructions'>Either manually enter your energy data here, or connect some smart meters to automatically send data into Lucy</div>

      <div className='documentation'>
        <div className='doc-item' onClick={uploadData}>
          <div className='icon icon-upload' />
          <div className='label'>Manually upload energy data</div>
        </div>
        {/* <div className='doc-item'>
          <div className='icon' />
          <div className='label'>Send data via API</div>
        </div> */}
        <div className='doc-item'>
          <div className='label'>Get Smart Meters</div>
          <BuyOnSpaceworxButton className='spaceworx'
            productIds={productIds}
          />
        </div>
      </div>
    </div>
    {upload && <UploadValuesModal
        upload={upload}
        setUpload={setUpload}
        categories={categories}
        uploadValues={uploadValues}
        setUploadValues={setUploadValues}
        uxpContext={uxpContext}
        DEFAULT_BUILDING={DEFAULT_BUILDING}
      />}
    </>
  )
}

export default UploadComponent;
