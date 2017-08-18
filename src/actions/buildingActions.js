import { googleKey, aqiKey } from '../hidden/keys'

export const selectBuilding = (address) => {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/buildings/${address}`)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'SELECT_BUILDING',
          building: res.building,
          averages: res.averages
        })
        console.dir(res.building)
      })
  }
}
export const getMap = (address) => {
  return dispatch => {
    fetch(`https://maps.googleapis.com/maps/api/staticmap?center=${address},NY&markers=color:green%7Clabel:A%7C${address},NY&size=838x500&key=${googleKey}`)
      .then(res => {
        dispatch({
          type: 'SELECT_MAP',
          map: res
        })
      })
  }
}

export const getLatLng = (address) => {
  return dispatch => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},%20NY&key=${googleKey}`)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: 'GET_LAT_LNG',
        value: res.results[0].geometry.location
      })
    })
  }
}

export const getAqi = (lat, lng) => {
  return dispatch => {
    fetch(`https://api.waqi.info/feed/geo:${lat};${lng}/?token=${aqiKey}`)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'GET_AQI',
          value: res
        })
      })
  }
}

export const clearBuilding = () => {
  return dispatch => dispatch({ type: 'CLEAR_BUILDING' })
}
