import React, { Component } from 'react';

import style from 'styled-components';

const Star = style.span`
    color: #ffbe3a;
    &.empty-star {
        color: transparent;
    }
`;

const RatingWrapper = style.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
`;

export default class Rating extends Component {

    countStarts(rating) {
        let starRating = [];
        const wholeNumber = parseInt(rating);
        let halfOrZero = rating - wholeNumber;

        for (let i = 1; i <= 5; i++) {
            if (i <= wholeNumber) {
                starRating.push(
                    <Star key={i} className="fa fa-star"/>
                );
            } else {
                if (halfOrZero) {
                    halfOrZero = 0;
                    starRating.push(
                        <Star key={i} className="fa fa-star-half-o"/>
                    );
                } else {
                    starRating.push(
                        <Star key={i} className="fa fa-star-o"/>
                    );
                }
            }
        }
        return starRating;
    }

    render() {
    let rating = this.props.rating;
    const stars = this.countStarts(rating);
        return (
            <RatingWrapper>
                { stars }
            </RatingWrapper>
        );
    };

};