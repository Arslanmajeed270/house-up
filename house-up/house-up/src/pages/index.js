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
import SubscriptionPlan from '../components/Popups/subscriptionPlan';
import CardSelection from '../components/Popups/cardSelection';
import CardDetails from '../components/Popups/cardDetails';
import PropertyPlanSelection from '../components/Popups/propertyPlanSelection';
import ImagePreview from '../components/Popups/ImagePreview'
import AlertPopup from '../components/Popups/alertPopup'

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phoneSignin: false,
			emailSignin: false,
			forgotPass: false,
			phoneNoForgotPass: false,
			forgotPassCongrats: false,
			signupSelectionModel: false,
			phoneNumberModel: false,
			phoneNumberVendorModel: false,
			optUserModel: false,
			optUserModelVendor: false,
			optForgotPass: false,
			userSignupModel: false,
			vendorSignupModel: false,
			congratulationModel: false,
			phNumber: '',
			imageToggle:false,
			vendorCongrats: false,
			subscriptionPlan: false,
			cardSelection: false,
			cardDetails: false,
			animateHeader: false,
			imagePreview:false,
			alertPopup:false,
			message: '',
			data: '',
			propertyPlanSelection: false,
		};
	}

	closeCodelHanlder = (model) => {
		this.setState({
			[model]: false,
		});
	};
	modelHanlder = (model, data) => {
		if (model === 'phoneSignin') {
			this.setState({ emailSignin: false, [model]: !this.state[model] });
		} else if (model === 'emailSignin') {
			this.setState({ phoneSignin: false, [model]: !this.state[model] });
		} else if (model === 'subscriptionPlan') {
			this.setState({ [model]: !this.state[model], message: data });
		} else if (model === 'cardSelection') {
			this.setState({
				subscriptionPlan: false,
				propertyPlanSelection: false,
				[model]: !this.state[model],
				data: data,
			});
		} else if (model === 'propertyPlanSelection') {
			this.setState({
				[model]: !this.state[model],
				message: data,
			});
		} else if (model === 'cardDetails') {
			this.setState({ cardSelection: false, [model]: !this.state[model] });
		} else if (model === 'phoneNoForgotPass') {
			this.setState({
				phoneSignin: false,
				emailSignin: false,
				[model]: !this.state[model],
			});
		} else if (model === 'optForgotPass') {
			this.setState({ phoneNoForgotPass: false, [model]: !this.state[model] });
		} else if (model === 'forgotPass') {
			this.setState({ optForgotPass: false, [model]: !this.state[model] });
		} else if (model === 'forgotPassCongrats') {
			this.setState({ forgotPass: false, [model]: !this.state[model] });
		} else if (model === 'signupSelectionModel') {
			this.setState({
				phoneSignin: false,
				emailSignin: false,
				[model]: !this.state[model],
			});
		} else if (
			model === 'phoneNumberModel' ||
			model === 'phoneNumberVendorModel'
		) {
			this.setState({
				signupSelectionModel: false,
				[model]: !this.state[model],
			});
		} else if (model === 'optUserModel') {
			this.setState({ phoneNumberModel: false, [model]: !this.state[model] });
		} else if (model === 'optUserModelVendor') {
			this.setState({
				phoneNumberVendorModel: false,
				[model]: !this.state[model],
			});
		} else if (model === 'userSignupModel') {
			this.setState({
				optUserModel: false,
				[model]: !this.state[model],
				message: data,
			});
		} else if (model === 'vendorSignupModel') {
			console.log('heelo', data);
			this.setState({
				optUserModelVendor: false,
				[model]: !this.state[model],
				message: data,
			});
		} else if (model === 'congratulationModel') {
			this.setState({
				userSignupModel: false,
				vendorSignupModel: false,
				cardSelection: false,
				[model]: !this.state[model],
				message: data,
			});
		}
		else if (model === 'alertPopup') {
			this.setState({
				[model]: !this.state[model],
				message: data,
			});
		} else if (model === 'vendorCongrats') {
			this.setState({
				vendorSignupModel: false,
				[model]: !this.state[model],
			});
		}
		else if (model === 'imageToggle') {
			this.setState({
				[model]: !this.state[model],
			});
		} else if (model === 'alreadyHaveAccount') {
			this.setState({
				phoneNumberModel: false,
				phoneNumberVendorModel: false,
				emailSignin: true,
			});
		}
	};
	phoneNumberHandler = (num) => {
		this.setState({
			phNumber: num,
		});
	};

	render() {
		let animateHeader = false;
		let hideFooter = false;

		if (this.props.location.pathname.indexOf('/index') >= 0) {
			hideFooter = true;
		}
		if (
			this.props.location.pathname === '/home' ||
			this.props.location.pathname === '/'
		) {
			animateHeader = true;
		}
		return (
			<React.Fragment>
				{this.state.phoneSignin && (
					<PhoneSignIn
						show={this.state.phoneSignin}
						closeCodelHanlder={this.closeCodelHanlder}
						emailSigninHandler={this.modelHanlder}
						phoneNoForgotHandler={this.modelHanlder}
						signupSelectionHandler={this.modelHanlder}
						history={this.props.history}
					/>
				)}
				{this.state.subscriptionPlan && (
					<SubscriptionPlan
						show={this.state.subscriptionPlan}
						modelHanlder={this.modelHanlder}
						closeCodelHanlder={this.closeCodelHanlder}
						message={this.state.message}
					/>
				)}
				{this.state.cardSelection && (
					<CardSelection
						data={this.state.data}
						show={this.state.cardSelection}
						closeCodelHanlder={this.closeCodelHanlder}
						cardDetailsHandler={this.modelHanlder}
					/>
				)}
				{this.state.cardDetails && (
					<CardDetails
						show={this.state.cardDetails}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}
				{this.state.emailSignin && (
					<EmailSignIn
						show={this.state.emailSignin}
						closeCodelHanlder={this.closeCodelHanlder}
						phoneNoForgotHandler={this.modelHanlder}
						phoneSigninHandler={this.modelHanlder}
						signupSelectionHandler={this.modelHanlder}
						history={this.props.history}
					/>
				)}
				{this.state.phoneNoForgotPass && (
					<PhoneNumberForgotPass
						show={this.state.phoneNoForgotPass}
						closeCodelHanlder={this.closeCodelHanlder}
						phoneNumberHandler={this.phoneNumberHandler}
						optForgotPassHandler={this.modelHanlder}
					/>
				)}
				{this.state.optForgotPass && (
					<OptForgotPass
						show={this.state.optForgotPass}
						closeCodelHanlder={this.closeCodelHanlder}
						phNumber={this.state.phNumber}
						forgotPassHandler={this.modelHanlder}
					/>
				)}
				{this.state.propertyPlanSelection && (
					<PropertyPlanSelection
						show={this.state.propertyPlanSelection}
						modelHanlder={this.modelHanlder}
						message={this.state.message}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}
				{this.state.forgotPass && (
					<ForgotPass
						show={this.state.forgotPass}
						closeCodelHanlder={this.closeCodelHanlder}
						forgotPassCongratsHandler={this.modelHanlder}
						phNumber={this.state.phNumber}
					/>
				)}
				{this.state.forgotPassCongrats && (
					<ForgotPassCongrats
						show={this.state.forgotPassCongrats}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}
				{this.state.signupSelectionModel && (
					<SignupSelection
						show={this.state.signupSelectionModel}
						closeCodelHanlder={this.closeCodelHanlder}
						phoneNumberHandler={this.modelHanlder}
					/>
				)}
				{this.state.phoneNumberModel && (
					<PhoneNumber
						show={this.state.phoneNumberModel}
						closeCodelHanlder={this.closeCodelHanlder}
						optUserHandler={this.modelHanlder}
						alreadyHaveAccountHandler={this.modelHanlder}
						phoneNumberHandler={this.phoneNumberHandler}
					/>
				)}
				{this.state.phoneNumberVendorModel && (
					<PhoneNumberVendor
						show={this.state.phoneNumberVendorModel}
						closeCodelHanlder={this.closeCodelHanlder}
						optUserVendorHandler={this.modelHanlder}
						alreadyHaveAccountHandler={this.modelHanlder}
						phoneNumberHandler={this.phoneNumberHandler}
					/>
				)}
				{this.state.optUserModel && (
					<OptUser
						show={this.state.optUserModel}
						closeCodelHanlder={this.closeCodelHanlder}
						userSignupHandler={this.modelHanlder}
						phNumber={this.state.phNumber}
					/>
				)}
				{this.state.optUserModelVendor && (
					<OptUserVendor
						show={this.state.optUserModelVendor}
						closeCodelHanlder={this.closeCodelHanlder}
						vendorSignupHandler={this.modelHanlder}
						phNumber={this.state.phNumber}
					/>
				)}
				{this.state.userSignupModel && (
					<UserSignup
						show={this.state.userSignupModel}
						history={this.props.history}
						closeCodelHanlder={this.closeCodelHanlder}
						congratulationHandler={this.modelHanlder}
						phNumber={this.state.phNumber}
						userData={this.state.message}
					/>
				)}
				{this.state.vendorSignupModel && (
					<VendorSignup
						show={this.state.vendorSignupModel}
						history={this.props.history}
						closeCodelHanlder={this.closeCodelHanlder}
						congratulationHandler={this.modelHanlder}
						phNumber={this.state.phNumber}
						userData={this.state.message}
					/>
				)}
				{this.state.congratulationModel && (
					<Congratulation
						show={this.state.congratulationModel}
						message={this.state.message}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}
				{this.state.vendorCongrats && (
					<Congratulation
						show={this.state.vendorCongrats}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}
				{this.state.imageToggle && (
					<ImagePreview
						show={this.state.imageToggle}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}
				{this.state.alertPopup && (
					<AlertPopup
						show={this.state.alertPopup}
						message={this.state.message}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}
				<Header
					history={this.props.history}
					animateHeader={animateHeader}
					modelHanlder={this.modelHanlder}
				/>
			<Routes 
			modelHanlder={this.modelHanlder} 
			history={this.props.history} 
			closeCodelHanlder={this.closeCodelHanlder}
			/>
				{hideFooter === true ? ' ' : <Footer />}
			</React.Fragment>
		);
	}
}

export default index;
