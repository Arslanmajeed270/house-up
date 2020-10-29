import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import fileUpload from 'fuctbase64';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';
import * as actionTypes from '../../store/actions/actionTypes';

import { checkPawwordPattern } from '../../utils/regex';

import{Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';

class userSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            loading : false,
            profileImage:'',
            imagePreview: null,
            firstName:'',
            lastName:'',
            userName:'',
            emailAddress: '',
            confirmPassword:'',
            password: '',
            regiserUser: false,
            viewPass: false,
            viewConfirmPass : false
        };
    }

    viewPassword = () => {
        this.setState({ 
          viewPass : !this.state.viewPass
        });
    }
    viewConfirmPassword = () => {
      this.setState({ 
        viewConfirmPass: !this.state.viewConfirmPass 
      });
  }
    

    static getDerivedStateFromProps(props, state) {
        let errors = props.errors;
        let page = props.page; 
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

        if(errors && JSON.stringify(state.errors) !== JSON.stringify(errors)){
            changedState.errors = errors;
            stateChanged = true;
          }
          
        if(page && JSON.stringify(state.loading) !== JSON.stringify(page.loading)){
            changedState.loading = page.loading;
            stateChanged = true;            
        }
        
        if(stateChanged){
          return changedState;
        }
        return null;
      }

    onChange = e => {
        if(e.target.name === 'profileImage'){
            let imagePreview = URL.createObjectURL(e.target.files[0]);
            fileUpload(e)
            .then((data) => {
                console.log("base64 :",data.base64);
                this.setState({
                    imagePreview: imagePreview,
                    profileImage: data.base64
                })
            })
        }
        else{
            this.setState({[e.target.name]: e.target.value});
        }
      }
      onSubmit = e => {
            console.log("checking this.state: ", this.state );
             e.preventDefault();
             if(this.state.password !== this.state.confirmPassword){
                 this.props.onErrorSet("Password not matched!");
                 return;
             }
             if(!checkPawwordPattern(this.state.password)){
                this.props.onErrorSet("Password should be at least 1 special character, 1 capital letter, 1 lowercase,1 intiger and minmum length 6");
                return;
            }
             console.log("checking phoneNumber: ", this.props.phNumber);
             const userData = {
                profileImage:this.state.profileImage,
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
      const { viewPass,viewConfirmPass, errors , loading, imagePreview, firstName, lastName, 
        userName, email, password, 
        confirmPassword } = this.state;
        let pageContent = '';

        if(loading){
          pageContent = <Spinner />
        }
        else{
          pageContent = "";
        }
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
                {errors && errors.message &&
                    <Alert variant='danger'>
                    <strong>Error!</strong> { errors.message }
                    </Alert>
                }
                    <div className="form-group" style={{textAlign:'-webkit-center'}} >
                        <input 
                        type="file" 
                        accept="image/*"
                        className="profile-pic" 
                        id="profileImage" 
                        name="profileImage" 
                        onChange={this.onChange} 
                        style={{display:'none'}} 
                        />
                        <label for="profileImage" className="profile-pic-user">
                            <img id="imagePreview" src={ imagePreview ? imagePreview : require("../../assets/images/ic_profile_placeholder.png")} alt="" style={{height:'98px',borderRadius:'50px'}} /></label>
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
                        <input type={ viewPass ? "text" : "password" } 
                           className={`form-control ${ errors && errors.message  ? "customError" : '' }`}  
                            id={password} 
                            placeholder="Enter your password" 
                            name="password"
                            value={password}
                            onChange={this.onChange}     
                            required
                        />
                                    <span className="pass-userSignup" onClick={this.viewPassword}><img src={require('../../assets/images/icons/ic_view_password.png')} /></span>
                    </div>
                    <div className="form-group">
                        <input type={ viewConfirmPass ? "text" : "password" } 
                            className={`form-control ${ errors && errors.message  ? "customError" : '' }`}  
                            id={confirmPassword} 
                            placeholder="Confirm password" 
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={this.onChange}  
                            required   
                        />
                                    <span className="confirmPass-userSignup" onClick={this.viewConfirmPassword}><img src={require('../../assets/images/icons/ic_view_password.png')} /></span>
                    </div>
                    <div className="form-group">
                        <button
                            className="pxp-agent-contact-modal-btn"
                            type="submit"
                            >Submit</button>
                    </div>
                { pageContent }

                </form>
            </Modal.Body>
        </Modal>             
        );
    }
}
const mapStateToProps = state => {
    return {
        page: state.page,
        errors: state.errors,
        auth: state.auth,
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onFalseRegisterUser: () => dispatch({type: actionTypes.REGISTER_USER_FAIL }),
        onCreateUser: (userData) => dispatch(actions.createUser(userData)),
        onErrorSet: (msg) =>  dispatch({type: actionTypes.SET_ERRORS, payload: { message: msg }})
    }
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(userSignup);