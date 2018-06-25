import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import Sidebar from './Sidebar';
import axios from 'axios';
import '../css/map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNkdWVuYXMiLCJhIjoiY2ppczBhNnVkMXMzbDN3cDhzczlmbTE3ayJ9.6YUyaCiEPJ_0b3QcoZxk5w';

export default class Map extends Component {

	getVendors = async (geoLoc) => {
		return await axios.get(`/vendors?long=${geoLoc[0]}&lat=${geoLoc[1]}`)
	}

	componentDidMount() {

		let geoLoc;
		navigator.geolocation.getCurrentPosition(async (position) => {
			geoLoc = [position.coords.longitude, position.coords.latitude];
			let map = new mapboxgl.Map({
				container: this.mapContainer,
				style: 'mapbox://styles/mapbox/streets-v9',
				center: geoLoc,
				zoom: 12
			});

			console.log('geojson');
			let res = await this.getVendors(geoLoc);

			let geojson = res.data;
			console.log(geojson.features);

			// add markers to map
			geojson.features.forEach(function (marker) {
				// create a HTML element for each feature
				var el = document.createElement('div');
				el.className = 'marker';

				// make a marker for each feature and add to the map
				new mapboxgl.Marker(el)
					.setLngLat(marker.geometry.coordinates)
					.addTo(map);
			});
		});


	}

	render() {
		const style = {
			position: 'absolute',
			top: 0,
			bottom: 0,
			width: '100%'
		};
		return (
			<div>
				<div id="mapContainer" style={{ position: "relative", }}><div style={style} ref={el => this.mapContainer = el} /></div>)
			</div>
		)
	}
}