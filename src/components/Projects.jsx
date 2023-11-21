import { useEffect, useState } from "react"
import { Col, Row, Image, Button, Modal, Card, CardImg, CardBody, CardTitle, Container } from "react-bootstrap";
import { getProjects } from "../../projects"

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
        <Container>
            <div>
                <h2 className="text-center py-5">Proyectos</h2>
                <Row xs={1} md={2} className="g-4">
                    {projects.map((project) => (
                        <Col md={6} key={project.id}>
                            <div onClick={() => handleOpenModal(project)}>
                                <Card>
                                    <CardImg src={project.image} />
                                    <CardBody>
                                        <CardTitle className="text-center fs-3">
                                            {project.title}
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
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
                            <Button variant="secondary" onClick={handleCloseModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </Container>
    )
}