import { Container } from "react-bootstrap"
import { faDiscord, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"


export const Contacto = () => {
    return (
        <div className="container-main-contact">
            <Container className="contact">
                <h2 className="text-center">Contacto</h2>
                <div className="mx-auto py-3 bg-contact">
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
                        <a href="#">
                            <FontAwesomeIcon icon={faLinkedin} className="fs-2 mx-2 py-2 contact-icon-net" />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} className="fs-2 mx-2 py-2 contact-icon-net" />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faDiscord} className="fs-2 mx-2 py-2 contact-icon-net" />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}