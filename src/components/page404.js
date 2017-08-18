import React from 'react'
import { Message } from 'semantic-ui-react'

const page404 = () => (
  <Message negative>
    <Message.Header>We're sorry but the page you have entered was not found</Message.Header>
    <p>Please enter an address in the search box above to find a building</p>
  </Message>
)

export default page404
