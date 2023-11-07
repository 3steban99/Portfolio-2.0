import { faDiscord, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "react-bootstrap"


export const Home = () => {
    return (
        <Container fluid className="border border-danger container-main d-flex align-items-center">
            <div className="d-flex mx-5">
                <div className="border border-danger">
                    <div>
                        <h1>
                            Hola, <br />
                            Soy Esteban <br />
                            Programador FullStack
                        </h1>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGithub} className="fs-1 mx-2 py-2 icon-home"/>
                        <FontAwesomeIcon icon={faLinkedin} className="fs-1 mx-2 py-2 icon-home"/>
                        <FontAwesomeIcon icon={faInstagram} className="fs-1 mx-2 py-2 icon-home"/>
                        <FontAwesomeIcon icon={faDiscord} className="fs-1 mx-2 py-2 icon-home"/>
                    </div>
                </div>
                <div className="mx-5">

                </div>
            </div>
        </Container>
    )
}