import React from 'react';
import { Link } from 'react-router-dom'
import '../AddClient/form.css'
import logo from '../ISUREX.png'

const Form = (props) => (
    <div className="row">
    <div style={{marginTop: '5%'}} className="col-md-4 padding">
    <div className="card">
              <div className="card-header">{props.type}</div>
              <div className="card-block">
                <form action="" method="post">
                {
                    props.type === 'Signup' && (
                    <div>
                     <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">Fullname</span>
                          <input type="text" name="name" className="form-control" placeholder="Username"/>
                          <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group">
                          <span className="input-group-addon">Company</span>
                          <input type="text" name="name" className="form-control" placeholder="Insurance Company"/>
                          <span className="input-group-addon"><i className="fa fa-fort-awesome"></i></span>
                        </div>
                      </div>
                     </div>
                    )
                }
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">Email</span>
                      <input type="email" name="email" className="form-control" placeholder="Email"/>
                      <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">Password</span>
                      <input type="password" name="password" className="form-control" placeholder="Password"/>
                      <span className="input-group-addon"><i className="fa fa-asterisk"></i></span>
                    </div>
                  </div>
                  <div className="form-group form-actions" style={{display:'flex', flexDirection:'row', justifyContent:'center'}} >
                    <button type="submit" className="btn btn-sm btn-primary">{props.type}</button>
                  </div>
                </form>
                { props.type === 'Login' &&
                    <p style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    Don't have an account yet? <Link to='signup'>Signup</Link></p>
                }
                { props.type === 'Signup' &&
                    <p style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    Already have an account? <Link to='login'> Login</Link></p>
                }
             </div>
            </div>
            </div>
            </div>
)

export default Form