import React from 'react'
import "../styles/SecondSection.css"
import secondSectionData from "../data/second-section"

const SecondSection = () => {
    return (
        <section className='secondSection'>
            <div className="Container">
                <h2>Что вы получите после курса</h2>
                <div className="secondSectionCards">
                    {
                        secondSectionData.map((item) => {
                            return (
                                <div key={item.id} className="secondSectionCard">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default SecondSection
