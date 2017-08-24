import React from 'react'
import { Grid, Message, Card, Image, Loader } from 'semantic-ui-react'

const BuildingInfo = props => {
  return (
    props.building ?
    <Message>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            {props.map ? <Image src={props.map.url}/> : <Loader active/>}
          </Grid.Column>
          <Grid.Column width={6}>
            <Card style={{margin: 'auto', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
              <Card.Header><h2 style={{textAlign: 'center', margin: '15px'}}>Details:</h2></Card.Header>
              <Card.Content>
                <p style={{margin: '7px'}}>Primary Type: {props.building.primary_property_type}</p>
                <p style={{margin: '7px'}}>Size: {`${props.building.property_floor_area} sqft`}</p>
                <p style={{margin: '7px'}}>Energy Star Score: {props.building.energy_star_score}</p>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Message> :
    null
  )
}

export default BuildingInfo
