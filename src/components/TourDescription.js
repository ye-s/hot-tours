import React from 'react';
//import MeasureUnit from './MeasureUnit';

import style from 'styled-components';

const TourDescriptionWrapper = style.div`
    box-sizing: border-box;
    padding: 2vh 6vw 2vh 9vw;
    text-align: left;
    // position: relative;
    order: 2;
    @media all and (min-width: 505px) {
        border-top: 1px solid #f2f2f2;
        height: 238px;
        width: 476px;
        padding: 16px 18px 0px 22px;
        // margin-right: 16px;
        order: 3;
    }
    @media all and (min-width: 740px) {
        //max-width: 370px;
        order: 3;
    }
    @media all and (min-width: 1138px) {
        border-top: none;
        max-width: 370px;
        order: 2;
    }
`;

const Description = style.div`
    font-family: Helvetica-Oblique;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 21px;
    // @media all and (min-width: 505px) {
    //     border-top: 1px solid #f2f2f2;
    //     height: 238px;
    //     width: 476px;
    // }
    // @media all and (min-width: 1138) {
    //     max-width: 370px;
    // }
`;


const DescriptionTitle = style.p`
    font-family: Helvetica-Bold;
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 10px;
`;

const TitleItem = style.p`
    font-family: Helvetica;
    font-size: 10px;
    color: #999999;
    line-height: 14px;
    margin-bottom: 3px;
`;

const ValueItem = style.p`
    font-family: Helvetica;
    font-size: 12px;
    color: #333333;
    line-height: 12px;
    margin-bottom: 3px;
`;

const DetailsWrapper = style.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

const TitlesWrapper = style.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`;

const ItemsWrapper = style(TitlesWrapper)`
    // display: flex;
    // flex-direction: column;
    // align-items: left;
    margin-left: 22vw;
    @media all and (min-width: 505px) {
        margin-left: 30px;
    }
`;

const TourDescription = (props) =>  {
    return (

        <TourDescriptionWrapper>
            <DescriptionTitle>{props.name}</DescriptionTitle>
            <Description>{props.description}</Description>
            <DetailsWrapper>
                <TitlesWrapper>
                    <TitleItem>DAYS</TitleItem>
                    <TitleItem>DESTINATIONS</TitleItem>
                    <TitleItem>STARTS/ENDS</TitleItem>
                    <TitleItem>OPERATOR</TitleItem>
                </TitlesWrapper>
                <ItemsWrapper>
                    <ValueItem>{props.tourLength} days</ValueItem>
                    <ValueItem>{props.citiesNumber} cities</ValueItem>
                    <ValueItem>{props.startCity} / {props.endCity}</ValueItem>
                    <ValueItem>{props.operator}</ValueItem>
                </ItemsWrapper>
            </DetailsWrapper>
        </TourDescriptionWrapper>
    );

};

export default TourDescription;