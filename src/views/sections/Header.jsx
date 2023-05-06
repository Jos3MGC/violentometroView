import React, { useEffect } from 'react'

const Header = () => {

    useEffect(() => {
        const selectHeader = document.querySelector('#header');
        if (selectHeader) {
            document.addEventListener('scroll', () => {
                window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
            });
        }
    }, [])

    const handleScrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function handleClick(event) {
        event.preventDefault();
        const element = document.getElementById("about");
        const offset = element.offsetTop;
        window.scrollTo({
            top: offset,
            behavior: "smooth"
        });
    }   

    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center">
                    <img className='rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4N0rRvPzRcoHRDlMYZuN7KgmZ-pqqSEHOaSqcrIkw6Zg2ycmquHWm3C7G0vqr3KKGDA&usqp=CAU" alt="unamLogo" />
                    <img className='rounded-circle ms-2 me-2' src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/xzvgo512x2kmc0ciadrz" alt="ipnLogo" />
                    <h1>Violentometro</h1>
                </a>
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><span className="active pointer" onClick={handleScrollUp}>Inicio</span></li>
                        <li><a href="javascript:void(0)" onClick={handleClick} className="pointer">Acerca</a></li>
                        {/* <li><a href="services.html">Services</a></li>
                        <li><a href="pricing.html">Pricing</a></li> */}
                        <li className="dropdown"><a href="#"><span>Tipos de violencia</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contacto</a></li>
                        <li><a className="get-a-quote" href="get-a-quote.html">Ayuda</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header