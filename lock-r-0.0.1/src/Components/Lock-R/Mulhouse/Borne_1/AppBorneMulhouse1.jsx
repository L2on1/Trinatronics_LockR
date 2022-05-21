import { Alert, Box, Button, LinearProgress, Typography } from "@mui/material";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import MyLogin from "./MyLogin";
import { DataBorneContext } from "./ContextBorne";
import PostLogin from "./PostLogin";

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
  } = useContext(DataBorneContext);

  function borneAvailable() {
    let e;
    if (dataBorne.propriety.available === true) {
      e = (
        <Typography variant="h3" sx={{ color: "green" }}>
          Disponible
        </Typography>
      );
    }
    if (dataBorne.propriety.available === false) {
      e = (
        <Typography variant="h3" sx={{ color: "red" }}>
          Indisponible
        </Typography>
      );
    }
    return e;
  }

  function showEtat() {
    let el = (
      <MyBox>
        <Typography>Ini </Typography>
      </MyBox>
    );
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
                setprogressBar(20);
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
      return <Alert severity="success">Vous etes bien authentifiez !</Alert>;
    }
  }

  return (
    <>
      <MyBox>
        <Typography variant="h2">Borne 1 - Mulhouse</Typography>
      </MyBox>

      <MyBox>{borneAvailable()}</MyBox>
      <MyBox>
        <LinearProgress
          variant="determinate"
          sx={{
            m: 2,
            width: "75%",
            height: 10,
            borderRadius: 5,
          }}
          value={progressBar}
        />
      </MyBox>
      {showEtat()}
    </>
  );
}

export default AppBorneMulhouse1;
