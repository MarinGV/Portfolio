import React from "react";

import style from "../styles/sectionBreak.module.css";
import SVG from "../svg";

// might need to redesign and remove the icon feature. It is not used at the moment

const SectionBreak = (props) => {
  switch (props.type) {
    case "icon":
      return (
        <div className={style.sectionBreak}>
          <span className={style.sideLine} />
          <SVG name={props.name} fill={props.fill} />
          <span className={style.sideLine} />
        </div>
      );
    case "text":
      return (
        <div className={style.sectionBreak}>
          <span className={style.sideLine} />
          <span className={style.title}>{props.text}</span>
          <span className={style.sideLine} />
        </div>
      );
    default:
      return (
        <div className={style.sectionBreak}>
          <span className={style.sideLine} />
          <SVG name={props.name} fill={props.fill} />
          <span className={style.sideLine} />
        </div>
      );
  }
};

export default SectionBreak;
