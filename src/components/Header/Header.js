import React from 'react'
import {Link} from 'react-scroll'
import './Header.css';


function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <h1>Port<span>folio</span></h1>
        </div>
        <div className='header__right'>
            <Link to='about' smooth={true} duration={500}>
            <h4>About me</h4>
            </Link>

            <Link to='skills' smooth={true} duration={500}>
            <h4>Skills</h4>
            </Link>

            <Link to='projects' smooth={true} duration={500}>
            <h4>Projects</h4>
            </Link>

            {/* <Link to='exp' smooth={true} duration={500}>
            <h4>Internship/Experience</h4>
            </Link> */}

            <Link to='contact' smooth={true} duration={500}>
            <h4>Contact</h4>
            </Link>

            <h4 className='header__rightbutton'>
  <a href="mailto:kamalsakthi807@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
    Join with Me
  </a>
</h4>
        </div>
      
    </div>
  )
}

export default Header
