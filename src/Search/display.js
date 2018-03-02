import React from 'react'
import LaddaButton, {CONTRACT_OVERLAY} from 'react-ladda'
import { Link } from 'react-router-dom'


const DisplaySearch = ({state, loading,company}) => (
    <div className="animated fadeIn" style={{marginTop:'3%'}}>
      <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <Link className='btn btn-success' to={{ pathname: '/claims/new', state: { disabled: true} }}>Add Claim to Record</Link>
        <LaddaButton
        className="btn btn-success btn-lg"
        loading={loading}
        // onClick={() => this.toggle('expOverlay')}
        data-style={CONTRACT_OVERLAY}
      >
    RISK SCORE
  </LaddaButton>
  </div>
     <h3 style={{display: 'flex',flexDirection:'row', alignSelf: 'center'}}>{state.company.company}</h3>
    <div className="row">
    {state.vehicle && 
    <div className="col-sm-6 col-md-4">
      <div className="card card-outline-primary">
        <div className="card-header">
          Client Information
        </div>
             <div className="card-block">
             <p><strong>Fullname: </strong> {state.name}</p>
             <p><strong>ID Type: </strong>  {state.idType}</p>
             <p><strong>ID Number: </strong> {state.idNumber}</p>
             <p><strong>Phone: </strong> +233 {state.phone}</p>
             <p><strong>Location: </strong> {state.location}</p>
           </div>
      </div>
    </div>
    }
    <div className="col-sm-6 col-md-4">
      <div className="card card-outline-secondary">
        <div className="card-header">
          Vehicle Information
        </div>
            {
                state.vehicle ?
                <div className="card-block">
                    <p><strong>Registration Number: </strong>{state.vehicle.regNumber}</p>
                    <p><strong>Chassis Number: </strong> {state.vehicle.chassisNumber}</p>
                    <p><strong>Purpose of Vehicle: </strong> {state.vehicle.purpose}</p>
                    <p><strong>Policy Number: </strong> {state.vehicle.policyNumber}</p>
                    <p><strong>Insurance Type: </strong> {state.vehicle.insuranceType}</p>
                </div>   
                :    
                <div className="card-block">
                    <p><strong>Registration Number: </strong>{state.regNumber}</p>
                    <p><strong>Chassis Number: </strong> {state.chassisNumber}</p>
                    <p><strong>Purpose of Vehicle: </strong> {state.purpose}</p>
                    <p><strong>Policy Number: </strong> {state.policyNumber}</p>
                    <p><strong>Insurance Type: </strong> {state.insuranceType}</p>
                </div>     
            } 
      </div>
    </div>
    <div className="col-sm-6 col-md-4">
      <div className="card card-outline-success">
        <div className="card-header">
          Claims Report
        </div>
       
          {
              state.vehicle ? state.vehicle.claims.map((e, i) => (
                <div key={e._id} className="card-block">
                <p><strong>Type of Incidence: </strong> {e.type}</p>
                <p><strong>Date of Incidence: </strong> {e.date.slice(0, 16)}</p>
                <p><strong>Person Driving: </strong> {e.driver}</p>
                <p><strong>Was the Claim Fraud: </strong> {e.fraud}</p>
                <p><strong>Was the Claim Paid: </strong> {e.paid}</p>
                <p><strong>Description of {e.type}: </strong> {e.description}</p>
                <p><strong>Damaged Place Vehicle: </strong> {e.damagedPlace}</p>
                {
                    company !== e.company ?  
                        <p><strong>Company Claim Recorded: </strong> {e.company}</p> 
                      :  <Link className='btn btn-info' to={{ pathname: '/claims/edit', state: { disabled: true} }}>Edit Claim</Link>
                }
          </div> 
          )): 
            state.claims.map((e, i) => (
                <div key={e._id} className="card-block">
                <p><strong>Type of Incidence: </strong> {e.type}</p>
                <p><strong>Date of Incidence: </strong> {e.date.slice(0, 16)}</p>
                <p><strong>Person Driving: </strong> {e.driver}</p>
                <p><strong>Was the Claim Fraud: </strong> {e.fraud}</p>
                <p><strong>Was the Claim Paid: </strong> {e.paid}</p>
                <p><strong>Description of {e.type}: </strong> {e.description}</p>
                <p><strong>Damaged Place Vehicle: </strong> {e.damagedPlace}</p>
                {
                    company !== e.company ?  <p><strong>Company Claim Recorded: </strong> {e.company}</p> : null
                }
          </div> 
        ))}
      </div>
    </div>
  </div>
 </div>
)


export default DisplaySearch