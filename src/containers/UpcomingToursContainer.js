import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showOnlyUpcomingTours } from '../actions/actionTypes';
import UpcomingToursFilter from '../components/UpcomingToursFilter';


class UpcomingToursContainer extends Component {
    
}


const mapStateToProps = (state) => ({
    isUpcomingFilterApplied: state.tourReducer.isUpcomingFilterApplied || false
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        showOnlyUpcomingTours
    }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingToursFilter);