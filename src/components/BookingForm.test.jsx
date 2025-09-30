import { it, expect, describe } from 'vitest';
import BookingForm from './BookingForm';
import {render, screen} from "@testing-library/react";
import React from "react";

describe('group', () => {
    it('should', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Book Now");
        expect(headingElement).toBeInTheDocument();
    })
})