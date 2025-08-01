import { AppBar, Avatar, Button, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "./logo.png";
import "./style.css";

export const Header = () => {
  return (
    <AppBar position="static" color="transparent" className="header">
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Avatar src={logo} alt="Logo" variant="square" />
        </Grid>
        <Grid item>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Button color="inherit">Courses</Button>
            </Grid>
            <Grid item>
              <Button color="inherit">Experts</Button>
            </Grid>
            <Grid item>
              <Button color="inherit">About us</Button>
            </Grid>
            <Grid item>
              <Button color="inherit">Certificates</Button>
            </Grid>
            <Grid item>
              <Button color="inherit">Contacts</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            info@logoipsum.com
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};