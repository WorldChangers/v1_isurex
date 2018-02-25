import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Form from '../AuthForm'
import {signInUser} from '../actions/auth'

class Login extends PureComponent {

  state = {
    email: '',
    password: '',
  }

  handleChange = ({target}) => {
    this.setState({[target.name]:target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signInUser(this.state, this.props.history)
    
  }

  render(){
    console.log(this.props)
    return (
      <div>
        <Form 
          type='Login' 
          loading={this.props.ui.isLoading}
          data={this.state}
          handleChange={this.handleChange}
          onSubmit={this.handleSubmit}
          />

      </div> 
    )
  }
}

const mapStateToProps = ({ui}) => ({
  ui
})

export default connect(mapStateToProps, {signInUser})(Login)