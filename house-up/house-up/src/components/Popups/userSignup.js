import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';

class userSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profilePic:'',
            firstName:'',
            lastName:'',
            userName:'',
            email: '',
            confirmPassword:'',
            password: '',
        };
    }
    onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      onSubmit = e => {
        console.log('checking click handler');
             e.preventDefault();
             const userData = {
                profilePic:this.state.profilePic,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                userName:this.state.userName,
                email: this.state.email,
                confirmPassword:this.state.confirmPassword,
                password: this.state.password,
             };
             this.props.congratulationHandler('congratulationModel');
             this.props.onCreateUser(userData);

         }
    render() {
      const {profilePic, firstName, lastName, userName, email, password, confirmPassword} = this.state;
        return (
            <Modal 
            show={this.props.show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => this.props.closeCodelHanlder('userSignupModel')}
            >
            <Modal.Header onClick={() => this.props.closeCodelHanlder('userSignupModel')}>
            </Modal.Header>
            
            <Modal.Body>
                <div className="form-group" style={{textAlign:'-webkit-center'}} >
                    <input type="file" className="profile-pic" name="profilePic" vlaue={profilePic} onChange={this.onChange} />
                    <img src="assets/images/icons/ic_calendar.svg" class="calendar-icon" alt=""/>
                </div>
                <form className="mt-4" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="First Name" 
                            name="firstName"
                            value={firstName}
                            onChange={this.onChange}
                            required
                         />
                         </div>
                    <div className="form-group">

                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Last Name" 
                            name="lastName"
                            value={lastName}
                            onChange={this.onChange}
                            required
                         />
                    </div>
                    <div className="form-group">

                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Create UserName" 
                            name="userName"
                            value={userName}
                            onChange={this.onChange}
                            required
                         />
                    </div>
                    <div className="form-group">

                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Enter Your Email" 
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            required
                         />
                    </div>
                    <div className="form-group">
                        <input type="password" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Enter your password" 
                            name="password"
                            value={password}
                            onChange={this.onChange}     
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Confirm password" 
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={this.onChange}  
                            required   
                        />
                    </div>
                    <div className="form-group">
                        <button
                            className="pxp-agent-contact-modal-btn"
                            type="submit"
                            >Sign up</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>             
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
        onCreateUser: (userData) => dispatch(actions.createUser(userData)),
        
    }
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(userSignup);


