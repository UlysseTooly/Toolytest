// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";

export const TypeContext = React.createContext("PLEASE_RENDER_INSIDE_PROVIDER");

export function useType() {
  return React.useContext(TypeContext);
}

export default TypeContext;
/* prettier-ignore-end */
