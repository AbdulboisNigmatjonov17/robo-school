import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/Header.css"
import Button from "./Button"
import headerImg from "../assets/header_Image.svg"
const Header = () => {
    return (
        <div className='header'>
            <div className="BigContainer">
                <Navbar />
            </div>
            <div className="Container">
                {/* <div className="headerContent"> */}
                    <div className="contentPart">
                        <h2>ROBO SCHOOL</h2>
                        <p>Курсы повышения квалификации по робототехнике для педагогов начальной школы</p>
                        <Button  text='Записаться на курс'/>
                    </div>
                    <div className="imgPart">
                        <img src={headerImg} alt="headerImg" width={700} />
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Header;