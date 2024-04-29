import React from 'react';
import "./Setting.css";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import CurrencySelector from './CurrencySelector';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#EBD4CB" : "#EBD4CB",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
}));


const Setting : React.FC= () => {

  return (
    <div>
      <Grid container spacing={1}>
          <Grid xs={5}>
            <Item>
              <CurrencySelector/>
            </Item>
          </Grid>
          <Grid xs={6.9}>
            <Item>
            </Item>
          </Grid>
        </Grid>
    </div>
  )
}

export default Setting;
