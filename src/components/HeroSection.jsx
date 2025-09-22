import { Container, Row, Col, Button } from "react-bootstrap"
import SectionGeneric from "../modules/SectionGeneric"
import HeroImg from "../assets/Img/HeroSectionImg.jpg";

export default function HeroSection() {
    return(
        <SectionGeneric
            bgColor="bg-primary-green"
            height={420}
        >
            <Container fluid="lg">
                <Row className="d-flex flex-row justify-content-between mx-auto py-4">
                    <Col
                        className="d-flex flex-column gap-5"
                        sm={6}
                        md={4}
                        lg={6}
                    >
                        <Row className="">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                        </Row>
                        <p className="">
                            We are a family owned
                            Mediterranean restaurant,
                            focused on traditional
                            recipes served with a modern
                            twists
                        </p>
                        <Button size="lg" className="btn-lg-50">Reserve a table</Button>
                    </Col>
                    <Col className="px-0 d-none d-md-block" lg={6} md={4}>
                        <img
                            src={HeroImg}
                            width={400}
                            height={450}
                            className="rounded float-end"
                        />
                    </Col>
                </Row>
            </Container>

        </SectionGeneric>
    )
}