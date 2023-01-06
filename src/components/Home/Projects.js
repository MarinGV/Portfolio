import React from "react";

import SectionBreak from "./components/SectionBreak";
import SwipeProjects from "./components/SwipeProjects";

import style from "./styles/projects.module.css";

const Projects = () => {
  return (
    <section id="projects">
      <SectionBreak type="text" text="Projects" />
      <div className={style.text}>
        The following projects are made to simulate the working environment in
        the company. For more details, you can check my{" "}
        <a href="https://github.com/MarinGV/Portfolio">GitHub</a>
      </div>
      <SwipeProjects />
    </section>
  );
};

export default Projects;
