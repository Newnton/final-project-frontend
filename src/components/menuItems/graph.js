import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTheme } from 'victory'
import { Message, Grid } from 'semantic-ui-react'

const Graph = props => {
  if(props.building){
    let directGHG = parseFloat(props.building.direct_GHG_emissions, 10)
    let indirectGHG = parseFloat(props.building.indirect_GHG_emissions, 10)

    return(
      <Message>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <Message.Header>{`${props.building.street_number} ${props.building.street_name.trim()}'s Emissions`}</Message.Header>
              <p>Measured in Metric tons of CO2 equivalent</p>
              <div>
                <VictoryChart
                  domainPadding={20}
                  theme={VictoryTheme.material}
                  >
                  <VictoryAxis
                    tickValues={[1, 2]}
                    tickFormat={['Average', `${props.building.street_number} ${props.building.street_name.trim()}`]}
                  />
                  <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`${x}`)}
                  />
                  <VictoryStack>
                    <VictoryBar
                      data={[
                        {column: 1, emissions: props.averages.indirectGHG},
                        {column: 2, emissions: indirectGHG |= 0},
                      ]}
                      x="column"
                      y="emissions"
                    />
                    <VictoryBar
                      data={[
                        {column: 1, emissions: props.averages.directGHG},
                        {column: 2, emissions: directGHG |= 0},
                      ]}
                      x="column"
                      y="emissions"
                    />
                  </VictoryStack>
                </VictoryChart>
                <Message.Header>Key:</Message.Header>
                <Message.List>
                  <Message.Item>Yellow: direct emissions ({directGHG})</Message.Item>
                  <Message.Item>Red: indirect emissions ({indirectGHG})</Message.Item>
                </Message.List>
              </div>
            </Grid.Column>
            <Grid.Column width={6}>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Message>
    )
  } else {return null}
}

export default Graph
