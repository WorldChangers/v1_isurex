import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import Form from './form'

class AddClient extends PureComponent {
    
    handleNext = () => {
        this.props.history.push('/vehicles/new')
      }
   

    render(){
        return (
            <Home location={this.props.location}>
                <Form 
                    handleNext={this.handleNext}
                />
            </Home>
        )
    }
}


export default AddClient