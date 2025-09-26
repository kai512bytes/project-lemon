import { Container, Card, Row, Col, Button, CardGroup, CardLink } from "react-bootstrap";
import SectionGeneric from "../modules/SectionGeneric";
import salad from '../assets/Img/greek salad.jpg';
import bruchetta from '../assets/Img/bruchetta.svg'
import lemonDessert from '../assets/Img/lemon dessert.jpg'

export default function Highlight() {

    const cards = [
        {imgSrc: salad, title: "Greek salad", price: "$12.99", content: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."},
        {imgSrc: bruchetta, title: "Bruchetta", price: "$5.99", content: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."},
        {imgSrc: lemonDessert, title: "Lemon Dessert", price: "$5.00", content: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."},
    ]

    return(
        <SectionGeneric height= "800px">
            <Container className="d-flex flex-column justify-content-around gap-5 px-2 my-5 content-w-f">
                <Row>
                    <Col className="d-flex justify-content-start">
                        <h1 className="display-4 text-black markazi-text-context">This weeks specials !</h1>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button size="lg" className="bg-custom-color text-black my-auto">
                            Online Menu
                        </Button>
                    </Col>
                </Row>
                <Row className="d-flex">
                    {cards.map(({imgSrc, title, price, content}) => (
                        <Col>
                            <Card style={{height: '480px'}}>
                                <Card.Img variant="top" src={imgSrc} alt={title} style={{height: '178px', objectFit: 'cover'}} />
                                <Card.Body className="d-flex flex-column justify-content-around">
                                    <Card.Title className="d-flex justify-content-between">
                                        <span>{title}</span>
                                        <span>{price}</span>
                                    </Card.Title>
                                    <Card.Text>{content}</Card.Text>
                                    <CardLink>Order a delivery</CardLink>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </SectionGeneric>
    )
}