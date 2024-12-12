import React from 'react'
import { Element } from 'react-scroll'
import Project from '../project/Project'
import netflix from '../../assets/netfilix.png'
import mini from '../../assets/mini com.png'
import todo from '../../assets/todo.png'
import calc from '../../assets/calculator.png'
import bmi from '../../assets/bmi.png'
import './ProjectContainer.css'

function ProjectContainer() {

    const Projects = [
        {
            img:netflix,
            title:"Netflix Landing Page",
            desc:"A visually stunning recreation of the Netflix homepage. This project showcases an intuitive UI/UX design featuring smooth navigation, responsive layouts, and engaging visual elements, replicating the original platform's aesthetics and functionality.",
            link:"https://devkamal807.github.io/Netflix-Landing-Page/"
        },

        {
            img:mini,
            title:"Mini E-Commerce",
            desc:"A simplified e-commerce platform built with React, featuring product listings, a shopping cart, and a responsive design.",
            link:"https://devkamal807.github.io/mini-Ecom-app/"
        },

        {
            img:todo,
            title:"To-Do",
            desc:"A straightforward task management app built with React and Bootstrap. It allows users to add, edit, delete, and mark tasks as complete, featuring a clean design for seamless usability.",
            link:"https://devkamal807.github.io/to-do/"
        },

        {
            img:calc,
            title:"Basic Calculator",
            desc:"A simple calculator application built with React, designed to perform basic arithmetic operations like addition, subtraction, multiplication, and division.",
            link:"https://devkamal807.github.io/calculator/"
        },

        {
            img:bmi,
            title:"Basic BMI Calculator",
            desc:"A straightforward BMI (Body Mass Index) calculator built with React. The app allows users to input their weight and height to calculate their BMI.",
            link:"https://devkamal807.github.io/Bmi-Calculator/"
        },
    ]
  return (
    <Element className='projectcontainer' id='projects'>
        <h1>Projects</h1>
        <p>Here are some projects which i done for making lives for people easy
        </p>
        <div className='projectcontainer__projects'>
            {
                Projects.map((project,index)=>{
                    return(
                        <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}/>

                    )
                })
            }
        </div>
    </Element>
  )
}

export default ProjectContainer
