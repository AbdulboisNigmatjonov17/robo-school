import React from 'react'
import Header from './components/Header';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import PaketCards from './components/PaketCards';
import Footer from './components/Footer';
import Form from "./components/Form"
import CarouselPart from './components/CarouselPart';

const Home = () => {
    return (
        <>
            <Header />
            <div className="Container">
                <FirstSection />
            </div>
            <SecondSection />
            <div className="Container MainPart">
                <h2>Профессиональные тренеры</h2>
                <CarouselPart/>
                <h2>Выберите нужный пакет</h2>
                <PaketCards />
            </div>
                <Form/>
            <Footer />
        </>
    )
}

export default Home
