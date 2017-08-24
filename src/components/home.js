import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'

const Home = props => (
  <Card style={{width: '80%', height: '80%', margin: 'auto', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
    <Card.Header><h2 style={{textAlign: 'center', margin: '15px'}}>Welcome</h2></Card.Header>
    <Card.Content>
      <p style={{textAlign: 'center'}}>Find out about the environmental affects of New York City Buildings</p><br/>
    </Card.Content>
  </Card>
)

export default Home
