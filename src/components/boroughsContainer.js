import React from 'react'
import { connect } from 'react-redux'
import { Message, Grid, Menu, Segment, Loader } from 'semantic-ui-react'
import BoroughRadar from './boroughs/boroughRadar'
import BoroughStats from './boroughs/boroughStats'
import TotalBuildings from './boroughs/totalBuildings'
class BoroughsContainer extends React.Component {
  state ={
    activeItem: 'manhattan'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      this.props.boroughs ?
        <div>
          <Message>
            <Menu attached='top' tabular>
              <Menu.Item name='manhattan' active={activeItem === 'manhattan'} onClick={this.handleItemClick} />
              <Menu.Item name='queens' active={activeItem === 'queens'} onClick={this.handleItemClick} />
              <Menu.Item name='brooklyn' active={activeItem === 'brooklyn'} onClick={this.handleItemClick} />
              <Menu.Item name='bronx' active={activeItem === 'bronx'} onClick={this.handleItemClick} />
              <Menu.Item name='staten island' active={activeItem === 'staten island'} onClick={this.handleItemClick} />
            </Menu>

            <Segment attached='bottom'>
              <h1 style={{textAlign: 'center'}} >{this.state.activeItem[0].toUpperCase() + this.state.activeItem.slice(1)}:</h1>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <BoroughRadar boroughs={this.props.boroughs} activeItem={this.state.activeItem.split(' ')[0]} />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <div style={{position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
                      <BoroughStats boroughs={this.props.boroughs} activeItem={this.state.activeItem.split(' ')[0]} type='average'/><br/><br/>
                      <BoroughStats boroughs={this.props.boroughs} activeItem={this.state.activeItem.split(' ')[0]} type='total'/>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <TotalBuildings boroughs={this.props.boroughs} />
          </Message>
        </div>
      : <Message><br/><br/><br/><Loader active /><br/><br/><br/></Message>
    )
  }
}

const mapStateToProps = state => ({
  boroughs: state.boroughs
})

export default connect( mapStateToProps )( BoroughsContainer )
