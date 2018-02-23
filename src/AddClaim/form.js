import React, { PureComponent } from 'react';
import Select from 'react-select'
import options from './options'
import '../AddClient/form.css'

class AddClient extends PureComponent {

    state = {
        type: 'Accident',
    }

    saveChanges = (damage) => {
        //onst [label] = damage
        console.log(damage)
        this.setState({ damage });
    }
    handleType = ({target}) => {
        this.setState({type: target.value})
    }

    render() {
        const { handleBack, handleNext } = this.props
        const { type } = this.state
        return (
            <div style={{paddingTop: 15}} className="animated fadeIn">
            <div className="row">
            <div className="col-md-6 padding">

            <div className="card">
              <div className="card-header">
                <strong>Claim</strong> <small>Information</small>
              </div>
              <div className="card-block">
                 <div className="form-group">
                    <label htmlFor="street">Type Incidence</label>
                    <select value={type} onChange={this.handleType} required name="type" className="form-control input-lg" size="1">
                            <option defaultValue disabled value="0">Please select</option>
                            <option value="Accident">Accident</option>
                            <option value="Theft">Theft</option>
                        </select>
                </div>
                <div className="form-group">
                  <label htmlFor="company">Date Incidence Occured</label>
                  <input type="datetime-local" className="form-control" name='date'  placeholder="Registraion Number"/>
                </div>
                <div className="form-group">
                  <label htmlFor="vat">Person Driving</label>
                  <input type="text" className="form-control" name='driver' placeholder="Chassis Number"/>
                </div>
                {
                    type === 'Accident' && (
                    <div className="form-group">
                      <label htmlFor="vat">Place Damaged</label>
                        <Select.Creatable
                            name="form-field-name2"
                            value={this.state.damage}
                            options={options}
                            onChange={this.saveChanges}
                            multi
                        />
                    </div>
                    )
                }
                <div className="form-group">
                  <label htmlFor="country">Description</label>
                  <textarea type="text" className="form-control" name='location' placeholder="Tell us what happened"></textarea>
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