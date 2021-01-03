import React from "react";

function SvgMenuButton({width}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill="none"
      viewBox="0 0 512 512"
    >
      <rect
        width="512"
        height="85.333"
        y="213.705"
        fill="#4A5F5A"
        rx="42.522"
      ></rect>
      <rect
        width="512"
        height="89.043"
        y="426.667"
        fill="#4A5F5A"
        rx="44.667"
      ></rect>
      <rect width="512" height="89.043" y="0" fill="#4A5F5A" rx="44.522"></rect>
    </svg>
  );
}

export default SvgMenuButton;