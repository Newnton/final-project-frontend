import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'
import { Input, Menu, Segment } from 'semantic-ui-react'

const Display = props => (
  <div>
    <Menu attached='top' tabular>
      <Menu.Item name='Graph' /*onClick={this.handleItemClick}*/ />
      <Menu.Item name='Building Info' /*active={activeItem === 'photos'} onClick={this.handleItemClick}*/ />
    </Menu>

    <Segment attached='bottom'>
      <div>
        <h1 style={{textAlign: 'center'}}>{`${props.building.street_number} ${props.building.street_name.trim()}'s Emmissions`}</h1>
        <VictoryChart domainPadding={20}>
          <VictoryAxis
            tickValues={[1, 2, 3]}
            tickFormat={["Total GHG", "Direct GHG", "Indirect GHG"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x}`)}
          />
          <VictoryBar
            data={[
              {column: 1, emissions: parseInt(props.building.total_GHG_emissions)},
              {column: 2, emissions: parseInt(props.building.direct_GHG_emissions)},
              {column: 3, emissions: parseInt(props.building.indirect_GHG_emissions)}
            ]}
            x="column"
            y="emissions"
          />
        </VictoryChart>
      </div>
    </Segment>
  </div>
)

export default Display
