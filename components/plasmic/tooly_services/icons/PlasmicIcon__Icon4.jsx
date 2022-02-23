// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 57"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M23.5 21.42l12 7-12 7"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M28 2.42c14.36 0 26 11.64 26 26h4c0-16.57-13.431-30-30-30v4zm-26 26c0-14.36 11.64-26 26-26v-4c-16.569 0-30 13.43-30 30h4zm26 26c-14.36 0-26-11.641-26-26h-4c0 16.568 13.431 30 30 30v-4zm0 4c16.569 0 30-13.432 30-30h-4c0 14.359-11.64 26-26 26v4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */
