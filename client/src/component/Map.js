import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import '../css/map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNkdWVuYXMiLCJhIjoiY2ppczBhNnVkMXMzbDN3cDhzczlmbTE3ayJ9.6YUyaCiEPJ_0b3QcoZxk5w';

export default class Map extends Component {

	componentDidMount() {
		let geoLoc
		navigator.geolocation.getCurrentPosition((position) => {
			geoLoc = [position.coords.longitude, position.coords.latitude];
			let map = new mapboxgl.Map({
				container: this.mapContainer,
				style: 'mapbox://styles/mapbox/streets-v9',
				center: geoLoc,
				zoom: 14
			});
			// [-77.032, 38.913]
			var geojson = {
				type: 'FeatureCollection',
				features: [{
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: geoLoc
					},
					properties: {
						title: 'Mapbox',
						description: 'Washington, D.C.'
					}
				}]
			};
			// add markers to map
			geojson.features.forEach(function(marker) {

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
		return <div id="mapContainer" style={{position:"relative",}}><div style={style} ref={el => this.mapContainer = el} /></div>
	}
}