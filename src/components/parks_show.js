import React, { Component } from 'react';
import { connect } from 'react-redux';

class ParksShow extends Component {
	render() {
		return (
			<div>
				{this.props.park.location}
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