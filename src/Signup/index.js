import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Signup = () => (
  <div className='login-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' />
          {' '}Signup for an account
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
              icon='lock'
              iconPosition='left'
              placeholder='Phone Number'
              type='Number'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Email Address'
              type='email'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='text'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Your Organisation'
              type='text'
            />
            <Button color='teal' fluid size='large'>Join Us</Button>
          </Segment>
        </Form>
        <Message>
          Already has account? <Link to='/login'>Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default Signup