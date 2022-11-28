import "./ProjectCard.css";
import React, { useContext } from "react";
import Project from "./Project";
import PortifolioContext from "../context/PortifolioContext";

const ProjectCard = () => {
  const { projectsData } = useContext(PortifolioContext);

  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {[...(projectsData || [])].reverse().map((el, i) => (
          <Project {...el} key={el.id + i + el.title} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
