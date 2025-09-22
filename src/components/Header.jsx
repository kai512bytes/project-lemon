import logo from "../assets/logo/logo.png";
import {Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';

const Header = () => {
    return(
        <header>
            <Navbar expand="lg" className="py-3">
                <Container fluid="lg" className="mx-auto">
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
                        <Nav className="gap-2 align-items-center">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Menu</Nav.Link>
                            <Nav.Link href="#">Reservations</Nav.Link>
                            <Nav.Link href="#">Order online</Nav.Link>
                            <Nav.Link href="#">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>


            </Navbar>
        </header>
    )
}

export default Header;