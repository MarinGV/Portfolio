import React from "react";

import ParticlesBg from "./ParticlesBg";
import Nav from "./Navbar";
import Welcome from "./WelcomeMs";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

import style from "./styles/styles.module.css";
import "./styles/tsParticles.css";

const Home = () => {
  ////////// NAVBAR ITEM SCROLLS TO SECTION //////////
  const scrollToSection = (data) => {
    document
      // chooses the sectio by the id provided through the data
      .getElementById(data)
      // sets scrolling type and where to stop at the section
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };
  ///// for this feature to work, you need the code in <Nav />,
  ///// the ids set in this component, <Projects />, <Skills /> and <Contact />,
  ///// and the idScroll prop in <Nav /> in this component

  ////////// DON'T TOUCH ABOVE //////////

  return (
    <div className={style.background}>
      <div className={style.container}>
        <ParticlesBg />
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
