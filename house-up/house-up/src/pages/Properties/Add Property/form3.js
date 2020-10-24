import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {Nav} from 'react-bootstrap';

class form3 extends Component {
    constructor() {
        super();
        this.onDrop = (files) => {
          this.setState({files})
        };
        this.state = {
          files: []
        };
      }

    render() { 
        const files = this.state.files.map(file => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
          ));
        return ( 
            <React.Fragment>
                
                <div className="add-property-conatiner" style={{backgroundColor:'#F5F5F5'}}>
                <div className="row border-property">
                    <div className="col-md-12">
                        <h1 className="titles-property">List your property</h1>
                        <Nav variant="tabs" >
                            <Nav.Item >
                                <Nav.Link className="tabs" onClick={() =>this.props.formShowHandler(0)}>Step 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link className="tabs" onClick={() =>this.props.formShowHandler(1)}>Step 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link className="tabs" onClick={() =>this.props.formShowHandler(2)} >Step 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input type="text" placeholder="Enter an address"  className="input-feilds-address" />
                            <button className="btn btn-primary" style={{marginTop: '-3px'}}>Search</button>
                        </div>
                    </div>
                    <div className="row border-property">
                        <div className="col-md-7">
                            <h6 className="titles-property">Address</h6>
                            <input className="input-feilds-property" type="text" />
                        </div>
                        <div className="col-md-5">
                            <h6 className="titles-property">*City</h6>
                            <input className="input-feilds-property" type="text" />
                        </div>
                        <div className="col-md-3">
                            <h6 className="titles-property">* Province/State</h6>
                            <input className="input-feilds-property" type="text" />
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">*Postal/ZIP code</h6>
                            <input className="input-feilds-property" type="text" />
                        </div>
                        <div className="col-md-5">
                            <h6 className="titles-property">* Country</h6>
                            <input className="input-feilds-property" type="text" />
                        </div>
                    </div>
                    <div className="row border-property">
                        <h1 className="col-md-6 titles-property">Property photos</h1>
                        <div className="col-md-6" style={{textAlign:'right'}}>
                            <label className="btn btn-lg btn-primary" for="pictures" style={{marginTop:'15px'}}>Upload images</label>
                        </div>
                        <h6 className="col-md-12 text-danger titles-property">WARNING: Any images with HouseUp.ca watermarks are a violation of copyright. If these images are uploaded your listing will be removed and your account may be suspended.</h6>
                    <div className="col-12" s>

                        <Dropzone onDrop={this.onDrop} className="drop-zone" > 
                            {({getRootProps, getInputProps}) => (
                            <section className="container drop-zone">
                                <div {...getRootProps({className: 'dropzone , drop-zone-inner'})}>
                                <input type="file" {...getInputProps()} id="pictures"/>
                                <p>Drag 'n' drop some files here, or click to select files</p>
                                </div>
                                <aside>
                                <h4>Files</h4>
                                <ul>{files}</ul>
                                </aside>
                            </section>
                            )}
                        </Dropzone>


                        <h6 className="titles-property">Upload a maximum of 25 photos. Click on a picture to select a cover photo, otherwise the first picture will be used.</h6>
                    </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="btn-div-prev">
                                <button type="submit" class="btn btn-lg btn-primary btn-property" onClick={() =>this.props.formShowHandler(1)}>Prevsious</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="btn-div">
                                <button type="submit" class="btn btn-lg btn-primary btn-property" >Post Property</button>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default form3;