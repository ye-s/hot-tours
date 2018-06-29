import React, { Component } from 'react';
import style from 'styled-components';
import DayPickerContainer from './DayPickerContainer'

const FiltersWrapper = style.div`
    width: 100vw;
    box-sizing: border-box;
    @media all and (min-width: 575px) {
        max-width: 260px;
        margin-right: 16px;
    }
`

const FiltersTitle = style.div`
    margin-top: 25px;
    height: 10vh;
    width: 100%;
    box-sizing: border-box;
    background: #579bcc;
    text-align: left;
    font-family: Helvetica-Bold;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 20px;
    padding: 3.5vh 0 4vh 10vw;
    margin-bottom: 2vh;
    @media all and (min-width: 575px) {
        margin-top: 0;
        padding: 17px 0 14px 24px;
        width: 260px;
        height: 51px;
        margin-bottom: 9px;
        span {
            text-align: left;
            // margin: 17px 0 14px 24px;
        }
    }
`

export default class FiltersContainer extends Component {
    render () {
        return (
            <FiltersWrapper>
                <FiltersTitle><span>Filter by:</span></FiltersTitle>
                <DayPickerContainer/>
            </FiltersWrapper>
        );
    }

}