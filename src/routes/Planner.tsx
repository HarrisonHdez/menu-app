import { NavbarSecond } from "../components/NavbarSecond";
import SelectMenu from "../components/SelectMenu";
import styles from "./planer.module.css";
import data from "../../Datos.json";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Planner: React.FC = () => {
    return (
        <main>
            <NavbarSecond />
            {/* Header */}
            <header className={styles.planner}>
                <div
                    className={styles.planner__content}
                    data-aos="fade-up"
                    ata-aos-delay="300"
                    data-aos-duration="800"
                >
                    <h1 className={styles.planner__title}>Planificador de Menús</h1>
                    <p className={styles.planner__subtitle}>
                        Planifica tu menú semanal en unos cuantos pasos
                    </p>

                    <NavLink
                        tabIndex={0}
                        role="link"
                        to={"/"}
                        className={styles.planner__link}
                        title="Clic para ir a Home"
                        aria-label="Clic para ir a Home"
                    >
                        Volver al Home
                    </NavLink>
                </div>
            </header>
            {/* <Header */}

            {/* Lunes */}
            <section className={styles.day}>
                <div
                    className={`container ${styles.day__content} `}
                    data-aos="fade-up"
                    ata-aos-delay="300"
                    data-aos-duration="800"
                >
                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}>
                            Planifica Tu <br /> comida del lunes
                        </h2>
                        <img
                            className={styles.image}
                            width={500}
                            height={500}
                            src="image/lunes.jpg"
                            alt="Planea tu comida del lunes"
                            loading="lazy"
                        />
                    </div>

                    <SelectMenu data={data} />
                </div>
            </section>
            {/* <Lunes */}

            {/* Martes */}
            <section className={styles.day}>
                <div
                    className={`container ${styles.day__content} ${styles.day__content_reverse}`}
                    data-aos="fade-up"
                    ata-aos-delay="300"
                    data-aos-duration="800"
                >
                    {/* <SelectMenu2 /> */}
                    <SelectMenu data={data} />

                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}>
                            Planifica Tu <br /> comida del Martes
                        </h2>
                        <img
                            className={styles.image}
                            src="image/martes.jpg"
                            alt="Planea tu comida del lunes"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
            {/* <Martes */}

            {/* Miercoles */}
            <section className={styles.day}>
                <div
                    className={`container ${styles.day__content}`}
                    data-aos="fade-up"
                    ata-aos-delay="300"
                    data-aos-duration="800"
                >
                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}>
                            Planifica Tu <br />
                            comida del Miercoles
                        </h2>
                        <img
                            className={styles.image}
                            width={500}
                            height={500}
                            src="image/miercoles.jpg"
                            alt="Planea tu comida del lunes"
                            loading="lazy"
                        />
                    </div>

                    <SelectMenu data={data} />
                </div>
            </section>
            {/* Miercoles */}

            {/* Jueves */}
            <section className={styles.day}>
                <div
                    className={`container ${styles.day__content} ${styles.day__content_reverse}`}
                    data-aos="fade-up"
                    ata-aos-delay="300"
                    data-aos-duration="800"
                >
                    <SelectMenu data={data} />

                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}>
                            Planifica Tu <br /> comida del Jueves
                        </h2>
                        <img
                            className={styles.image}
                            width={500}
                            height={500}
                            src="image/jueves.jpg"
                            alt="Planea tu comida del lunes"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
            {/* Jueves */}

            {/* Viernes */}
            <section className={styles.day}>
                <div
                    className={`container ${styles.day__content}`}
                    data-aos="fade-up"
                    ata-aos-delay="300"
                    data-aos-duration="800"
                >
                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}>
                            {" "}
                            Planifica Tu <br /> comida del Viernes
                        </h2>
                        <img
                            className={styles.image}
                            width={500}
                            height={500}
                            src="image/viernes.jpg"
                            alt="Planea tu comida del lunes"
                            loading="lazy"
                        />
                    </div>

                    <SelectMenu data={data} />
                </div>
            </section>
            {/*  Viernes */}

            {/* Sabados */}
            <section className={styles.day}>
                <div
                    className={`container ${styles.day__content} ${styles.day__content_reverse}`}
                    data-aos="fade-up"
                    ata-aos-delay="300"
                    data-aos-duration="800"
                >
                    <SelectMenu data={data} />

                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}>
                            planifica Tu <br /> comida del Sabado
                        </h2>
                        <img
                            className={styles.image}
                            width={500}
                            height={500}
                            src="image/sabados.jpg"
                            alt="Planea tu comida del lunes"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
            {/* <Sabados */}

            {/* Domingos */}
            <section className={styles.day}>
                <div
                    className={`container ${styles.day__content}`}
                    data-aos="fade-up"
                    ata-aos-delay="300"
                    data-aos-duration="800"
                >
                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}>
                            Planifica Tu <br /> comida del Domingo
                        </h2>
                        <img
                            className={styles.image}
                            width={500}
                            height={500}
                            src="image/domingos.jpg"
                            alt="Planea tu comida del lunes"
                            loading="lazy"
                        />
                    </div>

                    <SelectMenu data={data} />
                </div>
            </section>
            {/* <Domingos */}

            {/* Meta */}
            <section className={styles.goal}>
                <img
                    className={styles.image}
                    width={300}
                    height={300}
                    src="image/goal.jpg"
                    alt="meta"
                    loading="lazy"
                    data-aos="fade-up"
                    ata-aos-delay="300"
                    data-aos-duration="800"
                />
            </section>
            {/* <Meta */}

            <Footer />
        </main>
    );
};

export default Planner;
