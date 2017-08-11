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
    fetch(`https://maps.googleapis.com/maps/api/staticmap?center=${address},NY&markers=color:green%7Clabel:A%7C${address},NY&size=838x500&key=AIzaSyDJd9nw3MlrXHc7W75KdrRkFYNUYQgNVsg`)
      .then(res => {
        dispatch({
          type: 'SELECT_MAP',
          map: res.url
        })
      })
  }
}

export const clearBuilding = () => {
  return dispatch => dispatch({ type: 'CLEAR_BUILDING' })
}
