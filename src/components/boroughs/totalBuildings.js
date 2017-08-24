import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'

const TotalBuildings = props => (
  <Card style={{width: '100%'}}>
    <Card.Header><h2 style={{textAlign: 'center', margin: '15px'}}>Borough Buildings</h2></Card.Header>
    <Card.Content>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <VictoryChart
              domainPadding={20}
              theme={VictoryTheme.material}
              >
                <VictoryAxis
                  tickValues={[1, 2, 3, 4, 5]}
                  tickFormat={['Manhattan', `Queens`, `Brooklyn`, `Bronx`, `Staten Island`]}
                />
                <VictoryAxis
                  dependentAxis
                  tickFormat={(x) => (`${x}`)}
                />
                <VictoryBar
                  data={[
                    {column: 1, buildings: props.boroughs.manhattan.total_buildings},
                    {column: 2, buildings: props.boroughs.queens.total_buildings},
                    {column: 3, buildings: props.boroughs.brooklyn.total_buildings},
                    {column: 4, buildings: props.boroughs.bronx.total_buildings},
                    {column: 5, buildings: props.boroughs.staten.total_buildings}
                  ]}
                  x="column"
                  y="buildings"
                />
              </VictoryChart>
          </Grid.Column>
          <Grid.Column width={8}>
            <Card style={{margin: 'auto', position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
              <Card.Header><h2 style={{textAlign: 'center', margin: '15px'}}>Total Buildings in Dataset:</h2></Card.Header>
              <Card.Content>
                <p style={{margin: '7px'}}>Manhattan: {props.boroughs.manhattan.total_buildings}</p>
                <p style={{margin: '7px'}}>Queens: {props.boroughs.queens.total_buildings}</p>
                <p style={{margin: '7px'}}>Brooklyn: {props.boroughs.brooklyn.total_buildings}</p>
                <p style={{margin: '7px'}}>Bronx: {props.boroughs.bronx.total_buildings}</p>
                <p style={{margin: '7px'}}>Staten Island: {props.boroughs.staten.total_buildings}</p>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Card.Content>
  </Card>
)

export default TotalBuildings
