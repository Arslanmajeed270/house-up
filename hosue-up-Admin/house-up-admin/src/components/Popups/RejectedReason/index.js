import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

// importing actions
import { connect } from 'react-redux';
import * as action from '../../../store/actions/index'

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rejectionReason:'',
		};
	}

	componentDidMount ( ) {
        console.log("this.props",this.props.data)
	}
	
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}
	
	onSubmit = (e) =>
	{
        const userData = {
            userId : this.props.data.userId,
			userStateDesc: this.props.data.userStateDesc,
			rejectedReason: this.state.rejectionReason
		};
        console.log(userData);
		
		if(this.props.data.for === 'vendor'){
			console.log('vendor statement');
			
			this.props.data.updateVendor(userData)
		}
		else{
			console.log('user statement');
			this.props.data.updateUser(userData)
		}
	}
  
	render() {
		const {  rejectionReason } = this.state;
		console.log(`checking this.state: `, this.state);
		return (
			<React.Fragment>
				<Modal
					show={this.props.show}
					aria-labelledby='contained-modal-title-vcenter'
					onHide={() => this.props.closeCodelHanlder('rejectedReason')}
					centered
				>
					<Modal.Body>
                        <div>
                            <input type="text" className="form-control" name="rejectionReason" value={rejectionReason} onChange={this.onChange} />
                        </div>
                        <div>
                            <button class="btn btn-primary" type="button" onClick={this.onSubmit}>
                                Confirm
                            </button>
                        </div>
					</Modal.Body>
				</Modal>
			</React.Fragment>
		);
	}
}


export default index;
