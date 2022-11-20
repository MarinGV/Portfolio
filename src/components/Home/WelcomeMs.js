import React from "react";
import style from "./styles.module.css";

const Welcome = () => {
  return (
    <div className={style.welcome}>
      <p className={style.txtLine1}>
        I'm <span style={{ fontFamily: "Rubik Glitch, cursive" }}> Marin </span>
      </p>
      <p className={style.txtLine2}>an inexperienced web developer</p>
    </div>
  );
};

export default Welcome;
