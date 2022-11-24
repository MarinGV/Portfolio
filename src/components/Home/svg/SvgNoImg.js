import React from "react";

const SvgNoImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="200px"
      width="200px"
      version="1.1"
      viewBox="-300 -300 600 600"
      font-family="Bitstream Vera Sans,Liberation Sans, Arial, sans-serif"
      font-size="72"
      text-anchor="middle"
      // fill={props.fill}
    >
      <circle stroke="#AAA" stroke-width="10" r="280" fill="#FFF" />
      <switch style={{ fill: "#444" }}>
        <text style={{ fill: "#444" }} id="trsvg3-bn" systemLanguage="bn">
          <tspan x="0" y="-8" id="trsvg1-bn">
            &#x99B;&#x9AC;&#x9BF; &#x989;&#x9AA;&#x9B2;&#x9AD;&#x9CD;&#x9AF;
          </tspan>
          <tspan x="0" y="80" id="trsvg2-bn">
            &#x9A8;&#x9DF;
          </tspan>
        </text>
        <text style={{ fill: "#444" }} id="trsvg3">
          <tspan x="0" y="-8" id="trsvg1">
            NO IMAGE
          </tspan>
          <tspan x="0" y="80" id="trsvg2">
            AVAILABLE
          </tspan>
        </text>
      </switch>
    </svg>
  );
};

export default SvgNoImg;
