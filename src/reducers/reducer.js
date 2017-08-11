export default function reducer(state = { building: null, map: null, averages: null }, action){
  switch (action.type) {
    case 'SELECT_BUILDING':
      return { ...state, building: action.building, averages: action.averages }
    case 'SELECT_MAP':
      return { ...state, map: action.map }
    case 'CLEAR_BUILDING':
      return { building: null, map: null, averages: null }
    default:
      return state
  }
}
