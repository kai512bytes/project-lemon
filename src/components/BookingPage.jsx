import { useEffect, useReducer } from 'react'
import SectionGeneric from "../modules/SectionGeneric";
import {Container} from 'react-bootstrap';
import BookingForm from "./BookingForm";
import { fetchAPI } from '../utilitis/api';

export default function BookingPage() {

    const reducer = (state, action) =>{
        if(action.type === "updateTimes"){
            return {...state, availableTimes: action.availableTimes}
        }
        else{
            throw Error('Unknown action: ' + action.type);
        }
    }

    const[state, dispatch] = useReducer(reducer, null, intializeTimes);

    function intializeTimes(){
        return fetchAPI(new Date());
    }

    function updateTimes(date){
        const times = fetchAPI(new Date(date));
        dispatch({type: 'updateTimes', availableTimes: times})
    }



    return(
        <SectionGeneric>
            <Container fluid="lg" className="text-black px-2 content-w-f w-100">
            <BookingForm
                OnDateChange = {updateTimes}
                availableTimes={state.availableTimes}
            />
            </Container>
        </SectionGeneric>
    )
}

