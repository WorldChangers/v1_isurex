import React from 'react';
import { Link } from 'react-router-dom'
import LaddaButton, {CONTRACT_OVERLAY} from 'react-ladda'
import '../AddClient/form.css'


const Form = ({type, msg, data,loading, handleChange, onSubmit}) => (
    <div className="row">
    <div style={{marginTop: '5%'}} className="col-md-4 padding">
    <div className="card">
            {
              msg &&   <p className='btn success'>{msg}</p>
            }
              <div className="card-header">{type}</div>
              <div className="card-block">
                <form onSubmit={onSubmit} method="post">
                {
                    type === 'Signup' && (
                    <div>
                     <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">Fullname</span>
                          <input onChange={handleChange} type="text"  value={data.name} name="name" className="form-control" placeholder="Username"/>
                          <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">Company</span>
                          <input  onChange={handleChange} type="text" value={data.company} name="company" className="form-control" placeholder="Insurance Company"/>
                          <span className="input-group-addon"><i className="fa fa-fort-awesome"></i></span>
                        </div>
                      </div>
                     </div>
                    )
                }
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">Email</span>
                      <input type="email" value={data.email} onChange={handleChange} name="email" className="form-control" placeholder="Email"/>
                      <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">Password</span>
                      <input autoComplete={false} value={data.password} onChange={handleChange} type="password" name="password" className="form-control" placeholder="Password"/>
                      <span className="input-group-addon"><i className="fa fa-asterisk"></i></span>
                    </div>
                  </div>
                  <div className="form-group form-actions" style={{display:'flex', flexDirection:'row', justifyContent:'center'}} >
                  <LaddaButton
                        className="btn btn-success btn-ladda"
                        loading={loading}
                        // onClick={() => this.toggle('expOverlay')}
                        data-color="blue"
                        data-style={CONTRACT_OVERLAY}
                      >
                      {type}
                  </LaddaButton>
                  </div>
                </form>
                { type === 'Login' &&
                    <p style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    Don't have an account yet? <Link to='signup'>Signup</Link></p>
                }
                { type === 'Signup' &&
                    <p style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    Already have an account? <Link to='login'> Login</Link></p>
                }
             </div>
            </div>
            </div>
            </div>
)

export default Form