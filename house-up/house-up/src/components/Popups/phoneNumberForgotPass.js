import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

// importing actions
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import{Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';

class phonenumberForgotPass extends Component {
    constructor(props){
        super(props);
        this.state = {
            errors: {},
            loading : false,
            number: ''
        }
    }

     static getDerivedStateFromProps(props, state) {
  
        let errors = props.errors;
        let page = props.page;      
      
        let stateChanged = false;
        let changedState = {};
      
        if(errors && JSON.stringify(state.errors) !== JSON.stringify(errors)){
            changedState.errors= errors;
            stateChanged = true;
        }
        
        if(page && JSON.stringify(state.loading) !== JSON.stringify(page.loading)){
            changedState.loading = page.loading;
            stateChanged = true;            
        }
        
        if(stateChanged){
            return changedState;
        }
    }

    onChange = e => {
        if(e.target.value >= 0 ){
            this.setState({
                [e.target.name]: e.target.value
              });
        }
      }

    onSubmit = () => {
        let number = ('+' +1) + (this.state.number);
        this.props.phoneNumberHandler(number);
        let data = {
            msisdn:number,
            action: "forget",
            type:"LOGIN_PIN_SMS"
        };
        this.props.onGeneratePin(data);
        this.props.optForgotPassHandler('optForgotPass');
    }
    render() { 

        const {errors , loading} = this.state;

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
            // size="sm"
            dialogClassName="modal-width"
            onHide={() => this.props.closeCodelHanlder('phoneNoForgotPass')}
            >
            <Modal.Header closeButton onClick={() => this.props.closeCodelHanlder('phoneNoForgotPass')}>
            </Modal.Header>
            <Modal.Body >
            {errors && errors.message &&
                <Alert variant='danger'>
                <strong>Error!</strong> { errors.message }
                </Alert>
                }
                <div className="logo-modal">
                <img src={require("../../assets/images/icons/ic_logo.svg")} alt="" style={{marginBottom:'20px'}} />
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
                            minLength="9" 
                            maxLength="10"
                            required
                         />
                        <span className="country-code-forgotPass"><img src="assets/images/053-canada.svg" alt="" style={{marginLeft:'-23px', marginBottom:'-82px'}}/></span>
                        <span className="country-code-forgot-page"> +1</span>
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

const mapStateToProps = state => {
    return {
      page: state.page
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGeneratePin: (data) => dispatch(actions.generatePin(data))
    }
  };
   
  export default connect(mapStateToProps, mapDispatchToProps)(phonenumberForgotPass);
 