import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import InteractiveMap from './components/interactiveMap'
import Search from './components/search'
import Display from './components/display'
import page404 from './components/page404'

const App = () => (
  <Router>
    <Grid>
      <Grid.Row>
        <Grid.Column width={2}/>
          <Grid.Column width={12}>
            <Search/>
            <Switch>
              <Route exact path='/' component={InteractiveMap}/>
              <Route path='/building' component={Display}/>
              <Route component={page404}/>
            </Switch>
          </Grid.Column>
        <Grid.Column width={2}/>
      </Grid.Row>
    </Grid>
  </Router>
)
export default App
