import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { fetchClients } from '../actions/claim'
import  ClientDetails from '../Modal'

class Cards extends PureComponent {

  state = {
    person : [],
    modal: false,
    details: {}
  }


   componentWillMount(){
     this.props.fetchClients()
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      details: {}
    })
  }


  clientDetails = (e, p) => {
    this.setState({
      details: p,
      modal: true,
    })
  }


  claimShow = () => {
    return this.props.clients.clients.map((p, i) => {
      return (
        <tr onClick={(e) => this.clientDetails(e, p)} style={{cursor: 'pointer'}} key={i}>
          <td>{p.fullname}</td>
          <td>+233 {p.phone}</td>
          <td>{p.location}</td>
          <td>
            <span className="badge badge-success">False</span>
          </td>
      </tr>
      )
    })
  }


  renderPersons = () => {
    return this.props.clients.search.map((p, i) => {
      return (
        <tr onClick={(e) => this.clientDetails(e, p)} style={{cursor: 'pointer'}} key={i}>
          <td>{p.fullname}</td>
          <td>+233 {p.phone}</td>
          <td>{p.location}</td>
          <td>
            <span className="badge badge-success">False</span>
          </td>
      </tr>
      )
    })
  }

  render() {
    const { location } = this.props
    const {modal, details} = this.state
     const {vehicles} = details
     const {claims} =  vehicles || {}
     console.log(this.props)
    return (
      <div>
       {
          modal && <ClientDetails vehicles={vehicles} {...details} modal={true} toggle={this.toggle} />
       }
      <div style={{paddingTop:10}} className="animated fadeIn">
          <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Clients
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
                    {
                      location.pathname === '/claims' ? this.claimShow():this.renderPersons()}
                  </tbody>
                </table>
                <nav>
                  <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                    <li className="page-item active">
                      <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
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
 

export default connect(mapStateToProps, {fetchClients})(Cards);
