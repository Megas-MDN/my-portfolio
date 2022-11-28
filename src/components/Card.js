import React from "react";
import { FaGithub } from "react-icons/fa";

const Card = ({ title, tech, tasks, source }) => {
  return (
      <div className="card">
        <h4>{title}</h4>
        <span className="bar"></span>
        <p className="btc">{tech}</p>
        {tasks.map((el, index) => (
          <p key={el + index}>{el}</p>
        ))}
        <a 
        href={source} 
        className="btn"
        rel="noreferrer"
        target={"_blank"}
        >
        Source <FaGithub size={20}/>
        </a>
      </div>
  );
};

export default Card;
