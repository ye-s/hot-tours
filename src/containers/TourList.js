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
//     @media all and (min-width: 575px) {
//         margin: 0 0 16px 16px;
//         max-width: 842px;
//     }
// `
const TourListWrapper = style.div`
    //border: 1px solid purple;
    //height: 238px;
    box-sizing: border-box;
    // background: #fff;
    @media all and (min-width: 575px) {
        width: 100%;
        max-width: 476px;
        flex-wrap: wrap;
    }
    // @media all and (min-width: 740px) {
    //     max-width: 476px;
    //     margin-left: 16px;
    // }
    @media all and (min-width: 1100px) {
        flex-wrap: nowrap;
        max-width: 842px;
        margin-left: 16px;
    }
`;

const LoaderWrapper = style.div`
    width: 100%;
    //bmax-width: 842px;
    // margin-left: 16px;
    @media all and (min-width: 740px) {
        max-width: 476px;
        margin-left: 16px;
    }
    @media all and (min-width: 1100px) {
        max-width: 842px;
        margin-left: 16px;
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
            this.props.getTours();
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
        const upcomingTours = [];
        // get date in YYYY-MM-DD format
        const departureDay = moment(this.props.pickedDay).format('YYYY-MM-DD');
        const currentDate = moment().format('YYYY-MM-DD');
        let filteredTours = [];
        if (allToursLength){// && moment(currentDate).isBefore(departureDay)) {
            

            for (let i = 0; i < allToursLength; i++ ) {
                const dates = allTours[i].dates;
                const datesLength = allTours[i].dates.length;
                const upcomingDates = []
                for (let j = 0; j < datesLength; j++) {
                    if (moment(dates[j].start).isSame(departureDay)) {
                        filteredTours.push(allTours[i]);
                    }
                }
            }
            return filteredTours;
        }

        return allTours;
    }

        // The 3rd inner loop is NOT making things complicated, it's saving from unnecessary checks
    sortByUpcomingTours(allTours) {
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
                            <div>Loading for more tours!</div>
                        </LoaderWrapper>)
                    :
                    list.map(function(tourData, index){
                        console.log(tourData.images[0].url);
                        return <Tour key={index} tourData={tourData}></Tour>;
                    })
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