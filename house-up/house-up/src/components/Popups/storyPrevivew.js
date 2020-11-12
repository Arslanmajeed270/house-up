import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import { Modal } from 'react-bootstrap';

import 'react-image-gallery/styles/css/image-gallery.css';

class imagePreview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			storys: [],

		};
	}

	componentDidMount() {
		this.setState({
			storys: this.props.storys,
		});
		
	}
	render() {
		const { storys , imageIndex } = this.state;
		console.log('states in image preview', storys);

		const storysImages = [];

		if (storys && storys.stories && storys.stories.length) {
			for (let i = 0; i < storys.stories.length; i++) {
				for( let j=0;j<storys.stories[i].storyImages.length; j++){
					let item = {
						original: storys.stories[i].storyImages[j].storyImageURL,
					}
					storysImages.push(item);
				}
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
				<ImageGallery items={storysImages} 
					showThumbnails={false}
					showPlayButton={false}
					autoPlay={true}
					slideInterval={10000}
					showBullets={true}
					infinite={false}
			/>
			</Modal>
		);
	}
}

export default imagePreview;
