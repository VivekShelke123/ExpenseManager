import React from 'react';
import "./SideBar.css";
import Avtar from './Avtar';
import SideOption from './SideOption';

const SideBar : React.FC = () => {
  return (
    <div>
      <Avtar/>
      <div className='user-container'>
        <h4>Admin</h4>
      </div>
      <div>
        <SideOption/>
      </div>
    </div>
  )
}

export default SideBar;
