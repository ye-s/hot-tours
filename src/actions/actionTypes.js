import * as configs from '../configs';
import moment from 'moment';

export const TOURS_ARE_LOADING = 'TOURS_ARE_LOADING';
export const TOURS_GOT_ERROR = 'TOURS_GOT_ERROR';
export const TOURS_FETCH_SUCCESS = 'TOURS_FETCH_SUCCESS';
export const DAY_PICKED = 'DAY_PICKED';
export const SHOW_UPCOMING_TOURS = 'SHOW_UPCOMING_TOURS';

export function toursAreLoading(bool) {
    return {
        type: 'TOURS_ARE_LOADING',
        isLoading: bool
    };
}

export function toursGotError(bool) {
    return {
        type: 'TOURS_GOT_ERROR',
        hasError: bool
    };
}

export function toursFetchSuccess(tours) {
    return {
        type: 'TOURS_FETCH_SUCCESS',
        tours
    };
}

export function pickDay(day) {
    return {
        type: 'DAY_PICKED',
        day
    };
}

export function showOnlyUpcomingTours() {
    return {
        type: 'SHOW_UPCOMING_TOURS'
    };
}

// const getTours = () => {};
export function getTours() {
    const tourApiURL = configs.GET_TOURS_API_URL;
    return (dispatch, getState) => {
        dispatch(toursAreLoading(true));
        
        fetch(tourApiURL).then(handleErrors)
            .then(response => response.json())
            .then(response => dispatch(toursFetchSuccess(response)))
            .catch(error => dispatch(toursGotError(true)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}