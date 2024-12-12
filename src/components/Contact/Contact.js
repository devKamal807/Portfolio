import { GitHub, LinkedIn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import './Contact.css'


const Contact = () => {
  return (
   <Element className='contact' id='contact'>
        <h1>contact</h1>
        <div className='contact__container'>
        <p>
            Email: <span>kamalsakthi807@gmail.com</span>
        </p>
        <p>
            Github Username: <span>@devKamal807</span>
        </p>
        <div className='contact__icons'>
            <a href='www.linkedin.com/in/dev-kamal786'>
                <IconButton>
                    <LinkedIn/>
                </IconButton>
            </a>

            <a href='https://github.com/devKamal807'>
                <IconButton>
                    <GitHub/>
                </IconButton>
            </a>

        </div>
        </div>
   </Element>
  )
}

export default Contact
