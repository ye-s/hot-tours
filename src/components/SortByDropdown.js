import React, { Component } from 'react';
import arrow from '../assets/arrow_down.svg';

import style from 'styled-components';

const SortByWrapper = style.div`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #409CD1;
    border: 1px solid #409CD1;
    font-size: 12px;
    box-sizing: border-box;
    margin: 4vh 0 4vh 0;
    @media all and (min-width: 505px) {
        width: 195px;
        display: block;
        border: none;
        background: none;
        margin: 0;
        color: #999999;
        position: absolute;
        right: -1px;
        top: 400px;
        span {
            margin-right: 16px;
            font-size: 14px;
            span {
                display: none;
            }
        }
    }
    @media all and (min-width: 755px) {
        position: absolute;
        right: 0;
        top: -64px;
        span {
            font-size: 14px;
        }
    }
`;

const DropDown = style.select`
    color: #409CD1;
    font-family: Helvetica;
    font-size: 12px;
    line-height: 16px;
    @media all and (min-width: 505px) {
        color: #333333;
        width: 130px;
        height: 44px;
        padding: 12px 10px 14px 10px;;
        font-size: 14px;
        border: 1px solid #ccc;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        box-shadow: none;
        outline: none;
        border-radius: 1px;
        background: ${(props) => props.arrow ? `url(${props.arrow})` + ' 96% / 15% no-repeat #fff': 'transparent'};
    }
`;

export default class SortByDropdown extends Component {

    applySort = (event) => {
        this.props.sortToursBy(event.target.value);
    }

    render() {
        return (
            <SortByWrapper>
                <span>Sort by<span>:</span> </span>
                <DropDown arrow={arrow} value={this.props.sortBy} onChange={this.applySort}>
                    <option value="default">Default</option>
                    <option value="price">Price</option>
                </DropDown>
            </SortByWrapper>
        );
    }

};