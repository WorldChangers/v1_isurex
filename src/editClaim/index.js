import React, { PureComponent } from 'react'
import Home from '../Home'
import Form from './form'

class EditClaim extends PureComponent {
    state = {
            search: {},
            damage: [],
            error: '',
            isLoading: false
      }

    saveChanges = (damage) => {
        //onst [label] = damage
        const am = damage.map(d => d.value)
        
        this.setState({ damage:am });
        this.setState(prevState => ({
            claim: {
                ...prevState.claim,
                damagedPlace: am
            }
        }))
    }

    handleType = ({target}) => {
        this.setState({type: target.value})
    }

      async componentWillMount(){
        //const claim = await localStorage.getItem('claim')
        const res = await localStorage.getItem('search')
        const search = JSON.parse(res)
        if(res){
            return this.setState({
                search: search.vehicle
            })
        }
      }

      handleSubmit = async(e) => {
          e.preventDefault()
          this.setState({isLoading:true})
          
          await localStorage.setItem('claim', JSON.stringify(this.state.claim))
          
          this.props.addClaim(this.props.history)
      }
    

     handleOnChange = ({target}) => {
         this.setState(prevState => ({
             claim: {
                 ...prevState.claim,
                 [target.name]: target.value,
             }
         }))
     }
    
    handleBack = () => {
        this.props.history.goBack()
    }

    render(){
        const {  damage } = this.state
        console.log(this.state.search)
        return (
            <Home location={this.props.location}>
                <Form
                    loading={this.state.isLoading}
                    //handleSubmit={this.handleSubmit}
                    handleOnChange={this.handleOnChange}
                    saveChanges={this.saveChanges}
                    search={this.state.search}
                    damage={damage}
                />
            </Home>
        )
    }
}



export default EditClaim