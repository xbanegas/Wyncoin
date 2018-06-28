import React, { Component } from 'react';
import Landing from './component/Landing';
import Sidebar from './component/Sidebar';
import Signup from './component/Signup';
import Login from './component/Login';
import Navigation from './component/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import './css/style.css';
import './css/signup.css'


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route render={(props) =>
					<div>
						<Navigation {...props} />
						<Route exact path='/' component={Landing} />
						<Route path='/map' component={Sidebar} />
						<Route path='/signup' component={Signup} />
						<Route path='/login' component={Login} />
					</div>
				} />
			</BrowserRouter>
		)
	}
}

export default App;