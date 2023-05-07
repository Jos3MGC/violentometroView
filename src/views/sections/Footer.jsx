import React from 'react'

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-6 col-md-12 footer-info">
                        <a href="index.html" className="logo d-flex align-items-center">
                            <span>Violentometro</span>
                        </a>
                        <p className="text-alignJustify">
                            "La violencia no es solo matar a otro. Hay violencia cuando usamos una palabra denigrante, cuando hacemos gestos para despreciar a otra persona, cuando obedecemos porque hay miedo.
                            La violencia es mucho más sutil, mucho más profunda."
                            <br /><br />
                            -Jiddu Krishnamurti
                        </p>
                        <div className="row">
                            <div className="col-6">
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="social-links d-flex">
                                        <a href="https://www.ipn.mx/genero/materiales/cero-tolerancia.html" target='_blank' className="twitter">
                                            <img className='rounded-circle ms-2 me-2' width={"95%"} src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/xzvgo512x2kmc0ciadrz" alt="ipnLogo" />
                                        </a>
                                        <a href="https://coordinaciongenero.unam.mx/2023/01/protocolo-para-atencion-integral-de-casos-de-violencia-por-razones-de-genero-version-actualizada/" target='_blank' className="facebook">
                                            <img className='rounded-circle' width={"95%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4N0rRvPzRcoHRDlMYZuN7KgmZ-pqqSEHOaSqcrIkw6Zg2ycmquHWm3C7G0vqr3KKGDA&usqp=CAU" alt="unamLogo" />
                                        </a>
                                    </div>
                                    <div id='fesLogo' className="bg-light rounded pointer">
                                        <img className='rounded' width={"97%"} src="https://ceted.acatlan.unam.mx/recorrido/iconos/logo_fes.png" alt="unamLogo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                   

                    <div className="col-lg-6 col-md-12 footer-contact text-center text-md-end">
                        <h4>Contactanos</h4>
                        <p>
                            A108 Adam Street <br />
                            New York, NY 535022<br />
                            United States <br /><br />
                            <strong>Phone:</strong> +1 5589 55488 55<br />
                            <strong>Email:</strong> info@example.com<br />
                        </p>

                    </div>

                </div>
            </div>
            <div className="container mt-4">
                <div className="copyright">
                    &copy; Copyright <strong><span>STELLAS</span></strong>. Todos los derechos reservados.
                </div>
                <div className="credits">
                    Diseñado por <a href="https://bootstrapmade.com/">STELLAS</a>
                </div>
            </div>
        </div>
    )
}

export default Footer