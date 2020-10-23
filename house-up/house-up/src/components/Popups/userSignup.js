import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';
import * as actionTypes from '../../store/actions/actionTypes';


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
            regiserUser: false
        };
    }

    static getDerivedStateFromProps(props, state) {
        const auth = props.auth;
        let stateChanged = false;
        let changedState = {};

        console.log("checkig auth.regiserUser: ", auth);
        console.log("checkig state.regiserUser: ", state.regiserUser);
      
        if( auth && JSON.stringify(state.regiserUser) !== JSON.stringify(auth.regiserUser) ){
          changedState.regiserUser = auth.regiserUser;  
        console.log("checkig changedState.regiserUser: ", changedState.regiserUser);
          if( changedState.regiserUser === true ){
            props.onFalseRegisterUser();
            props.congratulationHandler('congratulationModel');
          }
          stateChanged = true;
        }
        
        if(stateChanged){
          return changedState;
        }
        return null;
      }

    onChange = e => {

        if(e.target.name === 'profilePic'){
            this.setState({ profilePic: e.target.files[0] });
        }
        else{
            this.setState({[e.target.name]: e.target.value});
    
        }
      }
      onSubmit = e => {
            console.log("checking this.state: ", this.state );
             e.preventDefault();
             if(this.state.password !== this.state.confirmPassword){
                 return "Wrong credentials!";
             }
             console.log("checking phoneNumber: ", this.props.phNumber);
             const userData = {
                profileImage:this.state.profilePic,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                userName:this.state.userName,
                emailAddress: this.state.email,
                confirmPassword:this.state.confirmPassword,
                password: this.state.password,
                currencyId: 1,
                userTypeId: 1,
                aboutYourSelf: "",
                phoneNumber: this.props.phNumber,
                address: ""
             };
             this.props.onCreateUser(userData);

         }
    render() {
      const { profilePic, firstName, lastName, 
        userName, email, password, 
        confirmPassword } = this.state;
        return (
            <Modal 
            show={this.props.show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-width"
            onHide={() => this.props.closeCodelHanlder('userSignupModel')}
            >
            <Modal.Header onClick={() => this.props.closeCodelHanlder('userSignupModel')}>
            </Modal.Header>
            
            <Modal.Body>
                <form className="mt-4" onSubmit={this.onSubmit}>
                    <div className="form-group" style={{textAlign:'-webkit-center'}} >
                        <input type="file" className="profile-pic" name="profilePic" value={profilePic} onChange={this.onChange} />
                        <img src="assets/images/icons/ic_calendar.svg" class="calendar-icon" alt=""/>
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            id={firstName} 
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
                            id={lastName}
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
                            id={userName}
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
                            id={email} 
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
                            id={password} 
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
                            id={confirmPassword} 
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
                            >Submit</button>
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
        onFalseRegisterUser: () => dispatch({type: actionTypes.REGISTER_USER_FAIL }),
        onCreateUser: (userData) => dispatch(actions.createUser(userData)),
        
    }
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(userSignup);


