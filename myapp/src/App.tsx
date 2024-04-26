import React from 'react';
import './App.css';
import SideBar from './Component/SideBar/SideBar';

function App() {
  return (
    <>
    <div className='home-container'>
      <div className='grid-col-1'>
        <SideBar/>
      </div>
      <div className='grid-col-2'></div>
    </div>
    </>
  );
}

export default App;
