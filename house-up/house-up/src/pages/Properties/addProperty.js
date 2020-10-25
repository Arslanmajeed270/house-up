import React, { Component } from 'react';
import Form1 from './Add Property/form1';
import Form2 from './Add Property/form2';
import Form3 from './Add Property/form3';

class addProperty extends Component {
  constructor(props){
    super(props);
    this.state={
        formShow: 0
    };
}
formShowHandler = (num) =>{
    console.log("checking number: ", num);
    this.setState({
        formShow: num
    });
}
render() { 
    console.log("checking number in render: ", this.state.formShow);
    return ( 
            <React.Fragment>
              
                {this.state.formShow === 0 && 
                <Form1  formShowHandler={(num) => this.formShowHandler(num)} />
                }
                {this.state.formShow === 1 && 
                <Form2 formShowHandler={(num) => this.formShowHandler(num)}/>
                }
                {this.state.formShow === 2 && 
                <Form3 formShowHandler={(num) => this.formShowHandler(num)}/>
                }
            </React.Fragment>
         );
    }
}
export default addProperty;
                {/* <div>
                <div className="pxp-submit-property pxp-content-wrapper mt-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-7">
                        <h1 className="pxp-page-header">Add New Property</h1>
                      </div>
                    </div>
                    <div className="row mt-4 mt-md-5">
                      <div className="col-sm-12 col-lg-8">
                        <h3>Basic Information</h3>
                        <div className="mt-3 mt-md-4">
                          <div className="form-group">
                            <label htmlFor="pxp-submit-property-title">Title</label>
                            <input type="text" className="form-control" id="pxp-submit-property-title" placeholder="Enter property title" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="pxp-submit-property-overview">Overview</label>
                            <textarea className="form-control" id="pxp-submit-property-overview" rows={6} placeholder="Describe the property..." defaultValue={""} />
                          </div>
                        </div>
                        <h3 className="mt-4 mt-md-5">Key Details</h3>
                        <div className="row mt-3 mt-md-4">
                          <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                              <label htmlFor="pxp-submit-property-type">Type</label>
                              <select className="custom-select" id="pxp-submit-property-type">
                                <option value>Select type</option>
                                <option value>Apartment</option>
                                <option value>House</option>
                                <option value>Townhome</option>
                                <option value>Multi-Family</option>
                                <option value>Land</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                              <label htmlFor="pxp-submit-property-status">Status</label>
                              <select className="custom-select" id="pxp-submit-property-status">
                                <option value>Select status</option>
                                <option value>For Rent</option>
                                <option value>For Sale</option>
                                <option value>To Let</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                              <label htmlFor="pxp-submit-property-built">Year Built</label>
                              <input type="text" className="form-control" id="pxp-submit-property-built" />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                              <label htmlFor="pxp-submit-property-stories">Stories</label>
                              <input type="text" className="form-control" id="pxp-submit-property-stories" />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                              <label htmlFor="pxp-submit-property-rooms">Room Count</label>
                              <input type="text" className="form-control" id="pxp-submit-property-rooms" />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                              <label htmlFor="pxp-submit-property-parking">Parking Spaces</label>
                              <input type="text" className="form-control" id="pxp-submit-property-parking" />
                            </div>
                          </div>
                        </div>
                        <h3 className="mt-4 mt-md-5">Amenities</h3>
                        <div className="row mt-3 mt-md-4">
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-wifi" /> Internet</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-car" /> Garage</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-sun-o" /> Air Conditioning</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-bullseye" /> Dishwasher</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-recycle" /> Disposal</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-clone" /> Balcony</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-futbol-o" /> Gym</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-smile-o" /> Playroom</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox" defaultValue={1} /><span className="fa fa-glass" /> Bar</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h3 className="mt-4 mt-md-5">Photo Gallery</h3>
                        <form className="dropzone needsclick mt-3 mt-md-4" id="demo-upload" action="/upload">
                          <div className="dz-message needsclick">
                            Drop files here or click to upload.<br />
                            <span className="note needsclick">This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.</span>
                          </div>
                        </form>
                      </div>
                      <div className="col-sm-12 col-lg-4">
                        <div className="pxp-submit-property-side rounded-lg mt-4 mt-md-5 mt-lg-0">
                          <h3>Main Details</h3>
                          <div className="row mt-3 mt-md-4">
                            <div className="col-sm-12 col-md-6">
                              <div className="form-group">
                                <label htmlFor="pxp-submit-property-price">Price</label>
                                <input type="text" className="form-control" id="pxp-submit-property-price" placeholder="Enter price" />
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <div className="form-group">
                                <label htmlFor="pxp-submit-property-plabel">Price Label</label>
                                <input type="text" className="form-control" id="pxp-submit-property-plabel" placeholder="Enter price label" />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-4">
                              <div className="form-group">
                                <label htmlFor="pxp-submit-property-beds">Beds</label>
                                <input type="text" className="form-control" id="pxp-submit-property-beds" placeholder={0} />
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                              <div className="form-group">
                                <label htmlFor="pxp-submit-property-baths">Baths</label>
                                <input type="text" className="form-control" id="pxp-submit-property-baths" placeholder={0} />
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-4">
                              <div className="form-group">
                                <label htmlFor="pxp-submit-property-size">Size (sq ft)</label>
                                <input type="text" className="form-control" id="pxp-submit-property-size" placeholder={0} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pxp-submit-property-side rounded-lg mt-4 mt-md-5">
                          <h3>Location</h3>
                          <div className="mt-3 mt-md-4">
                            <div className="form-group">
                              <label htmlFor="pxp-submit-property-address">Address</label>
                              <input type="text" className="form-control" id="pxp-submit-property-address" placeholder="Enter address" />
                            </div>
                            <div id="pxp-submit-property-map" />
                          </div>
                        </div> 
                      </div>
                    </div>
                    <div className="mt-4 mt-md-5">
                      <Link to="" className="pxp-submit-property-btn">Submit Property</Link>
                    </div>
                  </div>
                </div>
              </div>
            */}
//             </React.Fragment>
//          );
//     }
// }
 