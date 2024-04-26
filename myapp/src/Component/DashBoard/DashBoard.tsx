import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const DashBoard : React.FC = () => {
  return (
    <div>
      <div>
      <Grid container spacing={1}>
        <Grid xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={3}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default DashBoard
