import { Navbar } from "./components/Navbar";
import styles from "./styles.module.css";
function App() {


  return (
    <>
      <header className={styles.home}>
        <Navbar />
        <div className={`container ${styles.home__content}`}>
          <div className={styles.home__text}>
            <h1
              className={`${styles.home__title} animate__animated animate__fadeIn`}
            >
              Planifica Tu Menú
              Semanal De Forma
              Rápida y Sencilla
            </h1>

            <p
              className={`${styles.home__subtitle} animate__animated animate__fadeIn`}
            >
              Organiza tus comidas de toda la semana en minutos.
              ¡De manera sencilla y sin complicaciones!
            </p>

            <div className={styles.home__buttons}>
              <a
                tabIndex={0}
                href="#"
                role="link"
                className={`${styles.home__link_demo} animate__animated animate__fadeIn`}
                title="Clic para ir a About"
                aria-label="Book a Demo"
              >
                Empieza Gratis
              </a>
              <a
                tabIndex={0}
                href="#"
                role="link"
                className={`${styles.home__button} animate__animated animate__fadeIn`}
                title="Clic para ir a About"
                aria-label="Contact Us"
              >
                Aprende Más
              </a>
            </div>
          </div>
          <div className={styles.home__image}>
            <img
              data-aos="fade-up"
              ata-aos-delay="300"
              data-aos-duration="1000"
              width={500}
              height={500}
              src="/image/home.jpg"
              alt="team"
              className="animate__animated animate__fadeIn"
            />
          </div>
        </div>
      </header>


      <section className={styles.customers}>
        <div className={`container ${styles.customers__content} `}>
          <img width={180} height={32} src="/svg/logo1.svg" alt="customers" />
          <img width={180} height={32} src="/svg/logo2.svg" alt="customers" />
          <img width={180} height={52} src="/svg/logo3.svg" alt="customers" />
          <img width={180} height={44} src="/svg/logo4.svg" alt="customers" />
        </div>
      </section>


      {/* About */}
      <section className={styles.about} /* name="about" */>
        <div className={`container ${styles.about__content}`}>
          <div className={styles.about__text}>

            <div className={styles.about__paragraphs}>
              <p
                data-aos="fade-up"
                ata-aos-delay="300"
                data-aos-duration="1000"
                className={styles.about__paragraph}
              >
                Somos un grupo de profesionales que, como tú, no teníamos tiempo para pensar cada día en qué íbamos a comer. Por eso, fundamos nuestra empresa
              </p>

              <p
                data-aos="fade-up"
                ata-aos-delay="300"
                data-aos-duration="1000"
                className={styles.about__paragraph}
              >
                Te damos la bienvenida a nuestra plataforma diseñada para simplificar tu vida. Nuestro objetivo es ayudarte a planificar tu menú semanal de manera rápida y sencilla. Con nuestra herramienta intuitiva, puedes organizar tus comidas con facilidad y llevar un estilo de vida más saludable y delicioso.
              </p>
            </div>


          </div>

          <div className={styles.about__image}>
            <img
              data-aos="fade-up"
              ata-aos-delay="300"
              data-aos-duration="1000"
              width={483}
              height={391}
              src="/image/about.png"
              alt="about"
              className={styles.about__img}
            />
          </div>
        </div>
      </section>
      {/* About */}



      <section className={styles.precios}>
        <div className={styles.precios__content}>

        </div>
      </section>


      <section className={styles.testimonios}>
        <div className={`container ${styles.testimonios__content}`}>
          <div className={styles.testimonios__card}>
            <h2 className={styles.testimonios__name}>Laura Pérez</h2>
            <h3 className={styles.testimonios__profession}>Maestra de Escuela</h3>
            <p className={styles.testimonios__paragraph}>Como maestra, siempre estoy ocupada. Gracias a esta plataforma, planificar las comidas ya no es una preocupación. Ahorro tiempo y disfruto de comidas saludables.</p>
          </div>
          <div className={styles.testimonios__card}>
            <h2 className={styles.testimonios__name}>Laura Pérez</h2>
            <h3 className={styles.testimonios__profession}>Maestra de Escuela</h3>
            <p className={styles.testimonios__paragraph}>La vida de un ingeniero es caótica, pero esta herramienta hace que la planificación de comidas sea pan comido. ¡Increíblemente útil!</p>
          </div>
          <div className={styles.testimonios__card}>
            <h2 className={styles.testimonios__name}>Laura Pérez</h2>
            <h3 className={styles.testimonios__profession}>Maestra de Escuela</h3>
            <p className={styles.testimonios__paragraph}>Ser estudiante universitaria puede ser estresante, pero con esta plataforma, puedo centrarme en mis estudios y tener comidas deliciosas listas.</p>
          </div>
        </div>
      </section>

      <section className={styles.contacto}>
        <div className={styles.contacto__content}>

        </div>
      </section>
    </>
  )
}

export default App
