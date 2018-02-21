import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Vehicle = () => (
  <div className='login-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
      <Grid.Column style={{ maxWidth: 600 }}>
        <Header as='h2' color='teal' textAlign='center'>
          {' '}Add Vehicle
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='car'
              iconPosition='left'
              placeholder='Registration Number'
            />
            <Form.Input
              fluid
              icon='phone'
              iconPosition='left'
              placeholder='Chassis Number'
              type='number'
            />
            <Form.Input
              fluid
              icon='price'
              iconPosition='left'
              placeholder='Value of the Vehicle'
              type='text'
            />
            <Form.Input
              fluid
              icon='drive'
              iconPosition='left'
              placeholder='Purpose'
              type='text'
            />
            <Form.Input
              fluid
              icon='job'
              iconPosition='left'
              placeholder='Occupation'
              type='text'
            />

            <Button color='teal' fluid size='large'>
              <Icon name='next' />
              Next
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
  </div>
)

export default Vehicle