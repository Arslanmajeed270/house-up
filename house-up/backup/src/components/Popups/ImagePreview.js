import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import { Modal } from 'react-bootstrap';

import 'react-image-gallery/styles/css/image-gallery.css';

class imagePreview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			propertyImg: [],
		};
	}

	componentDidMount() {
		this.setState({
			propertyImg: this.props.propertyImg,
		});
	}

	render() {
		const { propertyImg } = this.state;

		const propertyImages = [];

		if (propertyImg && propertyImg.length) {
			for (let i = 0; i < propertyImg.length; i++) {
				let item = {
					original: propertyImg[i].imageURL,
				};
				propertyImages.push(item);
			}
		}

		return (
			<Modal
				show={this.props.show}
				aria-labelledby='contained-modal-title-vcenter'
				centered
				dialogClassName='modal-90w'
				size='lg'
				onHide={() => this.props.close()}
			>
				<ImageGallery
					items={propertyImages}
					showThumbnails={false}
					showPlayButton={false}
				/>
			</Modal>
		);
	}
}

export default imagePreview;
