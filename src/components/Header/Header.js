import React, { useState } from 'react'
import {Link} from 'react-scroll'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';


function Header() {

  const email = "kamalsakthi807@gmail.com"; 
  const subject = "Collaboration Request"; 
  const body = "Hi, I'd like to discuss collaboration opportunities with you.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const [menuOpen,setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

  return (
    <div className='header'>
        <div className='header__left'>
            <h1>Port<span>folio</span></h1>
        </div>
        <div className={`header__right ${menuOpen ? 'active' : ''}`}>
            <Link to='about' smooth={true} duration={500}>
            <h4>About me</h4>
            </Link>

            <Link to='skills' smooth={true} duration={500}>
            <h4>Skills</h4>
            </Link>

            <Link to='projects' smooth={true} duration={500}>
            <h4>Projects</h4>
            </Link>

            <Link to='contact' smooth={true} duration={500}>
            <h4>Contact</h4>
            </Link>

            <h4 className='header__rightbutton'>
            <button
      onClick={() => window.location.href = mailtoLink}
      style={{
        backgroundColor: "#000",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px"
      }}
    >
      Join with Me
    </button>
</h4>
        </div>
        <div className='menu__icon' onClick={toggleMenu} aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}><MenuIcon sx={{fontSize:60}}/></div>
      
    </div>
  )
}

export default Header
