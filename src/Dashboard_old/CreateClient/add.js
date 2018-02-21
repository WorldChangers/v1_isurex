import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const AddClient = () => (
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
          {' '}Add Client
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Fullname'
            />
            <Form.Input
              fluid
              icon='phone'
              iconPosition='left'
              placeholder='Phone Number'
              type='number'
            />
            <Form.Input
              fluid
              icon='calendar'
              iconPosition='left'
              placeholder='Date of Birth'
              type='date'
            />
            <Form.Input
              fluid
              icon='map'
              iconPosition='left'
              placeholder='Location'
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

export default AddClient