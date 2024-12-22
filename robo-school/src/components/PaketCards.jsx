import React from 'react'
import PaketCardData from "../data/PaketCardsData";
import Button from './Button';
import "../styles/PaketCards.css";
const PaketCards = () => {
  return (
    <>   
    <div className="PaketCards">
        {PaketCardData.map((item)=>{
            return(
                <div key={item.id} className="PaketCard">
                    <h3>{item.title}</h3>
                    <h2>{item.price} ₽</h2>
                    <p>{item.text}</p>
                    <Button text='Оставить заявку'/>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default PaketCards
