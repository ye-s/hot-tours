import React from 'react';
import style from 'styled-components';

const TourDetailsWrapper = style.div`
    border-top: 1px solid #f2f2f2;
    width: 100%;
    box-sizing: border-box;
    order: 3;
    @media all and (min-width: 505px) {
        border-top: none;
        max-width: 238px;
        height: 238px;
        border-left: 1px solid #f2f2f2;
        order: 2;
    }
    @media all and (min-width: 755px) {
        max-width: 238px;
        order: 2;
    }
    @media all and (min-width: 1138px) {
        order: 3;
    }
`;

const PriceWrapper = style.div`
    width: 100%;
    box-sizing: border-box;
    font-family: Helvetica-Bold;
    font-size: 14px;
    color: #333333;
    line-height: 23px;
    text-align: right;
    margin-top: 4vh;
    padding-right: 10vw;
    p {
        margin-top: 0;
        margin-bottom: 5px;
    }
    @media all and (min-width: 505px) {
        width: 238px;
        padding-right: 20px;
        margin-top: 20px;
    }
`;

const Price = style.p`
    font-family: Helvetica;
    font-size: 18px;
    color: #333333;
    line-height: 23px;
`;

const DatesWrapper = style.div`
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    margin: 2vh 11vw 0 11vw;
    display: flex;
    flex-direction: row;
    padding: 3vw;
    justify-content: space-between;
    @media all and (min-width: 505px) {
        margin: 20px 20px 0 20px;
        padding: 10px;
    }
`;

const DatesBlock = style.div`
    font-family: Helvetica;
    font-size: 12px;
    color: #333333;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    div {
        text-align: left;
    }
    @media all and (min-width: 505px) {
        margin-right: 16px;
    }
`;

const SeatsBlock = style(DatesBlock)`
    align-items: flex-end;
    div {
        text-align: right;
    }
    @media all and (min-width: 505px) {
        margin-right: 14px;
    }
`;

const Warning = style.div`
    color: #fd4e4c;
`;

const Button = style.div`
    background: #009fcd;
    color: #fff;
    border: none;
    margin: 4vh auto 4vh auto;
    width: 80%;
    height: 32px;
    font-size: 14px;
    line-height: 30px;
    outline-style:none;
    box-shadow:none;
    border-color:transparent;
    text-align: center;
    cursor: pointer;
    @media all and (min-width: 505px) {
        margin: 27px auto;
        width: 200px;
    }
`;

const TourDetails = (props) =>  {
    const firstDate = props.dates[0];
    const secondDate = props.dates[1];
    const freeSeatsFirstDay = firstDate.availability;
    const freeSeatsSecondDay = secondDate.availability;
    return (
        <TourDetailsWrapper>
            <PriceWrapper>
                <p>Total price</p>
                <Price>${firstDate.price}</Price>
            </PriceWrapper>
            <DatesWrapper>
                <DatesBlock>
                    <div>{firstDate.start}</div>
                    {
                        secondDate.start 
                        ? <div>{secondDate.start}</div>
                        : <div></div>
                    }
                </DatesBlock>
                <SeatsBlock>
                    {
                        freeSeatsFirstDay < 5 
                        ? (<Warning>{freeSeatsFirstDay} {freeSeatsFirstDay < 2 ? 'seat' : 'seats' }</Warning>)
                        : (<div>{freeSeatsFirstDay} seats</div>)
                    }
                    {
                        secondDate.start 
                        ? (
                            freeSeatsSecondDay < 5 
                            ? (<Warning>{freeSeatsSecondDay} {freeSeatsSecondDay < 2 ? 'seat' : 'seats' }</Warning>)
                            : (<div>{freeSeatsSecondDay} seats</div>)
                        )
                        : <div></div>
                    }
                </SeatsBlock>
            </DatesWrapper>
            <Button>View More</Button>
        </TourDetailsWrapper>
    );

};
export default TourDetails;