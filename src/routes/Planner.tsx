import { NavbarSecond } from "../components/NavbarSecond";
import SelectMenu from "../components/SelectMenu";
import styles from "./planer.module.css";
import data from '../../Datos.json';


const Planner: React.FC = () => {


    return (
        <main>
            <NavbarSecond />
            <header className={styles.home_planner}>
                <div className={styles.home_planner__content}>
                    <h1>Planificador de Menús</h1>
                    <p>Planifica tu menú semanal en unos cuantos pasos</p>
                </div>
            </header>


            <section className={styles.monday}>
                <div className={`container ${styles.monday__content}`}>
                    <div className={styles.monday__image}>
                        <h2 className={styles.planner__title}>Planifica Tu <br /> comida del lunes</h2>
                        <img className={styles.planner__image} width={500} height={500} src="image/lunes.jpg" alt="Planea tu comida del lunes" />
                    </div>

                    <SelectMenu data={data} />

                </div>
            </section>


            <section className={styles.monday}>
                <div className={`container ${styles.monday__content}`}>

                    {/* <SelectMenu2 /> */}
                    <SelectMenu data={data} />

                    <div className={styles.monday__image}>
                        <h2 className={styles.planner__title}>Planifica Tu <br /> comida del Martes</h2>
                        <img src="image/martes.jpg" alt="Planea tu comida del lunes" />
                    </div>
                </div>
            </section>
            <section className={styles.monday}>
                <div className={`container ${styles.monday__content}`}>



                    <div className={styles.monday__image}>
                        <h2 className={styles.planner__title}>Planifica Tu <br />comida del Miercoles</h2>
                        <img width={500} height={500} src="image/miercoles.jpg" alt="Planea tu comida del lunes" />
                    </div>

                    <SelectMenu data={data} />
                </div>
            </section>
            <section className={styles.monday}>
                <div className={`container ${styles.monday__content}`}>
                    <SelectMenu data={data} />



                    <div className={styles.monday__image}>
                        <h2 className={styles.planner__title}>Planifica Tu <br /> comida del Jueves</h2>
                        <img width={500} height={500} src="image/jueves.jpg" alt="Planea tu comida del lunes" />
                    </div>

                </div>
            </section>
            <section className={styles.monday}>
                <div className={`container ${styles.monday__content}`}>



                    <div className={styles.monday__image}>
                        <h2 className={styles.planner__title}> Planifica Tu <br /> comida del Viernes</h2>
                        <img width={500} height={500} src="image/viernes.jpg" alt="Planea tu comida del lunes" />
                    </div>

                    <SelectMenu data={data} />
                </div>
            </section>
            <section className={styles.monday}>
                <div className={`container ${styles.monday__content}`}>
                    <SelectMenu data={data} />



                    <div className={styles.monday__image}>
                        <h2 className={styles.planner__title}>planifica Tu <br /> comida del Sabado</h2>
                        <img width={500} height={500} src="image/sabados.jpg" alt="Planea tu comida del lunes" />
                    </div>

                </div>
            </section>
            <section className={styles.monday}>
                <div className={`container ${styles.monday__content}`}>



                    <div className={styles.monday__image}>
                        <h2 className={styles.planner__title}>Planifica Tu <br /> comida del Domingo</h2>
                        <img width={500} height={500} src="image/domingos.jpg" alt="Planea tu comida del lunes" />
                    </div>

                    <SelectMenu data={data} />
                </div>
            </section>


            <section className={styles.goal}>
                <img width={300} height={300} src="image/goal.jpg" alt="meta" />
            </section>
        </main>
    );
};

export default Planner;
