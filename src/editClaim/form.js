import React from 'react';
import Select from 'react-select'
import LaddaButton, {CONTRACT_OVERLAY} from 'react-ladda'
import '../AddClient/form.css'

const AddClaim = ({loading,search,damage,saveChanges, handleSubmit,handleOnChange}) => (
    <div style={{paddingTop: 15}} className="animated fadeIn">
            <div className="row">
            <div className="col-md-6 padding">
            <div className="card">
              <div className="card-header">
                <strong>Update Claim</strong><small> Information</small>
              </div>
              <div className="card-block">
              <form onSubmit={handleSubmit} method='post'>
                 <div className="form-group">
                    <label htmlFor="street">Type Incidence</label>
                    <select required value={search.type} onChange={handleOnChange} required name="type" className="form-control input-lg" size="1">
                            <option defaultValue disabled value="0">Please select</option>
                            <option value={search.type}>Accident</option>
                            <option value="Theft">Theft</option>
                            <option value="Fire">Fire</option>
                        </select>
                </div>
                <div className="form-group">
                  <label htmlFor="company">Date Incidence Occured</label>
                  <input required type="datetime-local" value={search.date} onChange={handleOnChange} className="form-control" name='date'  placeholder="Registraion Number"/>
                </div>
                {
                    search.type !== 'Fire' &&
                    <div className="form-group">
                        <label htmlFor="vat">Person Driving</label>
                        <input required type="text" value={search.driver} onChange={handleOnChange} className="form-control" name='driver' placeholder="Person Driving"/>
                  </div>
                }
                {
                    search.type === 'Accident' && (
                    <div className="form-group">
                      <label htmlFor="vat">Place Damaged</label>
                        <Select.Creatable
                            required
                            name="form-field-name2"
                            value={search.damage}
                            onChange={saveChanges}
                            multi
                        />
                    </div>
                    )
                }
                <div className="form-group">
                    <label htmlFor="vat">Where was it reported ?</label>
                    <input required type="text" value={search.placeReported} onChange={handleOnChange} className="form-control" name='placeReported' placeholder="Where was it reported? "/>
                </div>
                <div className="form-group">
                  <label htmlFor="country">Description</label>
                  <textarea required type="text" value={search.description} onChange={handleOnChange} className="form-control" name='description' placeholder="Tell us what happened"></textarea>
                </div>
                <div className='form-group' onChange={handleOnChange}>
                    <label className="form-control-label">Has the Claim been Paid?</label>
                        <label className="radio-inline" htmlFor="inline-radio1">&nbsp;&nbsp;&nbsp;
                            <input required type="radio" name="paid" value="Yes" checked={search.paid === 'Yes'}/> Yes
                        </label> &nbsp;&nbsp;&nbsp;
                        <label className="radio-inline" htmlFor="inline-radio2">
                            <input required type="radio" name="paid" value="No" checked={search.paid === 'No'}/> No
                        </label>&nbsp;&nbsp;&nbsp;
                        <label className="radio-inline" htmlFor="inline-radio3">
                            <input required type="radio" name="paid" value="Pending" checked={search.paid === 'Pending'}/> Pending
                        </label>                
                </div>

                {
                    search.paid === 'No' && (
                        <div className='form-group' onChange={handleOnChange}>
                        <label className="form-control-label">Was the Claim Fraud ?</label>
                            <label className="radio-inline" htmlFor="inline-radio1">&nbsp;&nbsp;&nbsp;
                                <input required type="radio" name="fraud" value="True" checked={search.fraud === 'True'}/> Yes
                            </label> &nbsp;&nbsp;&nbsp;
                            <label className="radio-inline" htmlFor="inline-radio2">
                                <input required type="radio" name="fraud" value="False" checked={search.fraud === 'False'}/> No
                            </label>&nbsp;&nbsp;&nbsp;        
                        </div>
                    )
                }
                <div className="card-footer">
                    <LaddaButton
                        className="btn btn-success btn-sm btn-ladda"
                        loading={loading}
                        data-color="blue"
                        data-style={CONTRACT_OVERLAY}
                      >
                      Update Claim
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