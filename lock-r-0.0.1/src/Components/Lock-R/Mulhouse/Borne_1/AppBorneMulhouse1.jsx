import { Alert, Box, Button, LinearProgress, Typography } from "@mui/material";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import MyLogin from "./MyLogin";
import { DataBorneContext } from "./ContextBorne";
import PostLogin from "./PostLogin";
import MyStepper from "./MyStepper";

function AppBorneMulhouse1() {
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
    dataMKR,
    setDataMKR,
    loading,
    setLoading,
    success,
    setSuccess,
    valueLoading,
    setValueLoading,
    timerValidate,
    setTimerValidate,
    stepStepper,
    setStepStepper,
  } = useContext(DataBorneContext);

  function borneAvailable() {
    let e;
    if (dataBorne.propriety.available === true) {
      e = (
        <Typography variant="h5" sx={{ color: "green", m: 1 }}>
          Available
        </Typography>
      );
    }
    if (dataBorne.propriety.available === false) {
      e = (
        <Typography variant="h5" sx={{ color: "red", m: 1 }}>
          Unavailable
        </Typography>
      );
    }
    return e;
  }

  function showEtat() {
    let el = <></>;
    if (loginEtat) {
      el = (
        <>
          <div>
            <MyLogin />
          </div>

          <MyBox>
            <Button
              variant="contained"
              onClick={() => {
                dataBorne.login.email = valuesLogin.email;
                dataBorne.login.password = valuesLogin.password;
                setDataBorne(dataBorne);
                setLoginEtat(false);
                //setprogressBar(20);
                setStepStepper(1);
                postNodeRed();
                getNodeRed();
              }}
            >
              S'Authentifier
            </Button>
          </MyBox>
        </>
      );
    } else {
      el = (
        <>
          <MyBox>
            {/*
            <Button
              variant="contained"
              onClick={() => {
                setLoginEtat(true);
                setprogressBar(1);
              }}
              sx={{ m: 1 }}
            >
              Retour à l'authentification
            </Button>
          */}
            {validateAlert()}
          </MyBox>
          <PostLogin />
        </>
      );
    }
    return el;
  }

  const postNodeRed = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataBorne),
    };
    fetch(
      `http://151.80.137.77:1880/mulhouse/borne_1/login/data_borne.json`,
      requestOptions
    ).then((response) =>
      response.json().then((dataBorne) => setDataBorne(dataBorne))
    );
    console.log(dataBorne);
  };

  useEffect(() => {
    const intervalDataMKR = setInterval(() => {
      //console.log(dataMKR);
      getNodeRed();
      if (timerValidate < 6 && !loginEtat) {
        setTimerValidate(timerValidate + 1);
      }
    }, 1000);

    const timerLoading = setInterval(() => {
      setValueLoading((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 250);
    if (dataMKR.isButton === "true") {
      setSuccess(true);
      setLoading(false);
    }
    if (dataMKR.isButton === "true" && dataMKR.isU === "true" && !loginEtat) {
      setStepStepper(2);
    }
    if (dataMKR.isButton === "false" && dataMKR.isU === "false" && !loginEtat) {
      setStepStepper(3);
    }
    if (
      dataMKR.isButton === "false" &&
      dataMKR.isU === "true" &&
      !loginEtat &&
      stepStepper === 3
    ) {
      setStepStepper(5);
    }
    return () => {
      clearInterval(intervalDataMKR);
      clearInterval(timerLoading);
    };
  }, [dataMKR]);

  const getNodeRed = () => {
    const requestOptions = {
      method: "GET",
    };
    fetch(
      `http://151.80.137.77:1880/mulhouse/borne_1/data_GET`,
      requestOptions
    ).then((response) =>
      response.json().then((data) => {
        setDataMKR(data);
      })
    );
  };

  function validateAlert() {
    if (dataBorne.propriety.available === false && timerValidate < 2) {
      return <Alert severity="success">You are succesfully login ! 🚩</Alert>;
    }
  }

  return (
    <>
      <MyBox>
        <Typography variant="h4" sx={{ mt: 2, fontWeight: "bold" }}>
          Mulhouse - 1
        </Typography>
      </MyBox>

      <MyBox>{borneAvailable()}</MyBox>
      <MyBox>
        {/*<LinearProgress
          variant="determinate"
          sx={{
            m: 2,
            width: "75%",
            height: 10,
            borderRadius: 5,
          }}
          value={progressBar}
        />*/}
        <MyStepper />
      </MyBox>
      {showEtat()}
    </>
  );
}

export default AppBorneMulhouse1;
