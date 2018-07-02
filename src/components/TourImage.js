import React from 'react';
//import MeasureUnit from './MeasureUnit';
import Rating from './Rating';

import style from 'styled-components';

// const ImageWrapper = style.div`
//     // border: 1px solid blue;
//     // height: 436px;
//     // width: 100%;
//     // box-sizing: border-box;
//     @media all and (min-width: 505px) {
//         // max-width: 260px;
//         // margin-right: 16px;
//     }
// `
const TourImageWrapper = style.div`
    position: relative;
    order: 1;
    @media all and (min-width: 505px) {
        height: 238px;
        width: 238px;
    }
    // @media all and (min-width: 1138px) {
    //     height: 238px;
    //     width: 238px;
    //     // margin-right: 16px;
    // }
`;

const DiscountWrapper = style.div`
    position: absolute;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 45px 45px 0;
    border-color: transparent #fd3f3f transparent transparent;
    div {
        color: #fff;
        font-size: 14px;
        transform: rotate(45deg);
        // margin-left: 17px;
        // margin-top: -6px;

        width: 23px;
        padding-left: 19px;
        color: #fff;
        font-size: 14px;
        line-height: 10px;
        margin-top: 1px;
    }
`;

const Reviews = style.div`
    position: absolute;
    font-family: Helvetica;
    font-size: 10px;
    color: #fff;
    line-height: 18px;
    bottom: 5px;
    right: 16px;
`;

const Image = style.div`
    height: 50vh;
    width: 100%;
    background: ${(props) => props.background ? `url(${props.background})` + ' no-repeat center / cover': 'white'};
    box-sizing: border-box;
    @media all and (min-width: 505px) {
        height: 238px;
        width: 238px;
        // margin-right: 16px;
    }
`;

const TourImage = (props) =>  {
    return (
        <TourImageWrapper>
            {
                props.discount 
                ? <DiscountWrapper><div>-{props.discount}</div></DiscountWrapper>
                : null
            }
            <Image background={props.background}></Image>
            <Rating rating={props.rating} />
            <Reviews>{props.reviews} reviews</Reviews>
        </TourImageWrapper>
    );

};
export default TourImage;