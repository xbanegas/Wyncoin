import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MapPopup from '../component/MapPopup';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNkdWVuYXMiLCJhIjoiY2ppczBhNnVkMXMzbDN3cDhzczlmbTE3ayJ9.6YUyaCiEPJ_0b3QcoZxk5w';

const getVendors = async (geoLoc) => {
  return await axios.get(`/vendors?long=${geoLoc[0]}&lat=${geoLoc[1]}`)
}

const initMap = async(mapContainer, addDirectionLoc, handleDirectionClick) =>{
  let geoLoc;
  let map;
  navigator.geolocation.getCurrentPosition(async (position) => {
    // get current location
    geoLoc = [position.coords.longitude, position.coords.latitude];
    // initialize map
    map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: geoLoc,
      zoom: 12
    });
    // add Nav control
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');
    // add GeoLocate
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
          enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    // add markers to map
    let res = await getVendors(geoLoc);
    let geojson = res.data;
    geojson.features.forEach(function (vendor) {
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';
      // make a marker for each feature and add to the map
      let popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(ReactDOMServer.renderToStaticMarkup(
          <MapPopup 
            vendor={vendor} 
            handleDirectionClick={handleDirectionClick}
          />))
      popup.on('open', (e)=>{
        addDirectionLoc(e.target._lngLat);
      });
      let marker = new mapboxgl.Marker(el)
        .setLngLat(vendor.geometry.coordinates)
        // add popups
        .setPopup(popup);
      marker.addTo(map);
    });

  });

}

export {initMap}
