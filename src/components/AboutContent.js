import "./AboutContent.css";
import React from "react";
import { Link } from "react-router-dom";
import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          A developer and engineer who loves to program. Currently studying web
          development and mobile applications. I intend to apply the knowledge
          and skills I acquired throughout my academic career, always following
          the values ​​of respect, commitment and resilience to reach my full
          potential and add value to the people around me.
        </p>
        <Link to={"/contact"} className="btn">
          Contact
        </Link>
      </div>
      <div className="right">
       <div className="img-container">
       <div className="img-stack top">
          <img src={react1} alt="true" className="img" />
        </div>
        <div className="img-stack bottom">
          <img src={react2} alt="true" className="img" />
        </div>
      </div>
       </div>
    </div>
  );
};

export default AboutContent;
