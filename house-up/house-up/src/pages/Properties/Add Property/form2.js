import React, { Component } from 'react';
import {Nav} from 'react-bootstrap';

class from2 extends Component {
    constructor(props){
        super(props);
        this.state={
           moreInfo:false,
           propertyType:''
        };
    }
    moreOptionToggle =()=>
    {
        this.setState({moreInfo:!this.state.moreInfo});
    }
    
    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    render() { 
        const { propertyType } = this.state;
      console.log("checking this.state: ", this.state );

        return ( 
            <React.Fragment>

                <div className="add-property-conatiner" style={{backgroundColor:'#F5F5F5'}}>
                <div className="row border-property">
                    <div className="col-md-12">
                        <h1 className="titles-property">List your property</h1>
                        <Nav variant="tabs">
                            <Nav.Item>
                                <Nav.Link className="tabs" onClick={() =>this.props.formShowHandler(0)}>Step 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tabs" onClick={() =>this.props.formShowHandler(1)}>Step 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tabs" onClick={() =>this.props.formShowHandler(2)} >Step 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                    <h1 className="titles-property">Property details</h1>
                    <div className="row border-property">
                        <div className="col-md-4">
                            <h6 className="titles-property">Property type</h6>
                            <select name="propertyType" onChange={this.onChange} className="input-feilds-property" value={propertyType}>
                                <option value="house">House</option>
                                <option value="condominium">Condominium</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">Rental listing</h6>
                            <select className="input-feilds-property">
                                <option>Yes</option>
                                <option>No </option>
                            </select>
                        </div>
                    </div>
                    {
                     propertyType === 'house' ?
                      <div className="row border-property">
                        <div className="col-md-4">
                            <h6 className="titles-property">Building type</h6>
                            <select className="input-feilds-property">
                                <option>Detached</option>
                                <option>Semi detached</option>
                                <option>Townhouses</option>
                                <option>Mobile houses</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">Bedrooms</h6>
                            <select className="input-feilds-property">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4+</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">Bathrooms</h6>
                            <select className="input-feilds-property">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4+</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">*Finishes square feet</h6>
                            <input className="input-feilds-property" />
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">Lot dimensions (feet)</h6>
                            <input className="multiply-input"  />
                            <span className="multiply">x</span>
                            <input className="multiply-input" />
                        </div>
                        <div className="col-md-2">
                            <h6 className="titles-property">Lot area</h6>
                            <input className="input-feilds-property"  />
                        </div>
                        <div className="col-md-2">
                           <h6 className="titles-property">* Sqft/Acres</h6>
                           <select className="input-feilds-property" > 
                               <option>sqft</option>
                               <option>acres</option>
                           </select>
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">Year built</h6>
                            <input className="input-feilds-property"  type="number" />
                        </div>
                        <div className="col-md-4">
                           <h6 className="titles-property">Basement</h6>
                           <select className="input-feilds-property" > 
                               <option>None</option>
                               <option>crawl space</option>
                               <option>Unfinished</option>
                               <option>Partially finished</option>
                           </select>
                        </div>
                        <div className="col-md-4">
                           <h6 className="titles-property">Garage</h6>
                           <select className="input-feilds-property" > 
                               <option>None</option>
                               <option>Single</option>
                               <option>Double</option>
                               <option>Triple+</option>
                           </select>
                        </div>
                        <div className="col-md-12"><button className="more-options" onClick={this.moreOptionToggle}>More Options</button></div>
                        {
                            this.state.moreInfo ?
                            <>
                                <div className="col-md-4">
                                <h6 className="titles-property">Primary heating fuel</h6>
                                <select className="input-feilds-property" > 
                                    <option>None</option>
                                    <option>Single</option>
                                    <option>Double</option>
                                    <option>Triple+</option>
                                </select>
                                </div>
                                <div className="col-md-4">
                                    <h6 className="titles-property">Year furnace installed</h6>
                                    <input className="input-feilds-property"  type="number" />
                                </div>
                                <div className="col-md-4">
                                    <h6 className="titles-property">Year roof installed</h6>
                                    <input className="input-feilds-property"  type="number" />
                                </div>
                                <div className="col-md-6">
                                <h6 className="titles-property">Storeys</h6>
                                <select className="input-feilds-property" > 
                                    <option>None</option>
                                    <option>Single</option>
                                    <option>Double</option>
                                    <option>Triple+</option>
                                </select>
                                </div>
                                <div className="col-md-6">
                                <h6 className="titles-property">Water source</h6>
                                <select className="input-feilds-property" > 
                                    <option>None</option>
                                    <option>Single</option>
                                    <option>Double</option>
                                    <option>Triple+</option>
                                </select>
                                </div>
                            </>
                        :null
                        }
                    </div>
                    : propertyType === 'condominium' ?
                    <div className="row border-property">
                        <div className="col-md-4">
                            <h6 className="titles-property">Bedrooms</h6>
                            <select className="input-feilds-property">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4+</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">Bathrooms</h6>
                            <select className="input-feilds-property">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4+</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">*Finishes square feet</h6>
                            <input className="input-feilds-property" />
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">Year built</h6>
                            <input className="input-feilds-property"  type="number" />
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">Parking spaces</h6>
                            <select className="input-feilds-property">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4+</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">Condo fees (/month)</h6>
                            <input className="input-feilds-property"  type="text" />
                        </div>
                      </div>
                      : null
                    }
                    <div>
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
                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="btn-div-prev">
                                <button type="submit" className="btn btn-lg btn-primary btn-property" onClick={() =>this.props.formShowHandler(0)}>Prevsious</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="btn-div">
                                <button type="submit" className="btn btn-lg btn-primary btn-property" onClick={() =>this.props.formShowHandler(2)}>NEXT</button>
                            </div>
                        </div>
                    </div>
               </div>
            </React.Fragment>
         );
    }
}
 
export default from2;