import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'
import "../Style/home.css"
export default function Home() {
  return (
    <div className='home'>
      <div className='about'>
      <h2>Hi,My Name is Lalit Kumar</h2>
      <div className='prompt'><p>A Software Developer with a passion for learning and creating.</p>
      <LinkedIn/>
      <Email/>
      <GitHub/>
      </div>
      </div>
      <div className='skill'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJs, Redux, HTML, CSS, NPN, Ionic, BootStrap, StyledComponents, MaterialUi
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
             Java, Spring, Mysql, SpringBoot, Servlet, JSP
            </span>
          </li>
          <li className='item'>
            <h2>Language</h2>
            <span>
             JavaScript, Java, c#, c, c++
            </span>
          </li>
        </ol>
        </div>
    </div>
  )
}
