import React from "react";

import SectionBreak from "./components/SectionBreak";
import SwipeProjects from "./components/SwipeProjects";

const Projects = () => {
  return (
    <section id="projects">
      <SectionBreak type="text" text="Projects" />
      <SwipeProjects />
    </section>
  );
};

export default Projects;
