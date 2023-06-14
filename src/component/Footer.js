import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import "../Style/footer.css"
export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram/>
            <Twitter/>
            <Facebook/>
            <LinkedIn/>
        </div>
        <p>&copy: 2023 pedrotech.com</p>
    </div>
  )
}
