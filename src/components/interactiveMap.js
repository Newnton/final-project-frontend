import React from 'react'
import { connect } from 'react-redux'
import { getAllBuildings } from '../actions/buildingActions'
import GoogleMapReact from 'google-map-react'
import { Loader } from 'semantic-ui-react'
import MapBuilding from './map/mapBuilding'

class InteractiveMap extends React.Component {
  componentDidMount(){
    this.props.getAllBuildings()
  }

  render(){
    return(
      <div style={{
        width: '80vw',
        height: '80vh'
      }}>
        <GoogleMapReact
          defaultCenter={{lat: 40.70, lng: -74.01}}
          defaultZoom={11}
        >
          { this.props.buildings != null ?
            this.props.buildings.map ( building => {
              return (
                <MapBuilding
                  lat={building.lat}
                  lng={building.lng}
                  text={building.id}
                />
              )
            })
            : <Loader />
          }
        </GoogleMapReact>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  buildings: state.buildings
})

export default connect( mapStateToProps, { getAllBuildings: getAllBuildings } )( InteractiveMap )
