import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'

// importing actions
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


class propertyPlanSubscription extends Component {
		constructor(props) {
		super(props);
		this.state = {
			autoRenew:false,
			packageSelection:false,
			feeId:1,
			feeTypes:[]
		};
	}

	componentDidMount(){
		console.log("pros",this.props.message)
		this.setState({
			feeTypes : this.props.message && this.props.message.dropDownData && this.props.message.dropDownData.propertyPostingFees ? this.props.message.dropDownData.propertyPostingFees : ""
		})
		console.log("clicked 1")
	}

	autoRenewHandler = () =>{
		this.setState({
			autoRenew: !this.state.autoRenew
		})
	}

	onSubmit = (e) =>{
		e.preventDefault();
		const from4Data = {
			propertyFeeId :1,
			packageRenewal:this.state.autoRenew
		}
		const packageId = this.state.feeId
		this.props.modelHanlder('cardSelection', packageId)
		this.props.message.form4DataHandler(from4Data)
	}

	render() {
		const { feeTypes , packageSelection } = this.state;
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
							<div className="property-plan-div">
								<div>
									LISTING FREE
								</div>
								<div className="user-description">
									Listing property free...
								</div>
							</div>
							{
								feeTypes && feeTypes.length ?
								feeTypes.map((data , index)=>
								<div className=" property-plan-div  row" >
									<div key={index} className="col-md-10">
									<div>
										{data.propertyPostingFee === "10" ? "BASIC PLAN" : "STANDARD PLAN"}
									</div>
									<div className="user-description">
										{data.propertyPostingFeeDesc}
									</div>
								</div>
								<div className="col-md-2">
										<img src={require(packageSelection ? '../../assets/images/ic_check_sel.svg' :'../../assets/images/ic_check.svg')} alt="" />
									</div>
								</div>
								)
								: ""
							}
							
							
							<div className="property-plan-div">
								<div style={{float:'left'}} >AUTO RENEW</div>
								<div style={{textAlign:'right'}} onClick={this.autoRenewHandler} >
									<img src={require(this.state.autoRenew ? '../../assets/images/ic_allow_sel.svg' : '../../assets/images/ic_allow.svg') } alt="" />
								</div>
							</div>
							<div>
							<button className='pxp-agent-contact-modal-btn' onClick={this.onSubmit}>Submit</button>
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
	return {
		
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(propertyPlanSubscription);

