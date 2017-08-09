import { connect } from 'react-redux'
import React from 'react'
import { selectBuilding } from '../actions/buildingActions'
import { bindActionCreators } from 'redux'
import { Input } from 'semantic-ui-react'

class Search extends React.Component {
  state = {
    text: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.selectBuilding(this.state.text)
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render(){
    return(
      <div style={{textAlign: 'center'}}>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <Input focus action='Submit' placeholder='Search...' onChange={this.handleChange}/>
        </form>
        <br/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectBuilding: selectBuilding
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)
