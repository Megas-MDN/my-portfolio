import './Hero.css';

import React from 'react';
import Intro from'../assets/intro-bg.jpg'
import srcImage from '../assets/my-image.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img src={Intro} alt="intro-img" className='intro-img' />
      </div>
      <div className='content'>
      <img src={srcImage} alt="My-foto" className='my-image'/>
        <p>Hi, I'm Megas, nice to meet you</p>
        <h1>Full Stack Developer</h1>
      <div>
        <Link to='/projects' className='btn'>Projects</Link>
        <Link to='contact' className='btn btn-light'>Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default Hero
