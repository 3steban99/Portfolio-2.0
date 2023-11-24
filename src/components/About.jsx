import { Container } from "react-bootstrap"
import fotoPerfil from "../assets/fotoperfil.webp"


export const About = () => {
    return (
        <Container fluid className="container-main-about">
            <div className="about">
                <h2 className="text-center py-5">Sobre Mi</h2>
                <div className="d-flex">
                    <div className="text-center">
                        <img src={fotoPerfil} alt="foto perfil de esteban" className="w-50 img-perfil" />
                    </div>
                    <div className="">
                        <div>
                            <h3 className="text-center py-5">Esteban Ignacio Barrionuevo</h3>
                        </div>
                        <div className="">
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
    )
}