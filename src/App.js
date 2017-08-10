import React, { Component } from 'react'
import Search from './components/search'
import Display from './components/display'
import { Route } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Search}/>
        <Route path='/building' component={Display}/>
      </div>
    )
  }
}
