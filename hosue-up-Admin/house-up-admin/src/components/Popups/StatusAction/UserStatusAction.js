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
	
	updateUserStatus = () =>
	{
		const { userId , userStateDesc } = this.state
	  const userData = {
		  userId,
		  userStateDesc,
		  updateUser: this.props.onUpdateUserStatus,
		  for:'user'
	  };
	  console.log(userData);
	  if(userStateDesc === "Active"){
		this.props.modelHanlder('confirmation', userData)
	  }
	  else {
		this.props.modelHanlder('rejectedReason',userData)
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
					onHide={() => this.props.closeCodelHanlder('userStatus')}
					centered
				>
					<Modal.Body>
						<div>
							<h1>Select Plan</h1>
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
									Inactive
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
								onClick={this.updateUserStatus}
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
		onUpdateUserStatus: (userData) =>
			dispatch(action.updateUserState(userData)),
	}
};

export default connect(
	null,
	mapDispatchToProps
)(UserStatusAction);
