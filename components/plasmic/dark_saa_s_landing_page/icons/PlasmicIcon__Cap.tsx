// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CapIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CapIcon(props: CapIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        opacity={".4"}
        d={"M0 0v4.075a2.212 2.212 0 001.328-2.037C1.328 1.148.805.345 0 0"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CapIcon;
/* prettier-ignore-end */
