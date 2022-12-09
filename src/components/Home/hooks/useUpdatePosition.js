import { useEffect, useState } from "react";
import style from "../styles/nav.module.css";

const useUpdatePosition = () => {
  // tracks vertical position
  const [scrollPosition, setScrollPosition] = useState(0);
  // chooses the style for navbar depending on scrolling direction
  const [styleSet, setStyleSet] = useState(style.sticky);

  useEffect(() => {
    // decide scrolling direction and set navbar styling
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

  return { styleSet };
};

export default useUpdatePosition;

///// for this feature to work, you need .navContainer and .sticky from the styles.module.css
