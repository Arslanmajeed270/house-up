import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import {Nav} from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';



const AnyReactComponent = ({ text }) => <div>{text}</div>;

class form3 extends Component {
    constructor() {
        super();
        this.onDrop = (files) => {
          this.setState({files})
        };
        this.state = {
          files: [],
            city:'',
            address:'',
            images:[],
            cityId:'',
            longitude:'',
            latitude:''
            

        };
      }

      static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };

      onSubmit = e => {
        e.preventDefault();
        const dataForm3 = {
            city:this.state.city,
            address:this.state.address,
            images:this.state.images,
            longitude:this.state.longitude,
            latitude:this.state.latitude
        }
        console.log(dataForm3);
        this.props.form3DataHandler(dataForm3);
      }

      onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    render() { 
        const{ address , city , images } = this.state;
        const files = this.state.files.map(file => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
          ));
        return ( 
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
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
                            <input type="text" placeholder="Enter an address"  className="input-feilds-address" name="address" onChange={this.onChange}  value={address} />
                            <button className="btn btn-primary" style={{marginTop: '-3px'}}>Search</button>
                        </div>
                        <div className="col-md-12" style={{ height: '300px', width: '100%' }}>
                            <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyDgNUDOEaiSvycDmddKCtls6ZLxJOF_Jmg' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                            </GoogleMapReact>
                        </div>
                    </div>
                    <div className="row border-property">
                        <div className="col-md-7">
                            <h6 className="titles-property">Address</h6>
                            <input className="input-feilds-property" type="text" name="address" value={address} onChange={this.onChange} />
                        </div>
                        <div className="col-md-5">
                            <h6 className="titles-property">*City</h6>
                            <input className="input-feilds-property" name="city" value={city} type="text"  onChange={this.onChange}/>
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
                            <label className="btn btn-lg btn-primary" htmlFor="pictures" style={{marginTop:'15px'}}>Upload images</label>
                        </div>
                        <h6 className="col-md-12 text-danger titles-property">WARNING: Any images with HouseUp.ca watermarks are a violation of copyright. If these images are uploaded your listing will be removed and your account may be suspended.</h6>
                    <div className="col-12">

                        <Dropzone onDrop={this.onDrop} className="drop-zone" > 
                            {({getRootProps, getInputProps}) => (
                            <section className="container drop-zone">
                                <div {...getRootProps({className: 'dropzone , drop-zone-inner'})}>
                                <input type="file" {...getInputProps()} id="pictures" name="images" value={images} />
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
                                <button type="submit" className="btn btn-lg btn-primary btn-property" onClick={() =>this.props.formShowHandler(1)}>Prevsious</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="btn-div">
                                <button type="submit" className="btn btn-lg btn-primary btn-property" >Post Property</button>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </React.Fragment>
         );
    }
}
 
export default form3;