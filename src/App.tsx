import { Navbar } from "./components/Navbar";
import TitleSection from "./components/TitleSection";
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
              Planifica Tu Menú Semanal De Forma Rápida y Sencilla
            </h1>

            <p
              className={`${styles.home__subtitle} animate__animated animate__fadeIn`}
            >
              Organiza tus comidas de toda la semana en minutos. ¡De manera
              sencilla y sin complicaciones!
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
                Somos un grupo de profesionales que, como tú, no teníamos tiempo
                para pensar cada día en qué íbamos a comer. Por eso, fundamos
                nuestra empresa
              </p>

              <p
                data-aos="fade-up"
                ata-aos-delay="300"
                data-aos-duration="1000"
                className={styles.about__paragraph}
              >
                Te damos la bienvenida a nuestra plataforma diseñada para
                simplificar tu vida. Nuestro objetivo es ayudarte a planificar
                tu menú semanal de manera rápida y sencilla. Con nuestra
                herramienta intuitiva, puedes organizar tus comidas con
                facilidad y llevar un estilo de vida más saludable y delicioso.
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
        <div className={`container ${styles.precios__content}`}>
          <TitleSection>
            Escoge tu plan <br /> para tu bienestar
          </TitleSection>

          <div className={styles.precios__cards}>
            <div className={styles.precios__card}>
              <h2 className={styles.precios__title}>Plan Gratuito</h2>
              <h3 className={styles.precios__subtitle}>
                Planificador de Inicio
              </h3>
              <h4 className={styles.precios__price}>Gratis</h4>
              <ul className={styles.precios__list}>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Crea un menú semanal básico.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Acceso a recetas básicas.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Personalización de comidas semanales.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Seguimiento de calorías.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Compartir plan con amigos.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Recordatorios diarios.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Soporte por correo.</li>
                </div>
              </ul>

              <a href="#" className={styles.precios__button}>
                Empezar
              </a>
            </div>
            <div
              className={`${styles.precios__card} ${styles.precios__card_important}`}
            >
              <div className={styles.precios__head}>
                <h2 className={`${styles.precios__title} ${styles.precios__import}`}>Plan Estándar</h2>
                <h3 className={styles.precios__subtitle}>
                Planificador Pro
                </h3>
                <h4 className={styles.precios__price}>Precio: $10 al mes</h4>
              </div>
              <ul className={styles.precios__list}>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check-import.svg" alt="check" />
                  <li>Todo en el Plan Estándar.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check-import.svg" alt="check" />
                  <li>Nutricionista o chef personal.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check-import.svg" alt="check" />
                  <li>Planificación totalmente personalizada.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check-import.svg" alt="check" />
                  <li>Entrega opcional de ingredientes.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check-import.svg" alt="check" />
                  <li>Soporte 24/7 por chat.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check-import.svg" alt="check" />
                  <li>Asesoramiento en vivo.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check-import.svg" alt="check" />
                  <li>Actualizaciones regulares.</li>
                </div>
              </ul>

              <a href="#" className={` ${styles.precios__button} ${styles.precios__button_import}`}>
                Empezar
              </a>
            </div>
            <div className={styles.precios__card}>
              <h2 className={styles.precios__title}>Plan Premium</h2>
              <h3 className={styles.precios__subtitle}>
                Chef Personal
              </h3>
              <h4 className={styles.precios__price}>Precio: $20 al mes</h4>
              <ul className={styles.precios__list}>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Todo en el Plan Estándar.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Nutricionista o chef personal.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Planificación totalmente personalizada.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Entrega opcional de ingredientes.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Soporte 24/7 por chat.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Asesoramiento en vivo.</li>
                </div>
                <div className={styles.precios__list_text}>
                  <img width={20} height={17} src="svg/check.svg" alt="check" />
                  <li>Actualizaciones regulares.</li>
                </div>
              </ul>

              <a href="#" className={styles.precios__button}>
                Empezar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.testimonios}>
        <div className={`container ${styles.testimonios__content}`}>
          <TitleSection>
            Que dicen <br />
            nuestros clientes
          </TitleSection>

          <div className={styles.testimonios__cards}>
            <div className={styles.testimonios__card}>
              <div className={styles.testimonios__text}>
                <h2 className={styles.testimonios__name}>Laura Pérez</h2>
                <h3 className={styles.testimonios__profession}>
                  Maestra de Escuela
                </h3>
                <p className={styles.testimonios__paragraph}>
                  Como maestra, siempre estoy ocupada. Gracias a esta
                  plataforma, planificar las comidas ya no es una preocupación.
                  Ahorro tiempo y disfruto de comidas saludables.
                </p>
              </div>

              <div className={styles.testimonios__starts}>
                <img
                  width={164}
                  height={19}
                  src="svg/starts.svg"
                  alt="5 extrellas"
                />
              </div>
            </div>
            <div className={styles.testimonios__card}>
              <div className={styles.testimonios__text}>
                <h2 className={styles.testimonios__name}>Carlos Gómez</h2>
                <h3 className={styles.testimonios__profession}>
                  Ingeniero de Software
                </h3>
                <p className={styles.testimonios__paragraph}>
                  La vida de un ingeniero es caótica, pero esta herramienta hace
                  que la planificación de comidas sea pan comido.
                  ¡Increíblemente útil!
                </p>
              </div>

              <div className={styles.testimonios__starts}>
                <img
                  width={164}
                  height={19}
                  src="svg/starts.svg"
                  alt="5 extrellas"
                />
              </div>
            </div>
            <div className={styles.testimonios__card}>
              <div className={styles.testimonios__text}>
                <h2 className={styles.testimonios__name}>Ana Rodríguez</h2>
                <h3 className={styles.testimonios__profession}>
                  Estudiante Universitaria
                </h3>
                <p className={styles.testimonios__paragraph}>
                  Ser estudiante universitaria puede ser estresante, pero con
                  esta plataforma, puedo centrarme en mis estudios y tener
                  comidas deliciosas listas.
                </p>
              </div>

              <div className={styles.testimonios__starts}>
                <img
                  width={164}
                  height={19}
                  src="svg/starts.svg"
                  alt="5 extrellas"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contacto}>
        <div className={styles.contacto__content}></div>
      </section>
    </>
  );
}

export default App;
