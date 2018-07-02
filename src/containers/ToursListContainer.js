import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TourList from './TourList';
// import PropTypes from 'prop-types';
import { getTours } from '../actions/actionTypes';

import style from 'styled-components';

// const TourListWrapper = style.div`
//     border: 1px solid green;
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//     width: 100%;
//     box-sizing: border-box;
//     @media all and (min-width: 505px) {
//         margin: 0 0 16px 16px;
//         max-width: 842px;
//     }
// `

class ToursListContainer extends Component {

    state = {
        // toursList: [],
        // toursHasError: false, 
        // showLoader: false
    };

    // componentDidMount() {
    //     //if (this.props.toursList.length === 0) {
    //         this.props.getTours();
    //     //}
    // }

    // getDerivedStateFromProps(props, state) {
    //     const newToursList = props.tourList;
    //     const oldToursList = state.tourList;
    //     if (newToursList === oldToursList) {
    //       return null;
    //     }
    //     return {
    //         tourList: newToursList
    //     };
    //   }

    // render () {
    //     return (
    //         <TourListWrapper>
    //                 <TourList showLoader={this.props.showLoader} toursList={this.props.toursList}>
    //                 </TourList>
    //         </TourListWrapper>
    //     );
    // }

}

// ToursListContainer.propTypes = {
//     toursList: PropTypes.array.isRequired
//     // toursHasError: PropTypes.bool.isRequired,
//     // showLoader: PropTypes.bool.isRequired
//     // ,
//     // lastUpdated: PropTypes.number,
//     // dispatch: PropTypes.func.isRequired
//   }

const mapStateToProps = (state) => ({
    toursList: state.tourReducer.toursList,
    showLoader: state.tourReducer.showLoader,
    pickedDay: state.dayPickerReducer.pickedDay
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        getTours
    }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(TourList);