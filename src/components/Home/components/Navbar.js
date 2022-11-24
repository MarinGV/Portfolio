import React from "react";
import style from "../styles/styles.module.css";

import SVG from "../svg";

import useUpdatePosition from "../hooks/useUpdatePosition";
import useIconChange from "../hooks/useIconChange";

const Nav = (props) => {
  ////////// SHOW NAVBAR ON SCROLL UP //////////
  const { styleSet } = useUpdatePosition();
  ///// for this feature to work, you need the hook useUpdatePosition()

  ////////// NAVBAR ITEM SCROLLS TO SECTION //////////
  // send to <Home /> the ids to the section it has to scroll to
  const sendId = (data) => {
    props.idScroll(data);
  };
  ///// for this feature to work, you need the code in <Home />
  ///// and the onClick events in this component

  ////////// NAVBAR ITEM ICON CHANGE //////////
  const { screenWidth } = useIconChange();
  ///// for this feature to work, you need the svg icons from "../svg"
  ///// and the ternary operators in the return() section

  ////////// DON'T TOUCH ABOVE //////////

  return (
    <div className={styleSet}>
      <div className={style.navBg}>
        <hr />
        <div className={style.nav}>
          <div className={style.navLogo} onClick={() => sendId("pageTop")}>
            Marin Vasilciu
          </div>
          <div className={style.navItem} onClick={() => sendId("projects")}>
            {/* when the window size is smaller than 600px, change nav item text with icons */}
            {screenWidth < 600 ? <SVG name="code" /> : "Projects"}
          </div>
          <div className={style.navItem} onClick={() => sendId("skills")}>
            {screenWidth < 600 ? <SVG name="gear" /> : "Skills"}
          </div>
          <div className={style.navItem} onClick={() => sendId("contact")}>
            {screenWidth < 600 ? <SVG name="envelope" /> : "Contact"}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Nav;
