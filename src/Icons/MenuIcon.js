import * as React from "react";

function SvgMenuIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="23"
      viewBox="0 0 28 23"
      {...props}
    >
      <clipPath id="menuIcon_svg__a">
        <path
          transform="matrix(1 0 0 -1 0 23)"
          d="M0 23h28V-1H0v24z"
          fillRule="evenodd"
        />
      </clipPath>
      <g clipPath="url(#menuIcon_svg__a)">
        <clipPath id="menuIcon_svg__b">
          <path transform="matrix(1 0 0 -1 0 23)" d="M-322-617H53V50h-375z" />
        </clipPath>
        <g clipPath="url(#menuIcon_svg__b)">
          <clipPath id="menuIcon_svg__c">
            <path transform="matrix(1 0 0 -1 0 23)" d="M0 0h28v23H0z" />
          </clipPath>
          <g clipPath="url(#menuIcon_svg__c)">
            <clipPath id="menuIcon_svg__d">
              <path
                transform="matrix(1 0 0 -1 0 23)"
                d="M28 21.756C28 22.5 27.533 23 26.832 23H1.168C.467 23 0 22.5 0 21.756v-2.504C0 18.502.467 18 1.168 18h25.664c.701 0 1.168.502 1.168 1.252v2.504z"
                fillRule="evenodd"
              />
            </clipPath>
            <g clipPath="url(#menuIcon_svg__d)">
              <clipPath id="menuIcon_svg__e">
                <path transform="matrix(1 0 0 -1 0 23)" d="M0 0h28v23H0z" />
              </clipPath>
              <g clipPath="url(#menuIcon_svg__e)">
                <path d="M-5 10h38V-5H-5z" fill="#fff" />
              </g>
            </g>
            <clipPath id="menuIcon_svg__f">
              <path
                transform="matrix(1 0 0 -1 0 23)"
                d="M28 12.748C28 13.5 27.533 14 26.832 14H1.168C.467 14 0 13.5 0 12.748v-2.496C0 9.5.467 9 1.168 9h25.664C27.533 9 28 9.5 28 10.252v2.496z"
                fillRule="evenodd"
              />
            </clipPath>
            <g clipPath="url(#menuIcon_svg__f)">
              <clipPath id="menuIcon_svg__g">
                <path transform="matrix(1 0 0 -1 0 23)" d="M0 0h28v23H0z" />
              </clipPath>
              <g clipPath="url(#menuIcon_svg__g)">
                <path d="M-5 19h38V4H-5z" fill="#fff" />
              </g>
            </g>
            <clipPath id="menuIcon_svg__h">
              <path
                transform="matrix(1 0 0 -1 0 23)"
                d="M28 3.75C28 4.5 27.533 5 26.832 5H1.168C.467 5 0 4.5 0 3.75v-2.5C0 .5.467 0 1.168 0h25.664C27.533 0 28 .5 28 1.25v2.5z"
                fillRule="evenodd"
              />
            </clipPath>
            <g clipPath="url(#menuIcon_svg__h)">
              <clipPath id="menuIcon_svg__i">
                <path transform="matrix(1 0 0 -1 0 23)" d="M0 0h28v23H0z" />
              </clipPath>
              <g clipPath="url(#menuIcon_svg__i)">
                <path d="M-5 28h38V13H-5z" fill="#fff" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgMenuIcon;
