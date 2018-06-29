import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import style from 'styled-components';
// export default function Hello() {
//   return <DayPicker />;
// }

const DayPickerWrapper = style.div`
    height: 100%;
    max-height: 44vh
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    margin-bottom: 2vh;
    .DayPicker-wrapper, .DayPicker-Day, .DayPicker-NavBar, span {
        outline-style:none;
        box-shadow:none;
        border-color:transparent;
    }
    .DayPicker-Day {
        height: 30px;
        padding: 0;
        padding-left: 1px;
    }
    .DayPicker-Caption {
        margin-bottom: 0;
    }
    .DayPicker-Month {
        margin-top: 9px;
        margin-left: 15px;
    }
    @media all and (min-width: 575px) {
        margin-bottom: 16px;
        height: 276px;
        width: 260px;
        .DayPicker-Months {
            // width: 90%;
            margin-left: 4px;
        }
        //margin-right: 16px;
    }
`;

const DayPickerTitle = style.div`
    font-family: Helvetica-Bold;
    font-size: 16px;
    color: #333333;
    line-height: 20px;
    padding-left: 7vw;
    padding-top: 3vh;
    text-align: left;
    @media all and (min-width: 575px) {
        padding-left: 16px;
        padding-top: 16px;
    }
`;

const Calendar = style.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export default class CalendarDayPicker extends React.Component {
    state = {
        selectedDay: undefined
    }

    handleDayClick = (day, { selected }) => {
        if (selected) {
            this.props.pickDay(null);
            this.setState({ selectedDay: undefined });
        } else {
            this.props.pickDay(day);
            this.setState({ selectedDay: day });
        }
    };

    render() {
        return (
            <DayPickerWrapper>
                <DayPickerTitle>Departure date</DayPickerTitle>
                <Calendar>
                    <DayPicker 
                        onDayClick={this.handleDayClick} 
                        selectedDays={this.state.selectedDay}/>
                </Calendar>
            </DayPickerWrapper>
        );
    }
}

// const mapStateToProps = (state) => ({
//     day: state.tourReducer.toursList
// });

// const mapDispatchToProps = (dispatch, ownProps) => {
//     // getTours: () => {
//     //     dispatch(getTours());
//     // }
//     return bindActionCreators({
//         getTours
//     }, dispatch);
// };