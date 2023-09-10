import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../App.css";

export default function PersonalDetails({
  values,
  handleChange,
  nextStep,
  prevStep,
}) {
  const { occupation, country, city, bio, emptyInput } = values;

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
              Enter Personal Details
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        component="form"
        // sx={{ width: '25ch' }}
        className="TextFieldBox"
        noValidate
        autoComplete="off"
      >
        <TextField
          error={emptyInput && !occupation}
          defaultValue={occupation}
          onChange={handleChange}
          name="occupation"
          id="standard-basic"
          label="Occupation"
          variant="standard"
          margin="dense"
        />
        <TextField
          error={emptyInput && !country}
          defaultValue={country}
          onChange={handleChange}
          name="country"
          id="standard-basic"
          label="Country"
          variant="standard"
          margin="dense"
        />
        <TextField
          error={emptyInput && !city}
          defaultValue={city}
          onChange={handleChange}
          name="city"
          id="standard-basic"
          label="City"
          variant="standard"
          margin="dense"
        />
        <TextField
          error={emptyInput && !bio}
          defaultValue={bio}
          onChange={handleChange}
          name="bio"
          id="standard-basic"
          label="Bio"
          variant="standard"
          margin="dense"
        />
      </Box>
      <div className="ButtonBox">
        <Button onClick={backClick} variant="contained">
          Back
        </Button>
        <Button onClick={continueClick} variant="contained">
          Continue
        </Button>
      </div>
    </>
  );
}
