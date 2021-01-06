import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import * as actionTypes from '../../../store/actions/actionTypes';
import { Alert } from 'react-bootstrap';
import Spinner from '../../../components/common/Spinner';
var jwt = require('jsonwebtoken');

class AddCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			loading: false,
			cardNumber: '',
			expiryDate: '',
			cvv: '',
			user: {},
			showPopUp: false,
		};
	}

	static getDerivedStateFromProps(props, state) {
		const errors = props.errors;
		const page = props.page;
		const auth = props.auth ? props.auth : {};
		let stateChanged = false;
		let changedState = {};

		if (
			auth &&
			auth.user &&
			JSON.stringify(state.user) !== JSON.stringify(auth.user)
		) {
			changedState.user = auth.user;
			stateChanged = true;
		}

		if (
			page &&
			JSON.stringify(state.showPopUp) !== JSON.stringify(page.showPopUp)
		) {
			changedState.showPopUp = page.showPopUp;
			if (changedState.showPopUp === true) {
				props.onHidePopUp();
				props.closeCodelHanlder('cardDetails');
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

	onChange = (e) => {
		let targetName = e.target.name;
		let targetValue = e.target.value;
		if (targetName === 'expiryDate') {
			this.setState({
				[targetName]: targetValue.replace(/^(\d{2})(\d{2})/, '$1/$2/'),
			});
		}
		this.setState({ [targetName]: targetValue });
	};

	componentDidMount() {
		this.props.onHideError();
	}

	onSubmit = (e) => {
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
		this.props.onCreateCardToken(data);
	};

	render() {
		const { cardNumber, expiryDate, cvv, errors, loading } = this.state;
		let pageData = '';
		if (loading) {
			pageData = <Spinner />;
		} else {
			pageData = (
				<Modal
					show={this.props.show}
					aria-labelledby='contained-modal-title-vcenter'
					onHide={() => this.props.closeCodelHanlder('cardDetails')}
					centered
				>
					<Modal.Body style={{ paddingTop: '0px', paddingBottom: '15px' }}>
						<form onSubmit={this.onSubmit}>
							{errors && errors.message && (
								<Alert variant='danger' style={{ marginTop: '15px' }}>
									<strong>Error!</strong> {errors.message}
								</Alert>
							)}
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
										onChange={this.onChange}
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
										onChange={this.onChange}
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
										onChange={this.onChange}
									/>
								</div>
							</div>
							<button
								type='submit'
								className='btn btn-primary card-btn'
								style={{ borderRadius: '4px' }}
							>
								SUBMIT
							</button>
						</form>
					</Modal.Body>
				</Modal>
			);
		}
		return <React.Fragment>{pageData}</React.Fragment>;
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		page: state.page,
		errors: state.errors,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onErrorSet: (msg) =>
			dispatch({ type: actionTypes.SET_ERRORS, payload: { message: msg } }),
		onHidePopUp: () => dispatch({ type: actionTypes.HIDE_POP_UP }),
		onCreateCardToken: (data) => dispatch(actions.createCreditCardToken(data)),
		onHideError: () => dispatch({ type: actionTypes.CLEAR_ERRORS }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
