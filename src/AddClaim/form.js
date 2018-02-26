import React from 'react';
import Select from 'react-select'
import LaddaButton, {CONTRACT_OVERLAY} from 'react-ladda'
import options from './options'
import '../AddClient/form.css'

const AddClaim = ({loading, claim,damage,saveChanges, handleSubmit, handleBack,handleOnChange}) => (
    <div style={{paddingTop: 15}} className="animated fadeIn">
            <div className="row">
            <div className="col-md-6 padding">

            <div className="card">
              <div className="card-header">
                <strong>Claim</strong> <small>Information</small>
              </div>
              <div className="card-block">
              <form onSubmit={handleSubmit} method='post'>
                 <div className="form-group">
                    <label htmlFor="street">Type Incidence</label>
                    <select required value={claim.type} onChange={handleOnChange} required name="type" className="form-control input-lg" size="1">
                            <option defaultValue disabled value="0">Please select</option>
                            <option value="Accident">Accident</option>
                            <option value="Theft">Theft</option>
                        </select>
                </div>
                <div className="form-group">
                  <label htmlFor="company">Date Incidence Occured</label>
                  <input required type="datetime-local" value={claim.date} onChange={handleOnChange} className="form-control" name='date'  placeholder="Registraion Number"/>
                </div>
                <div className="form-group">
                  <label htmlFor="vat">Person Driving</label>
                  <input required type="text" value={claim.driver} onChange={handleOnChange} className="form-control" name='driver' placeholder="Person Driving"/>
                </div>
                {
                    claim.type === 'Accident' && (
                    <div className="form-group">
                      <label htmlFor="vat">Place Damaged</label>
                        <Select.Creatable
                            required
                            name="form-field-name2"
                            value={damage}
                            options={options}
                            onChange={saveChanges}
                            multi
                        />
                    </div>
                    )
                }
                <div className="form-group">
                  <label htmlFor="country">Description</label>
                  <textarea required type="text" value={claim.description} onChange={handleOnChange} className="form-control" name='description' placeholder="Tell us what happened"></textarea>
                </div>
                <div className='form-group' onChange={handleOnChange}>
                    <label className="form-control-label">Has the Claim being Paid?</label>
                        <label className="radio-inline" htmlFor="inline-radio1">&nbsp;&nbsp;&nbsp;
                            <input required type="radio" name="paid" value="Yes" checked={claim.paid === 'Yes'}/> Yes
                        </label> &nbsp;&nbsp;&nbsp;
                        <label className="radio-inline" htmlFor="inline-radio2">
                            <input required type="radio" name="paid" value="No" checked={claim.paid === 'No'}/> No
                        </label>&nbsp;&nbsp;&nbsp;
                        <label className="radio-inline" htmlFor="inline-radio3">
                            <input required type="radio" name="paid" value="Pending" checked={claim.paid === 'Pending'}/> Pending
                        </label>                
                </div>
                <div className="card-footer">
                    <button onClick={handleBack} className="btn btn-sm btn-primary"><i className="fa fa-arrow-left"></i> Prev Client</button>&nbsp;
                    <LaddaButton
                        className="btn btn-success btn-sm btn-ladda"
                        loading={loading}
                        data-color="blue"
                        data-style={CONTRACT_OVERLAY}
                      >
                      Create Claim
                  </LaddaButton>
              </div>
              </form>
              </div>
            </div>
          </div>
          </div>
         </div>
)
export default AddClaim