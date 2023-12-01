import { Container } from "react-bootstrap"
import { faDiscord, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"


export const Contacto = () => {
    return (
        <section className="container-main-contact" id="contact">
            <Container className="contact">
                <h2 className="text-center fw-bold" data-aos="fade-down">Contacto</h2>
                <div className="mx-auto py-3 bg-contact" data-aos="fade-down">
                    <div className="d-flex justify-content-center align-items-center mb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon"/>
                        <p className="mb-0 ms-2">barrionuevo99@outlook.com</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-2">
                        <FontAwesomeIcon icon={faPhone} className="contact-icon"/>
                        <p className="mb-0 ms-2">+54 9 381440-7688</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-2">
                        <FontAwesomeIcon icon={faLocationDot} className="contact-icon"/>
                        <p className="mb-0 ms-2">Yerba Buena - Tucuman, Argentina</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/esteban-ignacio-barrionuevo/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} className="mx-2 py-2 contact-icon-net" />
                        </a>
                        <a href="https://www.instagram.com/3steban.barrionuevo/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className="mx-2 py-2 contact-icon-net" />
                        </a>
                        <a href="https://discord.com/users/269684052221624320" target="_blank">
                            <FontAwesomeIcon icon={faDiscord} className="mx-2 py-2 contact-icon-net" />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    )
}