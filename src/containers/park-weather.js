import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import GoogleMap from '../components/park_map';

import { getWeather } from '../actions/index';

class Weather extends Component {
	componentDidMount() {
		// console.log('anything');
		// console.log(getWeather);
		// can't get the name from the params (reason unknown) so i'm just using the prop
		this.props.getWeather(this.props.name);
		console.log(this.props.weather + "this.props.weather");
	}

	calculateAverage(data) {
		return _.round(_.sum(data)/data.length);
	}
	// ^keeps saying this is undefined. why!

	renderWeather(parkName) {
		const name = parkName.city.name;
		// pull temperatures out of weather.list.main.temp using map
		const temps = parkName.list.map(weather => weather.main.temp);
		console.log(temps)
		const lon = parkName.city.coord.lon;
		const lat = parkName.city.coord.lat;

		return (
			<div key={name}>
			<h5>{name}</h5>
			<div style={{width: 200 , height: 200 }}><GoogleMap lon={lon} lat={lat} /></div>
			<h6>Temperature (K)</h6>
			<div>
				<Sparklines svgWidth={210} svgHeight={120} data={temps}>
					<SparklinesLine color="blue" />
					<SparklinesReferenceLine type="avg" />
				</Sparklines>
				
			</div>
			</div>
		);
	}

	render() {
		return(
			<div>
				
				{this.props.weather.map(this.renderWeather)}
				
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
// export default connect(mapStateToProps, mapDispatchToProps)(Weather);




