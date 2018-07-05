import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './store';

import FiltersContainer from './containers/FiltersContainer';
import ToursListContainer from './containers/ToursListContainer';
// import SortByDropdownContainer from './containers/SortByDropdownContainer';

import style, { injectGlobal } from 'styled-components';

injectGlobal`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background-color: #f0f0f0;
    }  
`;
const ToursSectionWrapper = style.div`
    display: flex;
    flex-direction: column;
    @media all and (min-width: 505px) {
        position: relative;
        flex-direction: column;
    }
    @media all and (min-width: 755px) {
        position: relative;
        flex-direction: row;
    }
    @media all and (min-width: 1138px) {
        position: relative;
        flex-direction: row;
    }
`;

const ContentWrapper = style.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media all and (min-width: 505px) {
        margin-top: 12%;
    }
`;

class App extends Component {
    render() {
        return (
            <Provider store={createStore()}>
                <ContentWrapper>
                    <ToursSectionWrapper>
                        {/* <SortByDropdownContainer/> */}
                        <FiltersContainer/>
                        <ToursListContainer/>
                    </ToursSectionWrapper>
                </ContentWrapper>
            </Provider>
        );
    }
}

export default App;
