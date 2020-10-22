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
        this.props.phoneNumberHandler(this.state.number);
        let data = {
            msisdn:this.state.number,
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
            size="sm"
            onHide={() => this.props.closeCodelHanlder('phoneNumberVendorModel')}
            >
            <Modal.Header closeButton onClick={() => this.props.closeCodelHanlder('phoneNumberVendorModel')}>
            </Modal.Header>
            <Modal.Body >
                <img src="assets/images/icons/logo.png" alt="" className="logo-signupModal" />
                <form onSubmit={this.onSubmit}>
                         <div className="form-group">
                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Phone Number"
                            onChange={this.onChange}
                            name="number"
                            value={this.state.number} 
                            required
                         />
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
 