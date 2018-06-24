import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import '../css/map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNkdWVuYXMiLCJhIjoiY2ppczBhNnVkMXMzbDN3cDhzczlmbTE3ayJ9.6YUyaCiEPJ_0b3QcoZxk5w';

export default class Map extends Component {

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position)=>{
            let geoLoc = [position.coords.longitude, position.coords.latitude];
            let map = new mapboxgl.Map({
                container: this.mapContainer,
                style: 'mapbox://styles/mapbox/streets-v9',
                center: geoLoc,
                zoom: 14
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
        return  <div style={style} ref={el => this.mapContainer = el} />
    }
}