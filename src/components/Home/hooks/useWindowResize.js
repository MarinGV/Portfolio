import { useEffect, useState } from "react";

const useWindowResize = () => {
  // tracks horizontal window size
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowSize = () => {
      // update current window size in case the user changes window size
      setScreenWidth(window.innerWidth);
      console.log(screenWidth);
    };
    // track the resizing when it happens
    window.addEventListener("resize", updateWindowSize);
    // stop tracking the resizing
    return () => window.removeEventListener("resize", updateWindowSize);
  }, [screenWidth]);

  return { screenWidth };
};

export default useWindowResize;
