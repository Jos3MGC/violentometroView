import { useState } from 'react';
// COMPONENTS
import TypeWriter from '../../js/TypeWriter';
// TOOLS
import CountUp from 'react-countup';
// IMAGES
import image1 from '../../assets/hero-img.svg'

const typeWriter = [
    "Te estuve marcando, ¿con quién estabas hablando?",
    "¿Ya no me amas o por qué no quieres tener sexo conmigo?",
    "Hay carreras para hombres y carreras para mujeres",
    "A las mujeres no hay que entenderlas, hay que quererlas",
];

const Hero = () => {

    const [showNumberViolence, setShowNumberViolence] = useState(false)

    return (
        <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
                <div className="row gy-4 d-flex justify-content-between">
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <div className="containerTypeWrite">
                            <div className="typewriter-holder">
                                <h1>
                                    <TypeWriter data={typeWriter} />
                                </h1>
                            </div>
                        </div>
                        <form className="form-search d-flex align-items-stretch mb-3">
                            <input
                                type="text"
                                className="form-control fw-bold"
                                defaultValue={'Victimas de violencia digital'}
                            />
                            <span className="btn btn-primary" onClick={() => setShowNumberViolence(true)}>Search</span>
                        </form>
                        {
                            showNumberViolence === true && (
                                <div className="row gy-5">
                                    <div className="col-lg-4 col-4">
                                        <div className="stats-item text-center w-100 h-100">
                                            <div>
                                                <CountUp end={17} suffix='Millones' duration={10} />
                                            </div>
                                            <p>Personas en total</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-4">
                                        <div className="stats-item text-center w-100 h-100">
                                            <div>
                                                <CountUp end={9} suffix='Millones' duration={10} />
                                            </div>
                                            <p>Mujeres</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-4">
                                        <div className="stats-item text-center w-100 h-100">
                                            <div>
                                                <CountUp end={8} suffix='Millones' duration={10} />
                                            </div>
                                            <p>Hombres</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-lg-5 order-1 order-lg-2 hero-img">
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner rounded-circle">
                                <div className="carousel-item active" data-bs-interval="4000">
                                    <img src="https://img.freepik.com/vector-gratis/tema-ilustracion-acoso-cibernetico_23-2148600811.jpg?w=2000" className="d-block w-100" alt="heroImage"/>
                                </div>
                                <div className="carousel-item" data-bs-interval="4000">
                                    <img src="https://img.freepik.com/vector-gratis/interfaz-telefono-movil-ciberacoso_23-2148589181.jpg?w=2000" className="d-block w-100" alt="heroImage"/>
                                </div>
                                <div className="carousel-item" data-bs-interval="4000">
                                    <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-acoso-cibernetico_114360-9816.jpg" className="d-block w-100" alt="heroImage"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero