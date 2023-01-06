import React from "react";
import SectionBreak from "./components/SectionBreak";
import SkillBox from "./components/SkillBox";

import style from "./styles/skills.module.css";
import itemstyle from "./styles/skillBox.module.css";

const Skills = () => {
  return (
    <section id="skills">
      <SectionBreak type="text" text="Skills & Tech" />
      <div className={style.container}>
        <SkillBox title="Fundamentals" image="var(--image1)">
          HTML &nbsp;&nbsp;&nbsp; CSS &nbsp;&nbsp;&nbsp; JavaScript
          &nbsp;&nbsp;&nbsp; Git
        </SkillBox>
        <SkillBox title="MERN Stack" image="var(--image2)">
          MongoDB &nbsp;&nbsp;&nbsp; Express.js &nbsp;&nbsp;&nbsp; React.js
          &nbsp;&nbsp;&nbsp; Node.js
        </SkillBox>
        <SkillBox title="SOLID Principles" image="var(--image3)" size="cover">
          <div className={itemstyle.contitems}>
            <div>Single Responsibility</div>
            <div>Open-Closed</div>
            <div>Liskov Substitution</div>
          </div>
          <div className={itemstyle.contitems}>
            <div>Interface Segregation</div>
            <div>Dependency Invertion</div>
          </div>
        </SkillBox>
        <SkillBox title="Communication" image="var(--image4)" size="cover">
          <div className={itemstyle.contitems}>
            <div>Patience</div>
            <div>Active Listening</div>
            <div>Feedback</div>
          </div>
          <div className={itemstyle.contitems}>
            <div>Written & Oral</div>
            <div>Honesty</div>
          </div>
        </SkillBox>
        <SkillBox title="Management" image="var(--image5)" size="cover">
          <div className={itemstyle.contitems}>
            <div>Stress Management</div>
            <div>Project Management</div>
            <div>Time Management</div>
          </div>
          <div className={itemstyle.contitems}>
            <div>Problem Solving</div>
            <div>Decision-Making</div>
          </div>
        </SkillBox>
      </div>
    </section>
  );
};

export default Skills;
