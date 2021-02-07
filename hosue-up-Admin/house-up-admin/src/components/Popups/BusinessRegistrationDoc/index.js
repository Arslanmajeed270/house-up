import React, { Component } from 'react'
import { Modal } from 'react-bootstrap';

class index extends Component {
    render() {
        return (
            <Modal
				show={this.props.show}
				aria-labelledby='contained-modal-title-vcenter'
				centered
				size='lg'
				onHide={()=>this.props.closeCodelHanlder('businessRegDoc')}
			>
				<img src={this.props.data} alt="" />
			</Modal>
        )
    }
}
export default index;
