import React from 'react'
// COMPONENTS
import Header from './sections/header'
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
            <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
        </div>
    )
}

export default Home