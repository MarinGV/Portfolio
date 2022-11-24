import React from "react";
import style from "../styles/styles.module.css";
import SectionBreak from "./SectionBreak";

const Contact = () => {
  return (
    <>
      <SectionBreak name="envelope" />
      <div className={style.tempC} id="contact">
        Contact
      </div>
    </>
  );
};

export default Contact;
