const axios = require('axios');
const Features = require('./featureCollection');

const getCoinmapVendors = async (query) => {
  let radius = 2;
  let lat1 = query.lat - radius;
  let lat2 =  query.lat + radius;
  let lon1 = query.long - radius;
  let lon2 = query.long + radius;
  let coinmapParams = `?lat1=${lat1}&lat2=${lat2}&lon1=${lon1}&lon2=${lon2}`;
  let coinmapUrl = "https://coinmap.org/api/v1/venues/";
  let res = await axios.get(coinmapUrl + coinmapParams);
  return res.data.venues
}

const genFeatureCollection =  async (query)=> {
  let featureCollection = new Features.FeatureCollection();
  let coinmapRes =  await getCoinmapVendors(query);
  coinmapRes.forEach((venue)=>{
    let venueLoc = [String(venue.lon), String(venue.lat)];
    let newVenue = new Features.Feature(venueLoc, venue.name, venue.category);
    featureCollection.addFeature(newVenue)
  });
  return featureCollection
}

module.exports.genFeatureCollection = genFeatureCollection;