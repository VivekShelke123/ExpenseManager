import axios from "axios";
import React, { lazy, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "550px",
  padding: "2%",
  ...theme.typography.body2,
}));

interface incomeDetails {
  userName: string;
  time: string;
  date:string;
  month: string;
  year: string;
  category: string;
  amount: number;
  remark: string;
}

interface myprops {
  flag:Boolean;
}

const RecentIncome :React.FC<myprops>= (props) => {

  const [arr, setArr] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [tAmt,setTAmt] = useState(0);
  const [lAmt ,setLAmt] = useState(0);
  const [pAmt ,setPAmt] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

   
    return () => clearInterval(intervalId);
  }, []); 

  const formattedDateTime = currentDateTime.toLocaleString();

  const date = currentDateTime.getDate();
  const month = currentDateTime.getMonth() + 1;
  const year = currentDateTime.getFullYear();


  useEffect(() => {
    const userName = localStorage.getItem("userName");
    axios
      .get(`http://localhost:5000/getIncome/${userName}`)
      .then((res) => {
        setArr(res.data.reverse());
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.flag]);

  useEffect(()=>{
    let tAmt = 0;
    let lAmt = 0;
    let pAmt = 0;

    arr.map((obj : incomeDetails)=>{
      if(parseInt(obj.month) === month){
        pAmt = pAmt+ obj.amount
      }
      else if(parseInt(obj.month) === month-1){
        lAmt = lAmt + obj.amount;
      }
      tAmt += obj.amount;
    })
    setLAmt(lAmt);
    setPAmt(pAmt);
    setTAmt(tAmt);
  },[arr])

  function handleMap( obj : incomeDetails) {
    return (
      <div >
        <DemoPaper variant="outlined" style={{'display':'block'}}>
          <div className="income-compo">
            <p style={{ display: "flex", justifyContent: "space-between" }}>
            <li>Category : <li style={{'display':'inline'}}>{obj.category}</li></li><li>Amount : <li style={{'display':'inline'}}>{obj.amount}</li> </li>
            </p>
            <p style={{ display: "flex" }}>
              
              <li style={{ paddingLeft: "40%" }}>Remark : <li style={{'display':'inline'}}>{obj.remark}</li></li>
            </p>
            <p>
              <li>Time : {obj.time+"  year : "+obj.date}</li>
            </p>
          </div>
        </DemoPaper>
      </div>
    );
  }
  return (
    <div>
      <div className='title-class'>
        <li style={{'fontSize':'2.2vw','marginBottom':'0%'}}>Recent Income</li>
        <li style={{'fontSize':'0.99vw','marginTop':'0%'}}>Here are Your Recent Income</li>
        <div className='amt-class'>
            <li>Current Month Amt : {pAmt}</li>
            <li>Last Month Amt :{lAmt}</li>
            <li>Total Amt : {tAmt}</li>
        </div>
      </div>
      <div>
        <div>
          <Stack direction="column" spacing={2}>
            {arr.map(handleMap)}
          </Stack>
        </div>
      </div>
    </div>
  )
}

export default RecentIncome;
