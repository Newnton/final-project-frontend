import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Graph from './menuItems/graph'
import BuildingInfo from './menuItems/buildingInfo'
import { selectBuilding, getMap } from '../actions/buildingActions'
import PropTypes from 'prop-types'

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
    }

    const { activeItem } = this.state

    return(
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={2}/>
            <Grid.Column width={12}>
              <Menu attached='top' tabular>
                <Menu.Item name='Building Info' active={activeItem === 'Building Info'} onClick={this.handleItemClick} />
                <Menu.Item name='Graph' active={activeItem === 'Graph'} onClick={this.handleItemClick} />
              </Menu>

              <Segment attached='bottom'>
                {activeItem === 'Building Info' ? <BuildingInfo building={this.props.building} map={this.props.map}/> : null}
                {activeItem === 'Graph' ? <Graph building={this.props.building} averages={this.props.averages}/> : null}
              </Segment>
            </Grid.Column>
            <Grid.Column width={2}/>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({ building: state.building, map: state.map, averages: state.averages })

export default connect(mapStateToProps, { selectBuilding: selectBuilding, getMap: getMap })(Display)
