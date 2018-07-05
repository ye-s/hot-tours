import * as types from '../actions/actionTypes';

export function dayPickerReducer(state = [], action) {
    switch (action.type) {
        case types.DAY_PICKED: {
            return { ...state, pickedDay: action.day };
        }
        default:
            return state;
    }
}