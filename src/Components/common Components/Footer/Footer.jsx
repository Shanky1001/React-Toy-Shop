import { Mail, Phone } from '@mui/icons-material'
import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.contact}>
        <h1>Contact Us</h1>
        <h5> <Phone /> 8896531228 </h5>
        <h6> <Mail /> shashankrai2022jun@cedcoss.com </h6>
      </div>
      <div className={style.copyright}>
        <h1> &copy; Shashank Rai</h1>
      </div>
    </div>
  )
}

export default Footer