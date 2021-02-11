const fetch = require('node-fetch')
const { koopProviderGeonames: { apiUsername } }

function Model (koop) {}

// each model should have a getData() function to fetch the geo data
// and format it into a geojson
Model.prototype.getData = async function (req, callback) {

  // 1. Determine search term for Geonames request
  const { params: { id } } = req

  // 2. Build search url
  const geonamesSearchUrl = `http://api.geonames.org/searchJSON?q=${id}&username=${apiUsername}`

  try {
    // 3. Make request to Geonames
    const response = await fetch(geonamesSearchUrl)

    if (!response.ok) {
      throw new Error (response.statusText)
    }

    const json = await response.json()

    // 4. Transform Geonames JSON to GeoJSON
    const geojson = transformGeonamesToGeoJSON(json)

    // 5. Add metadata to GeoJSON
    geojson.metadata = {
      geometryType: 'Point',
      description: 'Geonames search data'
    }

    // 6. Execute callback
    callback(null, geojson)
  } catch (error) {
    // 7. Handle any errors
    callback(error)
  }
}

function transformGeonamesToGeoJSON (json) {
  const { geonames: records } = json

  const features = records.map(transformRecordToFeature)

  return {
    type: 'FeatureCollection',
    features
  }
}

function transformRecordToFeature (record) {
  const { lat, lng, ...properties } = record

  return {
    type: "Feature",
    properties,
    geometry: {
      type: "Point",
      coordinates: [
        Number(lng),
        Number(lat)
      ]
    }
  }
}

module.exports = Model
