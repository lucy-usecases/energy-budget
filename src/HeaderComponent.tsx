
import { Button } from 'uxp/components';

import React, { Dispatch, SetStateAction } from 'react';

interface HeaderComponentProps {
    mode: string;
    setMode: Dispatch<SetStateAction<string>>;
}


const HeaderComponent : React.FC<HeaderComponentProps> = ({ mode, setMode }) => {
  return (
    <div className='header'>
    <span>Energy Management</span>
    <div className='actions'>
      <Button className={(mode == 'upload') ? 'active primary' : 'primary'} title='Connect Meters' onClick={() => { setMode('upload'); }}></Button>
      <Button className={(mode == 'types') ? 'active primary' : 'primary'} title='Setup Budgets and Categories' onClick={() => { setMode('types'); }}></Button>
      <Button className={(mode == 'co2') ? 'active primary' : 'primary'} title='Carbon Footprint' onClick={() => { setMode('co2'); }}></Button>
    </div>
  </div>
  )
}

export default HeaderComponent