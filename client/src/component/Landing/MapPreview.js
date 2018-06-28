import React, { Component } from 'react';
import '../../css/mapPreview.css';

export default class MapPreview extends Component {
	render() {
		return (
			<div id="mapPreview">
				<div class="mapDescription">
					<h3>Get to Your Destination</h3>
					<p>
					Route to users, BTMs, and Vendors alike with OpenStreetMaps powered navigation.  OpenStreetMaps is a peer-to-peer project with its main purpose to have an full-scale database of every street, city, road, building etc on the planet.
				 	</p>
				</div>
				<div class="map">
					<img src={`${process.env.PUBLIC_URL}/img/map.png`} alt="map" />
				</div>
			</div>
		)
	}
}
