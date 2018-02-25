import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Form from '../AuthForm';
import { signUp } from '../actions/auth'


class Signup extends PureComponent {

  state = {
    email: '',
    password: '',
    company: '',
    name: ''
  }

  handleChange = ({target}) => {
    this.setState({[target.name]:target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state, this.props.history)
    
  }

  render(){
    return (
      <div>
        <Form 
          msg= {this.props.ui.signup}
          data={this.state} type='Signup'  
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
export default connect(mapStateToProps, {signUp})(Signup)