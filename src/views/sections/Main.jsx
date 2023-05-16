import { useEffect, useState } from 'react'
// ALERT
import Swal from 'sweetalert2'
// ICONS
import { IoMdBrowsers, IoIosArrowRoundForward, IoIosHelpBuoy, IoIosText } from 'react-icons/io'
import { SiLevelsdotfyi } from 'react-icons/si'

const Main = () => {

    const [dataMessage, setDataMessage] = useState('')
    const [dataMessageInput, setDataMessageInput] = useState('')
    const [responseValue, setResponseValue] = useState(80)
    const [disableBttn, setDisableBttn] = useState(true)
    const [progressClass, setProgressClass] = useState('progress-bar bg-success')
    const [textProgressClassLow, setTextProgressClassLow] = useState('fs-4 fst-italic text-success')
    const [textProgressClassMid, setTextProgressClassMid] = useState('fs-4 fst-italic text-warning')
    const [textProgressClassDanger, setTextProgressClassDanger] = useState('fs-4 fst-italic text-success')

    useEffect(() => {
        if (responseValue <= 33.33) {
            setProgressClass('progress-bar bg-success')
            setTextProgressClassLow('fs-2 fw-bold fst-italic text-success')
            setTextProgressClassMid('fs-4 fw-normal fst-italic text-warning')
            setTextProgressClassDanger('fs-4 fw-normal fst-italic text-danger')
        } else if (responseValue < 66.66) {
            setProgressClass('progress-bar bg-warning')
            setTextProgressClassMid('fs-2 fw-bold fst-italic text-warning')
            setTextProgressClassLow('fs-4 fw-normal fst-italic text-success')
            setTextProgressClassDanger('fs-4 fw-normal fst-italic text-danger')
        } else if (responseValue >= 66.66) {
            setProgressClass('progress-bar bg-danger')
            setTextProgressClassDanger('fs-2 fw-bold fst-italic text-danger')
            setTextProgressClassLow('fs-4 fw-normal fst-italic text-success')
            setTextProgressClassMid('fs-4 fw-normal fst-italic text-warning')
        }
    }, [responseValue])

    const handleMessage = (icon, title, message) => {
        Swal.fire({
            icon: `${icon}`,
            title: `${title}`,
            text: `${message}`,
        })
    }

    const handleOnChange = e => {
        switch (e.target.name) {
            case 'dataMessage':
                setDataMessage(e.target.value)
                if (e.target.value.trim().length > 0) {
                    setDisableBttn(false)
                } else {
                    setDisableBttn(true)
                }
                break;
            case 'dataMessageInput':
                setDataMessageInput(e.target.value)
                break;
        }
    }

    const handleOnSubmit = () => {
        if (dataMessage.trim().length !== 0 && dataMessage.trim().length < 10) {
            handleMessage('error', 'Upss', 'Por favor envía un mensaje más largo de 10 palabras, será más preciso el resultado.')
            return
        }
        responseModel()
    }

    const responseModel = () => {
        Swal.fire({
            title: 'Atención',
            text: "Tus datos serán enviados",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Enviar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                handleMessage('success', '¡Exito!', 'Gracias por subir tu conversación')
            }
        })
    }

    return (
        <main id="main">
            <section id="featured-services" className="featured-services">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
                            <div className="icon flex-shrink-0"><IoMdBrowsers size={25} /></div>
                            <div>
                                <h4 className="title">Violentometro (Página Oficial)</h4>
                                <p className="description text-alignJustify">La UPGPG ha diseñado​ el Violentómetro, un material gráfico y didáctico en forma de regla que consiste en visualizar las diferentes manifestaciones de violencia que se encuentran ocultas en la vida cotidiana y que muchas veces se confunden o desconocen.</p>
                                <a href="https://www.ipn.mx/genero/materiales/violentometro.html" target='_blank' className="readmore stretched-link"><span>Ver más..</span><IoIosArrowRoundForward size={20} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon flex-shrink-0"><IoMdBrowsers size={25} /></div>
                            <div>
                                <h4 className="title">Portal Vida Sin Violencia</h4>
                                <p className="description text-alignJustify">El Instituto Nacional de las Mujeres, te da la cordial bienvenida a este espacio para que conozcas el trabajo que realizan las Comisiones del Sistema Nacional de Prevención, Atención, Sanción y Erradicación de la Violencia contra las Mujeres.</p>
                                <a href="http://vidasinviolencia.inmujeres.gob.mx" target='_blank' className="readmore stretched-link"><span>Ver más..</span><IoIosArrowRoundForward size={20} /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon flex-shrink-0"><IoMdBrowsers size={25} /></div>
                            <div>
                                <h4 className="title">¿Cómo te protege la UNAM frente a la violencia de género?</h4>
                                <p className="description">En esta página encontraras videos, infografías, carteles y casos de violencia. De esta forma todos seremos capaces de reconocer la violencia.</p>
                                <a href="https://www.dgae.unam.mx/violencia_genero/index.html" target='_blank' className="readmore stretched-link"><span>Ver más..</span><IoIosArrowRoundForward size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="about pt-0">
                <div className="container" data-aos="fade-up">

                    <div className="row gy-4">
                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <div>
                                <iframe width="560" height="330" src="https://www.youtube.com/embed/4IjgSVdfZ1Q" title="YouTube video player" className="rounded"
                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 content order-last  order-lg-first">
                            <h3>Acerca del Violentometro</h3>
                            <p className="text-alignJustify">
                                Es un modelo que utiliza la base del Violentometro del IPN, el cual consiste en visualizar las diferentes manifestaciones de violencia que se encuentran ocultas en la vida cotidiana.
                                <br />
                                <br />
                                En este caso usaremos mensajes que se envien por la aplicación Whattsapp y el cual tiene como fin lo siguiente:
                            </p>
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="100">
                                    <IoIosText className='me-1' size={22} />
                                    <div>
                                        <h5>Interpretar los datos</h5>
                                        <p>Una vez que subas la conversación el <strong>modelo mostrara</strong> si hay violencia en tu texto o no.</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="200">
                                    <IoIosHelpBuoy className='me-1' size={22} />
                                    <div>
                                        <h5>Ayudarte</h5>
                                        <p>En caso de encontrar violencia <strong>alertarte</strong> sobre la misma y comunicarte con una persona especializada.</p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay="300">
                                    <SiLevelsdotfyi className='me-1' />
                                    <div>
                                        <h5>Niveles de violencia</h5>
                                        <p>Visualizaras el nivel de violencia en que se encuentra tu conversación.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <section id="typesViolence" className="services pt-0">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <span>Tipos de violencia</span>
                        <h2>Tipos de violencia</h2>
                        <img width={"55%"} src="https://www.coomeva.com.co/en_equidad/publicaciones/171816/el-violentometro/info/coomeva/media/galeria195592.png" alt="metricas" />
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="card rounded">
                                <img src="https://www.coomeva.com.co/en_equidad/publicaciones/171816/el-violentometro/info/coomeva/media/galeria195560.jpg" alt="metricImage" className="img-fluid rounded" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="card rounded">
                                <img src="https://www.coomeva.com.co/en_equidad/publicaciones/171816/el-violentometro/info/coomeva/media/galeria195561.jpg" alt="metricImage" className="img-fluid rounded" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="card rounded">
                                <img src="https://www.coomeva.com.co/en_equidad/publicaciones/171816/el-violentometro/info/coomeva/media/galeria195562.jpg" alt="metricImage" className="img-fluid rounded" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="card rounded text-center firstCard">
                                <h3 className="mt-2"><a href="javascript:void(0)" className="stretched-link text-dark">PUEDES CONTROLARLO</a></h3>
                                <p className="text-alignJustify text-light fw-bold">Si eres la víctima o el agresor, las conductas en amarillo están bajo tu control.  Debes poner límites, fortalecer tu autoconfianza, amor propio y autocuidado, y si eres el agresor, debes comprender tus impulsos y aprender a canalizarlos.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div className="card rounded text-center secondCard">
                                <h3 className="mt-2"><a href="javascript:void(0)" className="stretched-link text-dark">DELITO MORAL Y SOCIAL</a></h3>
                                <p className="text-alignJustify text-light fw-bold">Todo lo que está en naranja son acciones que te dañan dentro de tu círculo social. La gente puede que lo vea como algo no correcto, pero talvez no te defienda. En ese nivel o soportas (que no es deseable) o denuncias frente a un superior, director, padres, etc.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="card rounded text-center thirdCard">
                                <h3 className="mt-2"><a href="javascript:void(0)" className="stretched-link text-dark">DELITO PENAL</a></h3>
                                <p className="text-alignJustify text-light fw-bold">Si denuncias estas conductas deberá haber una consecuencia jurídica para el agresor y tú, como víctima, debes ser acompañada y restituida en tus derechos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="pricing pt-0">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <span>Ingresa tu conversación</span>
                        <h2>Ingresa tu conversación</h2>
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                            <div className="card border-0 d-flex justify-content-start p-4">
                                <div className="progress" style={{ "height": "25px" }}>
                                    <div className={progressClass} role="progressbar" aria-label="Example with label" style={{ "width": `${responseValue}%` }} aria-valuemin="0" aria-valuemax="100">{responseValue}%</div>
                                </div>
                                {/* <div className="verticalText mt-3">
                                    hola
                                </div> */}
                                <div className="row mt-3">
                                    <div className="col-4 text-center">
                                        <div className="border-end">
                                            <span className={textProgressClassLow}>Violencia Baja</span>
                                        </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="border-end">
                                            <span className={textProgressClassMid}>Violencia Media</span>
                                        </div>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div>
                                            <span className={textProgressClassDanger}>Violencia Alta</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                            <div className="pricing-item2 featured">
                                <div className="card borderStyleDashed p-3 mb-3">
                                    <input
                                        className="form-control"
                                        type="file"
                                        id="dataMessageInput"
                                        name='dataMessageInput'
                                        value={dataMessageInput}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <p className="fs-4 fst-italic">O</p>
                                <textarea
                                    className="form-control"
                                    name="dataMessage"
                                    id="dataMessage"
                                    value={dataMessage}
                                    onChange={handleOnChange}
                                    cols="30" rows="10">
                                </textarea>
                                <button className="buy-btn mt-3" onClick={handleOnSubmit} disabled={disableBttn}>Enviar</button>
                            </div>
                        </div>
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

                                {/* <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                            <i className="bi bi-question-circle question-icon"></i>
                                            Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                                        </button>
                                    </h3>
                                    <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            <i className="bi bi-question-circle question-icon"></i>
                                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                                            <i className="bi bi-question-circle question-icon"></i>
                                            Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                                        </button>
                                    </h3>
                                    <div id="faq-content-5" className="a    cordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                                        </div>
                                    </div>
                                </div> */}

                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default Main