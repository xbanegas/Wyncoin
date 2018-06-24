import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNkdWVuYXMiLCJhIjoiY2ppczBhNnVkMXMzbDN3cDhzczlmbTE3ayJ9.6YUyaCiEPJ_0b3QcoZxk5w';




export default class Map extends Component {
    
componentDidMount() {

    // let geoLoc;
    // navigator.geolocation.getCurrentPosition(function(position){
    //     geoLoc = [position.coords.latitude, position.coords.longitude];
    // });
    // console.log(geoLoc);
    const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [80,80],
        zoom: 4
    });

    }


    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el}></div>
            </div>
        )
    }
}