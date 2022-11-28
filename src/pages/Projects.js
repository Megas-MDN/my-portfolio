import React from "react";
import CardSimple from "../components/CardSimple";
import Hero2 from "../components/Hero2";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div>
      <Hero2 heading="Projects" text="Check out some of my projects" />
      <ProjectCard />
      <h1 style={{ textAlign: "center" }}>Ongoing projects</h1>
      <CardSimple />
    </div>
  );
};

export default Projects;
