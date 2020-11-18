import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class congrationPopup extends Component {
	state = {};
	render() {
		return (
			<Modal
				show={this.props.show}
				aria-labelledby='contained-modal-title-vcenter'
				centered
				// size="md"
				dialogClassName='modal-width'
				onHide={() => this.props.closeCodelHanlder('congratulationModel')}
			>
				<Modal.Body onClick={this.props.congratulationPopupHandler}>
					<div className='form-group'>
						<div
							class='text-center'
							style={{
								fontSize: '21px',
								color: '#00B0E9',
								fontWeight: '500',
								paddingTop: '12px',
								paddingBottom: '0px',
							}}
						>
							CONGRATULATIONS!
						</div>
					</div>
					{
						this.props.message ?
					<div className='form-group'>
						<div
							class='text-center'
							style={{ fontSize: '18px', color: '#000000' }}
						>
							{this.props.message}
						</div>
						</div>
						:
					<div className='form-group'>
						<div
							class='text-center'
							style={{ fontSize: '18px', color: '#000000' }}
						>
							Your account has been{' '}
						</div>
						<div
							class='text-center'
							style={{ fontSize: '18px', color: '#000000' }}
						>
							{' '}
							successfully created.
						</div>
					</div>
					
					}
					<div className='form-group'>
						<button
							style={{ fontSize: '16px' }}
							className='pxp-agent-contact-modal-btn'
							type='submit'
							onClick={() =>
								this.props.closeCodelHanlder('congratulationModel')
							}
						>
							THANKS
						</button>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}

export default congrationPopup;
