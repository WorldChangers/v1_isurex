import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

  const ClientDetails = ({modal, location, toggle, fullname, vehicles=[]}) => (
    <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <Modal isOpen={modal} toggle={toggle} >
              <ModalHeader toggle={toggle}>{fullname}</ModalHeader>
              <ModalBody>
                 <p>Location: {location}</p>
                 {     
                   vehicles.map(am => {
                     return (
                       <div key={am._id}>
                          <h3 style={{color:'blue'}}>Vehicle Info</h3>
                          <p>Vehicle Number: <em>{am.regNumber}</em></p>
                          <p>Chassis Number: <em>{am.chassisNumber}</em></p>
                          <p>Insurance Package: <em>{am.insuranceType}</em></p>
                          <p>Purpose: <em>{am.purpose}</em></p>

                          <h3 style={{color:'blue'}}>Claim Info</h3>
                          <p>Type of Accident: <em>{am.claims.map(cl => {
                            <h2>{cl.type}</h2>
                          })}</em></p>
                      </div>
                     )
                   })
                 }
              </ModalBody>
              <ModalFooter>
                {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button> */}
              </ModalFooter>
            </Modal>
          </div>
        </div>
       </div>
  )
  

export default ClientDetails;