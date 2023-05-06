import React from 'react'
// COMPONENTS
import Header from './sections/Header'
import Hero from './sections/Hero'
import Main from './sections/Main'
import Footer from './sections/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Main />
            <Footer />
            <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </div>
    )
}

export default Home