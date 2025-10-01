import { useState } from "react";
import { Container, Row, Col, Button, Collapse } from "react-bootstrap";
import SectionGeneric from "../modules/SectionGeneric";
import logo from '../assets/logo/Asset 20@4x.png';
import navElements from "./navElements";
import { Link } from "react-router-dom";

export default function Footer() {

    const socials = [
        {
            icon: <i className="bi bi-instagram"></i>, url: 'https://www.instagram.com/kai_po_hung/'
        },
        {
            icon: <i className="bi bi-linkedin"></i>, url: 'https://www.linkedin.com/in/pokai-hung-a01740325/'
        },
        {
            icon: <i className="bi bi-youtube"></i>, url: 'https://youtube.com/@kai_collectionsofreactions?si=iMGA5-ZF-lA0iSDl'
        },
        {
            icon: <i className="bi bi-line"></i>, url: '#'
        }
    ]

    return(
        <footer>
            <SectionGeneric height="420px" bgColor="bg-secondary-2">
                <Container fluid="lg" className="h-100 text-black px-2 content-w-f d-flex align-items-center">
                    <Row className="w-100 d-flex justify-content-between gap-5">
                        <Col className="d-flex align-items-center">
                            <img src={logo} alt="logo" style={{minHeight: '100px'}} className="img-fluid object-fit-cover" />
                        </Col>
                        <Col className="d-flex flex-column gap-2">
                            <Row><h5>Doormat Navigation</h5></Row>
                            <Row className="gap-3">
                                {navElements.map(({name, link}) => (
                                    <Link key={name} to={link}
                                        className="fw-medium karla-context text-black text-decoration-none"
                                    >
                                        {name}
                                    </Link>
                                ))}
                            </Row>
                        </Col>
                        <Col className="d-flex flex-column gap-2">
                            <Row>
                                <h5 className="pb-4">Contact</h5>
                            </Row>
                            <Row>
                                <Row><p>Address</p></Row>
                                <Row><p>Phone number</p></Row>
                                <Row><p>Email</p></Row>
                            </Row>
                        </Col>
                        <Col className="d-flex flex-column gap-2">
                            <Row>
                                <h5 className="pb-4">Social Media Links</h5>
                            </Row>
                            <Row as="ul" className="gap-3 px-0 mb-0">
                                {socials.map(({icon, url}) => (
                                    <li key={url} style={{listStyleType: "none"}}>
                                        <a href={url} target="_blank" rel="noopener noreferrer">{icon}</a>
                                    </li>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </SectionGeneric>
        </footer>
    )
}