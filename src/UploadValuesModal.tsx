import React, { Dispatch, SetStateAction } from 'react';
import { Modal, DatePicker, Input, AsyncButton, useToast } from 'uxp/components';
import { IContextProvider } from './uxp';
import { completeInstallation } from './config-util';

interface UploadValuesModalProps {
  upload: boolean;
  setUpload: Dispatch<SetStateAction<boolean>>;
 
  categories: any[]; // replace any with the actual type of a category
  uploadValues: number[];
  
  uxpContext: IContextProvider;
  DEFAULT_BUILDING : string;
  setUploadValues : React.Dispatch<React.SetStateAction<any[]>>;
}

const UploadValuesModal: React.FC<UploadValuesModalProps> = ({
  upload,
  setUpload,
 
  categories,
  uploadValues,
  
  uxpContext,
  DEFAULT_BUILDING,
  setUploadValues,
}) => {

  const toast = useToast();

  const [date, setDate] = React.useState(new Date());

  const changeUploadValues = (index: any, value: any) => {
    const newValues = [...uploadValues];
    newValues[index] = parseInt(value);
    setUploadValues(newValues);
  };

  const uploadValuesManually = async () => {
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();
    let i = 0;
    for (let cat of categories) {
      await uxpContext.executeAction("EnergyBudget", "AddValue",
        {
          month,
          year,
          location: DEFAULT_BUILDING,
          category: cat.id,
          value: uploadValues[i]
        });
      i++;
    }
    setUpload(false);
    await completeInstallation(uxpContext);
    toast.success('Energy data has been uploaded');
  };
  return (
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
          return (
            <div className='single-category' key={i}>
              <span>{c?.label}</span>
              <Input value={uploadValues[i].toString()} type='number' onChange={(v) => changeUploadValues(i, Number(v))} />
              <label>kwh</label>
            </div>
          )
        })}
      </div>
      <AsyncButton title='Save' onClick={async () => await uploadValuesManually()} />
    </Modal>
  );
};

export default UploadValuesModal;
