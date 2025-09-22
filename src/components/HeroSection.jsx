import { Container, Row, Col, Button } from "react-bootstrap"
import SectionGeneric from "../modules/SectionGeneric"
import HeroImg from "../assets/Img/HeroSectionImg.jpg";

export default function HeroSection() {
    return(
        <SectionGeneric
            bgColor="bg-primary-green"
            height={420}
        >
            <Container fluid="xxl" className="px-5">
                <Row 
                    className="d-flex flex-row justify-content-between mx-auto py-4">
                    <Col
                        className="d-flex flex-column gap-5 px-0"
                        md={6}
                        lg={6}
                    >
                        <Row>
                            <h1 className="text-custom-color">Little Lemon</h1>
                            <h2>Chicago</h2>
                        </Row>
                        <p className="">
                            We are a family owned
                            Mediterranean restaurant,
                            focused on traditional
                            recipes served with a modern
                            twists
                        </p>
                        <Button size="lg" className="btn-xs-50 bg-custom-color text-black">Reserve a table</Button>
                    </Col>
                    <Col className="px-0 d-none d-md-block" lg={6} md={4}>
                        <img
                            src={HeroImg}
                            className="rounded float-end img-fluid"
                            style={{height: "450px", objectFit: "cover"}}
                        />
                    </Col>
                </Row>
            </Container>

        </SectionGeneric>
    )
}