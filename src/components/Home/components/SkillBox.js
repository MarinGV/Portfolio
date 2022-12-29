import React from "react";
import style from "../styles/skillBox.module.css";

const SkillBox = (props) => {
  return (
    <div
      className={style.containerBg}
      style={{
        backgroundImage: props.image,
        backgroundSize: props.size,
      }}
    >
      <div className={style.container}>
        <div className={style.title}>{props.title}</div>
        <div className={style.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default SkillBox;
