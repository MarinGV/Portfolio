import React from "react";

import style from "../styles/3DIconHover.module.css";
import SVG from "../svg";

const TiltIcon = (props) => {
  return (
    <a href={props.address}>
      <div className={style.container}>
        <div className={style.tiltBoxWrap}>
          <span className={style.tOver} />
          <span className={style.tOver} />
          <span className={style.tOver} />
          <span className={style.tOver} />
          <span className={style.tOver} />
          <span className={style.tOver} />
          <span className={style.tOver} />
          <span className={style.tOver} />
          <span className={style.tOver} />
          <div className={style.tiltBox} style={{ background: props.bgCol }}>
            <SVG name={props.icon} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default TiltIcon;
