import React from "react";
import style from "../styles/styles.module.css";

import noImg from "./noImg.jpg";

const Card = (props) => {
  return (
    <div className={style.card}>
      <img src={noImg} alt="No Img" className={style.imgCard} />
      <div className={style.cardTitle}>{props.title}</div>
      <div className={style.cardText}>text</div>
    </div>
  );
};

// MAKE THE IMG AND THE TITLE TO LINK THE PROJECTS!!!

export default Card;
