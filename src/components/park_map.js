import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';



class GoogleMap extends Component {


	render() {
		return (
			
			<Map 
				google={this.props.google} 
				zoom={12}
				initialCenter={{
            		lat:  this.props.lat ,
            		lng:  this.props.lon 
          		}}
			></Map>
			

		);
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBisoAT_PP5ybV9UXfIsVktOVF4jopAYgg'
})(GoogleMap);

// You have included the Google Maps API multiple times on this page. This may cause unexpected errors.
// invariant.js:44 Uncaught (in promise) Error: Attempted to update component `Map` that has already been unmounted (or failed to mount)