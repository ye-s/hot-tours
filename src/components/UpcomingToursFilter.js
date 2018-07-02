import React, { Component } from 'react';

import style from 'styled-components';

export default class UpcomingToursFilter extends Component {
    
    componentDidMount() {
        this.props.showOnlyUpcomingTours();
    }
    applyFilter() {
        this.props.showOnlyUpcomingTours();
    }

    render() {
        
        return (<div>
                    <h2>Counter</h2>
                    <div>
                        {/* isFilterApplied={this.props.isUpcomingFilterApplied} */}
                        <button onClick={this.applyFilter}>Show only upcoming Tours</button>
                    </div>
                </div>
            );
    }
}

