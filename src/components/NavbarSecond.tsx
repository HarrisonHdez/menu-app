import React, { useState } from "react";
import styles from "../styles.module.css";
import { NavLink } from "react-router-dom";

export const NavbarSecond: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            className={` ${styles.nav} animate__animated  animate__fadeInDown`}
            aria-label="Barra de navegacion principal"
            data-aos="fade-down">
            <div className={`container ${styles.nav__content}`}>
                <NavLink
                    tabIndex={0}
                    role="link"
                    to={"/"}
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
                </NavLink>

                <div
                    className={`${styles.nav__links} ${isOpen ? styles.mobile__menu : ""
                        }`}
                >
                    <NavLink
                        tabIndex={0}
                        to={"#"}
                        className={styles.nav__link}
                        title="click to go home"
                        aria-label="click to go home"
                        onClick={() => {
                            if (window.innerWidth < 992) {
                                toggleMenu();
                            }
                        }}
                    >
                        Tips
                    </NavLink>

                    <NavLink
                        tabIndex={0}
                        to={"#"}
                        className={`${styles.nav__link_contact} `}
                        title="click to go home"
                        aria-label="click to go home"
                        onClick={() => {
                            if (window.innerWidth < 992) {
                                toggleMenu();
                            }
                        }}
                    >
                        Contacto
                    </NavLink>
                </div>

                <button
                    className="iconburger"
                    onClick={toggleMenu}
                    aria-label="Abrir/Cerrar Menú"
                >
                    {isOpen ? (
                        <img
                            width={15}
                            height={15}
                            src="svg/closed.svg"
                            alt="Menú cerrado"
                        />
                    ) : (
                        <img width={25} height={17} src="svg/menu.svg" alt="Menú abierto" />
                    )}
                </button>
            </div>
        </nav>
    );
};
