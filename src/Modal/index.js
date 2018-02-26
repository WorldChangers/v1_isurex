import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

  const ClientDetails = ({modal, phone, location, toggle, fullname, vehicles=[]}) => (
    <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <Modal isOpen={modal} toggle={toggle} >
              <ModalHeader toggle={toggle}>
                  <h3>{fullname}</h3>
              </ModalHeader>
              <ModalBody>
                 {     
                   vehicles.map(am => {
                     return (
                       <div key={am._id}>
                          <h3 style={{color:'blue'}}>Vehicle Info</h3>
                          <p>Vehicle Number: <em>{am.regNumber}</em></p>
                          <p>Chassis Number: <em>{am.chassisNumber}</em></p>
                          <p>Insurance Package: <em>{am.insuranceType}</em></p>
                          <p>Purpose: <em>{am.purpose}</em></p>

                          <h3 style={{color:'red'}}>Claim Info</h3>
                          <p>Type:<strong style={{paddingLeft: '5%'}}>{am.claims[0].type}</strong></p>
                          <p>Date:<strong style={{paddingLeft: '5%'}}>{am.claims[0].date.slice(0, 16)}</strong></p>
                          <p>Person Driving:<strong style={{paddingLeft: '5%'}}>{am.claims[0].driver}</strong></p>
                          <p>What Happened:<strong style={{paddingLeft: '5%'}}>{am.claims[0].description}</strong></p>
                          <p>Damaged Place:<strong style={{paddingLeft: '5%'}}>{am.claims[0].damagedPlace}</strong></p>           
                          <p>Was the Claim Paid? :<strong style={{paddingLeft: '5%'}}>{am.claims[0].paid}</strong></p> 
                      </div>
                     )
                   })
                 }
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={toggle}>Calculate Risk Score</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
       </div>
  )
  

export default ClientDetails;