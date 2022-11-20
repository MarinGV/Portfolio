import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Nav from "./Navbar";
import Welcome from "./WelcomeMs";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

import style from "./styles.module.css";
import "./tsparticles.css";

const Home = () => {
  ////////// NAVBAR ITEM SCROLLS TO SECTION //////////
  const scrollToSection = (data) => {
    document
      // chooses the sectio by the id provided through the data
      .getElementById(data)
      // sets scrolling type and where to stop at the section
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };
  ///// for this feature to work, you need the code in <Nav />,
  ///// the ids set in this component, <Projects />, <Skills /> and <Contact />,
  ///// and the idScroll prop in <Nav />

  ////////// PARTICLE LINK BACKGROUND //////////
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  ///// for this feature to work, you need the <Particles />, Particles from "react-tsparticles"
  ///// { loadFull } from "tsparticles" and { useCallback } from "react".

  ////////// DON'T TOUCH ABOVE //////////

  return (
    <div className={style.background}>
      <div className={style.container}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: {
              enable: false,
              zIndex: -10,
            },
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 5,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#1677ff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 70,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
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
