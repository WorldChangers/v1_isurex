import React from 'react';
import '../AddClient/form.css'


const AddVehicle = ({handleSubmit,data,handleBack, handleOnChange}) => (
    <div style={{paddingTop: 15}} className="animated fadeIn">
    <div className="row">
    <div className="col-md-6 padding">

    <div className="card">
      <div className="card-header">
        <strong>Vehice</strong> <small>Information</small>
      </div>
      <div className="card-block">
       <form onSubmit={handleSubmit} method='post'>
        <div className="form-group">
          <label htmlFor="company">Registration Number</label>
          <input type="text" value={data.regNumber} onChange={handleOnChange} className="form-control" name='regNumber'  placeholder="Registraion Number"/>
        </div>

        <div className="form-group">
          <label htmlFor="vat">Chassis Number</label>
          <input type="text" value={data.chassisNumber} onChange={handleOnChange} className="form-control" name='chassisNumber' placeholder="Chassis Number"/>
        </div>
         <div className="form-group">
            <label htmlFor="street">Purpose Of Vehicle</label>
            <select value={data.purpose} onChange={handleOnChange} required name="purpose" className="form-control input-lg" size="1">
                    <option defaultValue disabled value="0">Please select</option>
                    <option value="Private">Private</option>
                    <option value="Commercial">Commercial</option>
                </select>
        </div>
        <div className="form-group">
            <label htmlFor="street">Insurance Type</label>
            <select value={data.insuranceType} onChange={handleOnChange}  required name="insuranceType" className="form-control input-lg" size="1">
                    <option defaultValue disabled value="0">Please select</option>
                    <option value="Third Party">Third Party</option>
                    <option value="Comprehensive">Comprehensive</option>
                </select>
        </div>
        <div className="card-footer">
            <button onClick={handleBack} className="btn btn-sm btn-primary"><i className="fa fa-arrow-left"></i> Prev Client</button>&nbsp;
            <button  type="submit" className="btn btn-sm btn-primary"><i className="fa fa-arrow-right"></i> Next Claim</button>&nbsp;
      </div>
      </form>
      </div>
    </div>
  </div>
  </div>
 </div>
)

export default AddVehicle