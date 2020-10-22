import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import OtpInput from 'react-otp-input';

// importing actions
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class OptUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            otp: ""
        }
    }

    handleChange = otp => {
        this.setState({ otp });
        if(otp.length === 4){
            let data = {
                msisdn:this.props.phNumber,
                channel:"HouseUp",
                pin: otp};
            this.props.onVerifyPin(data)
            this.props.userSignupHandler('userSignupModel');
        }
    }

    render() { 
        console.log('checking value of otp: ', this.state.otp);
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
            size="md"
            onHide={() => this.props.closeCodelHanlder('optUserModel')}
            >
            <Modal.Header onClick={() => this.props.closeCodelHanlder('optUserModel')}>
            </Modal.Header>
            
            <Modal.Body >
            <div className="form-group">

            <div class="text-center" style={{fontSize: '30px',fontWeight: '500',padding: '20px'}}>We sent you a code to verify your phone number</div>
            </div>
            <div className="form-group">
                <div class="text-center" style={{fontSize: '30px'}}>sent to {phoneNumber} </div> 
                <div style={{marginLeft: "26%"}}>  
                <OtpInput
                value={this.state.otp}
                onChange={this.handleChange}
                numInputs={4}
                separator={<span>&nbsp; &nbsp; </span>}
                inputStyle={{width: "40px", height: "40px", borderRadius: "8px", border: "1px solid black"}}
                />
            </div>
            </div>
            
            </Modal.Body>
        </Modal>             

         );
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
        onVerifyPin: (data) => dispatch(actions.verifyPin(data))
    }
  };
   
  export default connect(null, mapDispatchToProps)(OptUser);