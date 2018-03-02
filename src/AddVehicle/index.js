import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Home from '../Home'
import Form from './form'


class AddVehicle extends PureComponent {
    
    state = {
        vehicle: {
            regNumber: '',
            chassisNumber: '',
            insuranceType: '',
            purpose: '',
            policyNumber: ''
        },
        error: ''
      }

      async componentDidMount(){
        const vehicle = await localStorage.getItem('vehicle')
        
        if(vehicle){
            return this.setState({vehicle: JSON.parse(vehicle)})
        }
       
      }

      handleSubmit = async(e) => {
          e.preventDefault();
          await localStorage.setItem('vehicle', JSON.stringify(this.state.vehicle))

          this.props.history.push('/claims/new')   
      }

     handleOnChange = ({target}) => {
         this.setState(prevState => ({
             vehicle: {
                 ...prevState.vehicle,
                 [target.name]: target.value
             }
         }))
     }
    

    handleBack = () => {
        this.props.history.goBack()
    }

    render(){
        const { vehicle } = this.state
        return (
            <Home location={this.props.location}>
                <Form 
                    handleOnChange={this.handleOnChange}
                    handleBack={this.handleBack}
                    handleSubmit={this.handleSubmit}
                    data={vehicle}
                />
            </Home>
        )
    }
}


export default AddVehicle