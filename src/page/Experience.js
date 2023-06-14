import { School, Work } from '@mui/icons-material'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"

export default function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement className='vertical-timeline-element-education'
         date="2015 - 2019"
         iconStyle={{ background:"#3e497a",color:"#fff"}}
         icon={<School/>}
           
         >
          <h3 className='vertical-timeline-element-title'>
              High School and Diploma in Electrical Engineer
          </h3>
          <p>High School and Diploma</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement className='vertical-timeline-element-education'
         date="2019 - 2022"
         iconStyle={{ background:"#3e497a",color:"#fff"}}
         icon={<School/>}
           
         >
          <h3 className='vertical-timeline-element-title'>
            My Cool University, Bikaner Technical University Bachelor's Degree
          </h3>
          <p>Electrical Engineering</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement className='vertical-timeline-element-work'
         date="2021 - 2022"
         iconStyle={{ background:"#e9d35b",color:"#fff"}}
         icon={<Work/>}
           
         >
          <h3 className='vertical-timeline-element-title'>
            Assistance Engineer - Coster Group Neemrana
          </h3>
          <p>Assistance Engineer</p>
         </VerticalTimelineElement>
         <VerticalTimelineElement className='vertical-timeline-element-education'
         date="6 Month"
         iconStyle={{ background:"#3e497a",color:"#fff"}}
         icon={<School/>}
           
         >
          <h3 className='vertical-timeline-element-title'>
            Ducat IT training School,Gurugram (Haryana)
            The Front-End infrastructure for 3 Project
          </h3>
          <p>Java Full Stack Web Developer</p>
         </VerticalTimelineElement>
   
      </VerticalTimeline>
    </div>
  )
}
