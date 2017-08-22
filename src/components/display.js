import React from 'react'
import PropTypes from 'prop-types'
import { Message, Menu, Segment, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { selectBuilding, getMap, getAqi } from '../actions/buildingActions'
import Graph from './menuItems/graph'
import BuildingInfo from './menuItems/buildingInfo'
import AirQuality from './menuItems/airQuality'

class Display extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  state = { activeItem: 'Building Info' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleRoute = () => {
    if (this.props.building) {
      if (this.context.router.history.location.pathname.length > 9){
        if (parseInt(this.context.router.history.location.pathname.slice(10), 10) !== this.props.building.id){
          this.props.selectBuilding(this.context.router.history.location.pathname.slice(10), 'id')
        }
      }
      else if (this.context.router.history.location.pathname.length === 9) {
        this.context.router.history.push(`/building/${this.props.building.id}`)
      }
    } else {
      if (this.context.router.history.location.pathname.length > 9){
        this.props.selectBuilding(this.context.router.history.location.pathname.slice(10), 'id')
      }
    }
  }

  render(){
    this.handleRoute()
    if ( this.props.building && typeof( this.props.building ) !== 'string' ){
      if (!this.props.map){
        this.props.getMap(`${this.props.building.street_number}+${this.props.building.street_name},%20NY,%20${this.props.building.zipcode}`)
      } else if (!this.props.aqi){
        this.props.getAqi(this.props.building.lat, this.props.building.lng)
      }
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
            {activeItem === 'Air Quality' ? <AirQuality lat={this.props.building.lat} lng={this.props.building.lng} aqi={this.props.aqi}/> : null}
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
  aqi: state.aqi
})

export default connect(mapStateToProps,
  { selectBuilding: selectBuilding,
    getMap: getMap,
    getAqi: getAqi
  }
)(Display)
