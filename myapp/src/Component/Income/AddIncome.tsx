import React from 'react';


const AddIncome :React.FC= () => {
  return (
    <div>
      <div className='title-class'>
        <li style={{'fontSize':'2.2vw','marginBottom':'0%'}}>Add Income</li>
        <li style={{'fontSize':'0.99vw','marginTop':'0%'}}>Enter your Income Below</li>
      </div>
      <div className='input-class'>
        <li><input type="text" value='system date and time' /></li>
        <li>
        <select  id="type">
            <option value="bill">Bill</option>
            <option value="worker-salary">Worker-Salary</option>
            <option value="Travels">Travelling</option>
            <option value="Other">Other</option>
        </select>
        </li>
        <li>
            <input type="text" placeholder='Amount' />
        </li>
        <li><textarea name="" id="">Remarks</textarea></li>
        <button>Add+</button>
      </div>
    </div>
  )
}

export default AddIncome;
