import React from "react";
import style from "../styles/welcome.module.css";
import glitch from "../styles/glitchedText.module.css";

const Welcome = () => {
  return (
    <div className={style.welcome}>
      <p className={style.txtLine1}>
        I'm <span className={glitch.glitch}>Marin</span>
      </p>
      <p className={style.txtLine2}>an inexperienced web developer</p>
    </div>
  );
};

export default Welcome;
