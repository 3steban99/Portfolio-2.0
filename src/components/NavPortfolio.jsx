import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavPortfolio = () => {


    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
                <Container fluid className='mx-5 py-3'>
                    <Navbar.Brand href="#home" className='btn btn-primary'>Ver CV</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
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