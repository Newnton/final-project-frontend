import React from 'react'
import { Loader } from 'semantic-ui-react'
import { VictoryChart, VictoryArea, VictoryTheme, VictoryPolarAxis } from 'victory'

const BoroughRadar = props => (
  <div>
    <h2 style={{textAlign: 'center'}}>{props.type + 's:'}</h2>
    {props.boroughs !== null ? console.dir(props.boroughs) : null}
    {props.boroughs && props.activeItem !== null ?
      <div>
        <VictoryChart polar
          theme={VictoryTheme.material}
        >
          <VictoryArea data={
            [
              props.boroughs[props.activeItem]['total_site_eui'],
              props.boroughs[props.activeItem]['total_direct_ghg'],
              props.boroughs[props.activeItem]['total_indirect_ghg'],
              props.boroughs[props.activeItem]['total_source_eui']
            ]
          }/>
          <VictoryPolarAxis
            tickValues={[props.type + ' site EUI', props.type + ' direct GHG', props.type + ' indirect GHG', props.type + ' source EUI']}
            labelPlacement="vertical"
          />
        </VictoryChart>
        <h1>{props.type}</h1>
        <p>Site EUI: {props.boroughs[props.activeItem][props.type + '_site_eui']}</p>
        <p>Source EUI: {props.boroughs[props.activeItem][props.type + '_source_eui']}</p>
        <p>Direct GHG Emissions: {props.boroughs[props.activeItem][props.type + '_direct_ghg']}</p>
        <p>Indirect GHG Emissions: {props.boroughs[props.activeItem][props.type + '_indirect_ghg']}</p>
      </div>
      : <Loader active/>
    }
  </div>
)

export default BoroughRadar
