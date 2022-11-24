import React from "react";

import style from "../styles/styles.module.css";
import SVG from "../svg";

const SectionBreak = (props) => {
  return (
    <div className={style.sectionBreak}>
      <span className={style.outerLine} />
      <SVG name={props.name} fill={props.fill} />
      <span className={style.outerLine} />
    </div>
  );
};

export default SectionBreak;
