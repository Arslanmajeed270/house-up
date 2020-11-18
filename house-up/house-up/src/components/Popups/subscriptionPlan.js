import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'

// importing actions
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
class subscriptionPlan extends Component {
		constructor(props) {
		super(props);
		this.state = {
			packageDetails: []
		};
	}


	static getDerivedStateFromProps(props, state) {
		const page = props.page;
		let stateChanged = false;
		let changedState = {};

		if (page &&
			JSON.stringify(state.packageDetails) !== JSON.stringify(page.packageDetails)) {
			changedState.packageDetails = page.packageDetails;
			stateChanged = true;
		}
		if (stateChanged) {
			return changedState;
		}
		return null;
	}


	componentDidMount () {
		this.props.onGetPackagePlan();
	}

	render() {
		const { packageDetails } = this.state;

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
							packageDetails && packageDetails.length ?
							packageDetails.map((data, index) =>
								<Link key={index}>
									<div
										className='subscription-card'
										style={{ borderBottom: '1px solid #DEE2F2' }}
									>
										<div
											className='dashboard-newsfeed-content'
											onClick={() =>
												this.props.modelHanlder('cardSelection' , `${data && data.packageId}`)
											}
										>
											<Link to='#'>
												<div className='row'>
													<div className='col-md-3 logo-modal'>
														<img
															src={data && data.packageIconURL}
															alt=''
															style={{ height: '60px' }}
														/>
													</div>
													<div className='col-md-9'>
														<div class='user '>{data && data.packageName}</div>
														<div class='user-description'>
															{data && data.packageDetail}
														</div>
													</div>
												</div>
											</Link>
										</div>
									</div>
							</Link>
							)
							: ""
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
		
		onGetPackagePlan: () =>
			dispatch(actions.getPackagePlan()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(subscriptionPlan);

