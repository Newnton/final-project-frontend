import React from 'react'
import { Grid, Message, Image, Loader } from 'semantic-ui-react'

const BuildingInfo = props => {
  return (
    props.building ?
    <Message>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Message.List>
              <Message.Item>Primary Type: {props.building.primary_property_type}</Message.Item>
              <Message.Item>Size: {`${props.building.property_floor_area} sqft`}</Message.Item>
              <Message.Item>Energy Star Score: {props.building.energy_star_score}</Message.Item>
            </Message.List>
          </Grid.Column>
          <Grid.Column width={10}>
            {props.map ? <Image src={props.map.url}/> : <Loader active/>}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Message> :
    null
  )
}

export default BuildingInfo
