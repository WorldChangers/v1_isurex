import React, { PureComponent } from 'react'
import Home from '../Home'
import Form from './form'

class AddClaim extends PureComponent {
    
    handleNext = () => {
        console.log('data')
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


export default AddClaim