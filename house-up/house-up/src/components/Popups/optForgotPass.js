import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import {Link} from 'react-router-dom';

// importing actions
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';

import{Alert } from 'react-bootstrap';
class optForgotPass extends Component {
    constructor(props){
        super(props);
        this.state = {
          errors: {},
          otp: "",
          otpAuthenticate: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        const otpAuthenticate = props.otpAuthenticate;
        let errors = props.errors;
    
        let stateChanged = false;
        let changedState = {};
    
        // console.log('checking otpAuthenticate: ', otpAuthenticate);
    
        if((otpAuthenticate || otpAuthenticate === false) && state.otpAuthenticate !== otpAuthenticate){
          changedState.otpAuthenticate = otpAuthenticate;  
          if( changedState.otpAuthenticate === true ){
            props.onFalseOtpAutheticate();
            props.forgotPassHandler('forgotPass');
          }
          stateChanged = true;
        }
    
    
        if(errors && JSON.stringify(state.errors) !== JSON.stringify(errors)){
          changedState.errors = errors;
          stateChanged = true;
        }
        
        if(stateChanged){
          return changedState;
        }
        return null;
      }

    handleChange = otp => {
        this.setState({ otp });
        if(otp.length === 4){
            let data = {
                msisdn:this.props.phNumber,
                channel:"HouseUp",
                pin: otp};
            this.props.onVerifyPin(data);
        }
    }
    resendPin = (num) => {
        const data = {
          msisdn:num,
          channel:"HouseUp",
          type:"LOGIN_PIN_SMS"
        };
        this.props.onGeneratePin(data);
      }

    render() { 
        const { errors } = this.state;
        // console.log('checking value of otp: ', this.state.otp);
       
        let phoneNumber = '';
        if(this.props.phNumber)
        {
            phoneNumber = this.props.phNumber;
        }
        return ( 
            <Modal 
            show={this.props.show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            // size="md"
            dialogClassName="modal-width"
            onHide={() => this.props.closeCodelHanlder('optForgotPass')}
            >
            <Modal.Header onClick={() => this.props.closeCodelHanlder('optForgotPass')}>
            </Modal.Header>
            
            <Modal.Body >
            <div className="form-group">
            {errors && errors.message &&
                <Alert variant='danger'>
                <strong>Error!</strong> { errors.message }
                </Alert>
            }

            <div className="text-center" style={{fontSize: '22px',fontWeight: '500', color: '#000'}}>We sent you a code to </div>
            <div className="text-center" style={{fontSize: '22px',fontWeight: '500', color: '#000'}}>verify your phone number</div>
            </div>
            <div className="form-group">
                <div class="text-center" style={{fontSize: '20px',marginBottom:'15px', color:'#8E8E93'}}>sent to {phoneNumber} </div> 
                <div style={{marginLeft: "14%",marginBottom:'15px'}}>  
                <OtpInput
                value={this.state.otp}
                onChange={this.handleChange}
                numInputs={4}
                separator={<span>&nbsp; &nbsp; &nbsp;</span>}
                inputStyle={{width: "50px", height: "50px", borderRadius: "8px", border: "1px solid black"}}
                />
            </div>
            </div>
            <div className="text-center" style={{marginBottom:'10px', color:'#8E8E93'}}>
              I didn't receeive a code! <Link to="#" onClick={() => this.resendPin(phoneNumber)} >Resend</Link>
            </div>
            </Modal.Body>
        </Modal>             

         );
    }
}
const mapStateToProps = state => {
    return {
      otpAuthenticate: state.auth.otpAuthenticate,
      errors: state.errors
  
    }
  };
  
 
const mapDispatchToProps = dispatch => {
  // console.log('mapDispatchToProps in HomePage ' );
  return {
        onFalseOtpAutheticate: () => dispatch({type: actionTypes.OTP_AUTHENTICATE_FAIL }),
        onVerifyPin : (data)=>dispatch(actions.verifyPin(data)),
        onGeneratePin: (data) => dispatch(actions.generatePin(data))
    }
  };
   
  export default connect(mapStateToProps, mapDispatchToProps)(optForgotPass);