import axios from 'axios';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXNkdWVuYXMiLCJhIjoiY2ppczBhNnVkMXMzbDN3cDhzczlmbTE3ayJ9.6YUyaCiEPJ_0b3QcoZxk5w';

const getVendors = async (geoLoc) => {
  return await axios.get(`/vendors?long=${geoLoc[0]}&lat=${geoLoc[1]}`)
}

const initMap = async(mapContainer) =>{
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
        .setHTML(`<h3>${vendor.properties.title}</h3>
        <p>${vendor.properties.category} </p>
        <button class="directions" onClick="console.log('getgeo')">go</button>`);
      popup.on('open', (e)=>console.log(e.target._lngLat));
      let marker = new mapboxgl.Marker(el)
        .setLngLat(vendor.geometry.coordinates)
        // add popups
        .setPopup(popup);
      marker.addTo(map);
    });

  });

}

export {initMap}
