import React, { PureComponent } from 'react'
import Home from '../Home'
import Form from './form'

class AddClient extends PureComponent {

    state = {
        client: {
            name: '',
            phone: '',
            idNumber: '',
            idType: '',
            location: '',
            fraud: ''
        },
        error: ''
      }

      async componentDidMount(){
        const client = await localStorage.getItem('client')
        
        if(client){
            return this.setState({client: JSON.parse(client)})
        }
      }

      handleSubmit = async(e) => {
          e.preventDefault()
          await localStorage.setItem('client', JSON.stringify(this.state.client))
          this.props.history.push('/vehicles/new')
      }

     handleOnChange = ({target}) => {
         this.setState(prevState => ({
             client: {
                 ...prevState.client,
                 [target.name]: target.value
             }
         }))
     }
   

    render(){
        const { client } = this.state
        return (
            <Home location={this.props.location}>
                <Form 
                    data={client}
                    handleChange={this.handleOnChange}
                    handleSubmit={this.handleSubmit}
                />
            </Home>
        )
    }
}


export default AddClient