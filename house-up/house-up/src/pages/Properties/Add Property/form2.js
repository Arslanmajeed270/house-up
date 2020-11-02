import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap';

class from2 extends Component {
    constructor(props){
        super(props);
        this.state={
           moreInfo:false,
            dropDownData:{},
            yearBuilt:'',
            balcony:false,
            disposal:false,
            finishedSqftArea:'',
            lotDimensionLength:'',
            noOfBathrooms:'',
            basementId:'',
            waterSourceID:'',
            propertyTypeId:'',
            lotDimensionWidth:'',
            storeys:'',
            rentalListingYN:'',
            yearRoofInstalled:'',
            parkingSpaces:'',
            ac:false,
            garageId:'',
            dishWasher:false,
            garage:false,
            noOfBedrooms:'',
            playroom:false,
            bar:false,
            primaryHeatingFuelId:'',
            internet:false,
            buildingTypeId:'',
            amenites:'',
            lotTotalArea:'',
            gym:false,
            yearFurnaceBuilt:'',
            areaTypeId:''
        };
    }
    moreOptionToggle =()=>
    {
        this.setState({moreInfo:!this.state.moreInfo});
    }
    
    onChange = e => {
      if(e.target.type === "checkbox"){
        const value = !this.state[e.target.name]
        this.setState({
          [e.target.name]: value
        });
      }
      else{
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    }
    onSubmit = e =>{
      e.preventDefault();
        const dataForm2 = {
          yearBuilt:this.state.yearBuilt,
          balcony: `${this.state.balcony}` ,
          disposal:`${this.state.disposal}`,
          finishedSqftArea:this.state.finishedSqftArea,
          lotDimensionLength:this.state.lotDimensionLength,
          noOfBathrooms:this.state.noOfBathrooms,
          basementId:this.state.basementId,
          waterSourceID:this.state.waterSourceID,
          propertyTypeId:this.state.propertyTypeId,
          lotDimensionWidth:this.state.lotDimensionWidth,
          storeys:this.state.storeys,
          rentalListingYN:this.state.rentalListingYN,
          yearRoofInstalled:this.state.yearRoofInstalled,
          parkingSpaces:this.state.parkingSpaces,
          ac:`${this.state.ac}`,
          garageId:this.state.garageId,
          dishWasher:`${this.state.dishWasher}`,
          garage:`${this.state.garage}`,
          noOfBedrooms:this.state.noOfBedrooms,
          playroom:`${this.state.playroom}`,
          bar:`${this.state.bar}`,
          primaryHeatingFuelId:this.state.primaryHeatingFuelId,
          internet:`${this.state.internet}`,
          buildingTypeId:this.state.buildingTypeId,
          amenites:this.state.amenites,
          lotTotalArea:this.state.lotTotalArea,
          gym:`${this.state.gym}`,
          yearFurnaceBuilt:this.state.yearFurnaceBuilt,
          areaTypeId:this.state.areaTypeId
         };
        // console.log('checking form2 Data', dataForm2);
         this.props.form2DataHandler(dataForm2);
         this.props.formShowHandler(2)
    }


    render() { 
        const { yearBuilt, disposal,
          finishedSqftArea, lotDimensionLength ,noOfBathrooms  ,basementId ,
          waterSourceID ,propertyTypeId ,lotDimensionWidth , storeys,rentalListingYN , yearRoofInstalled,
          parkingSpaces,ac , garageId,dishWasher ,garage ,noOfBedrooms , playroom
           ,primaryHeatingFuelId  , internet, buildingTypeId
           ,gym ,yearFurnaceBuilt, areaTypeId , lotTotalArea } = this.state;


        const dropDownData1 = this.props.dropDownData;
       // console.log(dropDownData1);
        const propertyType = dropDownData1 && dropDownData1.propertyType ? dropDownData1.propertyType : [];
        const parkingSpace = dropDownData1 && dropDownData1.parkingSpaces ? dropDownData1.parkingSpaces : [];
        const bedroomCount = dropDownData1 && dropDownData1.bedroomCount ? dropDownData1.bedroomCount : [];
        const bathroomCount = dropDownData1 && dropDownData1.bathroomCount ? dropDownData1.bathroomCount : [];
        const basementType = dropDownData1 && dropDownData1.basementType ? dropDownData1.basementType : [];
        const garageType = dropDownData1 && dropDownData1.garageType ? dropDownData1.garageType : [];
        const primaryHeatingFuel = dropDownData1 && dropDownData1.primaryHeatingFuel ? dropDownData1.primaryHeatingFuel : [];
        const waterSource = dropDownData1 && dropDownData1.waterSource ? dropDownData1.waterSource : [];
        const storeysCount = dropDownData1 && dropDownData1.storeysCount ? dropDownData1.storeysCount : [];
        const areaType = dropDownData1 && dropDownData1.areaType ? dropDownData1.areaType : [];
        const buildingType = dropDownData1 && dropDownData1.buildingType ? dropDownData1.buildingType : [];

     // console.log("checking this.state: ", this.state );

        return ( 
            <React.Fragment >
              <form onSubmit={this.onSubmit}>
                <div className="add-property-conatiner" style={{backgroundColor:'#F5F5F5'}}>
                <div className="row border-property">
                    <div className="col-md-12">
                        <h1 className="titles-property">List your property</h1>
                        <Nav variant="pills"  defaultActiveKey="/2">
                            <Nav.Item>
                                <Nav.Link eventKey="/1" className="tabs" onClick={() =>this.props.formShowHandler(0)}>Step 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/2" className="tabs" onClick={() =>this.props.formShowHandler(1)}>Step 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="/3" className="tabs" onClick={() =>this.props.formShowHandler(2)} >Step 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                    <h1 className="titles-property">Property details</h1>
                    <div className="row border-property">
                        <div className="col-md-4">
                            <h6 className="titles-property">Property type</h6>
                            <select className="input-feilds-property" name="propertyTypeId" onChange={this.onChange}  value={propertyTypeId} required>
                            {
                                propertyType && propertyType.length ? propertyType.map( ( propertyTypeId, idx ) => (
                                    <option key={idx} value={propertyTypeId.id} > { propertyTypeId.value }</option>
                                ) )
                                : ""
                            }
                            </select>
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property" required >Rental listing</h6>
                            <select className="input-feilds-property"  name="rentalListingYN" onChange={this.onChange} value={rentalListingYN}>
                                <option vlaue={'Yes'}>Yes</option>
                                <option value={'No'}>No </option>
                            </select>
                        </div>
                    </div>
                    {
                       this.state.propertyTypeId === '2' ?
                    <div className="row border-property">
                        <div className="col-md-4">
                            <h6 className="titles-property">Bedrooms</h6>
                            <select className="input-feilds-property" name="noOfBedrooms" onChange={this.onChange} value={noOfBedrooms} required>
                            {
                                bedroomCount && bedroomCount.length ? bedroomCount.map( ( noOfBedrooms, idx ) => (
                                    <option key={idx} value={noOfBedrooms.id} > { noOfBedrooms.value }</option>
                                ) )
                                : ""
                            }
                            </select>
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">Bathrooms</h6>
                            <select className="input-feilds-property" name="noOfBathrooms" onChange={this.onChange} value={noOfBathrooms} required>
                              {
                                bathroomCount && bathroomCount.length ? bathroomCount.map( ( noOfBathrooms, idx ) => (
                                    <option key={idx} value={noOfBathrooms.id} > { noOfBathrooms.value }</option>
                                ) )
                                : ""
                              }
                            </select>
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">*Finishes square feet</h6>
                            <input className="input-feilds-property" name="finishedSqftArea" onChange={this.onChange} value={finishedSqftArea} required />
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">Year built</h6>
                            <input className="input-feilds-property" name="yearBuilt" onChange={this.onChange} value={yearBuilt} type="number" required/>
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">Parking spaces</h6>
                            <select className="input-feilds-property" name="parkingSpaces" onChange={this.onChange} value={parkingSpaces} required>
                              {
                                parkingSpace && parkingSpace.length ? parkingSpace.map( ( parkingSpaces, idx ) => (
                                    <option key={idx} value={parkingSpaces.value} > { parkingSpaces.value }</option>
                                ) )
                                : ""
                              }
                            </select>
                        </div>
                        <div className="col-md-4">
                            <h6 className="titles-property">Condo fees (/month)</h6>
                            <input className="input-feilds-property"  type="text"  required/>
                        </div>
                      </div>
                      : 
                      <div className="row border-property">
                      <div className="col-md-4">
                          <h6 className="titles-property">Building type</h6>
                          <select className="input-feilds-property" name="buildingTypeId" onChange={this.onChange} value={buildingTypeId} required>
                            {
                                buildingType && buildingType.length ? buildingType.map( ( buildingTypeId, idx ) => (
                                    <option key={idx} value={buildingTypeId.id} > { buildingTypeId.value }</option>
                                ) )
                                : ""
                            }
                          </select>
                      </div>
                      <div className="col-md-4">
                          <h6 className="titles-property">Bedrooms</h6>
                          <select className="input-feilds-property" name="noOfBedrooms" onChange={this.onChange} value={noOfBedrooms} required>
                          {
                                bedroomCount && bedroomCount.length ? bedroomCount.map( ( noOfBedrooms, idx ) => (
                                    <option key={idx} value={noOfBedrooms.id} > { noOfBedrooms.value }</option>
                                ) )
                                : ""
                            }
                          </select>
                      </div>
                      <div className="col-md-4">
                          <h6 className="titles-property">Bathrooms</h6>
                          <select className="input-feilds-property" name="noOfBathrooms" onChange={this.onChange} value={noOfBathrooms} required>
                          {
                                bathroomCount && bathroomCount.length ? bathroomCount.map( ( noOfBathrooms, idx ) => (
                                    <option key={idx} value={noOfBathrooms.id} > { noOfBathrooms.value }</option>
                                ) )
                                : ""
                            }
                          </select>
                      </div>
                      <div className="col-md-4">
                          <h6 className="titles-property">*Finishes square feet</h6>
                          <input className="input-feilds-property" name="finishedSqftArea" onChange={this.onChange} value={finishedSqftArea} required />
                      </div>
                      <div className="col-md-4">
                          <h6 className="titles-property"   >Lot dimensions (feet)</h6>
                          <input className="multiply-input" name="lotDimensionLength" value={lotDimensionLength} onChange={this.onChange} required/>
                          <span className="multiply">x</span>
                          <input className="multiply-input" name="lotDimensionWidth" value={lotDimensionWidth} onChange={this.onChange} required />
                      </div>
                      <div className="col-md-2">
                          <h6 className="titles-property">Lot area</h6>
                          <input className="input-feilds-property" name="lotTotalArea" value={ lotTotalArea === '' ? this.setState({ lotTotalArea: this.state.lotDimensionLength * this.state.lotDimensionWidth }) : lotTotalArea } onChange={this.onChange} />
                      </div>
                      <div className="col-md-2">
                         <h6 className="titles-property">* Sqft/Acres</h6>
                         <select className="input-feilds-property" name="areaTypeId" value={areaTypeId} onChange={this.onChange} required> 
                             {
                                areaType && areaType.length ? areaType.map( ( areaTypeId, idx ) => (
                                    <option key={idx} value={areaTypeId.id} > { areaTypeId.value }</option>
                                ) )
                                : ""
                            }
                         </select>
                      </div>
                      <div className="col-md-4">
                          <h6 className="titles-property">Year built</h6>
                          <input className="input-feilds-property"  type="number" name="yearBuilt" value={yearBuilt} onChange={this.onChange} required/>
                      </div>
                      <div className="col-md-4">
                         <h6 className="titles-property">Basement</h6>
                         <select className="input-feilds-property" name="basementId" value={basementId} onChange={this.onChange} required> 
                         {
                                basementType && basementType.length ? basementType.map( ( basementId, idx ) => (
                                    <option key={idx} value={basementId.id} > { basementId.value }</option>
                                ) )
                                : ""
                            }
                         </select>
                      </div>
                      <div className="col-md-4">
                         <h6 className="titles-property">Garage</h6>
                         <select className="input-feilds-property" name="garageId" value={garageId} onChange={this.onChange} required> 
                         {
                                garageType && garageType.length ? garageType.map( ( garageId, idx ) => (
                                    <option key={idx} value={garageId.id} > { garageId.value }</option>
                                ) )
                                : ""
                            }
                         </select>
                      </div>
                      <div className="col-md-12"><Link to="#" className="more-options" onClick={this.moreOptionToggle}>More Options</Link></div>
                      {
                          this.state.moreInfo ?
                          <>
                              <div className="col-md-4">
                              <h6 className="titles-property">Primary heating fuel</h6>
                              <select className="input-feilds-property" name="primaryHeatingFuelId" required value={primaryHeatingFuelId} onChange={this.onChange}> 
                              {
                                primaryHeatingFuel && primaryHeatingFuel.length ? primaryHeatingFuel.map( ( primaryHeatingFuelId, idx ) => (
                                    <option key={idx} value={primaryHeatingFuelId.id} > { primaryHeatingFuelId.value }</option>
                                ) )
                                : ""
                            }
                              </select>
                              </div>
                              <div className="col-md-4">
                                  <h6 className="titles-property">Year furnace installed</h6>
                                  <input className="input-feilds-property"  type="number" required name="yearFurnaceBuilt" value={yearFurnaceBuilt}  onChange={this.onChange}/>
                              </div>
                              <div className="col-md-4">
                                  <h6 className="titles-property">Year roof installed</h6>
                                  <input className="input-feilds-property"  type="number" required name="yearRoofInstalled" value={yearRoofInstalled} onChange={this.onChange} />
                              </div>
                              <div className="col-md-6">
                              <h6 className="titles-property">Storeys</h6>
                              <select className="input-feilds-property"  name="storeys" value={storeys} onChange={this.onChange} required>  
                              {
                                storeysCount && storeysCount.length ? storeysCount.map( ( storeys, idx ) => (
                                    <option key={idx} value={storeys.id} > { storeys.value }</option>
                                ) )
                                : ""
                            }
                              </select>
                              </div>
                              <div className="col-md-6">
                              <h6 className="titles-property">Water source</h6>
                              <select className="input-feilds-property" name="waterSourceID" value={waterSourceID} onChange={this.onChange} required> 
                              {
                                waterSource && waterSource.length ? waterSource.map( ( waterSourceID, idx ) => (
                                    <option key={idx} value={waterSourceID.id} > { waterSourceID.value }</option>
                                ) )
                                : ""
                            }
                              </select>
                              </div>
                          </>
                      : ""
                      }
                  </div>
                  
                    }
                    <div>
                        <h3 className="mt-4 mt-md-5">Amenities</h3>
                        <div className="row mt-3 mt-md-4">
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox"name="internet" value={internet} onChange={this.onChange} /><span className="fa fa-wifi" /> Internet</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox"name="garage" value={garage} onChange={this.onChange} /><span className="fa fa-car" /> Garage</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox"name="ac" value={ac} onChange={this.onChange} /><span className="fa fa-sun-o" /> Air Conditioning</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox"name="dishWasher" value={dishWasher} onChange={this.onChange} /><span className="fa fa-bullseye" /> Dishwasher</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox"name="disposal" value={disposal} onChange={this.onChange} /><span className="fa fa-recycle" /> Disposal</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label>
                                  <input type="checkbox" name="balcony" onClick={this.onChange} />
                                  <span className="fa fa-clone" /> Balcony</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox"name="gym" value={gym} onChange={this.onChange} /><span className="fa fa-futbol-o" /> Gym</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox"name="playroom" value={playroom} onChange={this.onChange} /><span className="fa fa-smile-o" /> Playroom</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-4">
                            <div className="form-group">
                              <div className="checkbox custom-checkbox">
                                <label><input type="checkbox"  name="bar" onChange={this.onChange} /><span className="fa fa-glass" /> Bar</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="btn-div-prev">
                                <button className="btn btn-lg btn-primary btn-property" onClick={() =>this.props.formShowHandler(0)}>Prevsious</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="btn-div">
                                <button type="submit" className="btn btn-lg btn-primary btn-property">NEXT</button>
                            </div>
                        </div>
                    </div>
               </div>
               </form>
            </React.Fragment>
         );
    }
}
 
export default from2;