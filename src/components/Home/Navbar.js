import React, { useState, useEffect } from "react";
import style from "./styles.module.css";

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [styleSet, setStyleSet] = useState(style.navContainer);

  useEffect(() => {
    const updatePosition = () => {
      setStyleSet(
        window.scrollY > scrollPosition ? style.navContainer : style.sticky
      );
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  });

  return (
    <div className={styleSet}>
      <hr />
      <div className={style.nav}>
        <div className={style.item1}>Marin Vasilciu</div>
        <div className={style.cursor}>Projects</div>
        <div className={style.cursor}>Skills</div>
        <div className={style.cursor}>Contact</div>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
