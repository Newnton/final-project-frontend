import React from 'react'
import { Card, Loader } from 'semantic-ui-react'

const BuildingStats = props => (
  props.boroughs ?
    <Card style={{margin: 'auto'}}>
      <Card.Header><h2 style={{textAlign: 'center', margin: '10px'}}>{props.type[0].toUpperCase() + props.type.slice(1)}:</h2></Card.Header>
      <Card.Content>
        <p>Site EUI: {props.boroughs[props.activeItem][props.type + '_site_eui']}</p>
        <p>Source EUI: {props.boroughs[props.activeItem][props.type + '_source_eui']}</p>
        <p>Direct GHG Emissions: {props.boroughs[props.activeItem][props.type + '_direct_ghg']}</p>
        <p>Indirect GHG Emissions: {props.boroughs[props.activeItem][props.type + '_indirect_ghg']}</p>
      </Card.Content>
    </Card>
  : <Loader active />
)

export default BuildingStats
