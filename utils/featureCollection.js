class FeatureCollection {
  constructor(){
    this.type = 'FeatureCollection';
    this.features = [];
  }
  addFeature(feature) {
    this.features.push(feature);
  }
}

class Feature {
  constructor(coords, title){
    this.type = 'Feature';
    this.geometry = {
      type: 'Point',
      coordinates: coords
    };
    this.properties = {
      title: title,
      description: 'Description'
    }
  }
}

module.exports.Feature = Feature;
module.exports.FeatureCollection = FeatureCollection;