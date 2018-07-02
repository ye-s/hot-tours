import * as types from '../actions/actionTypes';

export function tourReducer(state = [], action) {
    switch (action.type) {
        case types.TOURS_FETCH_SUCCESS: {
            return Object.assign({}, state, {
                toursList: action.tours,
                showLoader: false
            });
        }
        case types.TOURS_ARE_LOADING: {
            return Object.assign({}, state, {
                showLoader: action.isLoading
            });
        }
        case types.TOURS_GOT_ERROR: {
            return Object.assign({}, state, {
                toursHasError: action.hasError
            });
        }
        case types.SHOW_UPCOMING_TOURS: {
            return Object.assign({}, state, {
                isUpcomingFilterApplied: !state.isUpcomingFilterApplied
            });
        }
        default:
            return state;
    }
}