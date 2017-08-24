import React from 'react'
import { Message } from 'semantic-ui-react'

const Definitions = props => (
  <Message>
    <h1 style={{textAlign: 'center'}} >Definitions</h1>
    <br/>
    <a href='https://www.energystar.gov/buildings/facility-owners-and-managers/existing-buildings/use-portfolio-manager/understand-metrics/what-energy'><h2>Energy Use Intensity (EUI):</h2></a>
    <p>expresses a building’s energy use as a function of its size or other characteristics. It’s calculated by dividing the total energy consumed by the building in one year (measured in kBtu or GJ) by the total gross floor area of the building.</p>
    <a href='https://www.energystar.gov/buildings/facility-owners-and-managers/existing-buildings/use-portfolio-manager/understand-metrics/difference'><h2>Site vs. Source EUI:</h2></a>
    <h3>Site EUI:</h3>
    <p>the amount of heat and electricity consumed by a building as reflected in your utility bills.</p>
    <h3>Source EUI</h3>
    <p>the total amount of raw fuel that is required to operate the building. It incorporates all transmission, delivery, and production losses. By taking all energy use into account, the score provides a complete assessment of energy efficiency in a building.</p>
    <br/>
    <br/>
    <a href='https://portfoliomanager.zendesk.com/hc/en-us/articles/219811847-How-are-my-GHG-emissions-calculated-'><h2>Direct and Indirect Emissions</h2></a>
    <h3>Direct Greenhouse Gas (GHG) emissions</h3>
    <p>emissions from sources that are owned or controlled by the reporting entity</p>
    <h3>Indirect Greenhouse Gas (GHG) emissions</h3>
    <p>emissions that are a consequence of the activities of the reporting entity, but occur at sources owned or controlled by another entity</p>
    <br/>
    <br/>
    <p>definitions source: EnergyStar</p>
    <p>data source: new york city open data Energy and Water Data Disclosure for Local Law (2014)</p>
    <p>buildings classified as mid-sized will also be required to release their energy usage in 2018</p>
  </Message>
)

export default Definitions
