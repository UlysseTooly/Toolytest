// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 29"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26.457.212H3.529A2.537 2.537 0 00.993 2.748v22.935a2.535 2.535 0 002.536 2.529h22.935c1.4 0 2.536-1.136 2.536-2.536V2.748A2.548 2.548 0 0026.457.212zm-16.8 24.174c0 .41-.33.74-.74.74H5.778c-.41 0-.74-.33-.74-.74v-13.15c0-.41.33-.74.74-.74h3.137c.41 0 .74.33.74.74v13.15zm-2.31-15.13a2.981 2.981 0 01-2.983-2.982A2.981 2.981 0 017.348 3.29a2.981 2.981 0 012.983 2.984 2.981 2.981 0 01-2.983 2.983zm18.706 15.196c0 .373-.3.674-.674.674h-3.364a.673.673 0 01-.675-.674V18.28c0-.924.271-4.031-2.404-4.031-2.074 0-2.5 2.132-2.58 3.085v7.118c0 .373-.3.674-.674.674h-3.255a.673.673 0 01-.674-.674V11.177c0-.373.3-.674.674-.674h3.255c.373 0 .674.3.674.674v1.151c.77-1.158 1.913-2.045 4.347-2.045 5.394 0 5.358 5.036 5.358 7.806l-.008 6.363z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon5Icon;
/* prettier-ignore-end */
