import React, { useContext } from "react";
import { DataBorneContext } from "./ContextBorne";
import MyLogin from "./MyLogin";
import PostLogin from "./PostLogin";

function BodyApp() {
  const {
    dataBorne,
    setDataBorne,
    progressBar,
    setprogressBar,
    loginEtat,
    setLoginEtat,
  } = useContext(DataBorneContext);
  return loginEtat ? <MyLogin /> : <PostLogin />;
}

export default BodyApp;
