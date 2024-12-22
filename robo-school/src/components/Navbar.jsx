import React from 'react'
import Logo from '../assets/Logo.svg'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav>
        <img src={Logo} alt="NavImg" width={250}/>
        <ul>
          <li><a href="/home">О школе</a></li>
          <li><a href="/Тренеры">Тренеры</a></li>
          <li><a href="/Стоимость">Стоимость</a></li>
        </ul>
        <div className="callNumber">
          <h3>+7 800 000 11 22</h3>
        </div>
      </nav>
    </>
  )
}

export default Navbar
