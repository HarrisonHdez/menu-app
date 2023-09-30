import React from "react";
import styles from "../styles.module.css";


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__content} `}>
                <p>Menu'sApp {currentYear} &copy; -  Todos los derechos reservados</p>{" "}
            </div>
        </footer>
    );
};

export default Footer;
