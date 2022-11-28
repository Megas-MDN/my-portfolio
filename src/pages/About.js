import React from "react";
import AboutContent from "../components/AboutContent";
import Hero2 from "../components/Hero2";

const About = () => {
  return (
    <div>
      <Hero2
        heading={"About"}
        text={"I'm a front-end and full-stack developer in progress"}
      />
      <AboutContent />
    </div>
  );
};

export default About;
