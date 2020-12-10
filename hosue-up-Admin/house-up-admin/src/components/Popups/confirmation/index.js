import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

// importing actions
import { connect } from 'react-redux';
import * as action from '../../../store/actions/index'

class index extends Component {

	componentDidMount ( ) {
        console.log("this.props",this.props.data)
	}
	
	onSubmit = () =>
	{
        const userData = {
            userId : this.props.data.userId,
            userStateDesc: this.props.data.userStateDesc
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
		return (
			<React.Fragment>
				<Modal
					show={this.props.show}
					aria-labelledby='contained-modal-title-vcenter'
					onHide={() => this.props.closeCodelHanlder('confirmation')}
					centered
				>
					<Modal.Body>
                        <div>
                            Are you Sure You want to keep this action ?
                        </div>
                        <div>
                            <button class="btn btn-primary" type="button" onClick={this.onSubmit}>
                                yes
                            </button>
                            <button class="btn btn-primary" type="button" onClick={() => this.props.closeCodelHanlder('confirmation')}>
                                No
                            </button>
                        </div>
					</Modal.Body>
				</Modal>
			</React.Fragment>
		);
	}
}


export default index;
