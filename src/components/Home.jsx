import { faDiscord, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "react-bootstrap"
import imgAvatar from "../assets/avatar1.png"
// import imgFondo from "../assets/fondo1.jpg"


export const Home = () => {
    return (
        <section id="home">
            <Container fluid className="container-main-home d-flex align-items-center">
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
                            <a href="https://github.com/3steban99" target="_blank">
                                <FontAwesomeIcon icon={faGithub} className="mx-2 py-2 home-icon" />
                            </a>
                            <a href="https://www.linkedin.com/in/esteban-ignacio-barrionuevo/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} className="mx-2 py-2 home-icon" />
                            </a>
                            <a href="https://www.instagram.com/3steban.barrionuevo/" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} className="mx-2 py-2 home-icon" />
                            </a>
                            <a href="https://discord.com/users/269684052221624320" target="_blank">
                                <FontAwesomeIcon icon={faDiscord} className="mx-2 py-2 home-icon" />
                            </a>
                        </div>
                    </div>
                    <div className="home-container-img me-5 d-none d-lg-block">
                        <img src={imgAvatar} alt="" className="img-fluid home-img" />
                    </div>
                </div>
            </Container>
        </section>
    )
}