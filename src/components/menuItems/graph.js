import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTheme } from 'victory'
import { Message, Grid, Card } from 'semantic-ui-react'

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
                    tickValues={[1, 2, 3, 4]}
                    tickFormat={['Avg Src EUI', `Avg Site EUI`, `Src EUI`, `Site EUI`]}
                  />
                  <VictoryAxis
                    dependentAxis
                    tickFormat={(x) => (`${x}`)}
                  />
                    <VictoryBar
                      data={[
                        {column: 1, eui: props.averages.source_eui},
                        {column: 2, eui: props.averages.site_eui},
                        {column: 3, eui: props.building.source_eui},
                        {column: 4, eui: props.building.site_eui}
                      ]}
                      x="column"
                      y="eui"
                    />
                </VictoryChart>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Card style={{margin: 'auto', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
                <Card.Header><h3 style={{textAlign: 'center', margin: '15px'}}>Key:</h3></Card.Header>
                <Card.Content>
                  <p>Yellow: direct emissions ({props.building.direct_ghg_emissions} MtCO2e)</p>
                  <p>Red: indirect emissions ({props.building.indirect_ghg_emissions} MtCO2e)</p>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={8}>
              <Card style={{margin: 'auto', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
                <Card.Header><h3 style={{textAlign: 'center', margin: '15px'}}>Key:</h3></Card.Header>
                <Card.Content>
                  <p>Source EUI: ({props.building.source_eui} kBtu/ft2)</p>
                  <p>Site EUI: ({props.building.site_eui} kBtu/ft2)</p>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Message>
    )
  } else {return null}
}

export default Graph
