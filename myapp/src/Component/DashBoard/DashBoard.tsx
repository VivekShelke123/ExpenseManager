import React from "react";
import "./DashBoard.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import MonthExpense from "./MonthExpense";
import Recent from "./Recent";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#EBD4CB" : "#EBD4CB",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
}));

const DashBoard: React.FC = () => {
  return (
    <div>
      <div className="sum-compo-classs">
        <Grid container spacing={1}>
          <Grid xs={3}>
            <Item>
              <MonthExpense title={"Expense Last Month"} value={0} />
            </Item>
          </Grid>
          <Grid xs={3}>
            <Item>
              <MonthExpense title={"Expense This Month"} value={0} />
            </Item>
          </Grid>
          <Grid xs={3}>
            <Item>
              <MonthExpense title={"Income Last Month"} value={0} />
            </Item>
          </Grid>
          <Grid xs={3}>
            <Item>
              <MonthExpense title={"Income This Month"} value={0} />
            </Item>
          </Grid>
        </Grid>
      </div>
      <div className="recent-compo-class">
        <Grid container spacing={1}>
          <Grid xs={6}>
            <Item>
              <Recent show={"Expense"} title={'title'} value={0} type={"type"} date={"date"} time={"time"}/>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
            <Recent show={"Income"} title={'title'} value={0} type={"type"} date={"date"} time={"time"}/>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default DashBoard;
