export default function reducer(state = { building: null }, action){
  switch (action.type) {
    case 'SELECT_BUILDING':
      return { building: action.building }
    default:
      return state
  }
}
