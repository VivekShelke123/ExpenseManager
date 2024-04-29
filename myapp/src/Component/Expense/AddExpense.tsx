import React, { useContext, useEffect, useState } from 'react';
import { UserDetails } from '../../Store/UserContext';
import axios from 'axios';

interface myprops{
  setFlagFunc() : void; 
}

const AddExpense :React.FC<myprops>= (props) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [type,setType] = useState('');
  const [spentOn,setSpentOn] = useState('');
  const [amt,setAmt] = useState('');
  const [remark,setRemark] = useState('');

  const userDetails = useContext(UserDetails);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

   
    return () => clearInterval(intervalId);
  }, []); 

  const formattedDateTime = currentDateTime.toLocaleString();

  const time = currentDateTime.toLocaleTimeString();
  const date = currentDateTime.getDate();
  const month = currentDateTime.getMonth() + 1;
  const year = currentDateTime.getFullYear();

  function handleSubmit():void{
    const data = {
    userName: localStorage.getItem('userName'),
    time: time,
    date: String(date),
    month: String(month),
    year: String(year),
    category: type,
    spentOn: spentOn,
    amount: parseInt(amt),
    remark: remark,
    }
    console.log(data);
    axios.post('http://localhost:5000/addExpense',data)
    .then((res)=>{
      console.log('added successfully');
      props.setFlagFunc();
    })
    .catch((err)=>{
      console.error(err);
    })
    setType('');
    setAmt('');
    setRemark('');
    setSpentOn('');
  }

  return (
    <div>
      <div className='title-class'>
        <li style={{'fontSize':'2.2vw','marginBottom':'0%'}}>Add Expense</li>
        <li style={{'fontSize':'0.99vw','marginTop':'0%'}}>Enter your Expense Below</li>
      </div>
      <div className='input-class'>
        <li><input type="text" value={formattedDateTime} /></li>
        <li>
        <select  id="type" value={type} onChange={(e)=>setType(e.target.value)}>
            <option value="bill">Bill</option>
            <option value="worker-salary">Worker-Salary</option>
            <option value="Travels">Travelling</option>
            <option value="Other">Other</option>
        </select>
        </li>
        <li>
            <input type="text" placeholder='Spent On' value={spentOn} onChange={(e)=>setSpentOn(e.target.value)} />
        </li>
        <li>
            <input type="text" placeholder='Amount'value={amt} onChange={(e)=>setAmt(e.target.value)} />
        </li>
        <li><textarea name="" id="" value={remark} onChange={(e)=>setRemark(e.target.value)}>Remarks</textarea></li>
        <button onClick={handleSubmit}>Add+</button>
      </div>
    </div>
  )
}

export default AddExpense;
