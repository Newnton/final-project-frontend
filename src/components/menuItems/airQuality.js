import React from 'react'
import { Message, Grid } from 'semantic-ui-react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'

export default class airQuality extends React.Component{
  render(){
    return (
        this.props.aqi ?
          <Message>
            <Grid>
              <Grid.Row>
                <Grid.Column width={4}/>
                <Grid.Column width={8}>
                  <VictoryChart
                    domainPadding={20}
                    theme={VictoryTheme.material}
                    >
                      <VictoryAxis
                        tickValues={[1, 2]}
                        tickFormat={['AQI', 'IDX']}
                      />
                      <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => (`${x}`)}
                      />
                      <VictoryBar
                        data={[
                          {column: 1, data: this.props.aqi.data.aqi},
                          {column: 2, data: this.props.aqi.data.idx}
                        ]}
                        x="column"
                        y="data"
                      />
                    </VictoryChart>
                  </Grid.Column>
                  <Grid.Column width={4}/>
                </Grid.Row>
                <Grid.Row>
                  <p>
                    lat: { this.props.latLng.lat }
                    lng: { this.props.latLng.lng }
                  </p>
                  <p>
                    aqi: {this.props.aqi.data.aqi}
                    idx: {this.props.aqi.data.idx}
                  </p>
                </Grid.Row>
            </Grid>
          </Message>
        : null
    )
  }
}
