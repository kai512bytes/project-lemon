import {Container, Row, Col, Card, CardGroup, CardImg} from "react-bootstrap";
import SectionGeneric from "../modules/SectionGeneric";
import 'bootstrap-icons/font/bootstrap-icons.css';
import womanPic from '../assets/Img/woman-pic.jpg'
import manPic from '../assets/Img/man-pic.jpg'
import cubaPic from '../assets/Img/cuba-pic.jpg'
import girlPic from '../assets/Img/girl-pic.jpg'


export default function Testimonials() {

    const customers = [
        {name: "Alan", ImgSrc: womanPic, rating: 5, review: "The food was absolutely delicious and full of flavor."},
        {name: "Ben", ImgSrc: manPic, rating: 5, review: "The service was warm, friendly, and very attentive."},
        {name: "Cathy", ImgSrc: girlPic, rating: 4, review: "The cozy atmosphere made our evening unforgettable."},
        {name: "Diago", ImgSrc: cubaPic, rating: 4, review: "Fresh ingredients and authentic taste in every bite."},
    ]

    // <i class="bi bi-star-fill"></i>
    function RatingToStar({rating}){

        const ratingArr = [];

        for (let i = 0; i < rating; i++){
            ratingArr.push(i)
        }

        return(
            <>
                {ratingArr.map(() => (
                    <i className="bi bi-star-fill d-inline-block"></i>
                ))}
            </>
        );
    }

    return(
        <SectionGeneric bgColor="bg-primary-green" height={500}>
            <Container className="d-flex flex-column justify-content-around px-2 py-2 content-w-f h-100" fluid="lg">
                <Row><h1 className="display-4 text-black markazi-text-context text-center">Testimonials</h1></Row>
                <Row className="d-flex justify-content-between">
                        {customers.map(({name, ImgSrc, rating, review}) => (
                            <Col className="d-flex justify-content-center px-0">
                                <Card style={{width: '220px', height: '250px'}} className="d-flex flex-column justify-content-around">
                                    <Row>
                                        <span>
                                            <RatingToStar rating={rating} key={rating} className="d-inline-block" />
                                        </span>
                                    </Row>
                                    <Row className="d-flex">
                                        <Col>
                                            <Card.Img variant="horizon" src={ImgSrc} alt= {name} style={{width: '125px', height: '125px', objectFit: 'cover'}} />
                                        </Col>
                                        <Col className="d-flex flex-column justify-content-center">
                                            <Card.Title>{name}</Card.Title>
                                        </Col>
                                    </Row>
                                    <Row className="d-flex"><Card.Text>{review}</Card.Text></Row>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </Container>
        </SectionGeneric>
    )
}