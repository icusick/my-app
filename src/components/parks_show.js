import React, { Component } from 'react';
import { connect } from 'react-redux';

import Weather from '../containers/park-weather';

class ParksShow extends Component {
	render() {
		return (
			<div>
			<div>
				{this.props.park.location}
			</div>
			<div>
				<Weather name={this.props.park.name} />
			</div>
			</div>
		);
	}
}





function mapStateToProps(state) {
  return {
    park: state.activePark
  };
}

export default connect(mapStateToProps)(ParksShow);