import React, { FunctionComponent, HTMLAttributes } from "react";

const ArrowRightIcon: FunctionComponent<HTMLAttributes<HTMLOrSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <g fill="auto" clipPath="url(#a)">
      <path d="m3.493 12.126 8.673-8.586a.46.46 0 0 0 .099-.505.48.48 0 0 0-.43-.293l-7.885-.11a.454.454 0 0 0-.463.459c.001.257.21.467.466.471l6.763.094-7.882 7.804c-.181.18-.18.473.002.657a.465.465 0 0 0 .657.01M12.196 11.426a.46.46 0 0 0 .135-.327l-.02-5.257a.474.474 0 0 0-.466-.471.454.454 0 0 0-.463.458l.02 5.257c.001.257.21.467.467.47a.46.46 0 0 0 .327-.13" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0H15V15H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ArrowRightIcon;
