import React, { Component } from 'react';
import Tour from '../components/Tour';
import logo from '../assets/logo.svg';

import moment from 'moment';
import style, { keyframes } from 'styled-components';

const TourListWrapper = style.div`
    box-sizing: border-box;
    @media all and (min-width: 505px) {
        width: 100%;
        max-width: 476px;
        flex-wrap: wrap;
    }
    @media all and (min-width: 1138px) {
        flex-wrap: nowrap;
        max-width: 842px;
    }
`;

const rotate360 = keyframes`
    from { 
        transform: rotate(0deg); 
    }
    to { 
        transform: rotate(360deg); 
    }
`;

const LoaderWrapper = style.div`
    width: 100%;
    height: 20vh;
    background: #fff;
    padding: 2vh 1vw 2vh 1vw;
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
        display: inline-block;
    }
    img {
        animation: ${rotate360} infinite 20s linear;
        height: 80px;
    }
    @media all and (min-width: 505px) {
        padding: 0;
        height: 238px;
        width: 476px;
    }
    @media all and (min-width: 1138px) {
        width: 842px;
    }
`;

const NoToursMessage = style.div`
    width: 100%;
    height: 50vh;
    background: #fff;
    font-family: Helvetica-Bold;
    font-size: 16px;
    color: #333333;
    line-height: 23px;
    text-align: center;
    padding: 30px 20px 15px 20px;
    @media all and (min-width: 505px) {
        height: 238px;
        width: 476px;
    }
    @media all and (min-width: 1138px) {
        width: 842px;
    }
`;

export default class TourList extends Component {

    componentDidMount() {
        if (!this.props.toursList || (this.props.toursList && this.props.toursList.length < 1)) {
            this.props.getTours();
        }
    }

    filterByDepartureDay = (allTours) => {
        const upcomingTours = this.filerByUpcomingTours(allTours);
        const toursLength = upcomingTours.length;

        // get date in YYYY-MM-DD format
        const departureDay = moment(this.props.pickedDay).format('YYYY-MM-DD');
        let filteredTours = [];
        if (toursLength) {
            

            for (let i = 0; i < toursLength; i++ ) {
                // filter for only future days
                const dates = upcomingTours[i].dates;
                const datesLength = upcomingTours[i].dates.length;
                let upcomingDates = [];
                for (let j = 0; j < datesLength; j++) {
                    if (moment(dates[j].start).isSame(departureDay)) {
                        for (let k = j; k < datesLength; k++) {
                            upcomingDates.push(dates[k]);
                        }
                        break;
                    }
                }
                if (upcomingDates.length) {
                    upcomingTours[i].dates = upcomingDates;
                    filteredTours.push(upcomingTours[i]);
                }
            }
            return filteredTours;
        }

        return upcomingTours;
    }

    // returns only future tours
    // The 3rd inner loop is NOT making things complicated, it's saving from unnecessary checks
    filerByUpcomingTours = (allTours) => {
        const allToursLength = allTours.length;
        let upcomingTours = [];

        const currentDate = moment().format('YYYY-MM-DD');
        //let filteredTours = [];
        if (allToursLength) {
            
            for (let i = 0; i < allToursLength; i++ ) {
                const dates = allTours[i].dates;
                const datesLength = allTours[i].dates.length;
                let upcomingDates = []
                for (let j = 0; j < datesLength; j++) {
                    if (moment(currentDate).isBefore(dates[j].start)) {
                        for (let k = j; k < datesLength; k++) {
                            upcomingDates.push(dates[k]);
                        }
                        break;
                    }
                }
                if (upcomingDates.length) {
                    allTours[i].dates = upcomingDates;
                    upcomingTours.push(allTours[i]);
                }
            }
            return upcomingTours;
        }
        return allTours;
    }

    // returns tours list or message when there are no tours available
    checkForToursQuantity = (tours) => {
        if (tours && tours.length > 0) {
            return tours.map(function(tourData, index){
                return <Tour key={index} tourData={tourData}></Tour>;
            });
        } else {
            return (<NoToursMessage>
                        <p>Looks like there are no tours on this date :(</p>
                        <p>We would like to help you!</p>
                        <p>Please contact us by 480088888888 for personal assistance!</p>
                    </NoToursMessage>);
        }
    }

    sortTours = (unsortedTours) => {
        if (this.props.sortBy === 'price') {
            // make copy of toursList array
            let sortedTours = JSON.parse(JSON.stringify(unsortedTours));
            sortedTours.sort((currentTour, nextTour) => {
                const currentPrice = currentTour.dates[0].usd;
                const nextPrice = nextTour.dates[0].usd;
                return currentPrice - nextPrice;
            });
            return sortedTours;
        }

        return unsortedTours;
    }

    render() {
        let list = this.props.toursList || [];
        if (list.length > 0) {
            if (list.length && this.props.isUpcomingFilterApplied) {
                list = this.filerByUpcomingTours(list);
            }
            if (list.length && this.props.pickedDay) {
                list = this.filterByDepartureDay(list);
            }
            list = this.sortTours(list);
        }
        return (
            <TourListWrapper >
                {
                    this.props.showLoader 
                    ? (
                        <LoaderWrapper>
                            <img src={logo} alt="logo" />
                            <div>Please wait for some awesome tours!</div>
                        </LoaderWrapper>)
                    :
                    this.checkForToursQuantity(list)
                }
            </TourListWrapper>
        );
    }
}