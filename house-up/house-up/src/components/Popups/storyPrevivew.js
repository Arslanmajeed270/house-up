import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Modal } from 'react-bootstrap';


import "react-image-gallery/styles/css/image-gallery.css";

class imagePreview extends Component {

    constructor(props) {
        super(props);
        this.state = {
          storys:[]
        };
      }

      componentDidMount () {
          this.setState({
              storys : this.props.storys
          })
      }
    
    render() { 
        const { storys } = this.state;
        console.log('states in image preview', storys);
        
        const storysImages=[];

        if(storys && storys.length){
            for(let i=0; i< storys.length ; i++){
              let item = ( 
                  {
                    original: storys[i].imageURL,
                  }
               );
               storysImages.push(item);
            }
        }
        
        return ( 
            <Modal 
                show={this.props.show}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName="modal-90w"
                    size="lg"
                onHide={() => this.props.close()}
            >
                {/* <ImageGallery items={storysImages} 
                    showThumbnails={false}
                    showPlayButton={false}
                    showNav={false}
                />; */}
            </Modal> 
         
         );
    }
}
 

  export default imagePreview;