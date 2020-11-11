import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

// importing actions
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';
import Spinner from '../common/Spinner';

class cardSelection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allCards: [],
			errors: {},
			loading: false,
			showPopUp: false,
		};
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
				});
			}
			stateChanged = true;
		}

		if (
			page &&
			JSON.stringify(state.showPopUp) !== JSON.stringify(page.showPopUp)
		) {
			changedState.showPopUp = page.showPopUp;
			if (changedState.showPopUp === true) {
				console.log('i am here in showpopif');
				props.onHidePopUp();
				props.closeCodelHanlder('congratulationModel');
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

	onChange = (cardId) => {
		console.log('checking cardId: ', cardId);
		this.setState({ cardId: cardId });
		const { user } = this.state;
		const data = {
			cardId: cardId,
			userId: user.userId,
		};
		console.log('checking data: ', data);
		this.props.onMarkCreditCardDefault(data);
	};

	onSubmit = () => {};

	render() {
		const { user, errors, loading, cardId } = this.state;

		console.log('checking this.statee: ', this.state);

		let pageContent = '';
		if (loading) {
			pageContent = <Spinner />;
		}

		return (
			<React.Fragment>
				<Modal
					show={this.props.show}
					aria-labelledby='contained-modal-title-vcenter'
					onHide={() => this.props.closeCodelHanlder('cardSelection')}
					centered
				>
					<Modal.Body style={{ paddingBottom: '15px', paddingTop: '0px' }}>
						{user && user.creditCardList
							? user.creditCardList.map((data, idx) => (
									<div
										key={idx}
										onClick={() => this.onChange(data.cardId && data.cardId)}
									>
										<div
											className='card-selection'
											style={{ borderBottom: '1px solid #DEE2F2' }}
										>
											<div className='dashboard-newsfeed-content'>
												<div>
													<div className='row'>
														<div className='col-md-3 logo-modal'>
															<img
																src={
																	data.brand === 'Visa'
																		? require('../../assets/images/ic_visa.svg')
																		: require('../../assets/images/ic_visa_master_card.svg')
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
																<div class='card '>
																	{' '}
																	{data.brand === 'Visa'
																		? 'VISA'
																		: 'MASTER'}{' '}
																	Card
																</div>
																<div class='card-description'>
																	{' '}
																	**** **** **** {data.last4}{' '}
																</div>
															</div>
															{cardId === data.cardId ? (
																<img
																	src={require('../../assets/images/ic_check_sel.svg')}
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
						{/* <div>
                    <div className="card-selection">
                        <div className="dashboard-newsfeed-content"
                        >
                            <div>
                                <div className="row">
                                    <div className="col-md-3 logo-modal">
                                        <img  src={require("../../assets/images/ic_visa_master_card.svg")} 
                                        alt=""  
                                        style={{width:"46px", height:'14px', marginTop: "20px"}}/>
                                    </div>
                                    <div className="col-md-9 visa-card-selection">
                                        <div>
                                            <div class="card">Master Card</div>
                                            <div class="card-description"> **** **** **** 4545 </div>
                                        </div>
                                        <img src={require('../../assets/images/ic_check_sel.svg')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div> */}
						<div>
							<div>
								<div
									onClick={() => this.props.cardDetailsHandler('cardDetails')}
									className='dashboard-newsfeed-content dashed-button'
								>
									<div>
										<button className='btn btn-lg'> ADD NEW CARD</button>
									</div>
								</div>
							</div>
						</div>
						<button
							onClick={this.onSubmit}
							className='btn btn-primary card-btn'
						>
							SUBMIT
						</button>
					</Modal.Body>
				</Modal>
			</React.Fragment>
		);
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
		onErrorSet: (msg) =>
			dispatch({ type: actionTypes.SET_ERRORS, payload: { message: msg } }),
		onHidePopUp: () => dispatch({ type: actionTypes.HIDE_POP_UP }),
		onMarkCreditCardDefault: (data) =>
			dispatch(actions.markCreditCardDefault(data)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(cardSelection);
