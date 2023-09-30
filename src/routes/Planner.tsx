import { NavbarSecond } from "../components/NavbarSecond";
import SelectMenu from "../components/SelectMenu";
import styles from "./planer.module.css";
import data from '../../Datos.json';
import { NavLink } from 'react-router-dom';
import Footer from "../components/Footer";


const Planner: React.FC = () => {


    return (
        <main>
            <NavbarSecond />
            <header className={styles.planner}>
                <div className={styles.planner__content}>
                    <h1 className={styles.planner__title}>Planificador de Menús</h1>
                    <p className={styles.planner__subtitle}>Planifica tu menú semanal en unos cuantos pasos</p>

                    <NavLink
                        tabIndex={0}
                        role="link"
                        to={"/"}
                        className={styles.planner__link}
                        title="Clic para ir a Home"
                        aria-label="Clic para ir a Home">
                        Volver al Home
                    </NavLink>
                </div>
            </header>


            <section className={styles.day}>
                <div className={`container ${styles.day__content} `}>
                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}>Planifica Tu <br /> comida del lunes</h2>
                        <img className={styles.image} width={500} height={500} src="image/lunes.jpg" alt="Planea tu comida del lunes" loading="lazy" />
                    </div>

                    <SelectMenu data={data} />

                </div>
            </section>


            <section className={styles.day}>
                <div className={`container ${styles.day__content} ${styles.day__content_reverse}`}>

                    {/* <SelectMenu2 /> */}
                    <SelectMenu data={data} />

                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}>Planifica Tu <br /> comida del Martes</h2>
                        <img className={styles.image} src="image/martes.jpg" alt="Planea tu comida del lunes" loading="lazy" />
                    </div>
                </div>
            </section>
            <section className={styles.day}>
                <div className={`container ${styles.day__content}`}>



                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}>Planifica Tu <br />comida del Miercoles</h2>
                        <img className={styles.image} width={500} height={500} src="image/miercoles.jpg" alt="Planea tu comida del lunes" loading="lazy" />
                    </div>

                    <SelectMenu data={data} />
                </div>
            </section>
            <section className={styles.day}>
                <div className={`container ${styles.day__content} ${styles.day__content_reverse}`}>
                    <SelectMenu data={data} />



                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}>Planifica Tu <br /> comida del Jueves</h2>
                        <img className={styles.image} width={500} height={500} src="image/jueves.jpg" alt="Planea tu comida del lunes" loading="lazy" />
                    </div>

                </div>
            </section>
            <section className={styles.day}>
                <div className={`container ${styles.day__content}`}>



                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}> Planifica Tu <br /> comida del Viernes</h2>
                        <img className={styles.image} width={500} height={500} src="image/viernes.jpg" alt="Planea tu comida del lunes" loading="lazy" />
                    </div>

                    <SelectMenu data={data} />
                </div>
            </section>
            <section className={styles.day}>
                <div className={`container ${styles.day__content} ${styles.day__content_reverse}`}>
                    <SelectMenu data={data} />



                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}>planifica Tu <br /> comida del Sabado</h2>
                        <img className={styles.image} width={500} height={500} src="image/sabados.jpg" alt="Planea tu comida del lunes" loading="lazy" />
                    </div>

                </div>
            </section>
            <section className={styles.day}>
                <div className={`container ${styles.day__content}`}>



                    <div className={styles.day__image}>
                        <h2 className={styles.day__title}>Planifica Tu <br /> comida del Domingo</h2>
                        <img className={styles.image} width={500} height={500} src="image/domingos.jpg" alt="Planea tu comida del lunes" loading="lazy" />
                    </div>

                    <SelectMenu data={data} />
                </div>
            </section>


            <section className={styles.goal}>
                <img className={styles.image} width={300} height={300} src="image/goal.jpg" alt="meta" loading="lazy" />
            </section>

            
            <Footer />
        </main>
    );
};

export default Planner;
