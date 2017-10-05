import React, { Component } from 'react';

const google = window.google;

class GoogleMap extends Component {
	comonentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 20,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		return <div ref="map" />
	}
}

export default GoogleMap;