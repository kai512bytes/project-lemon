import { useEffect, useReducer } from 'react'
import SectionGeneric from "../modules/SectionGeneric";
import {Container} from 'react-bootstrap';
import BookingForm from "./BookingForm";

export const reducer = (state, action) =>{
    if(action.type === "updateTimes"){
        return {...state, availableTimes: action.availableTimes}
    }
    return state;
}

export default function BookingPage() {

    const[state, dispatch] = useReducer(reducer, {availableTimes: []});

    const fetchTimes = async (date) => {
        if (window.fetchAPI){
            const newTimes = await window.fetchAPI(date);
            dispatch({type: "updateTimes", availableTimes: newTimes})
        }
    }

    useEffect(() => {
        fetchTimes(new Date());
    }, []);

    return(
        <SectionGeneric>
            <Container fluid="lg" className="text-black px-2 content-w-f w-100">
            <BookingForm
                OnDateChange = {(date) => fetchTimes(date)}
                availableTimes={state.availableTimes}
            />
            </Container>
        </SectionGeneric>
    )
}

