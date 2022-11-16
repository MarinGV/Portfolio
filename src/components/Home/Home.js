import React from "react";
import style from "./styles.module.css";

import Nav from "./Navbar";
import Welcome from "./WelcomeMs";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  const scrollToSection = (data) => {
    document
      .getElementById(data)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.navTop} id="pageTop" />
        <Nav idScroll={scrollToSection} />
        <Welcome />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
