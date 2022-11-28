import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Social.css';

function Social() {
  return (
    <div className="contact-me">
    <h2>mdn.melqui@gmail.com</h2>
      
    <div className="social">
    <a
      href="https://github.com/Megas-MDN"
      className="link-github"
      rel="noreferrer"
      target={"_blank"}
    >
      <FaGithub
        size={30}
        style={{ marginRight: "2rem" }}
        className="github"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/melquisedeque-megas-do-nascimento/"
      className="link-linkedin"
      rel="noreferrer"
      target={"_blank"}
    >
      <FaLinkedin
        size={30}
        style={{ marginRight: "2rem" }}
        className="linkedin"
      />
    </a>

    <a
      href="https://www.instagram.com/megasdev/"
      className="link-instagram"
      rel="noreferrer"
      target={"_blank"}
    >
      <FaInstagram
        size={30}
        style={{ marginRight: "2rem" }}
        className="instagram"
      />
    </a>
  </div>
    </div>
  )
}

export default Social