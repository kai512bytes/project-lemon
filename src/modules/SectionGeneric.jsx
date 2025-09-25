import { Container } from "react-bootstrap";

const SectionGeneric = ({children, bgColor = "bg-white", height = "auto"}) => {
    return(
        <section className= 
            {`${bgColor} px-2 text-black`}
            style={{height : typeof height === "number" ? `${height}px` : height}}
        >
            {children}
        </section>
    )
}

export default SectionGeneric;