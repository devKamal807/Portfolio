import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'

function TopContent() {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1><span>Mr.</span>Kamal Sakthivel</h1>
            <p>Motivated Full Stack MERN Developer with hands-on <br/>experience in designing and developing web
            <br/>applications using MongoDB, Express.js, React.js, and Node.js. <br/>Adept at problem-solving and
 collaborating <br/>in team environments to deliver optimized solutions.<br/> Passionate about building scalable,
 interactive, <br/>and modern web applications while continuously <br/>learning and growing in the field of
 software development.</p>
        <a href="https://devkamal807.github.io/Portfolio/resume.pdf" 
    download="Resume_Kamal.pdf" >
            <button className='topcontent__resumebutton'>Resume</button>
            </a>
            <Link to='projects' smooth={true} duration={500}>
            <button className='topcontent__workbutton'>My Work</button>
            </Link>
        
        </div>
      
    </div>
  )
}

export default TopContent
