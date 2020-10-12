import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
              <div className="page-holder d-flex align-items-center">
                <div className="container">
                  <div className="row align-items-center py-5">
                    <div className="col-5 col-lg-7 mx-auto mb-5 mb-lg-0">
                      <div className="pr-lg-5"><img src="assets/img/illustration.svg" alt="" className="img-fluid" /></div>
                    </div>
                    <div className="col-lg-5 px-lg-4">
                      <h1 className="text-base text-primary text-uppercase mb-4">HouseUp</h1>
                      <h2 className="mb-4">Welcome back!</h2>
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                      <form id="loginForm" action="index.html" className="mt-4">
                        <div className="form-group mb-4">
                          <input type="text" name="username" placeholder="Username or Email address" className="form-control border-0 shadow form-control-lg" />
                        </div>
                        <div className="form-group mb-4">
                          <input type="password" name="passowrd" placeholder="Password" className="form-control border-0 shadow form-control-lg text-violet" />
                        </div>
                        <div className="form-group mb-4">
                          <div className="custom-control custom-checkbox">
                            <input id="customCheck1" type="checkbox" defaultChecked className="custom-control-input" />
                            <label htmlFor="customCheck1" className="custom-control-label">Remember Me</label>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary shadow px-5">Log in</button>
                      </form>
                    </div>
                  </div>
                  <p className="mt-5 mb-0 text-gray-400 text-center">Design by <Link to="https://bootstrapious.com/admin-templates" className="external text-gray-400">Bootstrapious</Link> &amp; Your company</p>
                  {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)                 */}
                </div>
              </div>
            </React.Fragment>
         );
    }
}
 
export default Content;