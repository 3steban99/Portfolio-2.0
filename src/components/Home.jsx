import { faDiscord, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "react-bootstrap"
import imgAvatar from "../assets/avatar1.png"
// import imgFondo from "../assets/fondo1.jpg"


export const Home = () => {
    return (
        <Container fluid id="home" className="container-main-home d-flex align-items-center">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center mx-5 w-100">
                <div className="home-text">
                    <div className="home-h1">
                        <h1>
                            Hola, <br />
                            Soy Esteban <br />
                            Programador FullStack
                        </h1>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faGithub} className="fs-1 mx-2 py-2 home-icon"/>
                        <FontAwesomeIcon icon={faLinkedin} className="fs-1 mx-2 py-2 home-icon"/>
                        <FontAwesomeIcon icon={faInstagram} className="fs-1 mx-2 py-2 home-icon"/>
                        <FontAwesomeIcon icon={faDiscord} className="fs-1 mx-2 py-2 home-icon"/>
                    </div>
                </div>
                <div className="home-container-img me-5 d-none d-lg-block">
                    <img src={imgAvatar} alt="" className="img-fluid home-img" />
                </div>
            </div>
        </Container>
    )
}