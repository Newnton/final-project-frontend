import React from 'react'
import { Loader } from 'semantic-ui-react'
import { VictoryChart, VictoryArea, VictoryTheme, VictoryPolarAxis } from 'victory'

const BoroughRadar = props => (
  <div>
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
            tickValues={['site EUI', 'd GHG', 'i GHG', 'src EUI']}
            labelPlacement="vertical"
          />
        </VictoryChart>
      </div>
      : <Loader active/>
    }
  </div>
)

export default BoroughRadar
