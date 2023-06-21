import React, { Dispatch, SetStateAction } from 'react';
import { Modal, Input, Button, useToast } from 'uxp/components';
import { IContextProvider } from './uxp';
import { completeInstallation } from './config-util';

interface NewCategoryModalProps {
  
  
  uxpContext: IContextProvider;
  modelName: string;
  getCategories: () => Promise<void>;
}

const NewCategoryModal: React.FC<NewCategoryModalProps> = ({
  
  uxpContext,
  modelName,
  getCategories
}) => {


  const toast = useToast();

  const [error, setError] = React.useState(false);
  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [showNewCategoryModal, setShowNewCategoryModal] = React.useState(false);

  const addNewCategory = async () => {
    try {
      if (!id || !name) {
        setError(true);
        return;
      }
      await uxpContext.executeService("Lucy", "AddNewDocument", {
        document: JSON.stringify({ id, label: name }),
        modelName,
        collection: 'categories'
      });
      setId('');
      setName('');
      setShowNewCategoryModal(false);

      toast.success(`${name} added succefully!!!`);
      await completeInstallation(uxpContext);
      await getCategories();
      // window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <Button className='add' title='+' onClick={() => { setShowNewCategoryModal(true) }}></Button>
      {showNewCategoryModal ?
        <Modal
          autoSize={true}
          className='add-category'
          title='New Category'
          show={showNewCategoryModal}
          onClose={() => setShowNewCategoryModal(false)}>
          <label>Category Name</label>
          <Input value={name} placeholder='Label' onChange={(val) => {
            setError(false);
            setName(val);
            setId(val.toLowerCase().replace(/\s+/g, '-'));
          }} />

          <label>Category ID</label>
          <Input value={id} placeholder='ID' onChange={(val) => { setError(false); setId(val) }} />
          {error ? <span style={{ color: 'red', margin: "5px 5px 10px 5px", textAlign: 'end' }}>Please fill above fields</span> : null}

          <div className='save-button'>
            <Button className='button' title='Save' onClick={() => { addNewCategory() }} />
          </div>
        </Modal>
        : null
      }
    </>
  )
}

export default NewCategoryModal;
