import React, { PureComponent } from 'react';
import './form.css'

const AddClient = ({handleSubmit,handleChange, data}) => (
  <div style={{paddingTop: 15}} className="animated fadeIn">
  <div className="row">
  <div className="col-md-6 padding">

  <div className="card">
    <div className="card-header">
      <strong>Client</strong> <small>Information</small>
    </div>
    <div className="card-block">
      <form onSubmit={handleSubmit} method='post'>
      <div className="form-group">
        <label htmlFor="company">Fullname</label>
        <input required type="text" onChange={handleChange} value={data.fullname} className="form-control" name='fullname'  placeholder="Enter your fullname"/>
      </div>

      <div className="form-group">
        <label htmlFor="vat">Phone Number</label>
        <input required type="text" onChange={handleChange} value={data.phone} className="form-control" name='phone' placeholder="0270200808"/>
      </div>

       <div className="row">

        <div className="form-group col-sm-8">
          <label htmlFor="street">ID Type</label>
          <select required onChange={handleChange} value={data.idType} required name="idType" className="form-control input-lg" size="1">
                  <option defaultValue disabled value="0">Please select</option>
                  <option value="Voters">Voters</option>
                  <option value="NHIS">NHIS</option>
                  <option value="NHIS">Passport</option>
                  <option value="Driving Licence">Driving Licence</option>
              </select>
          </div>

          <div className="form-group col-sm-4">
              <label htmlFor="postal-code">ID Number</label>
              <input required type="text" onChange={handleChange} value={data.id} className="form-control" name='id' placeholder="ID Number"/>
          </div>
      </div>
      <div className="form-group">
        <label htmlFor="country">Location</label>
        <input required type="text" onChange={handleChange} value={data.location} className="form-control" name='location' placeholder="Location name"/>
      </div>
      
      <div className="card-footer">
          <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-arrow-right"></i> Next Vehicle</button>&nbsp;
    </div>
    </form>
    </div>
  </div>
</div>
</div>
</div>
)

export default AddClient