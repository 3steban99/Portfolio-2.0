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
                        <button className='btn btn-cv'>Ver CV</button>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FontAwesomeIcon icon={faBars} className='custom-toggle fs-1' />
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto navbar-link">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Sobre Mi</Nav.Link>
                            <Nav.Link href="#link">Proyectos</Nav.Link>
                            <Nav.Link href="#link">Skills</Nav.Link>
                            <Nav.Link href="#link">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}