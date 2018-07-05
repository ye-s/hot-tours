import React, { Component } from 'react';
import TourImage from './TourImage';
import TourDescription from './TourDescription';
import TourDetails from './TourDetails';

import moment from 'moment';
import style from 'styled-components';

const TourWrapper = style.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-bottom: 4vh;
    @media all and (min-width: 505px) {
        max-width: 476px;
        height: 476px;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }
    @media all and (min-width: 755px) {
        max-width: 476px;
        height: 476px;
        margin-bottom: 30px;
    }
    @media all and (min-width: 1138px) {
        width: 100%;
        height: 238px;
        flex-wrap: nowrap;
        max-width: 842px;
    }
`;

export default class Tour extends Component {

    cutDescription(description) {
        if (description.length > 123) {
            let shortDescription = '"' + description.slice(0, 122) + '..."';
            return shortDescription;
        }
        return '"' + description + '"';
    }

    prepareDatesObj(dates) {
        let newDates = [];
        newDates.push(
            {
                start: moment(dates[0].start).format('DD MMM'),
                availability: dates[0].availability,
                price: dates[0].usd
            },
            {
                start: moment(dates[1].start).format('DD MMM'),
                availability: dates[1].availability
            }
        );
        return newDates;
    }

    formatDate(date) {
        const dateObj = new Date(date);
        const locale = "en-us";
        const month = dateObj.toLocaleString(locale, { month: "short" });
        const day = dateObj.getDate();
        return day + ' ' + month;
    }


    render () {
        const description = this.cutDescription(this.props.tourData.description);
        const { length: tourLength, name, 
                operator_name: operator, cities, dates } = this.props.tourData;
        const startCity = cities[0].name;
        const endCity = cities[cities.length -1].name;
        const citiesNumber = cities.length;
        const newDates = this.prepareDatesObj(dates);
        const discount = this.props.tourData.dates[0].discount || 0;

        return (
            <TourWrapper>
                <TourImage 
                    rating={this.props.tourData.rating}
                    reviews={this.props.tourData.reviews}
                    background={this.props.tourData.images[0].url}
                    discount={discount}/>
                <TourDescription 
                    name={name} 
                    description={description} 
                    tourLength={tourLength}
                    startCity={startCity}
                    endCity={endCity}
                    operator={operator}
                    citiesNumber={citiesNumber}/>
                <TourDetails price={dates[0].price} dates={newDates}/>
            </TourWrapper>
        );
    }
}