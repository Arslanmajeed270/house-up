import { Nav } from 'react-bootstrap';
import React, { Component } from 'react'

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

var jwt = require('jsonwebtoken');


class form4 extends Component {
  constructor(props) {
		super(props);
		this.state = {
			autoRenew: false,
			packageSelection: false,
			feeId: '',
			feeTypes: [],
			allCards: [],
			cardNumber: '',
			expiryDate: '',
			cvv: '',
			user: {},
			addCardToggle:false
		}
	}

	static getDerivedStateFromProps(props, state) {
		const errors = props.errors;
		const page = props.page;
		const auth = props.auth;
		let stateChanged = false;
		let changedState = {};

		if (
			auth &&
			auth.user &&
			JSON.stringify(state.user) !== JSON.stringify(auth.user)
		) {
			changedState.user = auth.user;
			if (
				auth.user &&
				auth.user.creditCardList &&
				auth.user.creditCardList.length
			) {
				auth.user.creditCardList.map((data) => {
					if (data.isDefault) {
						changedState.cardId = data.cardId;
					}
					return data;
				});
			}
			stateChanged = true;
		}

		if (errors && JSON.stringify(state.errors) !== JSON.stringify(errors)) {
			changedState.errors = errors;
			stateChanged = true;
		}

		if (
			page &&
			JSON.stringify(state.loading) !== JSON.stringify(page.loading)
		) {
			changedState.loading = page.loading;
			stateChanged = true;
		}

		if (stateChanged) {
			return changedState;
		}
		return null;
	}

	onChangeHandler = (e) => {
		const { expiryDate } = this.state
		let targetName = e.target.name;
		let targetValue = e.target.value;
		if( targetName === "expiryDate" ){
			 this.setState({ [targetName] : targetValue.replace(/^(\d{2})(\d{2})/, '$1/$2/')});
		}
		this.setState({ [targetName]: targetValue });
	};

	addCard = (e) => {
		e.preventDefault();
		const { cardNumber, expiryDate, cvv, user } = this.state;
		const jwtSecretKey = process.env.REACT_APP_JWT_SECRET_KEY;
		const now = new Date();
		const expTime = Math.round(now.getTime() / 1000) + 2000;
		var token = jwt.sign(
			{
				cardNumber: cardNumber,
				expiryDate: expiryDate,
				cvv: cvv,
				exp: expTime,
			},
			jwtSecretKey
		);
		const data = {
			channel: 'web',
			token: token,
			userId: user.userId,
		};
		console.log("data packet", data)
		this.props.onCreateCardToken(data);
	}

	componentDidMount() {

		console.log('pros', this.props.dropDownData);
		this.setState({
			feeId : this.props.form4Data ? this.props.form4Data.propertyFeeId : "",
			autoRenew : this.props.form4Data ? this.props.form4Data.packageRenewal : "",

			feeTypes:
				this.props.dropDownData &&
				this.props.dropDownData.propertyPostingFees
					? this.props.dropDownData.propertyPostingFees
					: '',
		});
	}

	autoRenewHandler = () => {
		this.setState({
			autoRenew: !this.state.autoRenew,
		});
	};

	addCardToggle = () => {
		this.setState({
			addCardToggle : !this.state.addCardToggle
		})
	}

	
	
	selectPlan = (id) =>{
	console.log("clicked", id)

		this.setState({
			feeId: id,
		});
}

	onChange = (cardId) => {
		this.setState({ cardId: cardId });
		const { user } = this.state;
		const data = {
			cardId: cardId,
			userId: user.userId,
		};
		this.props.onMarkCreditCardDefault(data);
	};

	onSubmit = (e) => {
		e.preventDefault();
		const from4Data = {
			propertyFeeId: this.state.feeId,
			packageRenewal: this.state.autoRenew,
		};
		console.log(from4Data)
		 this.props.form4DataHandler(from4Data);
	}

  render() {
		const { feeTypes, packageSelection, feeId , user , cardId , cardNumber , expiryDate, cvv } = this.state;

    return (
      <div
						className='add-property-conatiner'
						style={{ backgroundColor: '#F5F5F5' }}
					>
					<div className='row border-property'>
							<div className='col-md-12'>
								<h1 className='titles-property'>List your property</h1>
								<p className='pairing-industry'>
									Pairing the industry's top technology with unsurpassed local
									expertise.
								</p>
								<Nav variant='pills' defaultActiveKey='/4'>
									<Nav.Item>
										<Nav.Link
											eventKey='/1'
											className='tabs'
											onClick={() => this.props.formShowHandler(0)}
										>
											Step 1
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											eventKey='/2'
											className='tabs'
											onClick={() => this.props.formShowHandler(1)}
										>
											Step 2
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											eventKey='/3'
											className='tabs'
											onClick={() => this.props.formShowHandler(2)}
										>
											Step 3
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link
											eventKey='/4'
											className='tabs'
											onClick={() => this.props.formShowHandler(3)}
										>
											Step 4
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</div>
						</div>
								
        	<div>
							<h1>Select Plan</h1>
						</div>
						<div className="row">
							<div className="col-md-6">
								{feeTypes && feeTypes.length
							? feeTypes.map((data, index) => (
									<div
										className=' property-plan-div  row'
										onClick={() => this.selectPlan(data.propertyPostingFeeId)}
									>
										<div key={index} className='col-md-11'>
											<div>
												{data.propertyPostingFee === '10'
													? 'BASIC PLAN'
													: data.propertyPostingFee === '15'
													? 'STANDARD PLAN'
													: 'LISTING FREE'}
											</div>
											<div className='user-description'>
												{data.propertyPostingFeeDesc}
											</div>
										</div>
										<div className='col-md-1'>
											<img
												src={require(this.state.feeId === data.propertyPostingFeeId ? '../../../assets/images/ic_check_sel.svg' : '../../../assets/images/ic_check.svg')}
												alt=''
											/>
										</div>
									</div>
							  ))
							: ''}

						<div className='property-plan-div'>
							<div style={{ float: 'left' }}>AUTO RENEW</div>
							<div
								style={{ textAlign: 'right' }}
								onClick={this.autoRenewHandler}
							>
								<img
									src={require(this.state.autoRenew
										? '../../../assets/images/ic_allow_sel.svg'
										: '../../../assets/images/ic_allow.svg')}
									alt=''
								/>
							</div>
						</div>
							</div>
						
						<div className="col-md-6">
							{user && user.creditCardList
							? user.creditCardList.map((data, idx) => (
									<div className="property-plan-div"
										key={idx}
										onClick={() => this.onChange(data.cardId && data.cardId)}
									>
										<div
											className='card-selection'
										>
											<div className='dashboard-newsfeed-content'>
												<div>
													<div className='row'>
														<div className='col-md-3 logo-modal'>
															<img
																src={
																	data.brand === 'Visa'
																		? require('../../../assets/images/ic_visa.svg')
																		: require('../../../assets/images/ic_visa_master_card.svg')
																}
																alt=''
																style={{
																	width: '46px',
																	height: '14px',
																	marginTop: '20px',
																}}
															/>
														</div>
														<div className='col-md-9 visa-card-selection'>
															<div>
																<div className='card '>
																	{' '}
																	{data.brand === 'Visa'
																		? 'VISA'
																		: 'MASTER'}{' '}
																	Card
																</div>
																<div className='card-description'>
																	{' '}
																	**** **** **** {data.last4}{' '}
																</div>
															</div>
															{cardId === data.cardId ? (
																<img
																	src={require('../../../assets/images/ic_check_sel.svg')}
																	alt=''
																/>
															) : (
																''
															)}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							  ))
							: ''}
						<div>
							<div>
									<button
										className='more-options'
										onClick={this.addCardToggle}
									>
										Add New Card
									</button>
									{
										this.state.addCardToggle ?
										<form onSubmit={this.addCard}>
											<div className='row'>
												<div className='col-md-12' style={{ margin: '15px 0px 0px' }}>
													<input
														type='text'
														className='form-control'
														placeholder='Card Number'
														name='cardNumber'
														value={cardNumber}
														minLength='16'
														maxLength='16'
														onChange={this.onChangeHandler}
														required
													/>
												</div>
												<div
													className='col-md-6'
													style={{ margin: '15px 0px', paddingRight: '0px' }}
												>
													<input
														type='text'
														className='form-control'
														placeholder='Expire Date'
														name='expiryDate'
														value={expiryDate}
														required
														onChange={this.onChangeHandler}
													/>
												</div>
												<div className='col-md-6' style={{ margin: '15px 0px' }}>
													<input
														type='text'
														className='form-control'
														placeholder='CVV'
														name='cvv'
														value={cvv}
														required
														onChange={this.onChangeHandler}
													/>
												</div>
												<div className="col-md-12" style={{textAlign:'center' , marginBottom:'10px'}} >
													<button className="btn btn-primary" onClick={this.addCard} >
														Add New Card
													</button>
												</div>
											</div>
										</form>
										: ""
									}
								</div>
							</div>
							</div>
						</div>
						<div>
							<button
								className='pxp-agent-contact-modal-btn'
								onClick={this.onSubmit}
							>
								Submit
							</button>
						</div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		errors: state.errors,
		page: state.page,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onMarkCreditCardDefault: (data) =>
			dispatch(actions.markCreditCardDefault(data)),
		onChargeCustomerUsingCreditCard: (data) =>
			dispatch(actions.chargeCustomerUsingCreditCard(data)),
		onchargeCustomerForPropertyUsingCreditCard: (data) =>
			dispatch(actions.chargeCustomerForPropertyUsingCreditCard(data)),
		onCreateCardToken: (data) => dispatch(actions.createCreditCardToken(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(form4);