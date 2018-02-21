import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const StepExampleGroup = ({active}) => (
  <Step.Group>
    <Step >
      <Icon name='user' />
      <Step.Content>
        <Step.Title>Client Details</Step.Title>
        <Step.Description>Add the Clients Details</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='car' />
      <Step.Content>
        <Step.Title>Vehicle</Step.Title>
        <Step.Description>Enter vehicle information</Step.Description>
      </Step.Content>
    </Step>

    <Step disabled>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Claims</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
)

export default StepExampleGroup
