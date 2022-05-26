import {
  LeakAddRounded,
  LockOpenOutlined,
  LockOutlined,
} from "@mui/icons-material";
import { Alert, Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataBorneContext } from "./ContextBorne";
import Validation from "./Validation";

function PostLogin() {
  const { MyBox, dataMKR, stepStepper } = useContext(DataBorneContext);

  function etatBorneIcon() {
    function LockClose() {
      if (dataMKR.isU === "false") {
        return <LockOutlined sx={{ color: "gray", fontSize: "400%" }} />;
      }
      if (dataMKR.isU === "true") {
        return <LockOutlined sx={{ color: "green", fontSize: "400%" }} />;
      }
    }
    function LockOpen() {
      if (dataMKR.isU === "true") {
        return <LockOpenOutlined sx={{ color: "gray", fontSize: "400%" }} />;
      }
      if (dataMKR.isU === "false") {
        return <LockOpenOutlined sx={{ color: "green", fontSize: "400%" }} />;
      }
    }
    function LeakAdd() {
      if (dataMKR.isButton === "true") {
        return <LeakAddRounded sx={{ color: "green", fontSize: "400%" }} />;
      }
      if (dataMKR.isButton === "false") {
        return <LeakAddRounded sx={{ color: "gray", fontSize: "400%" }} />;
      }
    }
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: 3,
          boxShadow: 5,
          borderRadius: 3,
          borderBlockColor: "gray",
          flexWrap: "wrap",
          justifyContent: "space-around",
          borderBlockWidth: 2,
          textAlign: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ m: 2 }}>{LockClose()}</Box>
        <Box sx={{ m: 2 }}>{LockOpen()}</Box>
        <Box sx={{ m: 2 }}>{LeakAdd()}</Box>
      </Box>
    );
  }

  function validationLock() {
    return stepStepper === 3 ? (
      <>
        <Alert>
          <Typography>Votre Vélo est Lock</Typography>
          <Typography>A plus tard ! </Typography>
        </Alert>
        {/*
        <Alert>
          <Typography>Votre Vélo est Unlock</Typography>
          <Typography>On espere vous revoir bientot !</Typography>
        </Alert>
        */}
      </>
    ) : null;
  }

  return (
    <MyBox
      sx={{
        p: 2,
        m: 2,
        mx: { xs: 5, md: "25%" },
        boxShadow: 5,
        borderRadius: 3,
        borderBlockColor: "gray",
        borderBlockWidth: 2,
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ p: 2, pb: 5, m: 0 }}>
        Appuyer sur le bouton pour vous connecter
      </Typography>
      <Validation />
      <Box>{etatBorneIcon()}</Box>
      <MyBox>
        <Typography variant="h6">
          <dl>
            <dt>Vous pouvez maintenant utiliser la borne</dt>
            <dt>
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  bgcolor: "lightblue",
                  borderRadius: 100,
                }}
              >
                1
              </Typography>
              Enlevez le U de la borne
            </dt>
            <dt>
              {" "}
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  bgcolor: "lightblue",
                  borderRadius: 100,
                }}
              >
                2
              </Typography>{" "}
              Placez votre vélo
            </dt>
            <dt>
              {" "}
              <Typography
                variant="body1"
                sx={{
                  color: "black",
                  bgcolor: "lightblue",
                  borderRadius: 100,
                }}
              >
                3
              </Typography>
              Remettez le U dans la borne
            </dt>
            <Typography
              variant="body1"
              sx={{
                color: "lightblue",
                bgcolor: "lightblue",
                borderRadius: 100,
              }}
            >
              .
            </Typography>
            <dt>C'est Fini !</dt>
          </dl>
        </Typography>
        {validationLock()}
      </MyBox>
    </MyBox>
  );
}

export default PostLogin;
