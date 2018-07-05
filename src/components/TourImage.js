import React from 'react';
import Rating from './Rating';

import heart from '../assets/heart.svg';
import style from 'styled-components';

const TourImageWrapper = style.div`
    position: relative;
    width: 100%;
    order: 1;
    @media all and (min-width: 505px) {
        height: 238px;
        width: 238px;
    }
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
        margin-left: -4px;
        margin-top: 0px;

        width: 23px;
        padding-left: 19px;
        color: #fff;
        font-size: 14px;
        line-height: 10px;
        margin-top: 1px;
        @media all and (min-width: 505px) {
            margin-left: 0;
        }
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
    }
`;

const HeartIcon = style.img`
    position: absolute;
    width: 10vw;
    height: 10vw;
    bottom: 20vh;
    left: 45vw;
    @media all and (min-width: 505px) {
        width: 30px;
        height: 30px;
        bottom: 100px;
        left: 104px;
    }
`

const TourImage = (props) =>  {
    return (
        <TourImageWrapper>
            {
                props.discount 
                ? <DiscountWrapper><div>-{props.discount}</div></DiscountWrapper>
                : null
            }
            <Image background={props.background}/>
            <HeartIcon src={heart}/>
            <Rating rating={props.rating} />
            <Reviews>{props.reviews} reviews</Reviews>
        </TourImageWrapper>
    );

};
export default TourImage;