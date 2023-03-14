import React from 'react';
import Multipleimages from "../assets/dzair.jpg"; 
import "../styles/About.css";
function About() {
  // blogs maybe ????
  
  return (
    <div className='about'>
<div className='aboutTop' style ={{backgroundImage: `url(${Multipleimages})`}}></div>
<div className='aboutBottom'>
    <h1>About </h1>
    <p> currentlly a secound year computer science major with experience in full-stack web dev and machine learning  </p>
</div>
    </div>
  )
}

export default About