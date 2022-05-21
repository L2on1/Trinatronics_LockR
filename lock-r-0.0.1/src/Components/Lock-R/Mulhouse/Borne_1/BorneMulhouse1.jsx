import React from "react";
import data_borne from "./data_borne.json";
import data_ville from "../data_ville.json";
import { Box, Typography, Button } from "@mui/material";

function BorneMulhouse1() {
  return (
    <Box>
      <Typography variant="h1">
        Borne numéro {data_borne.number} à {data_ville.name}
      </Typography>
      <Typography variant="h2">
        La Borne est {data_borne.propriety.avalable}
      </Typography>
      <Button variant="contained" href="/lock-r/mulhouse/borne_1/app">
        Login
      </Button>
    </Box>
  );
}

export default BorneMulhouse1;
