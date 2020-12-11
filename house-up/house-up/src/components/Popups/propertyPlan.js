import React, { Component } from 'react';

import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CardSelection from './cardSelection';

class propertyPlan extends Component {
	constructor() {
		super();
		this.state = {
			clicked: false,
			propertyPlanState: false,
		};
	}
	componentDidMount(){
		this.props.onHideError();
		console.log("clicked")
	}

	clickHandler = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	onSubmit = (e) => {
		this.propertyPlanStateHandler();
	};
	propertyPlanStateHandler = () => {
		this.setState({ propertyPlanState: !this.state.propertyPlanState });
	};

	render() {
		return (
			<Modal
				show={this.props.show}
				aria-labelledby='contained-modal-title-vcenter'
				centered
				dialogClassName='modal-width'
				// onHide={() => this.props.closeCodelHanlder('userSignupModel')}
			>
				<Modal.Header onClick={() => this.props.closeCodelHanlder}>
					Select Plan
				</Modal.Header>

				<Modal.Body>
					<form className='mt-4' onSubmit={this.onSubmit}>
						{/* {errors && errors.message &&
                    <Alert variant='danger'>
                    <strong>Error!</strong> { errors.message }
                    </Alert>
                } */}

						<Link>
							<div
								className='subscription-card'
								style={{ borderBottom: '1px solid #DEE2F2' }}
							>
								<div className='dashboard-newsfeed-content'>
									<Link to='#'>
										<div className='row'>
											<div className='col-md-9'>
												<div class='user '>Lisiting Free</div>
												<div class='user-description'>
													Lisiting property free...
												</div>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</Link>
						<Link>
							<div
								className='subscription-card'
								style={{ borderBottom: '1px solid #DEE2F2' }}
							>
								<div className='dashboard-newsfeed-content'>
									<Link to='#'>
										<div className='row'>
											<div className='col-md-9'>
												<div class='user '>Basic Plan</div>
												<div class='user-description'>
													Pay $10 for 20 days Reach1000 user
												</div>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</Link>
						<Link>
							<div
								className='subscription-card'
								style={{ borderBottom: '1px solid #DEE2F2' }}
							>
								<div className='dashboard-newsfeed-content'>
									<Link to='#'>
										<div className='row' onClick={this.clickHandler}>
											<div className='col-md-9'>
												<div class='user '>StanraD Plan</div>
												<div class='user-description'>
													Pay $25 for 50 days Reach 5000 user
												</div>
											</div>
											<div className='col-md-2'>
												<img
													src={
														this.state.clicked
															? require('../../assets/images/ic_check_sel.svg')
															: require('../../assets/images/ic_check.svg')
													}
													alt=''
												/>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</Link>

						<button className='btn btn-primary card-btn' type='submit'>
							Submit
						</button>
						{this.state.propertyPlanState ? (
							<CardSelection
								show={this.state.propertyPlanState}
								closeCodelHanlder={this.propertyPlanStateHandler}
							/>
						) : (
							''
						)}

						{/* { pageContent } */}
					</form>
				</Modal.Body>
			</Modal>
		);
	}
}

export default propertyPlan;
