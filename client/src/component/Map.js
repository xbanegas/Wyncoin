import React, { Component } from 'react';
import {initMap} from '../utils/mapUtils';
import '../css/map.css';


export default class Map extends Component {
	constructor(){
		super();
		this.state={directionLoc:{}}
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
		initMap(this.mapContainer,this.addDirectionLoc ,this.handleDirectionClick);
	}

	addDirectionLoc(directionLoc){
		this.setState({directionLoc});
	}

	handleDirectionClick(){
		console.log('helllooodirection');
	}

	render() {
		return (
				<div id="mapContainer" style={{ position: "relative", }}>
					<div style={this.mapStyle} ref={el => this.mapContainer = el} />
				</div>

		)
	}
}