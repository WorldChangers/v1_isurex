import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchClients } from '../actions/claim'
import  ClientDetails from '../Modal'
import Loader from '../Loader'

class Cards extends PureComponent {

  state = {
    details: {}
  }

  // shouldComponentUpdate(props, nextProps){
  //   if(!props.clients.clients){
  //     return false
  //   }
  // }

   componentDidMount(){
     this.props.fetchClients()
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      details: {}
    })
  }


  clientDetails = async (e, p) => {
    await this.setState({
      details: p
    });

    await this.props.history.push({
      pathname: '/search',
      state: {...this.state.details }
    })
   
  }


  claimShow = () => {
    return this.props.clients.clients.map((p, i) => {
      return (
        <tr onClick={(e) => this.clientDetails(e, p)} style={{cursor: 'pointer'}} key={i}>
          <td>{p.name}</td>
          <td>+233 {p.phone}</td>
          <td>{p.location}</td>
          <td>
            {p.fraud === 'True' &&
               <span className="badge badge-danger">True</span>
            }
            {p.fraud === 'False' &&
                <span className="badge badge-success">False</span>
              }
          </td>
      </tr>
      )
    })
  }

  render() {
    if (this.props.clients.clients.length === 0){
      return <Loader />
    }
   
    const { location } = this.props
    return (
      <div>
      <div style={{paddingTop:10}} className="animated fadeIn">
          <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i>Your Clients Record
              </div>
              <div className="card-block">
                <table className="table table-bordered table-striped table-condensed">
                  <thead>
                    <tr>
                      <th>Full Name</th>
                      <th>Phone Number</th>
                      <th>Location</th>
                      <th>Fraud</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.claimShow()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        </div> 
        </div>
    )
  }
}

const mapStateToProps = ({clients}) => ({
  clients
})
 
const withRoute =  withRouter(Cards)
export default connect(mapStateToProps, {fetchClients})(withRoute);
