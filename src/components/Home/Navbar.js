import React, { useState, useEffect } from "react";
import style from "./styles.module.css";

const Nav = (props) => {
  // tracks vertical position
  const [scrollPosition, setScrollPosition] = useState(0);
  // chooses the style for navbar depending on scrolling direction
  const [styleSet, setStyleSet] = useState(style.navContainer);

  // decide scrolling direction and set navbar styling
  useEffect(() => {
    const updatePosition = () => {
      setStyleSet(
        // decide scrolling direction and set navbar styling
        window.scrollY > scrollPosition ? style.navContainer : style.sticky
      );
      // update current vertical position
      setScrollPosition(window.scrollY);
    };
    // track scrolling when active
    window.addEventListener("scroll", updatePosition);
    // stops scrolling tracking
    return () => window.removeEventListener("scroll", updatePosition);
  });

  // send to <Home /> the ids to the section it has to scroll to
  const sendId = (data) => {
    props.idScroll(data);
  };

  ////////// DON'T TOUCH ABOVE //////////

  return (
    <div className={styleSet}>
      <hr />
      <div className={style.nav}>
        <div className={style.item1} onClick={() => sendId("pageTop")}>
          Marin Vasilciu
        </div>
        <div className={style.cursor} onClick={() => sendId("projects")}>
          Projects
        </div>
        <div className={style.cursor} onClick={() => sendId("skills")}>
          Skills
        </div>
        <div className={style.cursor} onClick={() => sendId("contact")}>
          Contact
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
