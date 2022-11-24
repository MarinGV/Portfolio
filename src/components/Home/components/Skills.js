import React from "react";
import style from "../styles/styles.module.css";
import SectionBreak from "./SectionBreak";

const Skills = () => {
  return (
    <>
      <SectionBreak name="gear" />
      <div className={style.tempC} id="skills">
        <p>Skills & Tech</p>
        <p>
          - Work (Creative Problem Solving, Critical Thinking, Accountability,
          Confidence)
        </p>
        <p>- Communication (Active Listening, Patience, Open-mindedness)</p>
        <p>- </p>
        <p>- Fundamentals (HTML, CSS, JavaScript, git)</p>
        <p>- MERN stack (MongoDb, Express.js, React.js, Node.js)</p>
        <p>
          - SOLID principles (Single Responsability, Open-Closed, Liskov
          Substitution, Interface Segregation, Dependency Inversion)
        </p>
      </div>
    </>
  );
};

export default Skills;
