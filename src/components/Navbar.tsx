
import React, { useState } from "react";
import styles from "../styles.module.css";
import { Link } from "react-scroll";

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className={` ${styles.nav} animate__animated  animate__fadeInDown`}
            aria-label="Barra de navegacion principal"
        >
            <div className={`container ${styles.nav__content}`}>
                <Link
                    tabIndex={0}
                    href="#"
                    role="link"
                    activeClass={styles.active}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={styles.nav__logo}
                    title="Clic para ir a Home"
                    aria-label="Clic para ir a Home"
                    onClick={() => {
                        if (window.innerWidth < 992 && isOpen) {
                            toggleMenu();
                        }
                    }}
                >
                    <img
                        width={147}
                        height={30}
                        src="svg/logo.svg"
                        alt="logo"
                        className={styles.nav__logo}
                    />
                </Link>

                <div
                    className={`${styles.nav__links} ${isOpen ? styles.mobile__menu : ""
                        }`}
                >
                    <Link
                        tabIndex={0}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={styles.nav__link}
                        title="click to go home"
                        aria-label="click to go home"
                        onClick={() => {
                            if (window.innerWidth < 992) {
                                toggleMenu();
                            }
                        }}
                    >
                        Inicio
                    </Link>
                    <Link
                        tabIndex={0}
                        to="nosotros"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={styles.nav__link}
                        title="click to go home"
                        aria-label="click to go home"
                        onClick={() => {
                            if (window.innerWidth < 992) {
                                toggleMenu();
                            }
                        }}
                    >
                       Nosotros
                    </Link>
                    <Link
                        tabIndex={0}
                        to="precios"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={styles.nav__link}
                        title="click to go home"
                        aria-label="click to go home"
                        onClick={() => {
                            if (window.innerWidth < 992) {
                                toggleMenu();
                            }
                        }}
                    >
                        Precios
                    </Link>
                    <Link
                        tabIndex={0}
                        to="testimonios"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={styles.nav__link}
                        title="click to go home"
                        aria-label="click to go home"
                        onClick={() => {
                            if (window.innerWidth < 992) {
                                toggleMenu();
                            }
                        }}
                    >
                        Testimonios
                    </Link>
                    
                    <Link
                        tabIndex={0}
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={`${styles.nav__link_demo} `}
                        title="click to go home"
                        aria-label="click to go home"
                        onClick={() => {
                            if (window.innerWidth < 992) {
                                toggleMenu();
                            }
                        }}
                    >
                        Contacto
                    </Link>

                </div>

                <button
                    className="iconburger"
                    onClick={toggleMenu}
                    aria-label="Abrir/Cerrar Menú"
                >
                    {isOpen ? (
                        <img width={15} height={15} src="svg/closed.svg" alt="Menú cerrado" />
                    ) : (
                        <img width={25} height={17} src="svg/menu.svg" alt="Menú abierto" />
                    )}
                </button>
            </div>
        </nav>
    );
};
