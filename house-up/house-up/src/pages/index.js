import React, { Component } from 'react';
import Routes from './routes';
import Header from '../components/header';
import Footer from '../components/footer';

// Model Imports
import PhoneSignIn from '../components/Popups/phoneSignin';
import EmailSignIn from '../components/Popups/emailSignin';
import SignupSelection from '../components/Popups/signupSelection';
import PhoneNumber from '../components/Popups/phoneNumber';
import PhoneNumberVendor from '../components/Popups/phoneNumberVendor';
import OptUser from '../components/Popups/optUser';
import OptUserVendor from '../components/Popups/optUserVendor';
import UserSignup from '../components/Popups/userSignup';
import VendorSignup from '../components/Popups/vendorSignup';
import Congratulation from '../components/Popups/congratulation';
import PhoneNumberForgotPass from '../components/Popups/phoneNumberForgotPass';
import OptForgotPass from '../components/Popups/optForgotPass';
import ForgotPass from '../components/Popups/forgotPass';
import ForgotPassCongrats from '../components/Popups/forgotPassCongrats';

class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            phoneSignin: false,
            emailSignin : false,
            forgotPass:false,
            phoneNoForgotPass:false,
            forgotPassCongrats:false,
            signupSelectionModel: false,
            phoneNumberModel: false,
            phoneNumberVendorModel: false,
            optUserModel: false,
            optUserModelVendor: false,
            optForgotPass:false,
            userSignupModel: false,
            vendorSignupModel: false,
            congratulationModel: false,
            phNumber: '',
            vendorCongrats:false
        };

    }

    closeCodelHanlder = (model) => {
        this.setState({
            [model]: false
        });
    }
    // loginModelHanlder = (prop) => (event) => {
    modelHanlder = (model) => {
        console.log("checking model: ", model);
        if (model === "phoneSignin" ) {
            this.setState({ emailSignin:false, [model]: !this.state[model] });
        }
        else if(model === "emailSignin"){
            this.setState({ phoneSignin: false, [model]: !this.state[model] });
        }
        else if(model === "phoneNoForgotPass"){
            this.setState({ phoneSignin: false, emailSignin:false, [model]: !this.state[model] });
        }
        else if(model === "optForgotPass"){
            this.setState({ phoneNoForgotPass: false, [model]: !this.state[model] });
        }
        else if(model === "forgotPass"){
            this.setState({ optForgotPass: false, [model]: !this.state[model] });
        }
        else if(model === "forgotPassCongrats"){
            this.setState({ forgotPass: false, [model]: !this.state[model] });
            console.log(this.state.forgotPassCongrats)
        }
        else if(model === "signupSelectionModel"){
            this.setState({ phoneSignin: false, emailSignin:false, [model]: !this.state[model] });
        }
        else if(model === "phoneNumberModel" || model === "phoneNumberVendorModel"){
            this.setState({ signupSelectionModel: false, [model]: !this.state[model] });
        }
        else if(model === "optUserModel"){
            this.setState({ phoneNumberModel: false, [model]: !this.state[model] });
        }
        else if(model === "optUserModelVendor"){
            this.setState({ phoneNumberVendorModel: false, [model]: !this.state[model] });
        }
        else if(model === "userSignupModel"){
            console.log('i am into userSignupModel if else');
            this.setState({ optUserModel: false, [model]: !this.state[model] });
        }
        else if(model === "vendorSignupModel"){
            this.setState({ optUserModelVendor: false, [model]: !this.state[model] });
        }
        else if(model === "congratulationModel"){
            this.setState({ 
                userSignupModel: false,
                [model]: !this.state[model] 
            });
        }
        else if(model === "vendorCongrats"){
            this.setState({ 
                vendorSignupModel: false,
                [model]: !this.state[model] 
            });
        }
    }

    phoneNumberHandler = (num) => {
        this.setState({
            phNumber:num
        });
    }

    render() {
        const animateHeader = this.props.animateHeader;
        return (
            <React.Fragment>
                {this.state.phoneSignin &&
                    <PhoneSignIn 
                        show={this.state.phoneSignin}
                        closeCodelHanlder={this.closeCodelHanlder}
                        emailSigninHandler ={this.modelHanlder}
                        phoneNoForgotHandler = {this.modelHanlder}
                        signupSelectionHandler={this.modelHanlder}
                    />
                }
                {this.state.emailSignin &&
                    <EmailSignIn 
                        show={this.state.emailSignin}
                        closeCodelHanlder={this.closeCodelHanlder}
                        phoneNoForgotHandler = {this.modelHanlder}
                        phoneSigninHandler ={this.modelHanlder}
                        signupSelectionHandler={this.modelHanlder}
                    />
                }
                {this.state.phoneNoForgotPass &&
                    <PhoneNumberForgotPass 
                        show={this.state.phoneNoForgotPass}
                        closeCodelHanlder={this.closeCodelHanlder}
                        phoneNumberHandler = {this.phoneNumberHandler}
                        optForgotPassHandler={this.modelHanlder}
                    />
                }
                {this.state.optForgotPass &&
                    <OptForgotPass 
                        show={this.state.optForgotPass}
                        closeCodelHanlder={this.closeCodelHanlder}
                        phNumber={this.state.phNumber}
                        forgotPassHandler ={this.modelHanlder}
                    />
                }
                {this.state.forgotPass &&
                    <ForgotPass 
                        show={this.state.forgotPass}
                        closeCodelHanlder={this.closeCodelHanlder}
                        forgotPassCongratsHandler = {this.modelHanlder}
                    />
                }
                 {this.state.forgotPassCongrats &&
                    <ForgotPassCongrats 
                        show={this.state.forgotPassCongrats}
                        closeCodelHanlder={this.closeCodelHanlder}
                    />
                }
                {this.state.signupSelectionModel &&
                    <SignupSelection 
                    show={this.state.signupSelectionModel}
                    closeCodelHanlder={this.closeCodelHanlder}
                    phoneNumberHandler={this.modelHanlder}
                    />
                }
                {this.state.phoneNumberModel &&
                    <PhoneNumber 
                    show={this.state.phoneNumberModel}
                    closeCodelHanlder={this.closeCodelHanlder}
                    optUserHandler={this.modelHanlder}
                    phoneNumberHandler={this.phoneNumberHandler}
                    />
                }
                {this.state.phoneNumberVendorModel &&
                    <PhoneNumberVendor 
                    show={this.state.phoneNumberVendorModel}
                    closeCodelHanlder={this.closeCodelHanlder}
                    optUserVendorHandler={this.modelHanlder}
                    phoneNumberHandler={this.phoneNumberHandler}
                    />
                }
                 {this.state.optUserModel &&
                    <OptUser 
                    show={this.state.optUserModel}
                    closeCodelHanlder={this.closeCodelHanlder}
                    userSignupHandler={this.modelHanlder}
                    phNumber={this.state.phNumber}

                    />
                }
                 {this.state.optUserModelVendor &&
                    <OptUserVendor 
                    show={this.state.optUserModelVendor}
                    closeCodelHanlder={this.closeCodelHanlder}
                    vendorSignupHandler={this.modelHanlder}
                    phNumber={this.state.phNumber}
                    />
                }
                 {this.state.userSignupModel &&
                    <UserSignup 
                    show={this.state.userSignupModel}
                    closeCodelHanlder={this.closeCodelHanlder}
                    congratulationHandler={this.modelHanlder}
                    phNumber={this.state.phNumber}
                    />
                }
                 {this.state.vendorSignupModel &&
                    <VendorSignup 
                    show={this.state.vendorSignupModel}
                    closeCodelHanlder={this.closeCodelHanlder}
                    congratulationHandler={this.modelHanlder}
                    />
                }
                {this.state.congratulationModel &&
                    <Congratulation 
                    show={this.state.congratulationModel}
                    closeCodelHanlder={this.closeCodelHanlder}
                    />
                }
                {this.state.vendorCongrats &&
                    <Congratulation 
                    show={this.state.vendorCongrats}
                    closeCodelHanlder={this.closeCodelHanlder}
                    />
                }
                <Header 
                animateHeader={animateHeader}
                modelHanlder={this.modelHanlder}
                />
                <Routes />
                {this.props.hideFooter === true ? " " : <Footer /> }
            </React.Fragment>
        )
    }
}

export default index;