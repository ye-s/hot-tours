import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pickDay } from '../actions/actionTypes';

import CalendarDayPicker from '../components/DayPicker';

class DayPickerContainer extends Component {

}

const mapStateToProps = (state) => ({
    pickedDay: state.dayPickerReducer.pickedDay
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        pickDay
    }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDayPicker);