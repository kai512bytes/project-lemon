import { Container, Row, Col, Button } from "react-bootstrap"
import SectionGeneric from "../modules/SectionGeneric"

import infoImg from '../assets/Img/restaurant chef B.jpg';
import infoImg2 from '../assets/Img/Mario and Adrian b.jpg';

export default function Information() {
    return(
        <SectionGeneric height={600}>
            <Container fluid="lg" className="h-100 text-black px-2 content-w-f">
                <Row className="h-100 d-flex flex-row">
                    <Col className="h-100 d-flex flex-column justify-content-center gap-5">
                        <Row>
                            <h1 className="display-4 text-custom-color markazi-text-context mb-0">Little Lemon</h1>
                            <h3 className="display-6 markazi-text-context">Chicago</h3>
                        </Row>
                        <Row>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptate officia,
                                quisquam iusto tenetur qui maiores minus et assumenda atque vitae blanditiis ullam.
                                Libero fugit aut amet ipsam atque provident.
                            </p>
                        </Row>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <div className="position-relative start-50">
                            <img src={infoImg} style={{width: '200px', height: '250px', objectPosition: 'top'}}
                                className="position-absolute object-fit-cover border translate-middle rounded z-1"/
                            >
                            <img src={infoImg2} style={{width: '200px', height: '250px', objectPosition: 'bottom'}}
                                className="position-absolute object-fit-cover border rounded  z-0"/
                            >
                        </div>
                    </Col>
                </Row>
            </Container>
        </SectionGeneric>
    )
}

{/* style={{top:'150px', left: '125px'}} */}