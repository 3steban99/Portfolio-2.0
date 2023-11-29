import { useEffect, useState } from "react"
import { Col, Row, Image, Button, Modal, Card, CardImg, CardBody, CardTitle, Container } from "react-bootstrap";
import { getProjects } from "../../projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const Projects = () => {

    const [projects, setProjects] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        getProjects().then(response => {
            setProjects(response)
        })
            .catch(error => {
                console.error(error)
            })
    }, [])

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProject(null);
    };

    return (
        <div className="container-main-projects" id="projects">
            <Container>
                <h2 className="text-center projects-h2">Proyectos</h2>
                <Row xs={1} md={2} className="mx-3">
                    {projects.map((project) => (
                        <Col md={5} key={project.id} className="mx-auto mb-5">
                            <div onClick={() => handleOpenModal(project)}>
                                <Card className="card-custom">
                                    <CardImg className="img-fluid" src={project.image} />
                                    <CardBody>
                                        <CardTitle className="text-center fs-3 py-4">
                                            {project.title}
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal} size="lg" className="custom-modal">
                {selectedProject && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedProject.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image src={selectedProject.image} fluid />
                            <p>{selectedProject.description}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="me-auto">
                                <a href={selectedProject.github} target="_blank">
                                    <FontAwesomeIcon icon={faGithub} className="icon-modal"/>
                                </a>
                                <a href={selectedProject.web} target="_blank">
                                    <FontAwesomeIcon icon={faGlobe} className="icon-modal"/>
                                </a>
                            </div>
                            <Button className="btn-modal" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </div>
    )
}