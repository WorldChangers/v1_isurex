import React, { Component } from 'react'
import { Fade } from 'reactstrap'

const Show = ({file,fraud, handleMessage}) => (
    <div className="animated fadeIn">
         
        <div className="row">
        <div className="col-sm-6 col-md-4">
        <div className="card card-outline-info">
            <div className="card-header">
            Client Information
            </div>
             <div className="card-block">
             <p><strong>Fullname: {file.Fullname}</strong></p>
             <p><strong>ID Type: {file['ID Type']}</strong></p>
             <p><strong>ID Number: {file['ID Number']}</strong></p>
             <p><strong>Phone: +{file['Phone Number']}</strong></p>
             <p><strong>Location: {file['Location']}</strong></p>
           </div>
        </div>
        </div>
        <div className="col-sm-6 col-md-4">
        <div className="card card-outline-warning">
            <div className="card-header">
             Vehicle Information
            </div>
            <div className="card-block">
                <p><strong>Registration Number: {file['Registration Number']}</strong></p>
                <p><strong>Chassis Number: {file['Chassis Number']}</strong> </p>
                <p><strong>Purpose of Vehicle: {file['Purpose Of Vehicle']}</strong></p>
                <p><strong>Policy Number: {file['Policy Number']}</strong></p>
                <p><strong>Insurance Type: {file['Insurance Type']}</strong></p>
            </div>   
        </div>
        </div>
        <div className="col-sm-6 col-md-4" style={{cursor:'pointer'}}>
        <div className="card card-outline-danger">
            <div className="card-header">
            Claims Information
            </div>
            { fraud === true && file['ID Number'] === '440346' ?
                 <div className="card-block">
                 <h1 onClick={() =>handleMessage(file)} className='animated fadeIn' style={{color:'red'}}>Fraud Suspected</h1>
                 <p><strong>Type of Incidence: {file['Type Incidence']}</strong> </p>
                     <p><strong>Date of Incidence: {file['Date Incident Occured']}</strong></p>
                     <p><strong>Person Driving: {file['Person Driving']}</strong> </p>
                     <p><strong>Was the Claim Paid: {file['Has the Claim been Paid?']}</strong></p> 
                     <p><strong>Description: {file['Description']}</strong></p>
                     <p><strong>Where was it Reported:{file['Where was it reported ?']} </strong></p>
                 </div>
                :
                <div className="card-block">
                 <p><strong>Type of Incidence: {file['Type Incidence']}</strong> </p>
                     <p><strong>Date of Incidence: {file['Date Incident Occured']}</strong></p>
                     <p><strong>Person Driving: {file['Person Driving']}</strong> </p>
                     <p><strong>Was the Claim Paid: {file['Has the Claim been Paid?']}</strong></p> 
                     <p><strong>Description: {file['Description']}</strong></p>
                     <p><strong>Where was it Reported:{file['Where was it reported ?']} </strong></p>
                 </div>
            }
           
        </div>
        </div>
        </div>
    </div>
)

export default Show