import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Graph from './graph'

class Display extends React.Component {
  state = { activeItem: 'Graph' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state

    return(
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='Graph' active={activeItem === 'Graph'} onClick={this.handleItemClick} />
          <Menu.Item name='Building Info' active={activeItem === 'Building Info'} onClick={this.handleItemClick} />
        </Menu>

        <Segment attached='bottom'>
          {activeItem === 'Graph' ? <Graph building={this.props.building}/> : null}
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => ({ building: state.building })

export default connect(mapStateToProps)(Display)
