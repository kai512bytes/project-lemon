import { Container } from "react-bootstrap";

const SectionGeneric = ({children, bgColor = bg-white, height}) => {
    return(
        <Container
            as="section"
            fluid
            className={`${bgColor} text-white px-0`}
            style={{height: `${height}px`}}
        >
            {children}
        </Container>
    )
}

export default SectionGeneric;