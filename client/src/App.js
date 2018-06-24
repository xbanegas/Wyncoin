import React, { Component } from 'react';
import Landing from './component/Landing';
import Map from './component/Map';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/style.css';


class App extends Component {
	render() {
		return ( 
			<BrowserRouter>
			<div>
				<Route exact path='/' component={Landing} />
				<Route path ='/map' component={Map} />
				
			</div>
			</BrowserRouter>
		)
	}
}

export default App;