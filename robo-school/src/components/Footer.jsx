import React from 'react'
import Logo from '../assets/Logo.svg'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <>
    <div className='Footer'>
        <div className="BigContainer">
          <div className='leftSide'>
            <img src={Logo} alt="LogoImg" width={250} />
            <span>© ROBO.SCHOOL</span>
          </div>
          <div className="rightSide">
            <h2>+7 800 000 11 22</h2>
          </div>
        </div>
    </div>
    </>
  )
}

export default Footer
