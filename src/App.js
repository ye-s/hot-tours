import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './store';

import FiltersContainer from './containers/FiltersContainer';
import ToursListContainer from './containers/ToursListContainer';
import SortBy from './components/SortBy';

import style from 'styled-components';

import logo from './logo.svg';
import './App.css';

const ToursSectionWrapper = style.div`
    display: flex;
    flex-direction: column;
    @media all and (min-width: 575px) {
        flex-direction: column;
    }
    @media all and (min-width: 740) {
        flex-direction: row;
    }
    @media all and (min-width: 1138px) {
        flex-direction: row;
    }
`;

const ContenWrapper = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media all and (min-width: 575px) {
        margin-top: 5%;
    }
`;

class App extends Component {
    render() {
        return (
            <Provider store={createStore()}>
                <ContenWrapper>
                    <ToursSectionWrapper>
                        <SortBy/>
                        <FiltersContainer></FiltersContainer>
                        <ToursListContainer></ToursListContainer>
                    </ToursSectionWrapper>
                </ContenWrapper>
            </Provider>
        );
    }
}

export default App;
