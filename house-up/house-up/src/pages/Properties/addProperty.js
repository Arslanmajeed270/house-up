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
        form3Data:{},
        formData:{},
    };
}


form1DataHandler = ( form1Data ) =>{
  this.setState({ form1Data : form1Data});
  console.log('checking form 2 data in add property paren page',form1Data);
}

form2DataHandler = ( form2Data ) => {
  this.setState({ form2Data : form2Data});
  console.log('checking form2 data in add property paren page',form2Data);
}
form3DataHandler = ( form3Data ) => {
  this.setState({ form3Data : form3Data});
  console.log('checking form3 data in add property paren page',form3Data);
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
    const formData = this.state.formData;

    this.state.formData ={
      yearBuilt: form2Data.yearBuilt, 
      balcony:form2Data.balcony, 
      currencyId:form1Data.currencyId, 
      disposal: form2Data.disposal, 
      description: form1Data.description,
      longitude:"-79.497369", 
      finishedSqftArea: form2Data.finishedSqftArea,
      lotDimensionLength:form2Data.lotDimensionLength, 
      noOfBathrooms:form2Data.noOfBathrooms, 
      contactEmail:form1Data.contactEmail, 
      adTitle: form1Data.adTitle, 
      basementId: form2Data.basementId,
      waterSourceID: form2Data.waterSourceID,
      propertyTypeId: form2Data.propertyTypeId,
      lotDimensionWidth: form2Data.lotDimensionWidth, 
      city: form3Data.city,
      storeys: form2Data.storeys, 
      rentalListingYN: form2Data.rentalListingYN,
      yearRoofInstalled:form2Data.yearRoofInstalled,
      cityId: "17150",
      parkingSpaces: form2Data.parkingSpaces, 
      contactNumber:form1Data.contactNumber, 
      ac: form2Data.ac, 
      garageId:form2Data.garageId,
      dishWasher: form2Data.dishWasher,
      garage:form2Data.garage,
      noOfBedrooms: form2Data.noOfBedrooms, 
      playroom:form2Data.playroom,
      bar: form2Data.bar, 
      primaryHeatingFuelId:form2Data.primaryHeatingFuelId, 
      contactName: form1Data.contactName,
      internet:form2Data.internet, 
      buildingTypeId: form2Data.buildingTypeId, 
      latitude:"43.787083", 
      price: form1Data.price, 
      amenites: "",
      channel: "web", 
      userId: "64", 
      lotTotalArea:form2Data.lotTotalArea, 
      address: form3Data.address,
      gym: form2Data.gym, 
      yearFurnaceBuilt: form2Data.yearFurnaceBuilt,
      areaTypeId: form2Data.areaTypeId
    }
    console.log(this.state.formData);

    this.props.onAddProperty(this.state.formData);
}


formShowHandler = (num) =>{
    console.log("checking number: ", num);
    this.setState({
        formShow: num,
        
    });
}





render() { 
    const { dropDownData , form1Data , form2Data , form3Data  } = this.state;
    console.log('checking dropDown Data',dropDownData);
    console.log("checking number in render: ", this.state.formShow);

    


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