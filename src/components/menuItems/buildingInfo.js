import React from 'react'
import { Grid, Message, Image } from 'semantic-ui-react'

const BuildingInfo = props => {
  return (
    props.building ?
    <Message>
      <h1 style={{textAlign: 'center'}}>{`${props.building.street_number} ${props.building.street_name.trim()}`}</h1>
      {/* <Message.Header>{`${props.building.street_number} ${props.building.street_name.trim()}`}</Message.Header> */}
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
            <Image src={props.map}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Message> :
    null
  )
}

export default BuildingInfo
