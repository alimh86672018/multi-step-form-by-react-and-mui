import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../App.css";

function UserDetails({ values, handleChange, nextStep }) {
  const { firstName, lastName, email, emptyInput } = values;

  const continueClick = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        component="form"
        className="TextFieldBox"
        noValidate
        autoComplete="off"
      >
        <TextField
          error={!firstName && emptyInput}
          defaultValue={firstName}
          onChange={handleChange}
          name="firstName"
          id="standard-basic"
          label="First Name"
          variant="standard"
          margin="dense"
        />
        <TextField
          error={!lastName && emptyInput}
          defaultValue={lastName}
          onChange={handleChange}
          name="lastName"
          id="standard-basic"
          label="Last Name"
          variant="standard"
          margin="dense"
        />
        <TextField
          error={!email && emptyInput}
          defaultValue={email}
          onChange={handleChange}
          type="email"
          name="email"
          id="standard-basic"
          label="Email"
          variant="standard"
          margin="dense"
        />
      </Box>
      <Button onClick={continueClick} variant="contained">
        Continue
      </Button>
    </>
  );
}

export default UserDetails;
