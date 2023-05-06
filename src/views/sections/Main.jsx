import { IoMdBrowsers, IoIosArrowRoundForward, IoIosHelpBuoy, IoIosText } from 'react-icons/io'
import { SiLevelsdotfyi } from 'react-icons/si'

const Main = () => {
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
                                <img src="https://www.coomeva.com.co/en_equidad/publicaciones/171816/el-violentometro/info/coomeva/media/galeria195560.jpg" alt="metricImage" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="card rounded">
                                <img src="https://www.coomeva.com.co/en_equidad/publicaciones/171816/el-violentometro/info/coomeva/media/galeria195561.jpg" alt="metricImage" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="card rounded">
                                <img src="https://www.coomeva.com.co/en_equidad/publicaciones/171816/el-violentometro/info/coomeva/media/galeria195562.jpg" alt="metricImage" className="img-fluid" />
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

            <section id="call-to-action" className="call-to-action">
                <div className="container" data-aos="zoom-out">

                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h3>Call To Action</h3>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a className="cta-btn" href="#">Call To Action</a>
                        </div>
                    </div>

                </div>
            </section>

            {/* <section id="features" className="features">
                <div className="container">

                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">

                        <div className="col-md-5">
                            <img src="assets/img/features-1.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-7">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i className="bi bi-check"></i> Ullam est qui quos consequatur eos accusamus.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                        <div className="col-md-5 order-1 order-md-2">
                            <img src="assets/img/features-2.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-7 order-2 order-md-1">
                            <h3>Corporis temporibus maiores provident</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>

                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                        <div className="col-md-5">
                            <img src="assets/img/features-3.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-7">
                            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                            <ul>
                                <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i className="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
                        <div className="col-md-5 order-1 order-md-2">
                            <img src="assets/img/features-4.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-7 order-2 order-md-1">
                            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>

                </div>
            </section> */}

            <section id="pricing" className="pricing pt-0">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <span>Pricing</span>
                        <h2>Pricing</h2>

                    </div>

                    <div className="row gy-4">

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="pricing-item">
                                <h3>Free Plan</h3>
                                <h4><sup>$</sup>0<span> / month</span></h4>
                                <ul>
                                    <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                                    <li className="na"><i className="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
                                    <li className="na"><i className="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                                </ul>
                                <a href="#" className="buy-btn">Buy Now</a>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="pricing-item featured">
                                <h3>Business Plan</h3>
                                <h4><sup>$</sup>29<span> / month</span></h4>
                                <ul>
                                    <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                                    <li><i className="bi bi-check"></i> Pharetra massa massa ultricies</li>
                                    <li><i className="bi bi-check"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="buy-btn">Buy Now</a>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="pricing-item">
                                <h3>Developer Plan</h3>
                                <h4><sup>$</sup>49<span> / month</span></h4>
                                <ul>
                                    <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                                    <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                                    <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                                    <li><i className="bi bi-check"></i> Pharetra massa massa ultricies</li>
                                    <li><i className="bi bi-check"></i> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="buy-btn">Buy Now</a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section id="faq" className="faq">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <span>Frequently Asked Questions</span>
                        <h2>Frequently Asked Questions</h2>

                    </div>

                    <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-lg-10">

                            <div className="accordion accordion-flush" id="faqlist">

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                            <i className="bi bi-question-circle question-icon"></i>
                                            Non consectetur a erat nam at lectus urna duis?
                                        </button>
                                    </h3>
                                    <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                            <i className="bi bi-question-circle question-icon"></i>
                                            Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                                        </button>
                                    </h3>
                                    <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                            <i className="bi bi-question-circle question-icon"></i>
                                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                                        </button>
                                    </h3>
                                    <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                        <div className="accordion-body">
                                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
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
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}

export default Main