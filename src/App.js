import React, { Component } from 'react'
import Search from './components/search'
import { connect } from 'react-redux'
import Display from './components/display'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        {this.props.building != null ? <Display building={this.props.building}/> : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({ building: state.building })

export default connect(mapStateToProps)(App)
