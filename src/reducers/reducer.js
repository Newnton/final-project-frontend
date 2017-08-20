export default function reducer(state = { buildings: null, building: null, map: null, averages: null, latLng: null, aqi: null }, action){
  switch (action.type) {
    case 'SELECT_BUILDING':
      return { ...state, building: action.building, averages: action.averages }
    case 'SELECT_MAP':
      return { ...state, map: action.map }
    case 'GET_LAT_LNG':
      return { ...state, latLng: action.value }
    case 'GET_AQI':
      return { ...state, aqi: action.value }
    case 'GET_ALL_BUILDINGS':
      return { ...state, buildings: action.buildings }
    case 'CLEAR_BUILDING':
      return { buildings: state.buildings, building: null, map: null, averages: null, latLng: null, aqi: null }
    default:
      return state
  }
}
