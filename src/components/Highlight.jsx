import { Container, Card, Row, Col, Button } from "react-bootstrap";
import SectionGeneric from "../modules/SectionGeneric";
import salad from '../assets/Img/greek salad.jpg';
import bruchetta from '../assets/Img/bruchetta.svg'
import lemonDessert from '../assets/Img/lemon dessert.jpg'

export default function Highlight() {

    const cards = [
        {imgSrc: {salad}, title: "Greek salad", price: "$12.99", content: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."},
        {imgSrc: {bruchetta}, title: "Bruchetta", price: "$5.99", content: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."},
        {imgSrc: {lemonDessert}, title: "Lemon Dessert", price: "$5.00", content: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."},
    ]

    return(
        <SectionGeneric bgColor="bg-white" height={685}>
            <Container className="px-5 py-5 my-5 content-w-f" fluid="lg">
                <Row>
                    <Col>
                        <h1 className="display-4 text-black markazi-text-context">This weeks specials !</h1>
                    </Col>
                    <Button></Button>
                 
                </Row>
            </Container>
        </SectionGeneric>
    )
}