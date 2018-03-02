import React, { PureComponent } from 'react'
import Home from '../Home'
import Cards from '../Cards/Cards'
import Loader from '../Loader'

class Welcome extends PureComponent {

    async componentDidMount(){
        const res = await localStorage.getItem('user')
        const user = JSON.parse(res)

        if(user.clients.length === 0){
            return this.props.history.push('/clients/new')
        }
    }

    render(){
        return (
            <Home location={this.props.location}>
                <Cards />

            </Home>
        )
    }
}

export default Welcome