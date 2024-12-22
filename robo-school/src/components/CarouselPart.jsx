import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../styles/Carousel.css"
import CarouselData from '../data/CarouselData'
import Modal from "./Modal";
import { useState } from 'react';


const CarouselPart = () => {

const [isModalOpen, setIsModalOpen] = useState(false);
const [modalContent, setModalContent] = useState({});

const openModal = (item) => {
  setModalContent(item);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1
      }
    };


  return (
    <>
        <Carousel className='Carousel'
            swipeable={false}
            responsive={responsive}
            infinite={true}
        >
            {
            CarouselData.map((item)=>{
                return(
                    <div key={item.id} className="carouselCard">
                        <img src={item.img} alt="carouselCardImg" height={500} width={350}/>
                        <h3>{item.name}</h3>
                        <span>{item.about}</span>
                        <button onClick={() => openModal(item)}>Подробнее</button>
                    </div>
                )
            })
          }
        </Carousel>
        {isModalOpen && (
            <Modal closeModal={closeModal} content={modalContent} />
          )}
    </>
    
  );
}

export default CarouselPart;
