import styles from "../styles.module.css";
import { useState } from "react";

export const Navbar = () => {
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
                <a
                    tabIndex={0}
                    href="#"
                    role="link"
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
                </a>

                <div
                    className={`${styles.nav__links} ${isOpen ? styles.mobile__menu : ""
                        }`}
                >
                    

                    <a
                        tabIndex={0}
                        href="#"
                        role="link"
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
                    </a>
                    <a
                        tabIndex={0}
                        href="#"
                        role="link"
                        // to="about"
                        className={styles.nav__link}
                        title="click to go Build Your Team"
                        aria-label="click to go Build Your Team"
                        onClick={() => {
                            if (window.innerWidth < 992) {
                                toggleMenu();
                            }
                        }}
                    >
                        Nosotros
                    </a>

                    <a
                        tabIndex={0}
                        href="#"
                        role="link"
                        // to="services"
                        className={styles.nav__link}
                        title="click to go Get Hired"
                        aria-label="click to go Get Hired"
                        onClick={() => {
                            if (window.innerWidth < 992) {
                                toggleMenu();
                            }
                        }}
                    >
                        Precios
                    </a>
                    <a
                        tabIndex={0}
                        href="#"
                        role="link"
                        // to="services"
                        className={styles.nav__link}
                        title="click to go Get Hired"
                        aria-label="click to go Get Hired"
                        onClick={() => {
                            if (window.innerWidth < 992) {
                                toggleMenu();
                            }
                        }}
                    >
                        Blog
                    </a>

                    <a
                        tabIndex={0}
                        href="#"
                        role="link"
                        // to="contact"
                        className={`${styles.nav__link_demo} `}
                        title="click to go Book a Demo"
                        aria-label="click to go Book a Demo"
                        onClick={() => {
                            if (window.innerWidth < 992) {
                                toggleMenu();
                            }
                        }}
                    >
                        Contacto
                    </a>

                    {/* <a
                        tabIndex={0}
                        href="#"
                        role="link"
                        // to="contact"
                        className={`${styles.nav__contact_mobile} `}
                        aria-label="Clic para ir a Contacto"
                        onClick={() => {
                            if (window.innerWidth < 992) {
                                toggleMenu();
                            }
                        }}
                    >
                        Contacto
                    </a> */}
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
