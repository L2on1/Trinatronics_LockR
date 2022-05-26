import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { DataBorneContext } from "./ContextBorne";

const steps = [
  "Connectez vous",
  "Enlevez le U de la borne",
  "Remettre le U",
  "C'est fini 👌",
];

function MyStepper() {
  const { stepStepper } = useContext(DataBorneContext);

  return (
    <Box sx={{ width: "100%", m: 2 }}>
      <Stepper activeStep={stepStepper} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default MyStepper;
