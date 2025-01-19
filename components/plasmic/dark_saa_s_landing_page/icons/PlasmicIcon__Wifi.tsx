// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WifiIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WifiIcon(props: WifiIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8.571 2.466c2.487 0 4.88.922 6.682 2.576a.355.355 0 00.486-.004l1.298-1.263a.342.342 0 00-.003-.494c-4.731-4.375-12.195-4.375-16.926 0a.342.342 0 00-.003.494l1.298 1.263c.133.13.35.132.486.004A9.889 9.889 0 018.57 2.466zm-.003 4.22c1.357 0 2.666.512 3.672 1.436.136.132.35.129.483-.006l1.288-1.32a.367.367 0 00-.006-.518 7.9 7.9 0 00-10.872 0 .367.367 0 00-.005.519l1.287 1.319a.342.342 0 00.483.006 5.427 5.427 0 013.67-1.435zm2.524 2.794a.407.407 0 01-.102.28l-2.177 2.456a.323.323 0 01-.241.112.323.323 0 01-.242-.112L6.153 9.76a.407.407 0 01-.102-.281.403.403 0 01.113-.276c1.39-1.314 3.426-1.314 4.816 0 .07.071.11.17.112.276z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WifiIcon;
/* prettier-ignore-end */
