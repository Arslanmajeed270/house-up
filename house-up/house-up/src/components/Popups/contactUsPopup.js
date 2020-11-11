import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/pageActions';

class contacUsPopup extends Component {
  constructor(props) {
      super(props);
      this.state = {
            user: {},
            propertyId:0,
            postId:0,
            vendorId:0,
            userId:0,
            name:"",
            phoneNumber:0,
            email:"",
            meetingDate:"",
            subject:"",
            detail:""
      };
  }

static getDerivedStateFromProps(props, state) {
  
    const auth = props.auth ? props.auth : {};
  
    let stateChanged = false;
      let changedState = {};
  
  
    if(auth && auth.user && JSON.stringify(state.user) !== JSON.stringify(auth.user)){
      changedState.user= auth.user;
      stateChanged = true;
  }

  if(stateChanged){
      return changedState;
  }
  
    return null;
  }
  
  componentDidMount(){
    const { user , email , phoneNumber , name , userId }  = this.state;
    const contactEmail = user.emailAddress ? user.emailAddress : "";
    const firstName =  user.firstName ? user.firstName : "";
    const lastName =  user.lastName ? user.lastName : "";
    const contactName = `${firstName} ${lastName}`; 
    const contactNumber = user.msisdn ? user.msisdn : ""; 
    const id = user.userId ? user.userId : "";
    
    this.setState({
      email : contactEmail,
      name : contactName,
      phoneNumber : contactNumber,
      userId : id
    });

    console.log('checking values:', email)
    console.log('checking values:', name)
    console.log('checking values:', phoneNumber)
    console.log('checking values:', userId)
}

  onChange = e => {
      this.setState({[e.target.name]: e.target.value});
  }
  onSubmit = e => {
    const { name , phoneNumber , email , subject , detail, meetingDate , userId  } = this.state;

    e.preventDefault();

    const userData = {
        propertyId:0,
        postId:0,
        vendorId:0,
        userId,
        name,
        phoneNumber,
        email,
        meetingDate,
        subject,
        detail
    };
  }
 
  render() {
    const { name , phoneNumber , email , subject , detail, meetingDate  } = this.state;
    return ( 
        <Modal 
        show={this.props.show}
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="modal-width"
        centere
        onHide ={this.props.contactUsPopHandler}
        >
        <Modal.Body >
            <h5 className="modal-title">
                Share your Details
            </h5>
            <form className="mt-4">
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="name"  
                        value={name} 
                        onChange={this.onChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={this.onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Subject" 
                        className="form-control"
                        name="subject"
                        value={subject}
                        onChange={this.onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Set Time & Date" 
                        className="form-control"
                        name="meetingDate"
                        value={meetingDate}
                        onChange={this.onChange}
                        required 
                    />
                </div>
                <div className="form-group">
                    <textarea 
                        className="form-control" 
                        placeholder="Details" 
                        rows={4}
                        name="detail"
                        value={detail}
                        onChange={this.onChange}
                        required 
                    />
                </div>
                <div className="form-group mt-4">
                    <button type="submit" className="pxp-agent-contact-modal-btn">SUBMIT</button>
                </div>
            </form>
        </Modal.Body>
    </Modal> 
);
  }
}
 
const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
    onContactUs : (data) => dispatch(actions.contactUs(data)),
    }
  };
   
  export default connect(mapStateToProps, mapDispatchToProps)(contacUsPopup);