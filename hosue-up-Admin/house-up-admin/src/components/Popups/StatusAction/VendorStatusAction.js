import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

// importing actions
import { connect } from 'react-redux';
import * as action from '../../../store/actions/index'

class UserStatusAction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userStateDesc:'',
			userId:''
		};
	}

	componentDidMount ( ) {
		this.setState({
			userId : this.props.data
		})
	}
	
	updateVendorsStatus = () =>{
        const { userId , userStateDesc } = this.state
	    const userData = {
            userId,
			userStateDesc,
			updateVendor:this.props.onUpdateVendorsStatus,
			for:'vendor'
        };
		console.log(userData);
		if(userStateDesc === "Rejected" || userStateDesc === "Suspended" || userStateDesc === "Inactive")
		{
			this.props.modelHanlder('rejectedReason',userData)
		}
		else{
			console.log("hello")
			this.props.modelHanlder('confirmation', userData)
		}
	}
  
	selectPlan = (id) =>
		this.setState({
			userStateDesc: id,
		});

	render() {
		const {  userStateDesc } = this.state;
		console.log(`checking this.state: `, this.state);
		return (
			<React.Fragment>
				<Modal
					show={this.props.show}
					aria-labelledby='contained-modal-title-vcenter'
					onHide={() => this.props.closeCodelHanlder('vendorStatus')}
					centered
				>
					<Modal.Body>
						<div>
							<h1>Select Plan</h1>
						</div>
						<div
							className=' property-plan-div  row'
							onClick={() => this.selectPlan('In Review')}
						>
							<div  className='col-md-10'>
								<div>
                                In Review
								</div>
							</div>
							<div className='col-md-2'>
								<img
									src={require(userStateDesc === 'In Review'
										? '../../../assets/images/ic_check_sel.svg'
										: '../../../assets/images/ic_check.svg')}
									alt=''
								/>
							</div>
						</div>
						<div
							className=' property-plan-div  row'
							onClick={() => this.selectPlan('Approved')}
						>
							<div  className='col-md-10'>
								<div>
                                Approved
								</div>
							</div>
							<div className='col-md-2'>
								<img
									src={require(userStateDesc === 'Approved'
										? '../../../assets/images/ic_check_sel.svg'
										: '../../../assets/images/ic_check.svg')}
									alt=''
								/>
							</div>
						</div>
						<div
							className=' property-plan-div  row'
							onClick={() => this.selectPlan('Active')}
						>
							<div  className='col-md-10'>
								<div>
                                Active
								</div>
							</div>
							<div className='col-md-2'>
								<img
									src={require(userStateDesc === 'Active'
										? '../../../assets/images/ic_check_sel.svg'
										: '../../../assets/images/ic_check.svg')}
									alt=''
								/>
							</div>
						</div>
						<div
							className=' property-plan-div  row'
							onClick={() => this.selectPlan('Inactive')}
						>
							<div  className='col-md-10'>
								<div>
                                In Active
								</div>
							</div>
							<div className='col-md-2'>
								<img
									src={require(userStateDesc === 'Inactive'
										? '../../../assets/images/ic_check_sel.svg'
										: '../../../assets/images/ic_check.svg')}
									alt=''
								/>
							</div>
						</div>
                        <div
							className=' property-plan-div  row'
							onClick={() => this.selectPlan('Rejected')}
						>
							<div  className='col-md-10'>
								<div>
                                Rejected
								</div>
							</div>
							<div className='col-md-2'>
								<img
									src={require(userStateDesc === 'Rejected'
										? '../../../assets/images/ic_check_sel.svg'
										: '../../../assets/images/ic_check.svg')}
									alt=''
								/>
							</div>
						</div>
                        <div
							className=' property-plan-div  row'
							onClick={() => this.selectPlan('Suspended')}
						>
							<div  className='col-md-10'>
								<div>
									Suspended
								</div>
							</div>
							<div className='col-md-2'>
								<img
									src={require(userStateDesc === 'Suspended'
										? '../../../assets/images/ic_check_sel.svg'
										: '../../../assets/images/ic_check.svg')}
									alt=''
								/>
							</div>
						</div>
						<div>
							<button
								className='pxp-agent-contact-modal-btn'
								onClick={this.updateVendorsStatus}
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

const mapDispatchToProps = (dispatch) => {
	return{
		onUpdateVendorsStatus: (userData, closeCodelHanlder) =>
			dispatch(action.updateVendorsState(userData, closeCodelHanlder)),
	}
};

export default connect(
	null,
	mapDispatchToProps
)(UserStatusAction);
