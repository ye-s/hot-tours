import React from 'react';
//import MeasureUnit from './MeasureUnit';

import style from 'styled-components';

const SortByWrapper = style.div`
    // border: 1px solid blue;
    // box-sizing: border-box;
    // padding: 2vh 6vw 2vh 5vw;
    // text-align: left;
    // // position: relative;
    // @media all and (min-width: 575px) {
    //     height: 238px;
    //     max-width: 370px;
    //     padding: 16px 18px 0px 22px;
    //     // margin-right: 16px;
    // }
`;

const Description = style.div`
    font-family: Helvetica-Oblique;
    font-size: 12px;
    letter-spacing: 0;
    line-height: 21px;
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
    // position: absolute;
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
    @media all and (min-width: 575px) {
        margin-left: 30px;
    }
`;

const SortBy = (props) =>  {
    return (

        <SortByWrapper>
        </SortByWrapper>
    );

};

export default SortBy;