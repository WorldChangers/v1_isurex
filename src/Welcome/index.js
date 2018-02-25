import React, { PureComponent } from 'react'
import Home from '../Home'
import Cards from '../Cards/Cards'
import Loader from '../Loader'

class Welcome extends PureComponent {

    render(){
        return (
            <Home history={this.props.history} location={this.props.location}>
                <Cards location={this.props.location} />

            </Home>
        )
    }
}

export default Welcome