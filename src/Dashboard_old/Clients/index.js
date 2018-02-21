import React, { PureComponent } from 'react'
import { Input, Button, Container } from 'semantic-ui-react';
import Home from '../../Home'
import Details from './details'

class ClientDetails extends PureComponent {

    render() {
        return (
            <Home>
                <Details />
            </Home>
        )
    }
}

export default ClientDetails
