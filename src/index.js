import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

import ParksIndex from './components/parks_index.js';
import ParksShow from './components/parks_show.js';
import reducers from './reducers';
// import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/parks/:name" component={ParksShow} />
					<Route path="/" component={ParksIndex} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));

