const axios = require('axios')
const {GOOGLE, YELP} = require('./config.js')

exports.gitHub = (location, keywords, isFulltime) => {
  let params = {}
  if (location) data.location = location
  if (keywords) data.description = keywords
  if (isFulltime) data.full_time = isFulltime

  axios.get('https://jobs.github.com/positions.json', {
    params: params
  })
}

exports.googleDirections = (companyName, city) => {
  axios.get('https://maps.googleapis.com/maps/api/directions/json', {
    params: {
      key: GOOGLE.DIRECTOINS,
      origin: `${companyName}  ${city}`,
      destination: `${companyName}  ${city}`
    }
  })
}

exports.googleGeocoder = (placeId) => {
  axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
    params: {
      key: GOOGLE.GEO,
      place_id: placeId
    }
  })
}
//google geocoder api
  //Use location id from directions api to convert to long and lat

exports.yelp = (longitude, latitude) => {
  axios.get('', { 
    headers: { Authorization: `Bearer ${YELP.KEY}` },
    params: {
      longitude: longitude,
      latitude: latitude,
      term: 'lunch',
      radius: 100,
      sort_by: 'rating',
      limit: 5
    }
  });
  //Yelp restraunts fetcher
  //use long and lat to find near by restaraunts
}