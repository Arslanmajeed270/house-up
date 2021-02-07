import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rejectionReason:'',
		};
	}

	componentDidMount ( ) {
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
		
		if(this.props.data.for === 'vendor'){
			this.props.data.updateVendor(userData)
		}
		else{
			this.props.data.updateUser(userData)
		}
	}
  
	render() {
		const {  rejectionReason } = this.state;
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
