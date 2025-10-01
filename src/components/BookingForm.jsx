import {Form, Button} from 'react-bootstrap';
import { useState } from "react";
import React from 'react';

export default function BookingForm({availableTimes =[], OnDateChange}){

    const[date, setDate] = useState("");
    const[guests, setGuests] = useState("1")
    const[occasion, setOccasion] = useState("birthday")

    function handleDateChange(e){
        setDate(e.target.value);
        OnDateChange();
    }

    return(
        <Form
            className="d-flex flex-column gap-4 mx-auto my-5"
            style={{maxWidth: "200px"}}q
            noValidate
        >
            <h1 className="display-4 text-custom-color markazi-text-context mb-0">Book Now</h1>
            <Form.Group>
                <Form.Label htmlFor="res-date">Choose date</Form.Label>
                <Form.Control
                    id="res-date"
                    name="res-date"
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                />
                <Form.Control.Feedback type="invalid">Please select date</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="res-time">Choose time</Form.Label>
                <Form.Select
                    id="res-time"
                    name="res-time"
                >
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="guests">Number of guests</Form.Label>
                <Form.Control
                    type="number"
                    min="1"
                    max="10"
                    id="guests"
                    name="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="occasion">Occasion</Form.Label>
                <Form.Select
                    id="occasion"
                    name="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </Form.Select>
            </Form.Group>
            <Button type="submit">Make your reservation</Button>
        </Form>
    )
}