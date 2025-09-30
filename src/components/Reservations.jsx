import { useReducer } from 'react'
import SectionGeneric from "../modules/SectionGeneric";
import {Container} from 'react-bootstrap';
import BookingForm from "./BookingForm";

export default function Reservations() {

    const initializeTimes = {availableTimes: ["17:00", "18:00", "19:00", "20:00"]}

    const reducer = (state, action) =>{
        if(action.type === "updateTimes"){
            return {availableTimes: ["17:00", "18:00"]}
        }
    }

  const[state, dispatch] = useReducer(reducer, initializeTimes);

    return(
        <SectionGeneric>
            <Container fluid="lg" className="text-black px-2 content-w-f w-100">
            <BookingForm
                OnDateChange = {() => dispatch({type: "updateTimes"})}
                availableTimes={state.availableTimes}
            />
            </Container>
        </SectionGeneric>
    )
}