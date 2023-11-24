import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavPortfolio = () => {


    return (
        <div>
            <Navbar expand="lg" className="bg-nav" fixed='top'>
                <Container fluid className='py-3'>
                    <Navbar.Brand href="#home">
                        <button className='btn btn-cv'>Ver CV</button>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
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