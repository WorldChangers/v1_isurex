import React, { PureComponent } from 'react';
import './form.css'

class AddClient extends PureComponent {

    render() {
      const { handleNext } = this.props
        return (
            <div style={{paddingTop: 15}} className="animated fadeIn">
            <div className="row">
            <div className="col-md-6 padding">

            <div className="card">
              <div className="card-header">
                <strong>Client</strong> <small>Information</small>
              </div>
              <div className="card-block">
                <div className="form-group">
                  <label for="company">Fullname</label>
                  <input type="text" className="form-control" name='fullname'  placeholder="Enter your fullname"/>
                </div>

                <div className="form-group">
                  <label for="vat">Phone Number</label>
                  <input type="text" className="form-control" name='phone' placeholder="0270200808"/>
                </div>

                 <div className="row">

                  <div className="form-group col-sm-8">
                    <label for="street">ID Type</label>
                    <select required name="idType" className="form-control input-lg" size="1">
                            <option defaultValue disabled value="0">Please select</option>
                            <option value="Voters">Voters</option>
                            <option value="NHIS">NHIS</option>
                            <option value="NHIS">Passport</option>
                            <option value="Driving Licence">Driving Licence</option>
                        </select>
                    </div>

                    <div className="form-group col-sm-4">
                        <label for="postal-code">ID Number</label>
                        <input type="text" className="form-control" name='id' placeholder="ID Number"/>
                    </div>
                </div>
                <div className="form-group">
                  <label for="country">Location</label>
                  <input type="text" className="form-control" name='location' placeholder="Location name"/>
                </div>
                <div className="card-footer">
                    <button onClick={handleNext} type="submit" className="btn btn-sm btn-primary"><i className="fa fa-arrow-right"></i> Next Vehicle</button>&nbsp;
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