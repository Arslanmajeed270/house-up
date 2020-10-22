import React, { Component } from 'react';
import Routes from './routes';
import Header from '../components/header';
import Footer from '../components/footer';

// Model Imports
import SignIn from '../components/Popups/signIn';
import SignupSelection from '../components/Popups/signupSelection';
import PhoneNumber from '../components/Popups/phoneNumber';
import PhoneNumberVendor from '../components/Popups/phoneNumberVendor';
import OptUser from '../components/Popups/optUser';
import OptUserVendor from '../components/Popups/optUserVendor';
import UserSignup from '../components/Popups/userSignup';
import VendorSignup from '../components/Popups/vendorSignup';
import Congratulation from '../components/Popups/congratulation';

class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            loginModel: false,
            signupSelectionModel: false,
            phoneNumberModel: false,
            phoneNumberVendorModel: false,
            optUserModel: false,
            optUserModelVendor: false,
            userSignupModel: false,
            vendorSignupModel: false,
            congratulationModel: false,
            phNumber: ''
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
        if (model === "loginModel" ) {
            this.setState({ [model]: !this.state[model] });
        }
        else if(model === "signupSelectionModel"){
            this.setState({ loginModel: false, [model]: !this.state[model] });
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
            this.setState({ optUserModel: false, [model]: !this.state[model] });
        }
        else if(model === "vendorSignupModel"){
            this.setState({ optUserModelVendor: false, [model]: !this.state[model] });
        }
        else if(model === "congratulationModel"){
            console.log("i am into congratulationModel");
            this.setState({ 
                userSignupModel: false,
                vendorSignupModel: false,
                [model]: !this.state[model] });
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
                {this.state.loginModel &&
                    <SignIn 
                    show={this.state.loginModel}
                    closeCodelHanlder={this.closeCodelHanlder}
                    signupSelectionHandler={this.modelHanlder}
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