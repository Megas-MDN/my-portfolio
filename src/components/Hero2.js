import React from "react";
import "./Hero2.css";

const Hero2 = ({heading, text}) => {
  return <div className="hero-img">
    <div className="heading">
      <h1>{heading}</h1>
      <p>{text || "My Default text"}</p>
    </div>
  </div>;
};

export default Hero2;
