import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class forgotPass extends Component {
 

    constructor(props) {
        super(props);
        this.state = {
            confirmPassword:'',
            password: '',
        };
    }
    onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      onSubmit = e => {
        console.log('checking click handler');
             e.preventDefault();
            //  const userData = {
            //     confirmPassword:this.state.confirmPassword,
            //     password: this.state.password,
            //  };
             this.props.forgotPassCongratsHandler('forgotPassCongrats');
            //  this.props.onCreateUser(userData);

         }
    render() {
        const{password , confirmPassword}=this.state;
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
                            <form onSubmit={this.onSubmit}>
                            <div className="form-group text-center" style={{fontSize: '18px',marginBottom:'0px', fontWeight:'bold',color: 'black'}}>
                                Please Set Your New
                            </div>
                            <div className="form-group text-center" style={{fontSize: '18px',color:'black',fontWeight:'bold'}} >
                                Password And Submit
                                </div>
                                <div className="form-group">
                                    <input type="password" 
                                        className="form-control upload"
                                        id="pxp-signin-email" 
                                        placeholder="New Password"
                                        name="password"
                                        value={password}
                                        onChange={this.onChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" 
                                    className="form-control" 
                                    id="pxp-signin-pass"
                                    name="confirmPassword"
                                    value={confirmPassword} 
                                    placeholder="Confirm Password" 
                                    onChange={this.onChange}
                                    required
                                />
                                </div>
                                <div className="form-group">
                                    <div className="form-group">
                                       <button type="submit" className="pxp-agent-contact-modal-btn">Submit</button>

                                    </div>
                                </div> 
                            </form> 
                        </Link>
                    </Modal.Body>
                </Modal> 
         );
    }
}
 
export default forgotPass;