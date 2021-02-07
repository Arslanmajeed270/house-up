import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/authActions';
class Content extends Component {


  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
    };
}

  
onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}


 onSubmit = e => {
       e.preventDefault();

       const userData = {
            emailAddress: this.state.email,
            password: this.state.password,
            channel: "HouseUp"
       };

       this.props.onLogin(userData, this.props.history);
   }
    state = {  }
    render() { 
      const { email, password} = this.state;

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
                          <input type="text" 
                            name="email"
                            placeholder="Username or Email address" 
                            className="form-control border-0 shadow form-control-lg" 
                            value={ email}
                            onChange={this.onChange}
                           />
                        </div>
                        <div className="form-group mb-4">
                          <input type="password" 
                            name="password" 
                            placeholder="Password" 
                            className="form-control border-0 shadow form-control-lg text-violet"
                            value={password}
                            onChange={this.onChange} 
                          />
                        </div>
                        <div className="form-group mb-4">
                          <div className="custom-control custom-checkbox">
                            <input id="customCheck1" type="checkbox" defaultChecked className="custom-control-input" />
                            <label htmlFor="customCheck1" className="custom-control-label">Remember Me</label>
                          </div>
                        </div>
                        <button type="submit" 
                          className="btn btn-primary shadow px-5"
                          onClick={this.onSubmit}
                            >Log in</button>
                      </form>
                    </div>
                  </div>
                  <p className="mt-5 mb-0 text-gray-400 text-center">Design by <Link to="https://bootstrapious.com/admin-templates" className="external text-gray-400">Bootstrapious</Link> &amp; Your company</p>
                  </div>
              </div>
            </React.Fragment>
         );
    }
}
 
const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onLogin: (email, history) => dispatch(actions.loginUser(email, history)),
      
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Content);