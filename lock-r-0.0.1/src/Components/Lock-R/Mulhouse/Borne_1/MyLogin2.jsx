import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import data_borne from "./data_borne.json";

function MyLogin() {
  const MyBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  });

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [dataBorne, setDataBorne] = useState(data_borne);

  return (
    <>
      <MyBox>
        <MyBox>
          <Typography variant="h6">Veuillez vous identifier</Typography>
        </MyBox>
        <Box>
          <Stack spacing={2}>
            <FormControl variant="outlined">
              <InputLabel
                label="Email"
                type="email"
                required
                htmlFor="outlined-adornment-email"
              >
                Email
              </InputLabel>
              <OutlinedInput
                required
                id="outlined-adornment-email"
                label="email"
                value={values.email}
                onChange={handleChange("password")}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Stack>
        </Box>
      </MyBox>
    </>
  );
}

export default MyLogin;
