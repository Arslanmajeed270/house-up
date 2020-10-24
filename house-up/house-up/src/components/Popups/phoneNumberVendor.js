import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

// importing actions
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class phoneNumberVendor extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: ''
        }
    }

    onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      onSubmit = () => {
        let number = ('+' +1) + (this.state.number);
        this.props.phoneNumberHandler(number);
        let data = {
            msisdn:number,
            channel:"HouseUp",
            type:"LOGIN_PIN_SMS"
        };
        this.props.onGeneratePin(data);
        this.props.optUserVendorHandler('optUserModelVendor')
    }
    render() { 
        return ( 
            <Modal 
            show={this.props.show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            // size="sm"
            dialogClassName="modal-width"
            onHide={() => this.props.closeCodelHanlder('phoneNumberVendorModel')}
            >
            <Modal.Header closeButton onClick={() => this.props.closeCodelHanlder('phoneNumberVendorModel')}>
            </Modal.Header>
            <Modal.Body >
                <div className="logo-modal">
                <img src={require("../../assets/images/icons/ic_logo.svg")} alt="" className="logo-signupModal" style={{marginBottom:'20px'}} />
                </div>
                <form onSubmit={this.onSubmit}>
                         <div className="form-group">
                         <input type="text" style={{paddingLeft:'59px'}}
                            className="phone-number"
                            id="pxp-signin-email" 
                            placeholder="416 123-4567"
                            onChange={this.onChange}
                            name="number"
                            value={this.state.number} 
                            required
                         />
                        <span className="country-code"><img src="assets/images/053-canada.svg" alt="" style={{marginLeft:'-23px', marginBottom:'-41px'}}/></span>
                        <span className="country-code-user-page"> +1</span>
                        </div>
                         <div className="form-group">
                        <button
                            className="pxp-agent-contact-modal-btn"
                            type="submit"
                            >Sign In
                        </button>
                         </div> 
                        </form> 
            </Modal.Body>
        </Modal>  

         );
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
        onGeneratePin: (data) => dispatch(actions.generatePin(data))
    }
  };
   
  export default connect(null, mapDispatchToProps)(phoneNumberVendor);
 