import React from "react";
import SVG from "../svg";
import { Link } from "react-router-dom";

import style from "../styles/card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.circle}>
        <div className={style.imgBx}>
          <img src={props.pic} alt={props.alt} />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.title}>{props.title}</div>
        <div className={style.summary}> {props.summary} </div>
        <Link to={props.destination}>
          <div className={style.icon}>
            <SVG name="arrow-right" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
