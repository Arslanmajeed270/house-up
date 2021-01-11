import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

// importing actions
import { connect } from 'react-redux';

class propertyPlanSubscription extends Component {
	constructor(props) {
		super(props);
		this.state = {
			autoRenew: false,
			packageSelection: false,
			feeId: '',
			feeTypes: [],
		};
	}

	componentDidMount() {
		this.setState({
			feeTypes:
				this.props.dropDownData && this.props.dropDownData.propertyPostingFees
					? this.props.dropDownData.propertyPostingFees
					: '',
		});
	}

	autoRenewHandler = () => {
		this.setState({
			autoRenew: !this.state.autoRenew,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const from4Data = {
			propertyFeeId: this.state.feeId,
			packageRenewal: this.state.autoRenew,
		};
		const data = {
			propertyFeeId: this.state.feeId,
			packageRenewal: this.state.autoRenew,
			form4DataHandler: this.props.message.form4DataHandler,
			for: 'property',
		};
	};
	selectPlan = (id) =>
		this.setState({
			feeId: id,
		});

	render() {
		const { feeTypes, packageSelection, feeId } = this.state;
		return (
			<React.Fragment>
				<Modal
					show={this.props.show}
					aria-labelledby='contained-modal-title-vcenter'
					onHide={() => this.props.closeCodelHanlder('propertyPlanSelection')}
					centered
				>
					<Modal.Body>
						<div>
							<h1>Select Plan</h1>
						</div>
						{feeTypes && feeTypes.length
							? feeTypes.map((data, index) => (
									<div
										className=' property-plan-div  row'
										onClick={() => this.selectPlan(data.propertyPostingFeeId)}
									>
										<div key={index} className='col-md-10'>
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
										<div className='col-md-2'>
											<img
												src={require(feeId === data.propertyPostingFeeId
													? '../../../assets/images/ic_check_sel.svg'
													: '../../../assets/images/ic_check.svg')}
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
						<div>
							<button
								className='pxp-agent-contact-modal-btn'
								onClick={this.onSubmit}
							>
								Submit
							</button>
						</div>
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
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(propertyPlanSubscription);