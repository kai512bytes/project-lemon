import { useState } from "react";
import SectionGeneric from "../modules/SectionGeneric";
import {Form, Container, Button} from 'react-bootstrap';
import {Formik, useFormik} from 'formik';
import * as Yup from 'yup';

export default function Reservations() {

    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    const {values, errors, touched, getFieldProps, handleSubmit} = useFormik({
        initialValues: {
            date: "",
            time: "17:00",
            guestNum: "1",
            occasion: "Birthday"
        },
        onSubmit: (values) => {
            console.log("Success", values);
        },
        validationSchema: Yup.object({
            date: Yup.string().required()
        })
    })

    return(
        <SectionGeneric>
            <Container fluid="lg" className="text-black px-2 content-w-f w-100">
                <Form
                    className="d-flex flex-column gap-4 mx-auto my-5"
                    style={{maxWidth: "200px"}}
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <Form.Group>
                        <Form.Label htmlFor="res-date">Choose date</Form.Label>
                        <Form.Control
                            id="res-date"
                            name="res-date"
                            type="date"
                            {...getFieldProps("date")}
                            isInvalid={!!errors.date && touched.date}
                        />
                        <Form.Control.Feedback type="invalid">Please select date</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="res-time">Choose time</Form.Label>
                        <Form.Select
                            id="res-time"
                            name="res-time"
                            {...getFieldProps("time")}
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
                            {...getFieldProps("guestNum")}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="occasion">Occasion</Form.Label>
                        <Form.Select
                            id="occasion"
                            name="occasion"
                            {...getFieldProps("occasion")}
                        >
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </Form.Select>
                    </Form.Group>
                    <Button type="submit">Make your reservation</Button>
                </Form>
            </Container>
        </SectionGeneric>
    )
}