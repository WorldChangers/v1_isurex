import React, { PureComponent } from 'react'
import Dashboard from '../'
import Steps from './steps'
import Vehicle from './vehicle'

class CreateClient extends PureComponent{
    render(){
        return (
            <Dashboard>
                <Steps />
                <Vehicle />
            </Dashboard>
        )
    }
}

export default CreateClient