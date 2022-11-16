import React from "react";
import style from "./styles.module.css";
import Nav from "./Navbar";
import Welcome from "./WelcomeMs";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.navTop} />
        <Nav />
        <Welcome />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
