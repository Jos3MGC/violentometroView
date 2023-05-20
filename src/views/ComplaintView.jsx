import React from 'react'
// COMPONENTS
import Header from './sections/Header'
import Footer from './sections/Footer'
import Modal from './sections/Modal'
// TOOLS
import $ from 'jquery'
// ICONS
import { MdOutlinePermMedia } from 'react-icons/md'
import { IoDocumentTextOutline, IoInformationCircleSharp } from 'react-icons/io5'
import { ImUsers } from 'react-icons/im'

const ComplaintView = () => {
    return (
        <div>
            <Header />
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row gy-4 d-flex justify-content-between">
                        <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center">
                            <div className="card bg-transparent border-0">
                                <div className="card-header text-alignJustify border-1 border-light text-center">
                                    <h3 className="fw-bold fs-2">
                                        Formulario de denuncia de violencia digital o física
                                    </h3>
                                </div>
                                <div className="card-body text-alignJustify">
                                    Esta plataforma tiene como objetivo constituir un mecanismo ágil y moderno mediante el cual la ciudadanía pueda presentar denuncias por violencia cometidas dentro de instituciones públicas y/o privadas como en medios digitales.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 order-1 order-lg-2 d-flex flex-column justify-content-center align-items-center" >
                            <img className="img-fluid rounded" style={{ "height": "350px" }} src="https://www.infoem.org.mx/sites/default/files/infografia_SUFRES%20VIOLENCIA%20DIGITAL%20CUANDO%20BIEN.png" alt="infografia" />
                        </div>
                    </div>
                </div>
            </section>
            <main id="main">

                <section id="typesViolence" className="services mt-5 pt-0">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <span>Tipos de prueba que reforzarán tu denuncia:</span>
                            <h2>Tipos de prueba que reforzarán tu denuncia:</h2>
                        </div>
                        <div className="row gy-4">
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="card rounded text-center complaintCard1 shadow-lg d-flex justify-content-center align-items-center">
                                    <MdOutlinePermMedia className="mb-3" size={60} color='white' />
                                    <div className="text-light fw-bold fs-4">
                                        Fotografías, audio o video
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div className="card rounded text-center complaintCard2 shadow-lg d-flex justify-content-center align-items-center">
                                    <IoDocumentTextOutline className="mb-3" size={60} color='white' />
                                    <div className="text-light fw-bold fs-4">
                                        Documentación en papel
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="600">
                                <div className="card rounded text-center complaintCard1 shadow-lg d-flex justify-content-center align-items-center">
                                    <ImUsers className="mb-3" size={60} color='white' />
                                    <div className="text-light fw-bold fs-4">
                                        Declaración de Testigos
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="600">
                                <div className="card p-4 rounded text-center complaintCard2 shadow-lg d-flex justify-content-center align-items-center">
                                    <IoInformationCircleSharp className="mb-3" size={60} color='white' />
                                    <div className="text-light fw-bold fs-4">
                                        Información detallada
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 d-flex justify-content-center align-items-center">
                            <button onClick={() => {$("#modalHelp").show()}} className="complaintButton btn-lg py-3">Iniciar denuncia</button>
                        </div>
                    </div>
                </section>

                <section id="faq" className="faq">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <span>Preguntas Frecuentes</span>
                            <h2>Preguntas Frecuentes</h2>

                        </div>

                        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <div className="col-lg-10">

                                <div className="accordion accordion-flush" id="faqlist">

                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                                <i className="bi bi-question-circle question-icon"></i>
                                                ¿Cómo manejamos la información?
                                            </button>
                                        </h3>
                                        <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div className="accordion-body">
                                                Mantemos tus datos resguardados, solamente nos contactaremos contigo. Tu seguridad es primero.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                                <i className="bi bi-question-circle question-icon"></i>
                                                ¿Cuál es el proposito final del modelo?
                                            </button>
                                        </h3>
                                        <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div className="accordion-body">
                                                El modelo de reconocimiento de la violencia tiene como objetivo principal ayudar a mantener un entorno en línea más seguro y proteger a los usuarios de posibles situaciones de violencia o abuso. Al identificar y etiquetar contenido violento, las plataformas en línea, los equipos de moderación y los usuarios pueden tomar medidas adecuadas, como eliminar el contenido, bloquear a los usuarios o reportar situaciones a las autoridades correspondientes, según sea necesario.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                                <i className="bi bi-question-circle question-icon"></i>
                                                ¿Qué es el correo de confirmación?
                                            </button>
                                        </h3>
                                        <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div className="accordion-body">
                                                Se te envía a tu correo para verificar tu correo y poder seguir en una línea de contacto directa contigo.
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
            <Modal />
        </div>
    )
}

export default ComplaintView