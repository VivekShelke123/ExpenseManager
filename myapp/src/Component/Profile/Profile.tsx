import React from 'react';
import './Profile.css';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import ChangeProfileName from './ChangeProfileName';
import ChangePassword from './ChangePassword';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#EBD4CB" : "#EBD4CB",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
}));

const Profile : React.FC = () => {
  return (
    <div>
      <Grid container spacing={1}>
          <Grid xs={6}>
            <Item>
              <ChangeProfileName/>
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
            <ChangePassword/>
            </Item>
          </Grid>
        </Grid>
    </div>
  )
}

export default Profile
