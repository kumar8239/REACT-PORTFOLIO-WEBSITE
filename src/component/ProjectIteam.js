import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProjectIteam({image,name,id}) {
    const navigate=useNavigate();
  return (
    <div className='projectiteam' onClick={()=>{
        navigate("/project/"+id)
    }}>
      <div style={{backgroundImage:`url(${image})`}} className='bgImage'/>

      <h1>{name}</h1>
    </div>
    
  )
}
