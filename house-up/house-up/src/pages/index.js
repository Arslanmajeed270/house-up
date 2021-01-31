import React, { Component } from 'react';
import Routes from './routes';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

// Model Imports
// Auth Popup
import OptUser from '../components/Popups/auth/otp/optUser';
import OptUserVendor from '../components/Popups/auth/otp/optUserVendor';
import PhoneNumber from '../components/Popups/auth/phoneNumber/phoneNumber';
import PhoneNumberVendor from '../components/Popups/auth/phoneNumber/phoneNumberVendor';
import PhoneSignIn from '../components/Popups/auth/signin/phoneSignin';
import EmailSignIn from '../components/Popups/auth/signin/emailSignin';
import SignupSelection from '../components/Popups/auth/signup/signupSelection';
import UserSignup from '../components/Popups/auth/signup/userSignup';
import VendorSignup from '../components/Popups/auth/signup/vendorSignup';

// Congratulations popup
import Congratulation from '../components/Popups/congratulations/congratulation';
import ForgotPassCongrats from '../components/Popups/congratulations/forgotPassCongrats';

// Forgot password popup
import ForgotPass from '../components/Popups/forgotPassword/forgotPass';
import OptForgotPass from '../components/Popups/forgotPassword/optForgotPass';
import PhoneNumberForgotPass from '../components/Popups/forgotPassword/phoneNumberForgotPass';

// Others popup
import AlertPopup from '../components/Popups/others/alertPopup';
import ImagePreview from '../components/Popups/others/ImagePreview';

// Property Plan popup
import PropertyPlanSelection from '../components/Popups/propertyPlan/propertyPlanSelection';

// Subscription Plan popup
import SubscriptionPlan from '../components/Popups/subscriptionPlan/subscriptionPlan';
import CardSelection from '../components/Popups/subscriptionPlan/cardSelection';
import CardDetails from '../components/Popups/subscriptionPlan/cardDetails';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hideFooter: false,
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
			imageToggle: false,
			vendorCongrats: false,
			subscriptionPlan: false,
			cardSelection: false,
			cardDetails: false,
			animateHeader: false,
			imagePreview: false,
			alertPopup: false,
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
		console.log('checking model: ', model);
		console.log('checking data: ', data);
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
		} else if (model === 'alertPopup') {
			this.setState({
				[model]: !this.state[model],
				message: data,
			});
		} else if (model === 'vendorCongrats') {
			this.setState({
				vendorSignupModel: false,
				[model]: !this.state[model],
			});
		} else if (model === 'imageToggle') {
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

	componentDidMount(){
		if (this.props.location.pathname.indexOf('/index') >= 0) {
			this.setState({
				hideFooter: true
			});
		}
	}

	render() {
		const {
			hideFooter, phoneSignin, subscriptionPlan, message, 
			cardSelection, data, emailSignin, phoneNoForgotPass,
			forgotPass, forgotPassCongrats, signupSelectionModel,
			phoneNumberModel, phoneNumberVendorModel,
			optUserModel, optUserModelVendor,
			userSignupModel, vendorSignupModel, congratulationModel,
			vendorCongrats, imageToggle, alertPopup
		} = this.state;
		const { history, location, cardDetails, optForgotPass,
			phNumber, propertyPlanSelection,  } = this.props;

			console.log('checking this.state: ', this.state);
		return (
			<React.Fragment>
				{ phoneSignin && (
					<PhoneSignIn
						show={ phoneSignin }
						closeCodelHanlder={this.closeCodelHanlder}
						emailSigninHandler={this.modelHanlder}
						phoneNoForgotHandler={this.modelHanlder}
						signupSelectionHandler={this.modelHanlder}
						history={history}
					/>
				)}

				{ subscriptionPlan && (
					<SubscriptionPlan
						show={ subscriptionPlan}
						modelHanlder={this.modelHanlder}
						closeCodelHanlder={this.closeCodelHanlder}
						message={ message }
					/>
				)}

				{ cardSelection && (
					<CardSelection
						data={ data }
						show={ cardSelection}
						closeCodelHanlder={this.closeCodelHanlder}
						cardDetailsHandler={this.modelHanlder}
					/>
				)}
				{ cardDetails && (
					<CardDetails
						show={ cardDetails}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}
				{ emailSignin && (
					<EmailSignIn
						show={ emailSignin }
						closeCodelHanlder={this.closeCodelHanlder}
						phoneNoForgotHandler={this.modelHanlder}
						phoneSigninHandler={this.modelHanlder}
						signupSelectionHandler={this.modelHanlder}
						history={ history }
					/>
				)}
				{ phoneNoForgotPass && (
					<PhoneNumberForgotPass
						show={ phoneNoForgotPass }
						closeCodelHanlder={this.closeCodelHanlder}
						phoneNumberHandler={this.phoneNumberHandler}
						optForgotPassHandler={this.modelHanlder}
					/>
				)}
				{ optForgotPass && (
					<OptForgotPass
						show={optForgotPass}
						closeCodelHanlder={this.closeCodelHanlder}
						phNumber={phNumber}
						forgotPassHandler={this.modelHanlder}
					/>
				)}

				{propertyPlanSelection && (
					<PropertyPlanSelection
						show={propertyPlanSelection}
						modelHanlder={this.modelHanlder}
						message={message}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}

				{forgotPass && (
					<ForgotPass
						show={forgotPass}
						closeCodelHanlder={this.closeCodelHanlder}
						forgotPassCongratsHandler={this.modelHanlder}
						phNumber={phNumber}
					/>
				)}

				{forgotPassCongrats && (
					<ForgotPassCongrats
						show={forgotPassCongrats}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}

				{signupSelectionModel && (
					<SignupSelection
						show={signupSelectionModel}
						closeCodelHanlder={this.closeCodelHanlder}
						phoneNumberHandler={this.modelHanlder}
					/>
				)}

				{phoneNumberModel && (
					<PhoneNumber
						show={phoneNumberModel}
						closeCodelHanlder={this.closeCodelHanlder}
						optUserHandler={this.modelHanlder}
						alreadyHaveAccountHandler={this.modelHanlder}
						phoneNumberHandler={this.phoneNumberHandler}
					/>
				)}

				{phoneNumberVendorModel && (
					<PhoneNumberVendor
						show={phoneNumberVendorModel}
						closeCodelHanlder={this.closeCodelHanlder}
						optUserVendorHandler={this.modelHanlder}
						alreadyHaveAccountHandler={this.modelHanlder}
						phoneNumberHandler={this.phoneNumberHandler}
					/>
				)}

				{optUserModel && (
					<OptUser
						show={optUserModel}
						closeCodelHanlder={this.closeCodelHanlder}
						userSignupHandler={this.modelHanlder}
						phNumber={phNumber}
					/>
				)}

				{optUserModelVendor && (
					<OptUserVendor
						show={optUserModelVendor}
						closeCodelHanlder={this.closeCodelHanlder}
						vendorSignupHandler={this.modelHanlder}
						phNumber={phNumber}
					/>
				)}

				{userSignupModel && (
					<UserSignup
						show={userSignupModel}
						history={history}
						closeCodelHanlder={this.closeCodelHanlder}
						congratulationHandler={this.modelHanlder}
						phNumber={phNumber}
						userData={message}
					/>
				)}

				{vendorSignupModel && (
					<VendorSignup
						show={vendorSignupModel}
						history={history}
						closeCodelHanlder={this.closeCodelHanlder}
						congratulationHandler={this.modelHanlder}
						phNumber={phNumber}
						userData={message}
					/>
				)}

				{congratulationModel && (
					<Congratulation
						show={congratulationModel}
						message={message}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}
				{vendorCongrats && (
					<Congratulation
						show={vendorCongrats}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}
				{imageToggle && (
					<ImagePreview
						show={imageToggle}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}
				{alertPopup && (
					<AlertPopup
						show={alertPopup}
						message={message}
						closeCodelHanlder={this.closeCodelHanlder}
					/>
				)}
				
				<Header
					location={location}
					history={history}
					modelHanlder={this.modelHanlder}
				/>
				<Routes
					modelHanlder={this.modelHanlder}
					history={history}
					closeCodelHanlder={this.closeCodelHanlder}
				/>
				{hideFooter === true ? ' ' : <Footer />}
			</React.Fragment>
		);
	}
}

export default index;