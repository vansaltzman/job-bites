const axios = require('axios')
const {GOOGLE, YELP} = require('./config.js')

exports.gitHub = (location, keywords, isFulltime) => {
  let params = {}
  if (location) params.location = location
  if (keywords) params.description = keywords
  if (isFulltime) params.full_time = isFulltime

  return axios.get('https://jobs.github.com/positions.json', {
    params: params
  })
}

exports.googleDirections = (companyName, city) => {
  return axios.get('https://maps.googleapis.com/maps/api/directions/json', {
    params: {
      key: GOOGLE.DIRECTOINS,
      origin: `${companyName}  ${city}`,
      destination: `${companyName}  ${city}`
    }
  })
}

exports.googleGeocoder = (placeId) => {
  return axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
    params: {
      key: GOOGLE.GEO,
      place_id: placeId
    }
  })
}
//google geocoder api
  //Use location id from directions api to convert to long and lat

exports.yelp = (longitude, latitude) => {
  return axios.get('https://api.yelp.com/v3/businesses/search', { 
    headers: { Authorization: `Bearer ${YELP.KEY}` },
    params: {
      longitude: longitude,
      latitude: latitude,
      term: 'food',
      radius: 200,
      sort_by: 'rating',
      limit: 5
    }
  });
  //Yelp restraunts fetcher
  //use long and lat to find near by restaraunts
}

exports.getFoods = (job) => {
  return exports.googleDirections(job.company, job.location)
  .then((loc)=> {
    return exports.googleGeocoder(loc.data.geocoded_waypoints[0].place_id)
  })
  .then((place)=> {
    let location = place.data.results[0].geometry.location
    return exports.yelp(location.lng, location.lat)
  })
  .then((foods)=> {
    return Object.assign({foods: foods.data.businesses}, JSON.parse(job))
  })
  .catch((err)=> {
    console.log(err)
  })
}