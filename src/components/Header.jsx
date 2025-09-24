import { Component } from "react";
import logo from "../assets/logo/logo.png";
import {Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    const navElements = [
        {
            name: "Home", link:"/"
        },
        {
            name: "About", link:"/about"
        },
        {
            name: "Menu", link:"/menu"
        },
        {
            name: "Reservations", link:"/reservations"
        },
        {
            name: "Order online", link:"/order_online"
        },
        {
            name: "Login", link:"/login"
        },
    ]

    return(
        <header>
            <Navbar expand="lg" className="py-3">
                <Container fluid="lg" className="text-white px-2 content-w-f">
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
        </header>
    )
}

export default Header;