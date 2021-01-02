import React, { Component } from 'react';
import { Overlay , Popover } from 'react-bootstrap';

class sharePopup extends Component {
	constructor(props){
		super(props);
		this.myRef = React.createRef();
	}
	componentDidMount(){
		console.log('in share componenet')
	}
	state = {};
	render() {
		return (
			<Overlay
				show={this.props.show}
				placement="bottom"
				container={this.props.myRef}
				target={this.props.target}
				onHide={() => this.props.closeCodelHanlder('shareModalState')}
				containerPadding={20}
			>
			<Popover id="popover-contained" >
				<Popover.Title as="h3">Popover bottom</Popover.Title>
					<Popover.Content style={{width:'400px'}}>
						<i className="fab fa-facebook-square" style={{fontSize:'40px', marginRight:'10px !important'}}></i>
						<i className="fab fa-twitter-square" style={{fontSize:'40px', marginRight:'10px'}}></i>
						<i className="fab fa-linkedin" style={{fontSize:'40px', marginRight:'10px'}}></i>
						<i className="fab fa-whatsapp" aria-hidden="true" style={{fontSize:'40px', marginRight:'10px'}}></i>
						<i className="fa fa-envelope" style={{fontSize:'40px', marginRight:'10px'}}></i>
						<i className="fab fa-telegram" aria-hidden="true" style={{fontSize:'40px', marginRight:'10px'}}></i>
						<i className="fab fa-instagram" aria-hidden="true" style={{fontSize:'40px', marginRight:'10px'}}></i>
					</Popover.Content>
				</Popover>
			</Overlay>
		);
	}
}

export default sharePopup;
