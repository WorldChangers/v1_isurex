import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import DisplaySearch from './display';

class Search extends PureComponent {

    state  = {
        company: ''
    }

    async componentDidMount(){
        const res = await localStorage.getItem('user')
        await localStorage.setItem('vehicleId', this.props.location.state.vehicle._id)
        const user = await JSON.parse(res)
        this.setState({company: user.company})
    }

    render(){
        const { state } = this.props.location

        if(!state) {
            return (
            <Home location={this.props.location}>
              <h1 style={{marginLeft: '10%', marginTop: '10%'}}>Sorry, Page not found <Link to='/claims'>Go Back</Link></h1>
             </Home>
            )
        }
        return (
            <Home location={this.props.location}>
               <DisplaySearch 
               company={this.state.company}
               state={state}
               />
            </Home>
        )
    }
}

export default Search