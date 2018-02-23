import React, { PureComponent } from 'react';
import '../AddClient/form.css'

class AddClient extends PureComponent {
    render() {
        const { handleNext, handleBack } = this.props
        return (
            <div style={{paddingTop: 15}} className="animated fadeIn">
            <div className="row">
            <div className="col-md-6 padding">

            <div className="card">
              <div className="card-header">
                <strong>Vehice</strong> <small>Information</small>
              </div>
              <div className="card-block">
                <div className="form-group">
                  <label for="company">Registration Number</label>
                  <input type="text" className="form-control" name='regNumber'  placeholder="Registraion Number"/>
                </div>

                <div className="form-group">
                  <label for="vat">Chassis Number</label>
                  <input type="text" className="form-control" name='chassisNumber' placeholder="Chassis Number"/>
                </div>
                 <div className="form-group">
                    <label for="street">Purpose Of Vehicle</label>
                    <select required name="idType" className="form-control input-lg" size="1">
                            <option defaultValue disabled value="0">Please select</option>
                            <option value="Voters">Private</option>
                            <option value="NHIS">Commercial</option>
                        </select>
                </div>
                <div className="form-group">
                    <label for="street">Insurance Type</label>
                    <select required name="idType" className="form-control input-lg" size="1">
                            <option defaultValue     disabled value="0">Please select</option>
                            <option value="Voters">Third Party</option>
                            <option value="NHIS">Comprehensive</option>
                        </select>
                </div>
                <div className="form-group">
                  <label for="country">Location</label>
                  <input type="text" className="form-control" name='location' placeholder="Location name"/>
                </div>
                <div className="card-footer">
                    <button onClick={handleBack} type="submit" className="btn btn-sm btn-primary"><i className="fa fa-arrow-left"></i> Prev Client</button>&nbsp;
                    <button onClick={handleNext} type="submit" className="btn btn-sm btn-primary"><i className="fa fa-arrow-right"></i> Next Claim</button>&nbsp;
              </div>
              </div>
            </div>
          </div>
          </div>
         </div>
        )
    }
}

export default AddClient