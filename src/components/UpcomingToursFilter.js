import React, { Component } from 'react';

import style from 'styled-components';

const FilterWrapper = style.div`
    background: #fff;

    width: 100%;
    height: 19vh;
    margin-bottom: 2vh;
    @media all and (min-width: 505px) {
        margin-bottom: 16px;
        width: 260px;
        height: 90px;
    }
`;

const FilterTitle = style.div`
    font-family: Helvetica-Bold;
    font-size: 16px;
    color: #333333;
    line-height: 20px;
    padding-left: 7vw;
    padding-top: 3vh;
    text-align: left;
    @media all and (min-width: 505px) {
        padding-left: 16px;
        padding-top: 16px;
    }
`;

const UpcomingToursButton = style.div`
    width: 80%;
    height: 32px;
    font-size: 14px;
    line-height: 30px;
    background: #04dc77;
    color: #fff;
    text-align: center;
    margin: 4vh auto 4vh auto;
    cursor: pointer;
    @media all and (min-width: 505px) {
        margin: 7px auto 15px;
        width: 200px;
    }
`;

const AllToursButton = style(UpcomingToursButton)`
    background: #009fcd;
`;

export default class UpcomingToursFilter extends Component {
    
    applyFilter = () => {
        this.props.showOnlyUpcomingTours();
    }

    render() {
        return (<FilterWrapper>
                    <FilterTitle>All / Upcoming Tours</FilterTitle>
                        {
                            this.props.isUpcomingFilterApplied 
                            ? <AllToursButton onClick={this.applyFilter}>Show all Tours</AllToursButton>
                            : <UpcomingToursButton onClick={this.applyFilter}>Show upcoming Tours</UpcomingToursButton>
                        }
                </FilterWrapper>
            );
    }
}

