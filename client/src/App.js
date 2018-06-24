import React, { Component } from 'react';
import Landing from './component/Landing';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/style.css';


class App extends Component {
	render() {
		return ( 
			<BrowserRouter>
			<div>
				<Route exact path='/' component={Landing} />
				
			</div>
			</BrowserRouter>
		)
	}
}

export default App;