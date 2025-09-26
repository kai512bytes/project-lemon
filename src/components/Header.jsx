import logo from "../assets/logo/logo.png";
import {Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import navElements from './navElements.jsx';
import SectionGeneric from "../modules/SectionGeneric.jsx";

const Header = () => {
    return(
        <header>
            <SectionGeneric height="auto">
                <Navbar expand="lg" className="w-100">
                    <Container fluid className="text-white content-w-f px-0">
                        <Navbar.Brand href="#" className="mx-0">
                            <img
                                src={logo}
                                width="auto"
                                height="50"
                                alt="Lemon Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                            <Nav className="gap-2">
                                {navElements.map(({name, link}) => (
                                    <Nav.Item key={name}>
                                        <Nav.Link as={Link} to={link} className="fw-medium karla-context">{name}</Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </SectionGeneric>
        </header>
    )
}

export default Header;