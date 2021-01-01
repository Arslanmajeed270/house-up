import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// importing actions
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
class subscriptionPlan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			packageDetails: [],
			message: '',
		};
	}

	static getDerivedStateFromProps(props, state) {
		const page = props.page;
		let stateChanged = false;
		let changedState = {};

		if (
			page &&
			JSON.stringify(state.packageDetails) !==
				JSON.stringify(page.packageDetails)
		) {
			changedState.packageDetails = page.packageDetails;
			stateChanged = true;
		}
		if (stateChanged) {
			return changedState;
		}
		return null;
	}

	componentDidMount() {
		this.setState({ message: this.props.message });
		this.props.onGetPackagePlan();
	}

	render() {
		const { packageDetails, message } = this.state;
		return (
			<React.Fragment>
				<Modal
					show={this.props.show}
					aria-labelledby='contained-modal-title-vcenter'
					onHide={() => this.props.closeCodelHanlder('subscriptionPlan')}
					centered
				>
					<Modal.Body style={{ paddingTop: '0px' }}>
						{
							// message === 'upgradeBoth' &&
							packageDetails && packageDetails.length
								? packageDetails.map((data, index) => (
										<Link key={index}>
											<div
												className='subscription-card'
												style={{ borderBottom: '1px solid #DEE2F2' }}
											>
												<div
													className='dashboard-newsfeed-content'
													onClick={() =>
														this.props.modelHanlder(
															'cardSelection',
															`${data && data.packageId}`
														)
													}
												>
													<Link to='#'>
														<div className='row'>
															<div className='col-4 logo-modal'>
																<img
																	src={data && data.packageIconURL}
																	alt=''
																	style={{ height: '60px' }}
																/>
															</div>
															<div className='col-8'>
																<div className='user '>
																	{data && data.packageName}
																</div>
																<div className='user-description'>
																	{data && data.packageDetail}
																</div>
																{message === 'annual' &&
																data.packageName === 'Monthly' ? (
																	<img
																		src={require('../../assets/images/ic_check_sel.svg')}
																		alt=''
																	/>
																) : message === 'annualAcitve' &&
																  data.packageName === 'Annual' ? (
																	<img
																		src={require('../../assets/images/ic_check_sel.svg')}
																		alt=''
																	/>
																) : (
																	''
																)}
															</div>
														</div>
													</Link>
												</div>
											</div>
										</Link>
								  ))
								: // message === 'annual' && packageDetails && packageDetails.length ? packageDetails.map((data, index) =>
								  // 		data && data.packageName === 'Monthly' ? (
								  // 			' '
								  // 		) : (
								  // 			<div to='#' key={index}>
								  // 				<div
								  // 					className='subscription-card'
								  // 					style={{ borderBottom: '1px solid #DEE2F2' }}
								  // 				>
								  // 					<div
								  // 						className='dashboard-newsfeed-content'
								  // 						onClick={() =>
								  // 							this.props.modelHanlder(
								  // 								'cardSelection',
								  // 								`${data && data.packageId}`
								  // 							)
								  // 						}
								  // 					>
								  // 						<Link to='#'>
								  // 							<div className='row'>
								  // 								<div className='col-4 logo-modal'>
								  // 									<img
								  // 										src={data && data.packageIconURL}
								  // 										alt=''
								  // 										style={{ height: '60px' }}
								  // 									/>
								  // 								</div>
								  // 								<div className='col-8'>
								  // 									<div className='user '>
								  // 										{data && data.packageName}
								  // 									</div>
								  // 									<div className='user-description'>
								  // 										{data && data.packageDetail}
								  // 									</div>
								  // 								</div>
								  // 							</div>
								  // 						</Link>
								  // 					</div>
								  // 				</div>
								  // 			</div>
								  // 		)
								  //   )
								  // :
								  ''
						}
					</Modal.Body>
				</Modal>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		page: state.page,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetPackagePlan: () => dispatch(actions.getPackagePlan()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(subscriptionPlan);
