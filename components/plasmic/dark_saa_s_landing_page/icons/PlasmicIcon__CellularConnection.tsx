// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CellularConnectionIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CellularConnectionIcon(props: CellularConnectionIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 13"}
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
          "M19.2 1.146C19.2.513 18.722 0 18.133 0h-1.066C16.477 0 16 .513 16 1.146v9.934c0 .633.478 1.146 1.067 1.146h1.066c.59 0 1.067-.513 1.067-1.146V1.146zm-7.434 1.3h1.067c.589 0 1.066.525 1.066 1.173v7.434c0 .648-.477 1.173-1.066 1.173h-1.067c-.59 0-1.067-.525-1.067-1.173V3.619c0-.648.478-1.174 1.067-1.174zM7.434 5.093H6.367c-.589 0-1.066.533-1.066 1.189v4.755c0 .656.477 1.188 1.066 1.188h1.067c.59 0 1.067-.532 1.067-1.188V6.283c0-.656-.478-1.189-1.067-1.189zm-5.3 2.446H1.066C.477 7.54 0 8.064 0 8.71v2.344c0 .647.478 1.171 1.067 1.171h1.066c.59 0 1.067-.524 1.067-1.171V8.71c0-.647-.478-1.171-1.067-1.171z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CellularConnectionIcon;
/* prettier-ignore-end */
