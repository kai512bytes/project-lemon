import { Container } from "react-bootstrap";

const SectionGeneric = ({children, bgColor = "bg-white", height = "auto"}) => {
    return(
        <section className= {`${bgColor}`}>
            <Container
                fluid="lg"
                className={`text-white px-2 content-w-f`}
                style={{height: `${height}px`}}
            >
                {children}
            </Container>
        </section>
    )
}

export default SectionGeneric;