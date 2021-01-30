import * as React from "react";

function SvgFilterActive(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} {...props}>
      <path
        fill="#62AA14"
        fillRule="evenodd"
        d="M25.814.83c-.209-.478-.57-.717-1.086-.717H1.195C.681.113.32.353.111.83c-.209.503-.123.932.257 1.287l9.064 9.064v8.935c0 .32.117.595.35.828l4.706 4.706c.22.233.497.35.827.35.148 0 .3-.03.46-.092.478-.209.717-.57.717-1.085V11.181l9.064-9.064c.38-.355.466-.784.258-1.287z"
      />
    </svg>
  );
}

export default SvgFilterActive;
