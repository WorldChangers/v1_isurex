import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'
import DisplaySearch from './display';
import {setAuthorizationHeader} from '../utils'
import axios from 'axios'

class Search extends PureComponent {

    state  = {
        company: '',
        riskScore: '',
        clientId:'',
        token: ''
    }

    async componentDidMount(){
        const res = await localStorage.getItem('user')
       
        const {idNumber} = this.props.location.state

        await localStorage.setItem('vehicleId', this.props.location.state.vehicle._id)
        const user = await JSON.parse(res)
        this.setState({
            company: user.company,
            clientId: idNumber,
            token: user.token
        })
    }


    calculateRiskScore = async() => {

        try {
            setAuthorizationHeader(this.state.token)
            const risk = await axios.get(`https://insurex-api.herokuapp.com/api/v1/vehicles/riskScore/${this.state.clientId}`)
            
            this.setState({
                riskScore: 'loading.....'
            })
            setTimeout(() => {
                this.setState({riskScore: risk.data.riskScore})
            }, 3000);
        } catch (e) {
            console.log(e)
        }
    }
    render(){
        const { state } = this.props.location
        console.log(this.state)
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
               calculateRiskScore={this.calculateRiskScore}
               state={state}
               riskScore={this.state.riskScore}
               />
            </Home>
        )
    }
}

export default Search