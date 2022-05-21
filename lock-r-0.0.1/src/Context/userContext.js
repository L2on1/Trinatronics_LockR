import { createContext, useState, useEffect } from "react";

export const userContext = createContext();
export function userContextProvider(props) {
  return <userContext.Provider>{props.children}</userContext.Provider>;
}
