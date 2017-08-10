import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'

const Graph = props => {
  if(props.building){
    let totalGHG = parseInt(props.building.total_GHG_emissions, 10)
    let directGHG = parseInt(props.building.direct_GHG_emissions, 10)
    let indirectGHG = parseInt(props.building.indirect_GHG_emissions, 10)

    return(
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
              {column: 1, emissions: totalGHG |= 0},
              {column: 2, emissions: directGHG |= 0},
              {column: 3, emissions: indirectGHG |= 0}
            ]}
            x="column"
            y="emissions"
          />
        </VictoryChart>
      </div>
    )
  } else {return null}
}

export default Graph
