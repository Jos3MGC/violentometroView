import { useEffect } from 'react'
// TOOLS
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate()

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

    function handleClick(id) {
        console.log(id);
        const element = document.getElementById(id);
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
                    <h1 onClick={() => navigate('/inicio')}>Violentómetro</h1>
                </a>
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a href="/inicio" className="active pointer" onClick={handleScrollUp}>Inicio</a></li>
                        <li><a href="javascript:void(0)" onClick={() => handleClick("about")}>Acerca</a></li>
                        <li><a href="javascript:void(0)" onClick={() => handleClick("typesViolence")}>Tipos de Violencia</a></li>
                        <li><a className="get-a-quote" href="/denuncia-ciudadana">Denuncia</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header