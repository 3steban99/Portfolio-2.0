import { Container } from "react-bootstrap"

import imgHTML from "../assets/skills/html.png"
import imgCss from "../assets/skills/css.png"
import imgJs from "../assets/skills/js.png"
import imgCsharp from "../assets/skills/csharp.png"

import imgReact from "../assets/skills/react.png"
import imgBootstrap from "../assets/skills/bootstrap.png"
import imgExpress from "../assets/skills/express.png"

import imgGithub from "../assets/skills/github.png"
import imgGit from "../assets/skills/git.png"
import imgNode from "../assets/skills/node.png"
import imgNpm from "../assets/skills/npm.png"
import imgGenexus from "../assets/skills/genexus-logo.png"
import imgFirebase from "../assets/skills/firebase.png"

import imgSQL from "../assets/skills/sql.png"
import imgMongoDB from "../assets/skills/mongodb.png"
import imgMySQL from "../assets/skills/mysql.png"


export const Skills = () => {
    return (
        <div className="container-main-skills">
            <Container className="skills">
                <h2 className="text-center">Skills</h2>
                <p className="text-center fs-3 pb-3">
                    Mis lenguajes, frameworks, tecnologias y herramientas:
                </p>
                <div className="bg-light skills-container">
                    <h3 className="text-center pt-5">Lenguajes</h3>
                    <div className="d-flex img-logo justify-content-around align-items-center flex-wrap py-5">
                        <img src={imgHTML} alt="logo de html" />
                        <img src={imgCss} alt="logo de css" />
                        <img src={imgJs} alt="logo de javasript" />
                        <img src={imgCsharp} alt="logo de c#" />
                    </div>

                    <h3 className="text-center pt-5">Frameworks y Metodologias</h3>
                    <div className="d-flex img-logo justify-content-around align-items-center flex-wrap py-5">
                        <img src={imgReact} alt="logo de react" />
                        <img src={imgBootstrap} alt="logo de bootstrap" />
                        <img src={imgExpress} alt="logo de express" />
                    </div>

                    <h3 className="text-center pt-5">Tecnologias y Herramientas</h3>
                    <div className="d-flex img-logo justify-content-around align-items-center flex-wrap py-5">
                        <img src={imgGithub} alt="logo de github" />
                        <img src={imgGit} alt="logo de git" />
                        <img src={imgNode} alt="logo de node" />
                        <img src={imgNpm} alt="logo de npm" />
                        <img src={imgGenexus} alt="logo de genexus" />
                        <img src={imgFirebase} alt="logo de firebase" />
                    </div>

                    <h3 className="text-center pt-5">Bases de Datos</h3>
                    <div className="d-flex img-logo justify-content-around align-items-center flex-wrap py-5">
                        <img src={imgSQL} alt="logo de base de datos SQL" />
                        <img src={imgMongoDB} alt="logo de mongo DB" />
                        <img src={imgMySQL} alt="logo de MySQL" />
                    </div>

                    <h3 className="text-center">Proximamente</h3>
                    <div className="d-flex img-logo justify-content-around align-items-center flex-wrap py-5">

                    </div>
                </div>
            </Container>
        </div>
    )
}