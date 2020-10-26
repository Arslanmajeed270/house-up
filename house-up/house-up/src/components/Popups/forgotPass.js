import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';

import { checkPawwordPattern } from '../../utils/regex';


class forgotPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userDetail:{},
          confirmPassword:'',
            newPassword: '',
            viewPass: false,
            viewConfirmPass:false
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
  
        const errors = props.errors;
        const auth = props.auth;
    
        let stateChanged = false;
        let changedState = {};
    
        if(auth && JSON.stringify(state.userDetail) !== JSON.stringify(auth.userDetail)){
          changedState.userDetail = auth.userDetail;  
          stateChanged = true;
        }
        if(errors && JSON.stringify(state.errors) !== JSON.stringify(errors)){
          changedState.errors= errors;
          stateChanged = true;
        }
        if(auth && JSON.stringify(state.loading) !== JSON.stringify(auth.loading)){
            changedState.loading = auth.loading;
            stateChanged = true;            
        }
        if(stateChanged){
          return changedState;
        }
        return null;
      }
      componentDidMount (){
        console.log('indexPage componenet did mount');
        console.log(this.props.phNumber);
        let data={
            emailAddress:"",
            msisdn:this.props.phNumber,
            searchBy:"msisdn"
        }
        this.props.onGetUserDetails(data);
      }
      changeHandler = e => {
        console.log('heelo in onChange');
        this.setState({[e.target.name]: e.target.value});
        }
      onSubmit = e => {
        console.log('checking click handler');
             e.preventDefault();
          //    if(this.state.password !== this.state.confirmPassword){
          //       this.props.onErrorSet("Password not matched!");
          //       return;
          //   }
          //   if(!checkPawwordPattern(this.state.password)){
          //      this.props.onErrorSet("Password should be at least 1 special character, 1 capital letter, 1 lowercase,1 intiger and minmum length 6");
          //      return;
          //  }
           const userData = {
            userId:this.state.userDetail.userId,   
            confirmPassword:this.state.confirmPassword,
            newPassword: this.state.newPassword,
         };
         console.log('checking data for forgotpass API', userData);
            this.props.onResetUserPassword(userData);
            this.props.forgotPassCongratsHandler('forgotPassCongrats');
         }
    render() {
        const{ viewPass,viewConfirmPass, userDetail, newPassword , confirmPassword}=this.state;
        console.log('checking state data', userDetail);
        console.log("checking this.props.show: ", this.props.show);
        return ( 
            <Modal 
            show={this.props.show}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    // size="md"
                    dialogClassName="modal-width"
                    onHide={()=>this.props.closeCodelHanlder('forgotPass')}
                    >
                    <Modal.Body>
                        <Link to="#">
                          <form >
                            <div className="form-group text-center" style={{fontSize: '18px',marginBottom:'0px', fontWeight:'bold',color: 'black'}}>
                              Please Set Your New
                            </div>
                            <div className="form-group text-center" style={{fontSize: '18px',color:'black',fontWeight:'bold'}} >
                              Password And Submit
                            </div>
                            <div className="form-group">
                              <input                                     
                                type={ viewPass ? "text" : "password" }
                                className="form-control"
                                id="password" 
                                placeholder="New Password"
                                name="newPassword"
                                value={newPassword}
                                onChange={this.changeHandler}
                                required
                              />
                                    <span className="password-forgotPass" onClick={this.viewPassword}><img src={require('../../assets/images/icons/ic_view_password.png')} /></span>
                            </div>
                            <div className="form-group">
                              <input 
                                type={ viewConfirmPass ? "text" : "password" } 
                                className="form-control" 
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword} 
                                placeholder="Confirm Password" 
                                onChange={this.changeHandler}
                                required
                              />
                                    <span className="confirmPass-forgotPass" onClick={this.viewConfirmPassword}><img src={require('../../assets/images/icons/ic_view_password.png')} /></span>

                            </div>
                            <div className="form-group">
                              <button
                                className="pxp-agent-contact-modal-btn"
                                type="submit" onClick={this.onSubmit}
                                >Submit</button>
                            </div>
                          </form> 
                        </Link>
                    </Modal.Body>
                </Modal> 
         );
    }
}
 
const mapStateToProps = state => {
  return {
    errors: state.errors,
    auth: state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetUserDetails: (data) => dispatch(actions.getUserDeatils(data)),
    onResetUserPassword: (data) => dispatch(actions.resetUserPassword(data)),
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(forgotPass);