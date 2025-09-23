import { Container, Row, Col, Button } from "react-bootstrap"
import SectionGeneric from "../modules/SectionGeneric"
import HeroImg from "../assets/Img/HeroSectionImg.jpg";

export default function HeroSection() {
    return(
        <SectionGeneric
            bgColor="bg-primary-green"
            height={420}
        >
            <Container className="px-5 content-w-f" fluid="lg">
                <Row className="mx-0 py-5">
                    <Col
                        className="d-flex flex-column justify-content-start align-items-start gap-5 px-0"
                        xs={12}
                        md={6}
                        lg={6}
                    >
                        <Row>
                            <h1 className="display-4 text-custom-color markazi-text-context mb-0">Little Lemon</h1>
                            <h3 className="display-6 markazi-text-context">Chicago</h3>
                        </Row>
                        <Row>
                            <p>
                                We are a family owned
                                Mediterranean restaurant,
                                focused on traditional
                                recipes served with a modern
                                twists
                            </p>
                        </Row>
                            <Button size="lg" className="bg-custom-color text-black px-2">
                                Reserve a table
                            </Button>
                    </Col>
                    <Col className="px-0 d-none d-md-block" lg={6} md={6}>
                        <img
                            src={HeroImg}
                            className="rounded float-end d-block img-fluid"
                            style={{height: "420px", objectFit: "cover"}}
                        />
                    </Col>
                </Row>
            </Container>

        </SectionGeneric>
    )
}