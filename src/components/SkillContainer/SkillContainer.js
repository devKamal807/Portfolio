import React from 'react'
import { Element } from 'react-scroll'
import skill from '../../assets/skill.png'
import { LinearProgress } from '@mui/material'
import './SkillContainer.css'

function SkillContainer() {
  return (
    <Element className='skillcontainer' id='skills'>
        <div className='skillcontainer__image'>
            <img src={skill} alt=''/>
            
        </div>
        <div className='skillcontainer__text'>
            <h2>SKILLSET</h2>
            <div className='skillcontainer__skillset'>
              <h5>Javascript</h5>
              <div className='skillcontainer__slider skillcontainer__slider1'>
                <LinearProgress variant='determinate' value={90}/>
              </div>
            </div>
            <div className='skillcontainer__skillset'>
              <h5>React.js</h5>
              <div className='skillcontainer__slider skillcontainer__slider2'>
                <LinearProgress variant='determinate' value={80}/>
              </div>
            </div>
            <div className='skillcontainer__skillset'>
              <h5>Node.js</h5>
              <div className='skillcontainer__slider skillcontainer__slider3'>
                <LinearProgress variant='determinate' value={70}/>
              </div>
            </div>
            <div className='skillcontainer__skillset'>
              <h5>MongoDB</h5>
              <div className='skillcontainer__slider skillcontainer__slider4'>
                <LinearProgress variant='determinate' value={70}/>
              </div>
            </div>
            <div className='skillcontainer__skillset'>
              <h5>AWS</h5>
              <div className='skillcontainer__slider skillcontainer__slider5'>
                <LinearProgress variant='determinate' value={50}/>
              </div>
            </div>
        </div>

    </Element>
  )
}

export default SkillContainer
