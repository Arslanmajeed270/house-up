import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import PropertyPlan from '../../../components/Popups/propertyPlan';

class form3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreInfo: false,
      dropDownData: {},
      yearBuilt: null,
      balcony: false,
      disposal: false,
      finishedSqftArea: null,
      lotDimensionLength: 0,
      noOfBathrooms: null,
      basementId: null,
      waterSourceID: null,
      propertyTypeId: null,
      lotDimensionWidth: 0,
      storeys: null,
      rentalListingYN: '',
      yearRoofInstalled: null,
      parkingSpaces: null,
      ac: false,
      garageId: null,
      dishWasher: false,
      garage: false,
      noOfBedrooms: null,
      playroom: false,
      bar: false,
      primaryHeatingFuelId: null,
      internet: false,
      buildingTypeId: null,
      amenites: '',
      lotTotalArea: 0,
      gym: false,
      yearFurnaceBuilt: null,
      areaTypeId: null,
      propertyType: [],
      parkingSpace: [],
      bedroomCount: [],
      bathroomCount: [],
      basementType: [],
      garageType: [],
      primaryHeatingFuel: [],
      waterSource: [],
      storeysCount: [],
      areaType: [],
      buildingType: [],
      condoFee: '',
    };
  }
  moreOptionToggle = () => {
    this.setState({ moreInfo: !this.state.moreInfo });
  };
  componentDidMount() {
    const dropDownData1 = this.props.dropDownData;
    this.setState({
      propertyType:
        dropDownData1 && dropDownData1.propertyType
          ? dropDownData1.propertyType
          : [],
      parkingSpace:
        dropDownData1 && dropDownData1.parkingSpaces
          ? dropDownData1.parkingSpaces
          : [],
      bedroomCount:
        dropDownData1 && dropDownData1.bedroomCount
          ? dropDownData1.bedroomCount
          : [],
      bathroomCount:
        dropDownData1 && dropDownData1.bathroomCount
          ? dropDownData1.bathroomCount
          : [],
      basementType:
        dropDownData1 && dropDownData1.basementType
          ? dropDownData1.basementType
          : [],
      garageType:
        dropDownData1 && dropDownData1.garageType
          ? dropDownData1.garageType
          : [],
      primaryHeatingFuel:
        dropDownData1 && dropDownData1.primaryHeatingFuel
          ? dropDownData1.primaryHeatingFuel
          : [],
      waterSource:
        dropDownData1 && dropDownData1.waterSource
          ? dropDownData1.waterSource
          : [],
      storeysCount:
        dropDownData1 && dropDownData1.storeysCount
          ? dropDownData1.storeysCount
          : [],
      areaType:
        dropDownData1 && dropDownData1.areaType ? dropDownData1.areaType : [],
      buildingType:
        dropDownData1 && dropDownData1.buildingType
          ? dropDownData1.buildingType
          : [],
    });
    const { form3Data } = this.props;
    this.setState({
      yearBuilt: form3Data.yearBuilt ? form3Data.yearBuilt : null,
      balcony: form3Data.balcony ? form3Data.balcony : false,
      disposal: form3Data.disposal ? form3Data.disposal : false,
      finishedSqftArea: form3Data.finishedSqftArea
        ? form3Data.finishedSqftArea
        : null,
      lotDimensionLength: form3Data.lotDimensionLength
        ? form3Data.lotDimensionLength
        : 0,
      noOfBathrooms: form3Data.noOfBathrooms ? form3Data.noOfBathrooms : null,
      basementId: form3Data.basementId ? form3Data.basementId : null,
      waterSourceID: form3Data.waterSourceID ? form3Data.waterSourceID : null,
      propertyTypeId: form3Data.propertyTypeId
        ? form3Data.propertyTypeId
        : null,
      lotDimensionWidth: form3Data.lotDimensionWidth
        ? form3Data.lotDimensionWidth
        : 0,
      storeys: form3Data.storeys ? form3Data.storeys : null,
      rentalListingYN: form3Data.rentalListingYN
        ? form3Data.rentalListingYN
        : '',
      yearRoofInstalled: form3Data.yearRoofInstalled
        ? form3Data.yearRoofInstalled
        : null,
      parkingSpaces: form3Data.parkingSpaces ? form3Data.parkingSpaces : null,
      ac: form3Data.ac ? form3Data.ac : false,
      garageId: form3Data.garageId ? form3Data.garageId : null,
      dishWasher: form3Data.dishWasher ? form3Data.dishWasher : false,
      garage: form3Data.garage ? form3Data.garage : false,
      noOfBedrooms: form3Data.noOfBedrooms ? form3Data.noOfBedrooms : null,
      playroom: form3Data.playroom ? form3Data.playroom : false,
      bar: form3Data.bar ? form3Data.bar : false,
      primaryHeatingFuelId: form3Data.primaryHeatingFuelId
        ? form3Data.primaryHeatingFuelId
        : null,
      internet: form3Data.internet ? form3Data.internet : false,
      buildingTypeId: form3Data.buildingTypeId
        ? form3Data.buildingTypeId
        : null,
      amenites: form3Data.amenites ? form3Data.amenites : '',
      lotTotalArea: form3Data.lotTotalArea ? form3Data.lotTotalArea : 0,
      gym: form3Data.gym ? form3Data.gym : false,
      yearFurnaceBuilt: form3Data.yearFurnaceBuilt
        ? form3Data.yearFurnaceBuilt
        : null,
      areaTypeId: form3Data.areaTypeId ? form3Data.areaTypeId : null,
      condoFee: form3Data.condoFee ? form3Data.condoFee : '',
    });
  }
  onChange = (e) => {
    const targetName = e.target.name;
    if (e.target.type === 'checkbox') {
      const value = !this.state[targetName];
      this.setState({
        [targetName]: value,
      });
    } else if (
      targetName === 'lotDimensionLength' ||
      targetName === 'lotDimensionWidth'
    ) {
      this.setState({
        [targetName]: e.target.value,
        lotTotalArea:
          targetName === 'lotDimensionLength'
            ? e.target.value * this.state.lotDimensionWidth
            : e.target.value * this.state.lotDimensionLength,
      });
    } else {
      this.setState({
        [targetName]: e.target.value,
      });
    }
  };
  onSubmit = (e) => {
    e.preventDefault();
    const dataform3 = {
      yearBuilt: Number(this.state.yearBuilt),
      balcony: this.state.balcony,
      disposal: this.state.disposal,
      finishedSqftArea: Number(this.state.finishedSqftArea),
      lotDimensionLength: Number(this.state.lotDimensionLength),
      noOfBathrooms: Number(this.state.noOfBathrooms),
      basementId: Number(this.state.basementId),
      waterSourceID: Number(this.state.waterSourceID),
      propertyTypeId: Number(this.state.propertyTypeId),
      lotDimensionWidth: Number(this.state.lotDimensionWidth),
      storeys: Number(this.state.storeys),
      rentalListingYN: this.state.rentalListingYN,
      yearRoofInstalled: Number(this.state.yearRoofInstalled),
      parkingSpaces: Number(this.state.parkingSpaces),
      ac: this.state.ac,
      garageId: Number(this.state.garageId),
      dishWasher: this.state.dishWasher,
      garage: this.state.garage,
      noOfBedrooms: Number(this.state.noOfBedrooms),
      playroom: this.state.playroom,
      bar: this.state.bar,
      primaryHeatingFuelId: Number(this.state.primaryHeatingFuelId),
      internet: this.state.internet,
      buildingTypeId: Number(this.state.buildingTypeId),
      amenites: this.state.amenites,
      lotTotalArea: Number(this.state.lotTotalArea),
      gym: this.state.gym,
      yearFurnaceBuilt: Number(this.state.yearFurnaceBuilt),
      areaTypeId: Number(this.state.areaTypeId),
      condoFee: Number(this.state.condoFee),
    };
    const {
      noOfBathrooms,
      basementId,
      waterSourceID,
      propertyTypeId,
      storeys,
      garageId,
      noOfBedrooms,
      primaryHeatingFuelId,
      buildingTypeId,
      areaTypeId,
      propertyType,
      parkingSpace,
      bedroomCount,
      bathroomCount,
      basementType,
      garageType,
      primaryHeatingFuel,
      waterSource,
      storeysCount,
      areaType,
      buildingType,
    } = this.state;

    if (propertyType && propertyType.length && !propertyTypeId) {
      this.setState({
        propertyTypeId: propertyType[0].id,
      });
    }
    if (parkingSpace && parkingSpace.length && !noOfBedrooms) {
      this.setState({
        noOfBedrooms: parkingSpace[0].id,
      });
    }
    if (bedroomCount && bedroomCount.length && !bedroomCount) {
      this.setState({
        propertyTypeId: bedroomCount[0].id,
      });
    }
    if (bathroomCount && bathroomCount.length && !noOfBathrooms) {
      this.setState({
        noOfBathrooms: bathroomCount[0].id,
      });
    }
    if (basementType && basementType.length && !basementId) {
      this.setState({
        basementId: basementType[0].id,
      });
    }
    if (garageType && garageType.length && !garageId) {
      this.setState({
        garageId: garageType[0].id,
      });
    }
    if (
      primaryHeatingFuel &&
      primaryHeatingFuel.length &&
      !primaryHeatingFuelId
    ) {
      this.setState({
        primaryHeatingFuelId: primaryHeatingFuel[0].id,
      });
    }
    if (waterSource && waterSource.length && !waterSourceID) {
      this.setState({
        waterSourceID: waterSource[0].id,
      });
    }
    if (storeysCount && storeysCount.length && !storeys) {
      this.setState({
        storeys: storeysCount[0].id,
      });
    }
    if (areaType && areaType.length && !areaTypeId) {
      this.setState({
        areaTypeId: areaType[0].id,
      });
    }
    if (buildingType && buildingType.length && !buildingTypeId) {
      this.setState({
        buildingTypeId: buildingType[0].id,
      });
    }
    this.props.form3DataHandler(dataform3);
  };

  render() {
    const {
      yearBuilt,
      disposal,
      finishedSqftArea,
      lotDimensionLength,
      noOfBathrooms,
      basementId,
      waterSourceID,
      propertyTypeId,
      lotDimensionWidth,
      storeys,
      rentalListingYN,
      yearRoofInstalled,
      parkingSpaces,
      ac,
      garageId,
      dishWasher,
      garage,
      noOfBedrooms,
      playroom,
      primaryHeatingFuelId,
      internet,
      buildingTypeId,
      gym,
      yearFurnaceBuilt,
      areaTypeId,
      lotTotalArea,
      propertyType,
      parkingSpace,
      bedroomCount,
      bathroomCount,
      basementType,
      garageType,
      primaryHeatingFuel,
      waterSource,
      storeysCount,
      areaType,
      buildingType,
      condoFee,
    } = this.state;

    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <div
            className="add-property-conatiner"
            style={{ backgroundColor: '#F5F5F5' }}
          >
            <div className="row border-property">
              <div className="col-md-12">
                <h1 className="titles-property">List your property</h1>
                <p className="pairing-industry">
                  Pairing the industry's top technology with unsurpassed local
                  expertise.
                </p>
                <Nav variant="pills" defaultActiveKey="/3">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="/1"
                      className="tabs"
                      onClick={() => this.props.formShowHandler(0)}
                    >
                      Step 1
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="/2"
                      className="tabs"
                      onClick={() => this.props.formShowHandler(1)}
                    >
                      Step 2
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="/3"
                      className="tabs"
                      onClick={() => this.props.formShowHandler(2)}
                    >
                      Step 3
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-10">
                <h6 className="titles-property">*Property type</h6>
                <select
                  className="input-feilds-property"
                  name="propertyTypeId"
                  onChange={this.onChange}
                  value={propertyTypeId}
                  required
                >
                  {propertyType && propertyType.length
                    ? propertyType.map((propertyTypeId, idx) => (
                        <option key={idx} value={propertyTypeId.id}>
                          {' '}
                          {propertyTypeId.value}
                        </option>
                      ))
                    : ''}
                </select>
              </div>
              <div className="col-md-4 mb-10">
                <h6 className="titles-property" required>
                  Rental listing
                </h6>
                <select
                  className="input-feilds-property"
                  name="rentalListingYN"
                  onChange={this.onChange}
                  value={rentalListingYN}
                >
                  <option value="No">No </option>
                </select>
              </div>
            </div>
            {this.state.propertyTypeId === '2' ? (
              <div className="row border-property">
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">Bedrooms</h6>
                  <select
                    className="input-feilds-property"
                    name="noOfBedrooms"
                    onChange={this.onChange}
                    value={noOfBedrooms}
                    required
                  >
                    {bedroomCount && bedroomCount.length
                      ? bedroomCount.map((noOfBedrooms, idx) => (
                          <option key={idx} value={noOfBedrooms.id}>
                            {' '}
                            {noOfBedrooms.value}
                          </option>
                        ))
                      : ''}
                  </select>
                </div>
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">Bathrooms</h6>
                  <select
                    className="input-feilds-property"
                    name="noOfBathrooms"
                    onChange={this.onChange}
                    value={noOfBathrooms}
                    required
                  >
                    {bathroomCount && bathroomCount.length
                      ? bathroomCount.map((noOfBathrooms, idx) => (
                          <option key={idx} value={noOfBathrooms.id}>
                            {' '}
                            {noOfBathrooms.value}
                          </option>
                        ))
                      : ''}
                  </select>
                </div>
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">*Finishes square feet</h6>
                  <input
                    className="input-feilds-property"
                    name="finishedSqftArea"
                    onChange={this.onChange}
                    value={finishedSqftArea}
                    required
                  />
                </div>
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">Year built</h6>
                  <input
                    className="input-feilds-property"
                    name="yearBuilt"
                    onChange={this.onChange}
                    value={yearBuilt}
                    type="number"
                    required
                  />
                </div>
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">Parking spaces</h6>
                  <select
                    className="input-feilds-property"
                    name="parkingSpaces"
                    onChange={this.onChange}
                    value={parkingSpaces}
                    required
                  >
                    {parkingSpace && parkingSpace.length
                      ? parkingSpace.map((parkingSpaces, idx) => (
                          <option key={idx} value={parkingSpaces.value}>
                            {' '}
                            {parkingSpaces.value}
                          </option>
                        ))
                      : ''}
                  </select>
                </div>
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">Condo fees (/month)</h6>
                  <input
                    className="input-feilds-property"
                    name="condoFee"
                    value={condoFee}
                    type="text"
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
            ) : (
              <div className="row border-property">
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">Building type</h6>
                  <select
                    className="input-feilds-property"
                    name="buildingTypeId"
                    onChange={this.onChange}
                    value={buildingTypeId}
                    required
                  >
                    {buildingType && buildingType.length
                      ? buildingType.map((buildingTypeId, idx) => (
                          <option key={idx} value={buildingTypeId.id}>
                            {' '}
                            {buildingTypeId.value}
                          </option>
                        ))
                      : ''}
                  </select>
                </div>
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">Bedrooms</h6>
                  <select
                    className="input-feilds-property"
                    name="noOfBedrooms"
                    onChange={this.onChange}
                    value={noOfBedrooms}
                    required
                  >
                    {bedroomCount && bedroomCount.length
                      ? bedroomCount.map((noOfBedrooms, idx) => (
                          <option key={idx} value={noOfBedrooms.id}>
                            {' '}
                            {noOfBedrooms.value}
                          </option>
                        ))
                      : ''}
                  </select>
                </div>
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">Bathrooms</h6>
                  <select
                    className="input-feilds-property"
                    name="noOfBathrooms"
                    onChange={this.onChange}
                    value={noOfBathrooms}
                    required
                  >
                    {bathroomCount && bathroomCount.length
                      ? bathroomCount.map((noOfBathrooms, idx) => (
                          <option key={idx} value={noOfBathrooms.id}>
                            {' '}
                            {noOfBathrooms.value}
                          </option>
                        ))
                      : ''}
                  </select>
                </div>
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">*Finishes square feet</h6>
                  <input
                    className="input-feilds-property"
                    name="finishedSqftArea"
                    onChange={this.onChange}
                    value={finishedSqftArea}
                    required
                  />
                </div>
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">Lot dimensions (feet)</h6>
                  <input
                    className="multiply-input"
                    name="lotDimensionLength"
                    value={lotDimensionLength}
                    onChange={this.onChange}
                    required
                  />
                  <span className="multiply">x</span>
                  <input
                    className="multiply-input"
                    name="lotDimensionWidth"
                    value={lotDimensionWidth}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-md-2">
                  <h6 className="titles-property">Lot area</h6>
                  <input
                    className="input-feilds-property"
                    name="lotTotalArea"
                    value={
                      lotTotalArea === ''
                        ? this.setState({
                            lotTotalArea:
                              this.state.lotDimensionLength *
                              this.state.lotDimensionWidth,
                          })
                        : lotTotalArea
                    }
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-md-2">
                  <h6 className="titles-property">* Sqft/Acres</h6>
                  <select
                    className="input-feilds-property"
                    name="areaTypeId"
                    value={areaTypeId}
                    onChange={this.onChange}
                    required
                  >
                    {areaType && areaType.length
                      ? areaType.map((areaTypeId, idx) => (
                          <option key={idx} value={areaTypeId.id}>
                            {' '}
                            {areaTypeId.value}
                          </option>
                        ))
                      : ''}
                  </select>
                </div>
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">Year built</h6>
                  <input
                    className="input-feilds-property"
                    type="number"
                    name="yearBuilt"
                    value={yearBuilt}
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">Basement</h6>
                  <select
                    className="input-feilds-property"
                    name="basementId"
                    value={basementId}
                    onChange={this.onChange}
                    required
                  >
                    {basementType && basementType.length
                      ? basementType.map((basementId, idx) => (
                          <option key={idx} value={basementId.id}>
                            {' '}
                            {basementId.value}
                          </option>
                        ))
                      : ''}
                  </select>
                </div>
                <div className="col-md-4 mb-10">
                  <h6 className="titles-property">Garage</h6>
                  <select
                    className="input-feilds-property"
                    name="garageId"
                    value={garageId}
                    onChange={this.onChange}
                    required
                  >
                    {garageType && garageType.length
                      ? garageType.map((garageId, idx) => (
                          <option key={idx} value={garageId.id}>
                            {' '}
                            {garageId.value}
                          </option>
                        ))
                      : ''}
                  </select>
                </div>
                <div className="col-md-12">
                  <Link
                    to="#"
                    className="more-options"
                    onClick={this.moreOptionToggle}
                  >
                    More Options
                  </Link>
                </div>
                {this.state.moreInfo ? (
                  <>
                    <div className="col-md-4 mb-10">
                      <h6 className="titles-property">Primary heating fuel</h6>
                      <select
                        className="input-feilds-property"
                        name="primaryHeatingFuelId"
                        required
                        value={primaryHeatingFuelId}
                        onChange={this.onChange}
                      >
                        {primaryHeatingFuel && primaryHeatingFuel.length
                          ? primaryHeatingFuel.map(
                              (primaryHeatingFuelId, idx) => (
                                <option
                                  key={idx}
                                  value={primaryHeatingFuelId.id}
                                >
                                  {' '}
                                  {primaryHeatingFuelId.value}
                                </option>
                              )
                            )
                          : ''}
                      </select>
                    </div>
                    <div className="col-md-4 mb-10">
                      <h6 className="titles-property">
                        Year furnace installed
                      </h6>
                      <input
                        className="input-feilds-property"
                        type="number"
                        required
                        name="yearFurnaceBuilt"
                        value={yearFurnaceBuilt}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="col-md-4 mb-10">
                      <h6 className="titles-property">Year roof installed</h6>
                      <input
                        className="input-feilds-property"
                        type="number"
                        required
                        name="yearRoofInstalled"
                        value={yearRoofInstalled}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <h6 className="titles-property">Storeys</h6>
                      <select
                        className="input-feilds-property"
                        name="storeys"
                        value={storeys}
                        onChange={this.onChange}
                        required
                      >
                        {storeysCount && storeysCount.length
                          ? storeysCount.map((storeys, idx) => (
                              <option key={idx} value={storeys.id}>
                                {' '}
                                {storeys.value}
                              </option>
                            ))
                          : ''}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <h6 className="titles-property">Water source</h6>
                      <select
                        className="input-feilds-property"
                        name="waterSourceID"
                        value={waterSourceID}
                        onChange={this.onChange}
                        required
                      >
                        {waterSource && waterSource.length
                          ? waterSource.map((waterSourceID, idx) => (
                              <option key={idx} value={waterSourceID.id}>
                                {' '}
                                {waterSourceID.value}
                              </option>
                            ))
                          : ''}
                      </select>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </div>
            )}
            <div>
              <h3
                style={{
                  color: '#000000',
                  fontFamily: 'light',
                  fontSize: '32px',
                }}
              >
                Amenities
              </h3>
              <div className="row mt-3 mt-md-4">
                <div className="col-sm-6 col-md-4 mb-10">
                  <div className="form-group">
                    <div className="checkbox custom-checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="internet"
                          value={internet}
                          onChange={this.onChange}
                        />
                        <span className="fa fa-wifi" /> Internet
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-10">
                  <div className="form-group">
                    <div className="checkbox custom-checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="garage"
                          value={garage}
                          onChange={this.onChange}
                        />
                        <span className="fa fa-car" /> Garage
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-10">
                  <div className="form-group">
                    <div className="checkbox custom-checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="ac"
                          value={ac}
                          onChange={this.onChange}
                        />
                        <span className="fa fa-sun" /> Air Conditioning
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-10">
                  <div className="form-group">
                    <div className="checkbox custom-checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="dishWasher"
                          value={dishWasher}
                          onChange={this.onChange}
                        />
                        <span className="fa fa-bullseye" /> Dishwasher
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-10">
                  <div className="form-group">
                    <div className="checkbox custom-checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="disposal"
                          value={disposal}
                          onChange={this.onChange}
                        />
                        <span className="fa fa-recycle" /> Disposal
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-10">
                  <div className="form-group">
                    <div className="checkbox custom-checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="balcony"
                          onClick={this.onChange}
                        />
                        <span className="fa fa-clone" /> Balcony
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-10">
                  <div className="form-group">
                    <div className="checkbox custom-checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="gym"
                          value={gym}
                          onChange={this.onChange}
                        />
                        <span className="fa fa-futbol" /> Gym
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-10">
                  <div className="form-group">
                    <div className="checkbox custom-checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="playroom"
                          value={playroom}
                          onChange={this.onChange}
                        />
                        <span className="fa fa-smile" /> Playroom
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 mb-10">
                  <div className="form-group">
                    <div className="checkbox custom-checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="bar"
                          onChange={this.onChange}
                        />
                        <span className="fa fa-glass-martini" /> Bar
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-40">
              <div className="col-6">
                <div className="btn-div-prev">
                  <button
                    className="btn btn-lg btn-primary btn-property"
                    onClick={() => this.props.formShowHandler(1)}
                  >
                    Back
                  </button>
                </div>
              </div>
              <div className="col-6">
                <div className="btn-div">
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-property"
                  >
                    Post Property
                  </button>
                </div>
              </div>
              {this.state.propertyPlanState ? (
                <PropertyPlan
                  show={this.state.propertyPlanState}
                  closeCodelHanlder={this.propertyPlanStateHandler}
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default form3;
