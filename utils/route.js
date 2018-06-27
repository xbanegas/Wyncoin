let axios = require('axios');
let config = require('../config.js');

const getRoute = async (query) =>{
  console.log('routing', query);
  // prepare api query 
  let accessToken = config.mapboxAPIKey;
  let mapboxURL = "https://api.mapbox.com/directions/v5/mapbox";
  let profile = "driving";
  let coordinates = `${query.orig};${query.dest}`;
  let routeParams = "steps=true";
  let geometries = "geometries=geojson"
  let requestURL = `${mapboxURL}/${profile}/${coordinates}?${geometries}&access_token=${accessToken}&${routeParams}`;
  // make request
  let routeRes = await axios.get(requestURL).catch(e=>e);
  switch (routeRes.status) {
    case (200):
      let data = routeRes.data
      console.log(data.code, data.uuid, data.waypoints);
      return data
    default:
      let res = routeRes.response;
      console.log('query response:' ,res.status, res.statusText);
  }
}

module.exports.getRoute = getRoute;