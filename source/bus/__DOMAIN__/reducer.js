// Types
import { types } from './types';

initialState = {};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.TYPE:
            return state;

        default:
            return state;
    }
};