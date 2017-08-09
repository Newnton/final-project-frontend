export const selectBuilding = (address) => {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/buildings/${address.replace(/ /g, '%20')}`)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'SELECT_BUILDING',
          building: res.building
        })
        console.dir(res.building)
      })
  }
}
