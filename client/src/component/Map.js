import React, { Component } from 'react';
import {initMap} from '../utils/mapUtils';
import axios from 'axios';
import {Button} from 'semantic-ui-react';
import '../css/map.css';


export default class Map extends Component {
	constructor(){
		super();
		this.state={directionLoc:{}, instructions:false, map:{}}
		this.mapStyle = {
			position: 'absolute',
			top: 0,
			bottom: 0,
			width: '100%'
		};
		this.addDirectionLoc = this.addDirectionLoc.bind(this);
		this.handleDirectionClick = this.handleDirectionClick.bind(this);
	}
	componentDidMount() {
		let map = initMap(this.mapContainer,this.addDirectionLoc ,this.handleDirectionClick);
		this.setState({map});
	}

	addDirectionLoc(directionLoc){
		// console.log('hellodirection');
		// this.setState({directionLoc});
	}

	getLocation (){
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	}

	async getRoute(destLoc) {
		let userLoc = await this.getLocation();
		let userLng = userLoc.coords.longitude;
		let userLat = userLoc.coords.latitude;
		let routeData;
		routeData = await axios.get(`/route?orig=${userLng},${userLat}&dest=${destLoc.lng},${destLoc.lat}`);
		// console.log(routeData)
		return routeData;
	}

	async handleDirectionClick(destLoc){
		console.log('direction req to', destLoc);
		let routeData = await this.getRoute(destLoc)
		return routeData;
	}

	toggleInstructions(){
		document.getElementById("instructions").className = "hidden";
		console.log(this.state);
	}

	render() {
		return (
			<div>
				<div id="mapContainer" style={{ position: "relative", }}>
					<div style={this.mapStyle} ref={el => this.mapContainer = el} />
				</div>
				<div id='instructions' className="hidden">
					<Button onClick={this.toggleInstructions}>X</Button>
				</div>
			</div>
		)
	}
}