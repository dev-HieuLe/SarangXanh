import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import React from "react";
import frame231 from "./frame-231.png";
import "./style.css";
import vector3 from "./vector-3.png";

export const Footer = () => {
  return (
    <AppBar color="default">
      <Avatar variant="square">
        <div className="ellipse" />
      </Avatar>
      <Button color="inherit" size="medium" variant="text">
        Contacts
      </Button>
      <img className="vector" alt="Vector" src={vector3} />

      <img className="frame" alt="Frame" src={frame231} />
    </AppBar>
  );
};