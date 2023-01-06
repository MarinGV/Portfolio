import React from "react";

import SectionBreak from "./components/SectionBreak";
import TiltIcon from "./components/TiltIcon";

import style from "./styles/contact.module.css";

const Contact = () => {
  return (
    <section id="contact">
      <SectionBreak type="text" text="Contact" />
      <div className={style.container}>
        <TiltIcon
          address="https://www.linkedin.com/in/marinvasilciu/"
          icon="linkedin"
          bgCol="#04527b"
        />
        <TiltIcon
          address="https://github.com/MarinGV"
          icon="github"
          bgCol="#333"
        />
        <TiltIcon
          address="mailto:vasilciumarin@yahoo.com"
          icon="yahoo"
          bgCol="#720e9e"
        />
        <TiltIcon
          address="mailto:maringvasilciu@gmail.com"
          icon="gmail"
          bgCol="#fff"
        />
      </div>
    </section>
  );
};

export default Contact;
