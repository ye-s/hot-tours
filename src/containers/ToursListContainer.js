import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TourList from './TourList';
import { getTours } from '../actions/actionTypes';

class ToursListContainer extends Component {

}

const mapStateToProps = (state) => ({
    toursList: state.tourReducer.toursList,
    showLoader: state.tourReducer.showLoader,
    pickedDay: state.dayPickerReducer.pickedDay,
    isUpcomingFilterApplied: state.tourReducer.isUpcomingFilterApplied,
    sortBy: state.tourReducer.sortBy,
    listToSort: state.tourReducer.listToSort
    
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        getTours
    }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(TourList);