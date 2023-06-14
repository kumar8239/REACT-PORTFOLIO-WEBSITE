import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../Helpers/ProjectList'
import { GitHub } from '@mui/icons-material'
import "../Style/projectDisplay.css"
export default function ProjectDisplay() {
    const {id}=useParams();
    const project=projectList[id]
    console.log(id);
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <p><b>skills:</b>{project.skills}</p>
        <GitHub/>
    </div>
  )
}
