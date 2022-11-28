import React from "react";
import "./Footer.css";
import { FaHome, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={30} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Cabo Frio - Rio de Janeiro</p>
              <p>Brazil</p>
            </div>
          </div>
          <div className="phone">
            <BsWhatsapp
              size={30}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <h4>
              <p>+55 - 22 - 9 9979 - 2190</p>
            </h4>
          </div>
          <div className="email">
            <MdOutlineMail
              size={30}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <h4>mdn.melqui@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>About the portfolio</h4>
          <p>
            This is made with lots of love and care. In this portfolio I show
            some showcases that I developed and have been creating in my
            developer career.
          </p>
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
      </div>
    </div>
  );
};

export default Footer;
