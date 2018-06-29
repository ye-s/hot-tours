import React, { Component } from 'react';
import TourImage from './TourImage';
import TourDescription from './TourDescription';
import TourDetails from './TourDetails';

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
const TourWrapper = style.div`
    // height: 238px;
    //width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    @media all and (min-width: 575px) {
        max-width: 476px;
        height: 476px;
        flex-direction: row;
        flex-wrap: wrap;
        //max-width: 476px;
        margin-bottom: 30px;
        // flex-direction: row;
        // margin: 0 0 16px 16px;
    }
    @media all and (min-width: 740px) {
        max-width: 476px;
        height: 476px;
        //flex-direction: row;
        //max-width: 476px;
        margin-bottom: 30px;
        // flex-direction: row;
        // margin: 0 0 16px 16px;
    }
    @media all and (min-width: 1138px) {
        width: 100%;
        height: 238px;
        flex-wrap: nowrap;
        //flex-direction: row;
        max-width: 842px;
        margin-bottom: 30px;
        // flex-direction: row;
        // margin: 0 0 16px 16px;
    }
`
//const backgroundImage = props.tourData.images[0];
// ${ props => props.tourData[0] ? url(${props.tourData[0]}) : "purple"};
//${props => `url(${props.tourData.images[0]}) no-repeat top center`};
//${props => `url(${props.tourData.images[0]}) no-repeat top center`};
const TourImageWrapper = style.div`

`

// const TourImage = style.div`
//     border: 1px solid blue;
//     height: 50vh;
//     width: 100%;
//     background: ${(props) => props.background ? `url(${props.background})` + ' no-repeat center / cover': 'white'};
//     box-sizing: border-box;
//     @media all and (min-width: 575px) {
//         height: 238px;
//         width: 238px;
//         // margin-right: 16px;
//     }
// `

// const TourDescriptionWrapper = style.div`
//     border: 1px solid blue;
//     height: 37vh;
//     width: 100%;
//     box-sizing: border-box;
//     padding: 16px 18px 0px 22px;
//     text-align: left;
//     @media all and (min-width: 575px) {
//         height: 238px;
//         max-width: 370px;
//         // margin-right: 16px;
//     }
// `

// const TourDescription = style.div`
//     font-family: Helvetica-Oblique;
//     font-size: 12px;
//     letter-spacing: 0;
//     line-height: 21px;
// `


// const TourDescriptionTitle = style.p`
//     font-family: Helvetica-Bold;
//     font-size: 18px;
//     margin-top: 0;
//     margin-bottom: 10px;
// `

// const TourDetails = style.div`
//     border: 1px solid blue;
//     height: 37vh;
//     width: 100%;
//     box-sizing: border-box;
//     @media all and (min-width: 575px) {
//         height: 238px;
//         max-width: 238px;
//         // margin-right: 16px;
//     }
// `

export default class Tour extends Component {

    cutDescription(description) {
        if (description.length > 123) {
            let shortDescription = '\"' + description.slice(0, 122) + '..."';
            return shortDescription;
        }
        return '\"' + description + '\"';
    }

    prepareDatesObj(dates) {
        let newDates = [];
        newDates.push(
            {
                start: moment(dates[0].start).format('DD MMM'),
                // this.formatDate(dates[0].start),
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