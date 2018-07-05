import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortToursBy } from '../actions/actionTypes';

import SortByDropdown from '../components/SortByDropdown';

class SortByDropdownContainer extends Component {
    
}

const mapStateToProps = (state) => ({
    sortBy: state.tourReducer.sortBy || false
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        sortToursBy
    }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(SortByDropdown);