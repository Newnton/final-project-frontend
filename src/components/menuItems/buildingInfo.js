import React from 'react'
import { Grid, Message, Image } from 'semantic-ui-react'

const BuildingInfo = props => {
  return (
    props.building ?
    <Message>
      <Message.Header>{`${props.building.street_number} ${props.building.street_name.trim()}`}</Message.Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <br/>
            <Message.List>
              <Message.Item>Primary Type: {props.building.primary_property_type}</Message.Item>
              <Message.Item>Size: {`${props.building.property_floor_area} sqft`}</Message.Item>
            </Message.List>
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src={props.map}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Message> :
    null
  )
}

export default BuildingInfo
