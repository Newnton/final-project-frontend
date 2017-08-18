import React from 'react'
import PropTypes from 'prop-types'
import { Message, Menu, Segment, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectBuilding, getMap, getLatLng, getAqi } from '../actions/buildingActions'
import Graph from './menuItems/graph'
import BuildingInfo from './menuItems/buildingInfo'
import AirQuality from './menuItems/airQuality'

class Display extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  state = { activeItem: 'Building Info' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    if (!this.props.building) {
      this.props.selectBuilding(this.context.router.history.location.pathname.slice(10))
    } else if (!this.props.map){
      this.props.getMap(`${this.props.building.street_number}+${this.props.building.street_name}`)
    } else if (!this.props.latLng){
      this.props.getLatLng(`${this.props.building.street_number}+${this.props.building.street_name}`)
    } else if (!this.props.aqi){
      this.props.getAqi(this.props.latLng.lat, this.props.latLng.lng)
    }

    if ( typeof( this.props.building ) !== 'string' ){
      if (this.props.map) console.dir(this.props.map.body)
      const { activeItem } = this.state
      return (
        <div>
          <Menu attached='top' tabular>
            <Menu.Item name='Building Info' active={activeItem === 'Building Info'} onClick={this.handleItemClick} />
            <Menu.Item name='Graph' active={activeItem === 'Graph'} onClick={this.handleItemClick} />
            <Menu.Item name='Air Quality' active={activeItem === 'Air Quality'} onClick={this.handleItemClick} />
          </Menu>

          <Segment attached='bottom'>
            {this.props.building ? <h1 style={{textAlign: 'center'}}>{`${this.props.building.street_number} ${this.props.building.street_name.trim()}`}</h1> : <Loader/>}
            {activeItem === 'Building Info' ? <BuildingInfo building={this.props.building} map={this.props.map}/> : null}
            {activeItem === 'Graph' ? <Graph building={this.props.building} averages={this.props.averages}/> : null}
            {activeItem === 'Air Quality' ? <AirQuality latLng={this.props.latLng} aqi={this.props.aqi}/> : null}
          </Segment>
        </div>
      )
    }
    else {
      return (
        <Message negative>
          <Message.Header>We're sorry but the address you have entered was not found</Message.Header>
          <p>{this.props.building}</p>
        </Message>
      )
    }
  }
}

const mapStateToProps = state => ({
  building: state.building,
  map: state.map,
  averages: state.averages,
  latLng: state.latLng,
  aqi: state.aqi
})

export default connect(mapStateToProps,
  { selectBuilding: selectBuilding,
    getMap: getMap,
    getLatLng: getLatLng,
    getAqi: getAqi
  }
)(Display)
