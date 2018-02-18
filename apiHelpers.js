const axios = require('axios')

//Handle Environments
if (process.env.PORT) {
  var GOOGLE = {}
  var YELP = {}
  GOOGLE.DIRECTOINS = process.env.GOOG_DIR
  GOOGLE.GEO = process.env.GOOG_GEO
  YELP.KEY = process.env.YELP
} else {
  var {GOOGLE, YELP} = require('./config.js')
}

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
  let justCity = city ? city.toLowerCase().replace('remote', '') : null
  return axios.get('https://maps.googleapis.com/maps/api/directions/json', {
    params: {
      key: GOOGLE.DIRECTOINS,
      origin: `${companyName}  ${justCity}`,
      destination: `${companyName}  ${justCity}`
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

exports.yelp = (longitude, latitude) => {
  return axios.get('https://api.yelp.com/v3/businesses/search', { 
    headers: { Authorization: `Bearer ${YELP.KEY}` },
    params: {
      longitude: longitude,
      latitude: latitude,
      term: 'food',
      radius: 500,
      sort_by: 'distance',
      limit: 5
    }
  });
}

exports.getFoods = (job) => {
  if(typeof job === 'string') job = JSON.parse(job)

  console.log('City/Company: ', job.company, job.location)
  return exports.googleDirections(job.company, job.location) //Get place id from city and company information
  .then((loc)=> {
    console.log('PlaceID: ', loc.data.geocoded_waypoints[0].place_id)
    return exports.googleGeocoder(loc.data.geocoded_waypoints[0].place_id) //Use place id to get lng and lat
  })
  .then((place)=> {
    let location = place.data.results[0].geometry.location
    console.log('Location: ', location)
    return exports.yelp(location.lng, location.lat) //Use lng and lat to get yelp information
  })
  .then((foods)=> {
    console.log('Foods: ', foods.data.businesses.length)
    return Object.assign({foods: foods.data.businesses}, job) //Attach yelp info to jobs obj
  })
  .catch((err)=> {
    console.log('ERROR')
    return Object.assign({foods: [{id: 0, title:'No Location Data Available'}]}, job) //if no data, return empty yelp list
  })
}