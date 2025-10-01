import { it, expect, describe } from 'vitest'
import {initializeTimes, reducer} from '../../src/components/Reservations'


const initTime = {availableTimes:["17:00", "18:00", "19:00", "20:00"]};

describe('Test initial available times array', () => {
    it('should render initial available times', () => {
        expect(initializeTimes()).toEqual(initTime);
    });

    it('should validate it returns the same value that is provided in the state', () => {
        const action = {type: "updateTimes"};
        const initialState = initTime;
        expect(reducer(initialState, action)).toEqual({availableTimes: ["17:00", "18:00"]});
    });

});
