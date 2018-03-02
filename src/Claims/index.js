import React, { PureComponent } from 'react'
import Home from '../Home'
import Cards from '../Cards/Cards'
import Loader from '../Loader'

class Welcome extends PureComponent {

    render(){
        return (
            <Home location={this.props.location}>
                <Cards />

            </Home>
        )
    }
}

export default Welcome