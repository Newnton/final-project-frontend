import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { getAllBuildings, getBoroughs } from './actions/buildingActions'
import InteractiveMap from './components/interactiveMap'
import BoroughsContainer from './components/boroughsContainer'
import Navbar from './components/navbar'
import Display from './components/display'
import page404 from './components/page404'
import Definitions from './components/definitions'
import Home from './components/home'

class App extends React.Component{
  componentDidMount(){
    this.props.getAllBuildings()
    this.props.getBoroughs()
  }

  render(){
    return(
      <Router>
        <Grid>
          <Navbar />
          <Grid.Row>
            <Grid.Column width={2}/>
              <Grid.Column width={12}>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route path='/map' component={InteractiveMap}/>
                  <Route path='/building' component={Display}/>
                  <Route path='/boroughs' component={BoroughsContainer}/>
                  <Route path='/definitions' component={Definitions} />
                  <Route component={page404}/>
                </Switch>
              </Grid.Column>
            <Grid.Column width={2}/>
          </Grid.Row>
        </Grid>
      </Router>
    )
  }
}

export default connect( null, { getAllBuildings: getAllBuildings, getBoroughs: getBoroughs } )( App )
