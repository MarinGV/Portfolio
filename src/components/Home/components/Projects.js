import React from "react";
import style from "../styles/styles.module.css";

import SectionBreak from "./SectionBreak";
import Card from "./Card";

const Projects = () => {
  return (
    <div>
      <SectionBreak name="code" fill="#c2bfcc" />
      <div className={style.projectSection} id="projects">
        <div className={style.titleP}>Projects I've worked on</div>
        <div className={style.proj1}>
          <Card title="UI Kit" />
        </div>
        <div className={style.proj2}>
          <Card title="Error Tracking Tool" />
        </div>
        <div className={style.proj3}>
          <Card title="Web Analytics Tool" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
