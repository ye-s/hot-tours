import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
import { pickDay } from '../actions/actionTypes';

import style from 'styled-components';
import CalendarDayPicker from '../components/DayPicker';

class DayPickerContainer extends Component {

    state = {
        // toursList: [],
        // toursHasError: false, 
        // showLoader: false
    };

}

const mapStateToProps = (state) => ({
    pickedDay: state.dayPickerReducer.pickedDay
});

const mapDispatchToProps = (dispatch, ownProps) => {
    // getTours: () => {
    //     dispatch(getTours());
    // }
    return bindActionCreators({
        pickDay
    }, dispatch);
  };

//export default connect(mapStateToProps, mapDispatchToProps)(TourList);
export default connect(mapStateToProps, mapDispatchToProps)(CalendarDayPicker);