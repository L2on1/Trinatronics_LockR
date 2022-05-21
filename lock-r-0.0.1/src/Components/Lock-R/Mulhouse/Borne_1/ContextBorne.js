import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useState, createContext } from "react";
import data_borne from "./data_borne.json";

export const DataBorneContext = createContext();
export const DataBorneProvider = ({ children }) => {
  const MyBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  });
  const [dataBorne, setDataBorne] = useState(data_borne);
  const [progressBar, setprogressBar] = useState(1);
  const [loginEtat, setLoginEtat] = useState("true");
  const [valuesLogin, setvaluesLogin] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [dataMKR, setDataMKR] = useState({
    is_Button: "",
    is_U: "",
  });
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [valueLoading, setValueLoading] = useState(0);
  const [timerValidate, setTimerValidate] = useState(0);

  return (
    <DataBorneContext.Provider
      value={{
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
      }}
    >
      {children}
    </DataBorneContext.Provider>
  );
};
