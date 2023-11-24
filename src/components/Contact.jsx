import { Container } from "react-bootstrap"
import { faDiscord, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"


export const Contacto = () => {
    return (
        <div className="container-main-contact">
            <Container className="contact">
                <h2 className="text-center py-5">Contacto</h2>
                <div className="shadow w-50 mx-auto py-3">
                    <div className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>barrionuevo99@outlook.com</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+54 9 381440-7688</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>Yerba Buena - Tucuman, Argentina</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="#">
                            <FontAwesomeIcon icon={faLinkedin} className="fs-1 mx-2 py-2 icon-home" />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} className="fs-1 mx-2 py-2 icon-home" />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faDiscord} className="fs-1 mx-2 py-2 icon-home" />
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}