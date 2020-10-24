import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
import cloneDeep from 'lodash/cloneDeep';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';


class vendorSignup extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            profileImage:'',
            firstName:'',
            lastName:'',
            userName:'',
            emailAddress: '',
            confirmPassword:'',
            password: '',
            professionId:'',
            businessSupportingDocument : '',
            businessRegistrationDocument:'',
            keywordDescriptYourBusiness:'',
            countryId:'',
            provinceId:'',
            websiteLink: '',
            cityId:'',
            unit:'',
            businessName: '',
            qualification: '',
            zipCode:'',
            streetAddress:'',
            aboutBusiness: '',
            businessStartDate: '',
            registerVendor: false,
            countries: [],
            professionList: [],
            states: [],
            cities: []
        };
    }


    static getDerivedStateFromProps(props, state) {
        const auth = props.auth;
        const page = props.page;
        let stateChanged = false;
        let changedState = {};

        if( auth && JSON.stringify(state.registerVendor) !== JSON.stringify(auth.registerVendor) ){
          changedState.registerVendor = auth.registerVendor;  
          if( changedState.registerVendor === true ){
            props.onFalseRegisterVendor();
            props.congratulationHandler('congratulationModel');
          }
          stateChanged = true;
        }

        if( page && page.countries && JSON.stringify(state.countries) !== JSON.stringify(page.countries) ){
            changedState.countries = page.countries;  
            stateChanged = true;
        }
        console.log('checking page: ', page);
        if( page && page.professionList && JSON.stringify(state.professionList) !== JSON.stringify(page.professionList) ){
            changedState.professionList = page.professionList;  
            console.log('checking changedState.professionList: ', changedState.professionList);
            stateChanged = true;
        }
        
        if(stateChanged){
          return changedState;
        }
        return null;
      }

      componentDidMount(){
          this.props.onGetCountries();
          this.props.onGetProfessionDetailAPI();
      }

    onChange = e => {
        if(e.target.name === 'profileprofileImagePic'){
            this.setState({ profileImage: e.target.files[0] });
        }
        else if(e.target.name === 'countryId'){
            let index = 0;
            let states = [];
            if(e.target.value !== "" ){
                index =  this.state.countries && this.state.countries.findIndex( x => `${x.id}` === e.target.value );
                states = cloneDeep(this.state.countries[index]);
            }
            this.setState({ 
                [e.target.name]: e.target.value ,
                states: states.states
            });
        }
        else if(e.target.name === 'provinceId'){
            let ind = 0;
            let cities = [];
            if(e.target.value !== "" ){
                ind =  this.state.states && this.state.states.findIndex( x => `${x.id}` === e.target.value );
                cities = cloneDeep(this.state.states[ind]);
            }
            this.setState({ 
                [e.target.name]: e.target.value,
                cities: cities.cities
            });
        }
        else{
            this.setState({[e.target.name]: e.target.value});
    
        }
      }
      onSubmit = e => {
        e.preventDefault();    
        console.log('checking click handler');
        const {
            profileImage, firstName, lastName, userName, emailAddress, confirmPassword,
            password, professionId, businessSupportingDocument, businessRegistrationDocument,
            keywordDescriptYourBusiness, countryId, provinceId, cityId, zipCode,streetAddress,
            businessName, websiteLink, qualification, aboutBusiness, businessStartDate
        } = this.state;

             const userData = {
                profileImage: profileImage,
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                businessName: businessName,
                emailAddress: emailAddress,
                confirmPassword: confirmPassword,
                password: password,
                professionId: professionId, 
                businessSupportingDocument : businessSupportingDocument,
                businessRegistrationDocument: businessRegistrationDocument,
                keywordDescriptYourBusiness: keywordDescriptYourBusiness,
                countryId: countryId,
                provinceId: provinceId,
                cityId: cityId,
                zipCode: zipCode,
                streetAddress: streetAddress,
                websiteLink: websiteLink,
                qualification: qualification,
                aboutBusiness: aboutBusiness,
                businessStartDate: businessStartDate,
                currencyId: 1,
                userTypeId: 2,
                aboutYourSelf: "",
                phoneNumber: this.props.phNumber,
                streetAddress1: "",
                address: "",
                stateId: "866",
                houseAppartmentSuitNumber: "",
                postalCode: "",
                channel: "",


             };
             console.log('i am here: ',userData);
              this.props.onCreateVendor(userData);
         }

    render() { 
        const {
            profileImage, firstName, lastName, userName, emailAddress, confirmPassword,
            password, professionId, businessSupportingDocument, businessRegistrationDocument,
            keywordDescriptYourBusiness, countryId, provinceId, cityId, zipCode,streetAddress,
            businessName, websiteLink, qualification, aboutBusiness,businessStartDate,
            countries, professionList,  states, cities
        } = this.state;
        console.log("checking this.state: ", this.state);
        return ( 
            <Modal 
            show={this.props.show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size="lg"
            // dialogClassName="modal-width"
            onHide={() => this.props.closeCodelHanlder('vendorSignupModel')}
            >
            <Modal.Header onClick={() => this.props.closeCodelHanlder('userSignupModel')}>
            </Modal.Header>
            <Modal.Body >
            <form className="mt-4" onSubmit={this.onSubmit}>
                <div className="form-group logo-modal" >
                    <input type="file" className="profile-pic" name="profileImage" id="profilePic" style={{display:'none'}}/>
                    <label for="profilePic" className="profile-pic-professional">
                              <img src={require("../../assets/images/ic_profile_placeholder.png")} alt="" style={{height:'98px'}}/>
                    </label>
                </div>
                <div className="row" style={{padding:'0px 15px'}}>
            
            <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>
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
                         </div>
            <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>

                         <div className="form-group">
                        <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={this.onChange} 
                            required
                         />
                        </div>
                    </div>
                    </div>
                    
                    
                    <div className="row" style={{padding:'0px 15px'}}>
                    <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>
                        <div className="form-group">
                         <input type="text" 
                            className="form-control"
                            id="pxp-signin-email" 
                            placeholder="Email" 
                            name="emailAddress"
                            value={emailAddress}
                            onChange={this.onChange}
                            required
                         />
                        </div>
                    </div>
                    <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>

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
                    </div>
                    </div>
           
           
                    <div className="row" style={{padding:'0px 15px'}}>
                        <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>
                    <div className="form-group">
                        <select className="custom-select drop-down" onChange={this.onChange} name="professionId"
                         value={professionId} required >
                             <option value=""> Please select profession </option>
                             {
                                 professionList && professionList.length ? professionList.map( ( profession, idx ) => (
                                     <option key={idx} value={profession.professionId} > { profession.professionDesc }</option>
                                 ) )
                                 : ""
                             }
                        </select>
                    </div> 
                    </div>
                    <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>

                    <div className="form-group input-file">
                         <input type="file" 
                            className="form-control"
                            id="file" 
                            placeholder="Business regigration Document" 
                            name="businessRegistrationDocument"
                         />
                         <label for="file" className="btn-2">Business registration document
                         <div style={{textAlign:'right',float:'right'}} >
                              <img src={require("../../assets/images/icons/ic_upload.svg")} alt="" />
                         </div>
                         </label>
                    </div>
                    </div>
                    </div>
            
                    <div className="row" style={{padding:'0px 15px'}}>
            <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>

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
                    </div>
            <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>

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
                    </div>
                    </div>
            
                    <div className="row" style={{padding:'0px 15px'}}>
            <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>

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
                    </div>
            <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>

                    <div className="form-group">
                        <input type="date"
                            className="form-control" 
                            id="calender" 
                            placeholder="Business Start Date" 
                            name="businessStartDate"
                            value={businessStartDate}
                            onChange={this.onChange}
                            required  
                        />
                         {/* <label for="calender" className="btn-2">Business Started 
                         <img src={require("../../assets/images/icons/ic_calendar.svg")} alt="" /></label> */}


                    </div>
                    </div>
                    </div>
                    <div className="row" style={{padding:'0px 15px'}}>
                    <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>

                    <div className="form-group input-file">
                        <input type="file" 
                            className="form-control" 
                            id="support-file" 
                            placeholder="Supporting Documents (Optional)"
                            name="businessSupportingDocument"
                        />
                        <label for="support-file" className="btn-2">Support document (optionsl) <div style={{textAlign:'right',float:'right'}} >
                              <img src={require("../../assets/images/icons/ic_upload.svg")} alt="" />
                         </div></label>

                    </div>
                    <div className="form-group">
                        <input type="text" 
                            className="form-control" 
                            id="pxp-signin-pass" 
                            placeholder="KeyWord Describe Your Business" 
                            name="keywordDescriptYourBusiness"
                            value={keywordDescriptYourBusiness}
                            onChange={this.onChange}
                            required  
                        />
                    </div>
                    </div>
            <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>
                    <div className="form-group">
                        <textarea typeof="text" style={{height:'111px'}}
                            className="form-control" 
                            placeholder="About Business" 
                            name="aboutBusiness"
                            value={aboutBusiness}
                            onChange={this.onChange}
                            required
                        />

                    </div>
                    </div>
                    </div>

                    <div className="row" style={{padding:'0px 15px'}}>
                    <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>
                    <div className="row">
                            <div className="col-md-6">
                                <div className="form-group"> 
                                <select className="custom-select"
                                    placeholder="City"
                                    name="provinceId"
                                    value={provinceId}
                                    onChange={this.onChange}
                                    required
                                >
                                    <option value=""> Province / state </option>
                             {
                                 states && states.length ? states.map( ( state, idx ) => (
                                     <option key={idx} value={state.id} > { state.name }</option>
                                 ) )
                                 : ""
                             }
                                </select>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="form-group"> 
                                <select className="custom-select"
                                    placeholder="Prov/State"
                                    name="cityId"
                                    value={cityId}
                                    onChange={this.onChange}
                                    required
                                    >
                                      <option value=""> City </option>
                                    {
                                        cities && cities.length ? cities.map( ( city, idx ) => (
                                            <option key={idx} value={city.id} > { city.name }</option>
                                        ) )
                                        : ""
                                    }     
                                </select>            
                            </div>
                            </div>
                        </div>
                    <div className="row">
                            <div className="col-md-6">
                                <input className="form-control"
                                    placeholder="Unit Or Other"
                                    name="unit"
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
                    <div className="col-md-6" style={{padding:'0px' , paddingRight:'7px'}}>
                       <div className="form-group">
                        <textarea 
                            typeof="text" className="form-control" style={{height:'97px'}}
                            placeholder="street name & number"
                            name="streetAddress"
                            value={streetAddress}
                            onChange={this.onChange}
                        />
                    </div>
                    </div>
                    </div>

                <div className="row" style={{padding:'0px 15px'}}>
                <div className="col-md-6" style={{padding:'0px',paddingRight:'7px'}}>
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
                </div>
                <div className="col-md-6" style={{padding:'0px'}}>
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

            </Modal.Body>
        </Modal>             
       
         );
    }
}

const mapStateToProps = state => {
    return {
      auth: state.auth,
      page: state.page,
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        onFalseRegisterVendor: () => dispatch({type: actionTypes.REGISTER_VENDOR_FAIL }),
        onGetCountries: () => dispatch(actions.GetCountries()),
        onGetProfessionDetailAPI: () => dispatch(actions.GetProfessionDetailAPI()),
        onCreateVendor: (userData) => dispatch(actions.createVendor(userData))
    }
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(vendorSignup);


