import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState, useContext } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import data_borne from "./data_borne.json";
import React from "react";
import { DataBorneContext } from "./ContextBorne";
import PostLogin from "./PostLogin";

function MyLogin() {
  const {
    dataBorne,
    setDataBorne,
    progressBar,
    setprogressBar,
    loginEtat,
    setLoginEtat,
    MyBox,
    valuesLogin,
    setvaluesLogin,
  } = useContext(DataBorneContext);

  const handleChange = (prop) => (event) => {
    setvaluesLogin({ ...valuesLogin, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setvaluesLogin({
      ...valuesLogin,
      showPassword: !valuesLogin.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(valuesLogin);
  };

  /*
  useEffect(() => {
    function isAvailable() {
      if (dataBorne.propriety.available === false) {
        console.log("je vais au HOME");

        validateAlert();
        setLoginEtat("false");
      }
    }
    isAvailable();
  }, []);
*/
  return loginEtat ? (
    <>
      <Box
        sx={{
          p: 2,
          m: 2,
          mx: { xs: "5%", md: "20%" },
          boxShadow: 3,
          borderRadius: 3,
          borderBlockColor: "gray",
          borderBlockWidth: 2,
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" sx={{ mb: 3 }}>
          Log in to access the terminal
        </Typography>
        <Stack spacing={2} sx={{ backgroundColor: "white" }}>
          <FormControl
            onSubmit={handleForm}
            sx={{ display: "flex", flexWrap: "wrap" }}
            variant="outlined"
          >
            <InputLabel id="outlined-input" label="Email" type="email" required>
              Email
            </InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-email"
              label="email"
              value={valuesLogin.email}
              onChange={handleChange("email")}
            />
          </FormControl>
          <FormControl
            onSubmit={handleForm}
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
            variant="outlined"
          >
            <InputLabel
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={valuesLogin.showPassword ? "text" : "password"}
              value={valuesLogin.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {valuesLogin.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Stack>
      </Box>
    </>
  ) : (
    <PostLogin />
  );
}

export default MyLogin;
