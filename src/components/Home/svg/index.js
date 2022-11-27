import React from "react";

import SvgCode from "./SvgCode";
import SvgEnvelope from "./SvgEnvelope";
import SvgGear from "./SvgGear";
import SvgDefault from "./SvgDefault";
import SvgArrowRight from "./SvgArrowRight";

const SVG = (props) => {
  switch (props.name) {
    case "code":
      return <SvgCode fill={props.fill} />;
    case "envelope":
      return <SvgEnvelope fill={props.fill} />;
    case "gear":
      return <SvgGear fill={props.fill} />;
    case "arrow-right":
      return <SvgArrowRight />;
    default:
      return <SvgDefault fill={props.fill} />;
  }
};

SVG.defaultProps = {
  fill: "#c2bfcc",
};

export default SVG;
