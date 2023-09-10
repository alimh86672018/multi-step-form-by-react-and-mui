import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../App.css";

export default function Confirmation({ values, nextStep, prevStep }) {
  const { firstName, lastName, email, occupation, country, city, bio } = values;

  const continueClick = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backClick = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              All User Details
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText primary="First Name" secondary={firstName} />
        </ListItem>
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText primary="Last Name" secondary={lastName} />
        </ListItem>
        {/* <Divider variant="inset" component="li" /> */}
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText primary="Email" secondary={email} />
        </ListItem>
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText primary="Occupation" secondary={occupation} />
        </ListItem>
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText primary="Country" secondary={country} />
        </ListItem>
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText primary="City" secondary={city} />
        </ListItem>
        <ListItem sx={{ textAlign: "center" }}>
          <ListItemText primary="Bio" secondary={bio} />
        </ListItem>
      </List>

      <div className="ButtonBox">
        <Button onClick={backClick} className="button" variant="contained">
          Back
        </Button>
        <Button onClick={continueClick} className="button" variant="contained">
          Confirm & Continue
        </Button>
      </div>
    </>
  );
}
