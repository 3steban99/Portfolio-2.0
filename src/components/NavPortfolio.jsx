import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavPortfolio = () => {


    return (
        <div>
            <Navbar expand="lg" className="bg-nav" fixed='top'>
                <Container fluid className='py-3 mx-2 mx-lg-5'>
                    <Navbar.Brand href="#home">
                        <a href="https://drive.google.com/file/d/1Zen_uCiCzWU_8eRI94lbqb3dbSHzvEfA/view?usp=drive_link" target="_blank" className='btn btn-cv'>Ver CV</a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FontAwesomeIcon icon={faBars} className='custom-toggle fs-1' />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto navbar-link">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">Sobre Mi</Nav.Link>
                            <Nav.Link href="#projects">Proyectos</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#contact">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}