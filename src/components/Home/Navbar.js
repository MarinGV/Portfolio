import React, { useState, useEffect } from "react";
import style from "./styles.module.css";
import {
  CodeOutlined,
  SettingOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

const Nav = (props) => {
  ////////// SHOW NAVBAR ON SCROLL UP //////////
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
  ///// for this feature to work, you need the classes
  ///// .navContainer and .sticky from the styles.module.css

  ////////// NAVBAR ITEM SCROLLS TO SECTION //////////
  // send to <Home /> the ids to the section it has to scroll to
  const sendId = (data) => {
    props.idScroll(data);
  };
  ///// for this feature to work, you need the code in <Home />
  ///// and the onClick events in this component

  ////////// NAVBAR ITEM ICON CHANGE //////////
  // tracks horizontal window size
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowSize = () => {
      // update current window size in case the user changes window size
      setScreenWidth(window.innerWidth);
    };
    // track the resizing when it happens
    window.addEventListener("resize", updateWindowSize);
    // stop tracking the resizing
    return () => window.removeEventListener("resize", updateWindowSize);
  }, [screenWidth]);

  ////////// DON'T TOUCH ABOVE //////////

  return (
    <div className={styleSet}>
      <hr />
      <div className={style.nav}>
        <div className={style.navLogo} onClick={() => sendId("pageTop")}>
          Marin Vasilciu
        </div>
        <div className={style.navItem} onClick={() => sendId("projects")}>
          {/* when the window size is smaller than 600px, change nav item text with icons */}
          {screenWidth < 600 ? <CodeOutlined /> : "Projects"}
        </div>
        <div className={style.navItem} onClick={() => sendId("skills")}>
          {screenWidth < 600 ? <SettingOutlined /> : "Skills"}
        </div>
        <div className={style.navItem} onClick={() => sendId("contact")}>
          {screenWidth < 600 ? <ContactsOutlined /> : "Contact"}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
