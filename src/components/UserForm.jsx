import { useState } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Success from "./Success";
import "../App.css";

function UserForm() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    country: "",
    city: "",
    bio: "",
    stepOne: true,
    stepTwo: false,
    stepThree: false,
    step: 1,
    emptyInput: false,
  });

  const {
    firstName,
    lastName,
    email,
    occupation,
    country,
    city,
    bio,
    step,
    stepOne,
    stepTwo,
    stepThree,
    emptyInput,
  } = state;

  const handleChange = (e) => {
    const { name } = e.target;
    setState({ ...state, [name]: e.target.value });
  };

  const nextStep = () => {
    const stepOneValidation = firstName && lastName && email;
    const stepTwoValidation = occupation && country && city && bio;

    if (stepOne) {
      if (stepOneValidation) {
        setState({
          ...state,
          step: step + 1,
          stepOne: false,
          stepTwo: true,
          emptyInput: false,
        });
      } else {
        setState({ ...state, emptyInput: true });
      }
    } else if (stepTwo) {
      if (stepTwoValidation) {
        setState({
          ...state,
          step: step + 1,
          stepTwo: false,
          stepThree: true,
        });
      } else {
        setState({ ...state, emptyInput: true });
      }
    } else {
      setState({ ...state, step: step + 1, emptyInput: false });
    }
  };

  const prevStep = () => {
    if (stepTwo) {
      setState({
        ...state,
        step: step - 1,
        stepOne: true,
        stepTwo: false,
      });
    } else if (stepThree) {
      setState({
        ...state,
        step: step - 1,
        stepTwo: true,
        stepThree: false,
      });
    }
  };
  console.log(emptyInput);
  console.log(stepOne);

  switch (step) {
    case 1:
      return (
        <UserDetails
          values={state}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      );
      break;
    case 2:
      return (
        <PersonalDetails
          values={state}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
      break;
    case 3:
      return (
        <Confirmation values={state} nextStep={nextStep} prevStep={prevStep} />
      );
      break;

    case 4:
      return <Success />;
  }
  {
    /* {step === 1 ? (
        <UserDetails
          values={state}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      ) : step === 2 ? (
        <PersonalDetails
          values={state}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      ) : step === 3 ? (
        <Confirmation values={state} nextStep={nextStep} prevStep={prevStep} />
      ) : (
        <Success />
      )} */
  }
}

export default UserForm;
