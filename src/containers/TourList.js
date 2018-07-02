import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TourImage from '../components/TourImage';
// import TourDescription from '../components/TourDescription';
// import TourDetails from '../components/TourDetails';
import PropTypes from 'prop-types';
import Tour from '../components/Tour';
import logo from '../logo.svg';

import moment from 'moment';
import style from 'styled-components';

// const TourList = style.div`
//     border: 1px solid green;
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//     width: 100%;
//     box-sizing: border-box;
//     @media all and (min-width: 505px) {
//         margin: 0 0 16px 16px;
//         max-width: 842px;
//     }
// `
const TourListWrapper = style.div`
    //border: 1px solid purple;
    //height: 238px;
    box-sizing: border-box;
    // background: #fff;
    @media all and (min-width: 505px) {
        width: 100%;
        max-width: 476px;
        flex-wrap: wrap;
    }
    // @media all and (min-width: 740px) {
    //     max-width: 476px;
    //     margin-left: 16px;
    // }
    @media all and (min-width: 1138px) {
        flex-wrap: nowrap;
        max-width: 842px;
    }
`;

const LoaderWrapper = style.div`
    width: 100%;
    height: 20vh;
    background: #fff;
    //bmax-width: 842px;
    // margin-left: 16px;
    padding: 2vh 1vw 2vh 1vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    div {
        display: inline-block;
    }
    @media all and (min-width: 505px) {
        padding-left: 40px;
        height: 238px;
        width: 476px;
    }
    @media all and (min-width: 740px) {
        width: 476px;
    }
    @media all and (min-width: 1138px) {
        width: 842px;
        margin-left: 16px;
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
    @media all and (min-width: 740px) {
        width: 476px;
    }
    @media all and (min-width: 1138px) {
        width: 842px;
    }
`;

export default class TourList extends Component {

    // state = {
    //     toursList: [],
    //     toursHasError: false, 
    //     showLoader: false
    // };

    // no extra rerender

    
    // componentWillMount() {
    //     this.props.getTours();
    // }

    componentDidMount() {
        //if (this.props.toursList.length === 0) {
            if (!this.props.toursList || (this.props.toursList && this.props.toursList.length < 1)) {
                this.props.getTours();
            }
        //}
    }

    // static getDerivedStateFromProps(props, state) {
    //     const newToursList = props.tourList;
    //     const oldToursList = state.tourList;
    //     if (newToursList === oldToursList) {
    //       return null;
    //     }
    //     return {
    //         tourList: newToursList
    //     };
    //   }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.toursList !== this.props.toursList) {
    //         this.setState({
    //             toursList: nextProps.toursList
    //         });
    //     }
    // }

    getFormatedCurrentDate() {
        const currentDate = moment().format('YYYY-MM-DD');
        console.log(currentDate);
        // add +1 because month is zero based
        // const currentDateMonth = currentDate.getMonth() < 9 ? '0' + (currentDate.getMonth() + 1) : (currentDate.getMonth() + 1);
        // let formattedDate = currentDate.getFullYear() + '-' + currentDateMonth + '-' + currentDate.getDate();
        // return formattedDate;
    }

    filterByDepartureDay(allTours) {
        const allToursLength = allTours.length;
        let upcomingTours = [];

        const currentDate = moment().format('YYYY-MM-DD');
        //let filteredTours = [];
        if (allToursLength) {
            
            for (let i = 0; i < allToursLength; i++ ) {
                const dates = allTours[i].dates;
                const datesLength = allTours[i].dates.length;
                let upcomingDates = []
                console.log(allTours[i].dates[allTours[i].dates.length - 1]);
                for (let j = 0; j < datesLength; j++) {
                    if (moment(currentDate).isBefore(dates[j].start)) {
                        console.log(moment(currentDate).isBefore(dates[j].start));
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

    // its one works
    // filterByDepartureDay(allTours) {
    //     const allToursLength = allTours.length;
    //     const upcomingTours = [];
    //     // get date in YYYY-MM-DD format
    //     const departureDay = moment(this.props.pickedDay).format('YYYY-MM-DD');
    //     const currentDate = moment().format('YYYY-MM-DD');
    //     let filteredTours = [];
    //     if (allToursLength){// && moment(currentDate).isBefore(departureDay)) {
            

    //         for (let i = 0; i < allToursLength; i++ ) {
    //             const dates = allTours[i].dates;
    //             const datesLength = allTours[i].dates.length;
    //             const upcomingDates = []
    //             for (let j = 0; j < datesLength; j++) {
    //                 if (moment(dates[j].start).isSame(departureDay)) {
    //                     filteredTours.push(allTours[i]);
    //                 }
    //             }
    //         }
    //         return filteredTours;
    //     }

    //     return allTours;
    // }

        // The 3rd inner loop is NOT making things complicated, it's saving from unnecessary checks
    filerByUpcomingTours(allTours) {
        const allToursLength = allTours.length;
        let upcomingTours = [];

        const currentDate = moment().format('YYYY-MM-DD');
        //let filteredTours = [];
        if (allToursLength) {
            
            for (let i = 0; i < allToursLength; i++ ) {
                const dates = allTours[i].dates;
                const datesLength = allTours[i].dates.length;
                let upcomingDates = []
                console.log(allTours[i].dates[allTours[i].dates.length - 1]);
                for (let j = 0; j < datesLength; j++) {
                    if (moment(currentDate).isBefore(dates[j].start)) {
                        console.log(moment(currentDate).isBefore(dates[j].start));
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

    // returns component with message when there are no tours available
    noToursMessage() {
        return (<NoToursMessage>
                    <p>Looks like there are no tours on this date :(</p>
                    <p>We would like to help you!</p>
                    <p>Please contact us by 480088888888 for personal assistance!</p>
                </NoToursMessage>);
    }

    checkForToursQuantity(tours) {
        if (tours.length > 0) {
            return tours.map(function(tourData, index){
                console.log(tourData.images[0].url);
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

    render() {
        let list = this.props.toursList || [];
        let filteredList = []
        // this.getFormatedCurrentDate();
        if (list.length && this.props.pickedDay) {
            list = this.filterByDepartureDay(list);
        }
        return (
            <TourListWrapper >
                {
                    this.props.showLoader 
                    ? (
                        <LoaderWrapper>
                            <img src={logo} className="App-logo" alt="logo" />
                            <div>Please wait for some awesome tours!</div>
                        </LoaderWrapper>)
                    :
                    this.checkForToursQuantity(list)
                }
            </TourListWrapper>
        );
    }
}

// const mapStateToProps = (state) => {
//     return { toursList: state.toursList };
// };

// TourList.propTypes = {
//     toursList: PropTypes.array.isRequired
//     // toursHasError: PropTypes.bool.isRequired,
//     // showLoader: PropTypes.bool.isRequired
//     // ,
//     // lastUpdated: PropTypes.number,
//     // dispatch: PropTypes.func.isRequired
//   }

// export default connect(mapStateToProps, null)(TourList);