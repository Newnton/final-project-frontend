import { connect } from 'react-redux'
import React from 'react'
import { clearBuilding } from '../actions/buildingActions'
import { Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'

class Search extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  state = {
    text: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.clearBuilding()
    this.context.router.history.push(`/building/${this.state.text.replace(/ /g, '%20')}`)
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render(){
    return(
      <div style={{textAlign: 'center'}}>
        <br/><br/><br/>
        <form onSubmit={this.handleSubmit}>
          <Input focus action='Submit' placeholder='Search...' onChange={this.handleChange}/>
        </form>
        <br/>
      </div>
    )
  }
}

export default connect(null, { clearBuilding: clearBuilding })(Search)
