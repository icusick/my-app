// import axios to handle apie request
import axios from 'axios';

const API_KEY = '4b7edebc57349e5aa4f637a4fe98af59';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function selectPark(park) {
	return {
		type: 'PARK_SELECTED', 
		payload: park
	}
};

export function getWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	console.log(request);

	return {
		// type: 'FETCH_WEATHER',
		type: FETCH_WEATHER, 
		payload: request
	};
}