import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getWeather } from '../actions/index';

class Weather extends Component {
	componentDidMount() {
		console.log('anything');
		console.log(getWeather);
		this.props.getWeather(this.props.name);
		console.log(this.props.name);

	}

	render() {
		return(
			<div>
				words
			</div>
		);
	}
}

function mapStateToProps({ weather }) {
	return { weather };
	// ^destructuring weather = state.weather
}

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({ getWeather }, dispatch);
// }

export default connect(mapStateToProps, { getWeather })(Weather);