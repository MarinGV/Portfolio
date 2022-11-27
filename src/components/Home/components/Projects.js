import React from "react";

import SectionBreak from "./SectionBreak";
import SwipeProjects from "./SwipeProjects";

const Projects = () => {
  return (
    <section id="projects">
      <SectionBreak type="text" text="Projects" />
      <SwipeProjects />
    </section>
  );
};

export default Projects;
