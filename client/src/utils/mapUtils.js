import axios from 'axios';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNkdWVuYXMiLCJhIjoiY2ppczBhNnVkMXMzbDN3cDhzczlmbTE3ayJ9.6YUyaCiEPJ_0b3QcoZxk5w';

const getVendors = async (geoLoc) => {
  return await axios.get(`/vendors?long=${geoLoc[0]}&lat=${geoLoc[1]}`)
}

const initMap = async(mapContainer) =>{
  let geoLoc;
  navigator.geolocation.getCurrentPosition(async (position) => {
    // get current location
    geoLoc = [position.coords.longitude, position.coords.latitude];
    // initialize map
    let map = new mapboxgl.Map({
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
    const getMarkerGeo = () => console.log('getgeo');
    geojson.features.forEach(function (marker) {
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';
      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(`<h3>${marker.properties.title}</h3>
          <p>${marker.properties.category} </p>
          <button onClick="console.log('getgeo')">go</button>`))
        .addTo(map);
    });
  });
}

export {initMap}
