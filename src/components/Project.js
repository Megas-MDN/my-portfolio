import React from 'react'
import {FaGithub} from 'react-icons/fa'

const Project = ({title, imgsrc, text, view, source}) => {
  return (
    <div className='project-card'>
    <img src={imgsrc} alt={title}/>
    <h2 className='project-title'>{title}</h2>
    <div className='pro-details'>
      <p>{text}</p>
      <div className='pro-btns'>
        <a 
        className={'btn'} 
        href={view}
        rel="noreferrer"
        target={"_blank"}
        >
          view
          </a>
        <a 
        className={'btn'} 
        href={source}
        rel="noreferrer"
        target={"_blank"}
        >
          <FaGithub size={20}/>
          </a>
      </div>
    </div>
  </div>
  )
}

export default Project