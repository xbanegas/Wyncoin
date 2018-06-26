import React, { Component } from 'react';
import {initMap} from '../utils/mapUtils';
import '../css/map.css';


export default class Map extends Component {
	componentDidMount() {
		initMap(this.mapContainer);
	}

	render() {
		const style = {
			position: 'absolute',
			top: 0,
			bottom: 0,
			width: '100%'
		};
		return (

				<div id="mapContainer" style={{ position: "relative", }}>
					<div style={style} ref={el => this.mapContainer = el} />
				</div>

		)
	}
}