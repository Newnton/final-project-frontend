import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { clearBuilding, selectBuilding } from '../actions/buildingActions'

class Navbar extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  state={
    text: null
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.clearBuilding()
    this.props.selectBuilding(this.state.text.replace(/ /g, '%20'), 'address')
    this.context.router.history.push(`/building`)
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render(){
    return(
      <Menu inverted attached='top' style={{margin: '15px 0 0 0'}}>
        <Menu.Item>
          <NavLink to='/'>Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to='/boroughs'>Boroughs</NavLink>
        </Menu.Item>

        <Menu.Menu position='right'>
          <div className='ui right aligned category search item'>
            <form className='ui icon input' onSubmit={this.handleSubmit}>
              <input className='prompt' type='text' placeholder='Search Buildings...' onChange={this.handleChange}/>
              <i className='search link icon' />
            </form>
          </div>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default connect(null, { clearBuilding: clearBuilding, selectBuilding: selectBuilding })(Navbar)
