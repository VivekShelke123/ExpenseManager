import React from 'react';
import "./Expense.css";
import AddExpense from './AddExpense';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#EBD4CB" : "#EBD4CB",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
}));

const Expense :React.FC = () => {
  return (
    <div>
      <Grid container spacing={1}>
          <Grid xs={6}>
            <Item>
                <AddExpense/>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
            </Item>
          </Grid>
        </Grid>
    </div>
  )
}

export default Expense
