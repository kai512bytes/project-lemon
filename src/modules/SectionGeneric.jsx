import { Container } from "react-bootstrap";

const SectionGeneric = ({children, bgColor = "bg-white", height}) => {
    return(
        <section className=
            {`${bgColor} d-flex px-3 w-100 mx-0 text-black`}
            style={{height : height}}
        >
            {children}
        </section>
    )
}

export default SectionGeneric;