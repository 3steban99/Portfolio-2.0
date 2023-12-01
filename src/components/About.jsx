import { Container } from "react-bootstrap"
import fotoPerfil from "../assets/fotoperfil.webp"


export const About = () => {
    return (
        <section id="about">
            <Container fluid className="container-main-about">
                <div className="about" data-aos="fade-down">
                    <h2 className="text-center mx-auto fw-bold">Sobre Mi</h2>
                    <div className="d-flex flex-column flex-xl-row w-75 mx-auto pt-5">
                        <div className="text-center">
                            <img src={fotoPerfil} alt="foto perfil de esteban" className="w-50 img-perfil" />
                        </div>
                        <div className="about-border mt-4 mt-xl-0">
                            <div>
                                <h3 className="text-center py-2 py-md-4 fw-bold">Esteban Ignacio Barrionuevo</h3>
                            </div>
                            <div className="px-2 px-md-3 px-lg-5">
                                <p>
                                    Soy un apasionado por la programacion, la musica y los juegos. Me considero una persona
                                    proactiva con motivacion para el continuo perfeccionamiento y adquisicion de nuevas
                                    habilidades y tecnologias en el area de programacion. A continuacion veras algunos proyectos
                                    o practicas que he realizado hasta el momento.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}