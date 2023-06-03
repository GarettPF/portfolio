import { useState } from 'react';
import { HiHome } from 'react-icons/hi';
import { FaUser, FaCode, FaEnvelope } from 'react-icons/fa';
import '../styles/styles.css';

function Navbar() {
    const [hamburger, setHamburger] = useState(false);

    const hamburgerMenu = () => {
        setHamburger(!hamburger);
    };

    const pageUp = () => {
        window.scrollTo({ top: (0, 0), behavior: 'smooth'});
    };

    return (
        <>
            <nav>
                <h3 onClick={pageUp} className="logo">
                Garett Pascual-Folster
                </h3>

                <ul>
                <li>
                    <a href="#home"><HiHome/> Home</a>
                </li>

                <li>
                    <a href="#about"><FaUser/> About</a>
                </li>

                <li>
                    <a href="#projects"><FaCode/> Projects</a>
                </li>

                <li>
                    <a href="#contact"><FaEnvelope/> Contact</a>
                </li>

                <li onClick={() => hamburgerMenu()}>
                    <i className="fa-solid fa-bars-staggered mobile-menu"></i>
                </li>
                </ul>
            </nav>

            {/* mobile nav */}
            <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
                <span onClick={() => hamburgerMenu()}>
                <i className="fa-solid fa-xmark"></i>
                </span>

                <ul>
                <li onClick={() => hamburgerMenu()}>
                    <a href="#home">Home</a>
                </li>

                <li onClick={() => hamburgerMenu()}>
                    <a href="#about">About</a>
                </li>

                <li onClick={() => hamburgerMenu()}>
                    <a href="#projects">Projects</a>
                </li>

                <li onClick={() => hamburgerMenu()}>
                    <a href="#contact">Contact</a>
                </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;