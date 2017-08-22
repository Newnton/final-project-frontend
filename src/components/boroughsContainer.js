import React from 'react'
import { connect } from 'react-redux'
import { Message, Grid, Menu, Segment, Loader } from 'semantic-ui-react'
import BoroughRadar from './boroughs/boroughRadar'
class BoroughsContainer extends React.Component {
  state ={
    activeItem: 'manhattan'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='manhattan' active={activeItem === 'manhattan'} onClick={this.handleItemClick} />
          <Menu.Item name='queens' active={activeItem === 'queens'} onClick={this.handleItemClick} />
          <Menu.Item name='brooklyn' active={activeItem === 'brooklyn'} onClick={this.handleItemClick} />
          <Menu.Item name='bronx' active={activeItem === 'bronx'} onClick={this.handleItemClick} />
          <Menu.Item name='staten island' active={activeItem === 'staten island'} onClick={this.handleItemClick} />
        </Menu>

        <Segment attached='bottom'>
          <h1 style={{textAlign: 'center'}} >{this.state.activeItem}</h1>
          <Message>
            <Grid>
              <Grid.Row>
                {/* <Grid.Column width={2}/> */}
                <Grid.Column width={8}>
                  <BoroughRadar boroughs={this.props.boroughs} activeItem={this.state.activeItem.split(' ')[0]} type='average' />
                </Grid.Column>
                {/* <Grid.Column width={2}/>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={2}/> */}
                <Grid.Column width={8}>
                  <BoroughRadar boroughs={this.props.boroughs} activeItem={this.state.activeItem.split(' ')[0]} type='total' />
                </Grid.Column>
                {/* <Grid.Column width={2}/> */}
              </Grid.Row>
            </Grid>
          </Message>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  boroughs: state.boroughs
})

export default connect( mapStateToProps )( BoroughsContainer )
