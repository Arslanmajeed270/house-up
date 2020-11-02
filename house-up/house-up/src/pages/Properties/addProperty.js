import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Form1 from './Add Property/form1';
import Form2 from './Add Property/form2';
import Form3 from './Add Property/form3';

class addProperty extends Component {
  constructor(props){
    super(props);
    this.state={
        formShow: 0,
        dropDownData:{},
        form1Data:{},
        form2Data:{},
        form3Data:{}
    };
}

form1DataHandler = ( form1Data ) =>{
  // console.log('checking form 2 data in add property paren page',form1Data);
  this.setState({ form1Data : form1Data});
}

form2DataHandler = ( form2Data ) => {
  // console.log('checking form2 data in add property paren page',form2Data);
  this.setState({ form2Data : form2Data});
}
form3DataHandler = ( form3Data ) => {
  // console.log('checking form3 data in add property paren page',form3Data);
  this.setState({ form3Data : form3Data});
  this.addProperty();
}



static getDerivedStateFromProps(props, state) {

    const errors = props.errors;
    const property = props.property;

    let stateChanged = false;
    let changedState = {};


    if(property && JSON.stringify(state.dropDownData) !== JSON.stringify(property.dropDownData)){
      changedState.dropDownData = property.dropDownData;  
      stateChanged = true;
    }

    if(errors && JSON.stringify(state.errors) !== JSON.stringify(errors)){
      changedState.errors= errors;
      stateChanged = true;
    }

    if(stateChanged){
      return changedState;
    }
    return null;

  }

componentDidMount () {
    this.props.onDropDwonMenu();   
}

addProperty = () =>{
  const form1Data = this.state.form1Data;
    const form2Data = this.state.form2Data;
    const form3Data = this.state.form3Data;

    const formData = {
      yearBuilt: form2Data.yearBuilt ? form2Data.yearBuilt : "0", 
      balcony: form2Data.balcony ? `${form2Data.balcony}` : "false", 
      currencyId:form1Data.currencyId ? form1Data.currencyId : "", 
      disposal: form2Data.disposal ? `${form2Data.disposal}` : "false", 
      description: form1Data.description ? form1Data.description : "",
      longitude:"", 
      finishedSqftArea: form2Data.finishedSqftArea ? `${form2Data.finishedSqftArea}` : "0",
      lotDimensionLength: form2Data.lotDimensionLength ? `${form2Data.lotDimensionLength}` : "0", 
      noOfBathrooms: form2Data.noOfBathrooms ? `${form2Data.noOfBathrooms}` : "0", 
      contactEmail:form1Data.contactEmail ? form1Data.contactEmail : "", 
      adTitle: form1Data.adTitle ? form1Data.adTitle : "", 
      basementId: form2Data.basementId ? `${form2Data.basementId}` :"0",
      waterSourceID: form2Data.waterSourceID ? `${form2Data.waterSourceID}` : "0",
      propertyTypeId: form2Data.propertyTypeId ? `${form2Data.propertyTypeId}` : "0",
      lotDimensionWidth: form2Data.lotDimensionWidth ? `${form2Data.lotDimensionWidth}` : "0", 
      city: form3Data.city ? form3Data.city : "" ,
      storeys: form2Data.storeys ? `${form2Data.storeys}` :"0", 
      rentalListingYN: form2Data.rentalListingYN ? form2Data.rentalListingYN : "",
      yearRoofInstalled: form2Data.yearRoofInstalled ? `${form2Data.yearRoofInstalled}` : "0",
      cityId: "17150",
      parkingSpaces: form2Data.parkingSpaces ? `${form2Data.parkingSpaces}` : "0", 
      contactNumber:form1Data.contactNumber ? form1Data.contactNumber : "", 
      ac: form2Data.ac ? `${form2Data.ac}` : "false", 
      garageId:form2Data.garageId ? `${form2Data.garageId}` : "0",
      dishWasher: form2Data.dishWasher ? `${form2Data.dishWasher}`: "false" ,
      garage: form2Data.garage ? `${form2Data.garage}` : "false",
      noOfBedrooms: form2Data.noOfBedrooms ? `${form2Data.noOfBedrooms}` : "0",  
      playroom: form2Data.playroom ? `${form2Data.playroom}` : "false",
      bar: form2Data.bar ? `${form2Data.bar}` : "false", 
      primaryHeatingFuelId: form2Data.primaryHeatingFuelId ? `${form2Data.primaryHeatingFuelId}` : "0", 
      contactName: form1Data.contactName ? form1Data.contactName : "",
      internet: form2Data.internet ? `${form2Data.internet}` : "false", 
      buildingTypeId: form2Data.buildingTypeId ? `${form2Data.buildingTypeId}` : "0" , 
      latitude:"", 
      price: form1Data.price ? form1Data.price : "", 
      amenites: "",
      channel: "web", 
      userId: "64", 
      lotTotalArea: form2Data.lotTotalArea ? `${form2Data.lotTotalArea}` : "0", 
      address: form3Data.address ? form3Data.address : "",
      gym: form2Data.gym ? `${form2Data.gym}` : "false", 
      yearFurnaceBuilt: form2Data.yearFurnaceBuilt ? `${form2Data.yearFurnaceBuilt}` : "0",
      areaTypeId: form2Data.areaTypeId ? `${form2Data.areaTypeId}` : "0",
      images : form3Data.images ? form3Data.images : ""
    } 
    // console.log("checking formData: ",formData);

    this.props.onAddProperty(formData);
}


formShowHandler = (num) =>{
    // console.log("checking number: ", num);
    this.setState({
        formShow: num,
        
    });
}
render() { 
    const { dropDownData  } = this.state;
    // console.log('checking dropDown Data',dropDownData);
    // console.log("checking number in render: ", this.state.formShow);

    return ( 
            <React.Fragment>
                { this.state.formShow === 0 && 
                <Form1  
                  dropDownData = {dropDownData}
                  formShowHandler={(num) => this.formShowHandler(num)}
                  form1DataHandler={this.form1DataHandler} 
                />
                }
                { this.state.formShow === 1 && 
                <Form2 
                  dropDownData = {dropDownData}
                  formShowHandler={(num) => this.formShowHandler(num)}
                  form2DataHandler={this.form2DataHandler}
                />
                }
                {this.state.formShow === 2 && 
                <Form3 
                  dropDownData = {dropDownData}
                  formShowHandler={(num) => this.formShowHandler(num)}
                  form3DataHandler={this.form3DataHandler}
                  postCLicked={this.state.postCLicked}
                />
                }
            </React.Fragment>
         );
    }
}
const mapStateToProps = state => {
    return {
        property: state.property,
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onDropDwonMenu: () => dispatch(actions.dropDwonMenu()),
      onAddProperty :(data) => dispatch(actions.addProperty(data))
    }
  };
   
  export default connect(mapStateToProps, mapDispatchToProps)(addProperty);