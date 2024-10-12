import React, { FunctionComponent, HTMLAttributes } from "react";

const ArrowIcon: FunctionComponent<HTMLAttributes<HTMLOrSVGElement>> = (
  props
) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={20}
  height={20}
  fill="none"
  viewBox="0 0 20 20"
  {...props}
>
  <g fill="auto" clipPath="url(#a)">
    <path d="M15.342 16.168 3.778 4.72a.615.615 0 0 1-.132-.673.63.63 0 0 1 .574-.39l10.513-.146a.606.606 0 0 1 .617.61.63.63 0 0 1-.622.628l-9.017.126 10.51 10.405a.62.62 0 0 1-.003.876.62.62 0 0 1-.876.012M3.738 15.234a.6.6 0 0 1-.18-.436l.027-7.01a.63.63 0 0 1 .621-.627.606.606 0 0 1 .617.61l-.026 7.01a.63.63 0 0 1-.622.628.6.6 0 0 1-.437-.175" />
  </g>
  <defs>
    <clipPath id="a">
      <path
        fill="#fff"
        d="M0 0H20V20H0z"
        transform="matrix(-1 0 0 1 20 0)"
      />
    </clipPath>
  </defs>
</svg>
);
export default ArrowIcon;
