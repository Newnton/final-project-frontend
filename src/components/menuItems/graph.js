import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTheme } from 'victory'
import { Message, Grid } from 'semantic-ui-react'

const Graph = props => {
  if(props.building){
    return(
      <Message>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <div>
                <Message.Header>Emissions</Message.Header>
                <p>Measured in Metric tons of CO2 equivalent</p>
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
                        {column: 1, emissions: props.averages.indirect_ghg},
                        {column: 2, emissions: props.building.indirect_ghg_emissions},
                      ]}
                      x="column"
                      y="emissions"
                    />
                    <VictoryBar
                      data={[
                        {column: 1, emissions: props.averages.direct_ghg},
                        {column: 2, emissions: props.building.direct_ghg_emissions},
                      ]}
                      x="column"
                      y="emissions"
                    />
                  </VictoryStack>
                </VictoryChart>
                <Message.Header>Key:</Message.Header>
                <Message.List>
                  <Message.Item>Yellow: direct emissions ({props.building.direct_ghg_emissions} MtCO2e)</Message.Item>
                  <Message.Item>Red: indirect emissions ({props.building.indirect_ghg_emissions} MtCO2e)</Message.Item>
                </Message.List>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <div>
                <Message.Header>Energy Use Intensity</Message.Header>
                <p>Measured in thousand BTUs per square foot</p>
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
                        {column: 1, eui: props.averages.site_eui},
                        {column: 2, eui: props.building.site_eui}
                      ]}
                      x="column"
                      y="eui"
                    />
                    <VictoryBar
                      data={[
                        {column: 1, eui: props.averages.source_eui},
                        {column: 2, eui: props.building.source_eui}
                      ]}
                      x="column"
                      y="eui"
                    />
                  </VictoryStack>
                </VictoryChart>
                <Message.Header>Key:</Message.Header>
                <Message.List>
                  <Message.Item>Yellow: source eui ({props.building.source_eui} kBtu/ft2)</Message.Item>
                  <Message.Item>Red: site eui ({props.building.site_eui} kBtu/ft2)</Message.Item>
                </Message.List>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Message>
    )
  } else {return null}
}

export default Graph
