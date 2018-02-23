import React, { PureComponent } from 'react'
import Home from '../Home'
import Form from './form'

class AddVehicle extends PureComponent {
    
    handleNext = () => {
        this.props.history.push('/claims/new')
    }

    handleBack = () => {
        this.props.history.goBack()
    }

    render(){
        return (
            <Home location={this.props.location}>
                <Form 
                    handleNext={this.handleNext}
                    handleBack={this.handleBack}
                />
            </Home>
        )
    }
}


export default AddVehicle