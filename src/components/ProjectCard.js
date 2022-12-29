import './ProjectCard.css';
import React, { useContext } from 'react';
import Project from './Project';
import PortifolioContext from '../context/PortifolioContext';

const ProjectCard = () => {
  const { projectsData, projectsLoading } = useContext(PortifolioContext);

  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      {projectsLoading && <div className='loading'></div>}
      <div className='project-container'>
        {[...(projectsData || [])].map((el, i) => (
          <Project {...el} key={el.id + i + el.title} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
