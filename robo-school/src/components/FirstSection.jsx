import React from 'react'
import  firstSectionData  from '../data/first-section'
import "../styles/FirstSection.css"

const FirstSection = () => {
    return (
        <section className='firstSectionContent'>
           <div className="firstSectionContentPart">
            <p><span>Robo Schools</span> – учреждение для формирования кадрового педагогического резерва в сфере робототехникии программирования</p>
           </div>
            <div className="firstSectionCards">
                {firstSectionData.map((item) => {
                    return (
                        <div className='firstSectionCard' key={item.id}>
                            <h2>{item.num}</h2>
                            <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default FirstSection
