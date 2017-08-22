import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import ReactMapboxGL, { Layer, Feature, Cluster, Marker } from 'react-mapbox-gl'

class InteractiveMap extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  mapBuildings = (buildings, borough) => {
    let i = 0
    const array = buildings[borough].map( building => (
        <Marker
          onClick={()=>this.clickBuilding(building.id)}
          key={building.id}
          coordinates={[building.lng,building.lat]}
          anchor="bottom">
          <img style={{width: '30px', height: '30px'}} src={'https://nogps.io/img/favicon-512.png'}/>
        </Marker>
      )
    )
    console.log(array)
    return array
  }

  clickBuilding = (id) => {
    this.context.router.history.push(`/building/${id}`)
  }

  manhattanClusterMarker = () => (
    <Marker
      coordinates={[-73.9712, 40.7831]}
      anchor="bottom">
      <img style={{width: '20px', height: '20px'}} src={'http://files.iconfactory.net/downloads/miscellaneous/dfstar.svg'}/>
    </Marker>
  )

  brooklynClusterMarker = () => (
    <Marker
      coordinates={[-73.9442, 40.6782]}
      anchor="bottom">
      <img style={{width: '20px', height: '20px'}} src={'http://files.iconfactory.net/downloads/miscellaneous/dfstar.svg'}/>
    </Marker>
  )

  bronxClusterMarker = () => (
    <Marker
      coordinates={[-73.8648, 40.8448]}
      anchor="bottom">
      <img style={{width: '20px', height: '20px'}} src={'http://files.iconfactory.net/downloads/miscellaneous/dfstar.svg'}/>
    </Marker>
  )

  queensClusterMarker = () => (
    <Marker
      coordinates={[-73.7949, 40.7282]}
      anchor="bottom">
      <img style={{width: '20px', height: '20px'}} src={'http://files.iconfactory.net/downloads/miscellaneous/dfstar.svg'}/>
    </Marker>
  )

  statenClusterMarker = () => (
    <Marker
      coordinates={[-74.1502, 40.5795]}
      anchor="bottom">
      <img style={{width: '20px', height: '20px'}} src={'http://files.iconfactory.net/downloads/miscellaneous/dfstar.svg'}/>
    </Marker>
  )

  render() {
    const Map = ReactMapboxGL({
      accessToken: "pk.eyJ1IjoibmV3bnRvbiIsImEiOiJjajZueG1kYnowZDE3MzJvMTd6N2lpd2NrIn0.PGd8WtL22xl_BCtogQ_N7Q"
    })
    console.log(this.props.buildings)
    return (
      <div>
        <Message>
          {this.props.buildings ?
            <Map center={[-73.968091, 40.711234]}
              style="mapbox://styles/mapbox/streets-v10"
              containerStyle={{height: "85vh"}}
            >
              <Cluster ClusterMarkerFactory={this.manhattanClusterMarker} maxZoom={15}>
                {this.mapBuildings(this.props.buildings, 'manhattan')}
              </Cluster>
              <Cluster ClusterMarkerFactory={this.bronxClusterMarker} maxZoom={14}>
                {this.mapBuildings(this.props.buildings, 'bronx')}
              </Cluster>
              <Cluster ClusterMarkerFactory={this.queensClusterMarker} maxZoom={14}>
                {this.mapBuildings(this.props.buildings, 'queens')}
              </Cluster>
              <Cluster ClusterMarkerFactory={this.brooklynClusterMarker} maxZoom={14}>
                {this.mapBuildings(this.props.buildings, 'brooklyn')}
              </Cluster>
              <Cluster ClusterMarkerFactory={this.statenClusterMarker} maxZoom={14}>
                {this.mapBuildings(this.props.buildings, 'staten')}
              </Cluster>
              <Layer
                type="circle"
                id="cluster"
              >
              </Layer>
            </Map>
            : null
          }
        </Message>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  buildings: state.buildings
})

export default connect( mapStateToProps )( InteractiveMap )
