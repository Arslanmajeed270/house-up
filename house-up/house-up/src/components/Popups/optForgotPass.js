import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import {Link} from 'react-router-dom';

// importing actions
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class optForgotPass extends Component {
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
            this.props.onVerifyPin(data);
            this.props.forgotPassHandler('forgotPass');
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
            // size="md"
            dialogClassName="modal-width"
            onHide={() => this.props.closeCodelHanlder('optForgotPass')}
            >
            <Modal.Header onClick={() => this.props.closeCodelHanlder('optForgotPass')}>
            </Modal.Header>
            
            <Modal.Body >
            <div className="form-group">

            <div className="text-center" style={{fontSize: '22px',fontWeight: '500'}}>We sent you a code to </div>
            <div className="text-center" style={{fontSize: '22px',fontWeight: '500'}}>verify your phone number</div>
            </div>
            <div className="form-group">
                <div class="text-center" style={{fontSize: '20px',marginBottom:'15px',color:'#CACACC'}}>sent to {phoneNumber} </div> 
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
            <div className="text-center" style={{marginBottom:'10px', color:'#CACACC'}}>
              I didn't receeive a code! <Link to="#" >Resend</Link>
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
   
  export default connect(null, mapDispatchToProps)(optForgotPass);