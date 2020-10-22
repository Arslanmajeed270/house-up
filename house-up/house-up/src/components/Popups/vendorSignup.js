import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';


import { connect } from 'react-redux';
import * as actions from '../../store/actions/authActions';


class vendorSignup extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            userName:'',
            email: '',
            confirmPassword:'',
            password: '',
            profession:'',
            businessDoc : '',
            businessName:'',
            websiteLink:'',
            aboutBusiness:'',
            qualification:'',
            businessStartDate:'',
            supportDoc:'',
            keyWords:'',
            country:'',
            province:'',
            city:'',
            unit:'',
            zipCode:'',
            streetName:'',
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
             const userData = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName:this.state.userName,
                email: this.state.email,
                confirmPassword:this.state.confirmPassword,
                password: this.state.password,
                profession:this.state.profession,
                businessDoc : this.state.businessDoc,
                businessName:this.state.businessName,
                websiteLink:this.state.websiteLink,
                aboutBusiness:this.state.aboutBusiness,
                qualification:this.state.qualification,
                businessStartDate:this.state.businessStartDate,
                supportDoc:this.state.supportDoc,
                keyWords:this.state.keyWords,
                country:this.state.country,
                province:this.state.province,
                city:this.state.city,
                unit:this.state.unit,
                zipCode:this.state.zipCode,
                streetName:this.state.streetName
             };
              this.props.onCreateVendor(userData);
             this.props.congratulationHandler('congratulationModel');
         }

    render() { 
        const { firstName, lastName, userName, email, password, confirmPassword, profession, 
            businessDoc, businessName, websiteLink, aboutBusiness, qualification, businessStartDate,
            supportDoc, keyWords, country, province, city, streetName, unit,
            zipCode }=this.state;
        return ( 
            <Modal 
            show={this.props.show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size="lg"
            onHide={() => this.props.closeCodelHanlder('vendorSignupModel')}
            >
            
            <Modal.Body onClick={() => this.props.closeCodelHanlder('vendorSignupModel')} >
                <div className="row">
                    <div className="col-md-6">
                <form className="mt-4" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
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
                            id="pxp-signin-email" 
                            placeholder="Create UserName" 
                            name="userName"
                            value={userName}
                            onChange={this.onChange}
                            required
                         />
                    </div>
                    <div className="form-group">

                         <input type="password" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Password" 
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            required
                         />
                    </div>
                    <div className="form-group">
                        <select className="custom-select" onChange={this.onChange} name="profession"
                         value={profession} >
                            <option value={1} >Bathroom Renovation</option>
                            <option value={2}>Carpet cleaners</option>
                            <option value={3}>Driveway Sealing</option>
                            <option value={4}>Drone Photography</option>
                            <option value={7}>Hardwood/laminate Flooring</option>
                            <option value={8}>Home Inspection</option>
                            <option value={9}>Junk Removal</option>
                            <option value={10}>Kitchen Carpentry</option>
                            <option value={11}>Landscapers</option>
                            <option value={12}>Lenders/Banks</option>
                            <option value={13}>Movers</option>
                            <option value={14}>Painters</option>
                            <option value={15}>Pest Control</option>
                            <option value={16}>Photography</option>
                            <option value={17}>Real Estate Lawyers</option>
                            <option value={18}>Roofers</option>
                            <option value={19}>Stagers</option>
                            <option value={20}>Virtual Tours </option>
                            <option value={21}>Wet Basement</option>
                            <option value={7}>Window Cleaners</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Business Name"
                            name="businessName"
                            value={businessName} 
                            onChange={this.onChange}
                            required     
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Website lnk (optional)"
                            name="websiteLink" 
                            value={websiteLink}
                            onChange={this.onChange}  
                               
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Qualifications" 
                            name="qualification"
                            value={qualification}
                            onChange={this.onChange}
                            required  
                        />
                    </div>
                    <div className="form-group">
                        <input type="file" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Supporting Documents (Optional)"
                            name="supportDoc"
                            value={supportDoc} 
                            onChange={this.onChange}     
                        />

                    </div>
                    <div className="form-group">
                        <select className="custom-select"
                            name="country"
                            value={country}
                            onChange={this.onChange}
                            required
                        >
                            <option value={39} >Canada</option>
                            <option value={1}>USA</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <textarea 
                            typeof="text" className="form-control" 
                            placeholder="street name & number"
                            name="streetName"
                            value={streetName}
                            onChange={this.onChange}
                        />
                    </div>
                </form>
            </div>
            <div className="col-md-6">
                <form className="mt-4">
                    <div className="form-group">
                        <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="lastName"
                            name="lasstName"
                            value={lastName}
                            onChange={this.onChange} 
                            required
                         />
                    </div>
                    <div className="form-group">
                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Email" 
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            required
                         />
                        </div>
                        <div className="form-group">
                            <input type="password" 
                                className="form-control"
                                id="pxp-signin-email" 
                                placeholder="Confirm Password" 
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                         <input type="file" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Business Support Document" 
                            name="BusinessDoc"
                            value={businessDoc}
                            onChange={this.onChange}
                            required
                         />
                    </div>
                    <div className="form-group">
                        <textarea typeof="text"
                            className="form-control" 
                            placeholder="About Business" 
                            name="aboutBusiness"
                            value={aboutBusiness}
                            onChange={this.onChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input type="date" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="Business Start Date" 
                            name="businessStartDate"
                            value={businessStartDate}
                            onChange={this.onChange}
                            required  
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="KeyWord Describe Your Business" 
                            name="keyWords"
                            value={keyWords}
                            onChange={this.onChange}
                            required  
                        />
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <select className="custom-select"
                                    placeholder="City"
                                    name="city"
                                    value={city}
                                    onChange={this.onChange}
                                    required
                                >
                                    <option >Pakistan</option>
                                    <option value={1}>USA</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <select className="custom-select"
                                    placeholder="Prov/State"
                                    name="province"
                                    value={province}
                                    onChange={this.onChange}
                                    required
                                    >
                                    <option >Pakistan</option>
                                    <option value={1}>USA</option>
                                </select>            
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <input className="form-control"
                                    placeholder="Unit Or Other"
                                    name="unit"
                                    value={unit}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <input 
                                    className="form-control" 
                                    placeholder="Postal or zip" 
                                    name="zipCode"
                                    value={zipCode}
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                       </div>
                   </div>
                    <div className="form-group">
                        <button
                            className="pxp-agent-contact-modal-btn"
                            type="submit"
                            >Sign up
                        </button>
                    </div>
                    
                </form>
               
                    </div>
            
             </div>
            </Modal.Body>
        </Modal>             
       
         );
    }
}
const mapStateToProps = state => {
    return {
      auth: state.auth,
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onCreateVendor: (userData) => dispatch(actions.createVendor(userData))
    }
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(vendorSignup);


