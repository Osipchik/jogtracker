import * as React from "react";

function SvgCancelSmIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 18 18"
      {...props}
    >
      <defs>
        <clipPath id="cancelSmIcon_svg__a">
          <path d="M11.281 9.52a.385.385 0 010-.56l6-6a.865.865 0 00.239-.558.867.867 0 00-.239-.562L16.161.719A.857.857 0 0015.6.48a.727.727 0 00-.562.239l-6 6a.385.385 0 01-.559 0l-6-6A.865.865 0 001.922.48a.867.867 0 00-.563.239L.24 1.839A.867.867 0 000 2.403c0 .157.078.399.238.559l6 6c.16.16.16.398 0 .559l-6 6a.867.867 0 00-.238.562c0 .16.078.398.238.559l1.121 1.12c.16.16.403.239.563.239a.865.865 0 00.558-.238l6-6c.16-.16.399-.16.56 0l6 6c.16.16.401.238.562.238.16 0 .398-.078.558-.238l1.121-1.121a.857.857 0 00.239-.559.867.867 0 00-.239-.562zm0 0" />
        </clipPath>
      </defs>
      <g clipPath="url(#cancelSmIcon_svg__a)" clipRule="evenodd">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </g>
    </svg>
  );
}

export default SvgCancelSmIcon;
