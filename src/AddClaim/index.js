import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { addClaim } from '../actions/claim'
import Home from '../Home'
import Form from './form'

class AddClaim extends PureComponent {
    
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

    state = {
        claim: {
            driver: '',
            description:'',
            date: '',
            paid:'',
            damagedPlace: [],
            type: 'Accident'
        },
        damage: [],
        error: ''
      }

      async componentDidMount(){
        const claim = await localStorage.getItem('claim')
        
        if(claim){
            return this.setState({claim: JSON.parse(claim)})
        }
      }

      handleSubmit = async(e) => {
          e.preventDefault()
          
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
        const { claim, damage } = this.state
        return (
            <Home location={this.props.location}>
                <Form
                    handleSubmit={this.handleSubmit}
                    handleBack={this.handleBack}
                    handleOnChange={this.handleOnChange}
                    saveChanges={this.saveChanges}
                    claim={claim}
                    damage={damage}
                />
            </Home>
        )
    }
}


export default connect(null, {addClaim})(AddClaim)