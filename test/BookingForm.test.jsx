import BookingForm from '../src/components/BookingForm.jsx';
import { render, screen } from '@testing-library/react'

describe('group', () => {
    it('should render heading', () => {
        render(<BookingForm />);
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toBeInTheDocument();
    })
})