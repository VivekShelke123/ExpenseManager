import React, { useState } from 'react';
import "./Expense.css";
import AddExpense from './AddExpense';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import RecentExpense from './RecentExpense';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#EBD4CB" : "#EBD4CB",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
}));

const Expense :React.FC = () => {
  const [flag ,setFlag] = useState(true);
  function setFlagFunc(){
    setFlag(prev => !prev);
  }
  return (
    <div>
      <Grid container spacing={1}>
          <Grid xs={5}>
            <Item>
                <AddExpense setFlagFunc={setFlagFunc}/>
            </Item>
          </Grid>
          <Grid xs={6.9}>
          <Item style={{'maxHeight':'70vh','overflowY':'auto'}}>
                <RecentExpense flag={flag}/>
            </Item>
          </Grid>
        </Grid>
    </div>
  )
}

export default Expense
