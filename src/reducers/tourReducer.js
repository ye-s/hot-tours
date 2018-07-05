import * as types from '../actions/actionTypes';

export function tourReducer(state = [], action) {
    switch (action.type) {
        case types.TOURS_FETCH_SUCCESS: {
            return { ...state, toursList: action.tours, showLoader: false };
        }
        case types.TOURS_ARE_LOADING: {
            return { ...state, showLoader: action.isLoading };
        }
        case types.TOURS_GOT_ERROR: {
            return { ...state, toursHasError: action.hasError };
        }
        case types.SHOW_UPCOMING_TOURS: {
            return { ...state, isUpcomingFilterApplied: !state.isUpcomingFilterApplied };
        }
        case types.SORT_TOURS_BY: {
            return { ...state, sortBy: action.sortBy, listToSort: state.toursList };
        }
        default:
            return state;
    }
}