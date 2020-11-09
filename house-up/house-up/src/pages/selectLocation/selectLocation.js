import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';
import cloneDeep from 'lodash/cloneDeep';

class selectLocation extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      loading : false,
      country:'',
      state:'',
      city:'',
      countries: [],
      states: [],
      cities: [],
      user:{},
      currentLocation: {}
    };
}
static getDerivedStateFromProps(props, state) {
  const errors = props.errors;
  const page = props.page;
  const auth = props.auth;

  console.log('checking page data ',page)
  let stateChanged = false;
  let changedState = {};

  if( page && page.countries && JSON.stringify(state.countries) !== JSON.stringify(page.countries) ){
      changedState.countries = page.countries;  
      stateChanged = true;
      let states = [];
      states = cloneDeep(changedState.countries[0]);
      changedState.states = states.states;
  }

  if( page && page.currentLocation && JSON.stringify(state.currentLocation) !== JSON.stringify(page.currentLocation) ){
    changedState.currentLocation = page.currentLocation;  
    stateChanged = true;
    let currentLocation = [];
    currentLocation = cloneDeep(changedState.currentLocation);
    changedState.currentLocation = currentLocation;
}

  if(auth && JSON.stringify(state.user) !== JSON.stringify(auth.user)){
    changedState.user = auth.user;  
    stateChanged = true;
  }

  


  if(errors && JSON.stringify(state.errors) !== JSON.stringify(errors)){
      changedState.errors = errors;
      stateChanged = true;
    }
    
  if(page && JSON.stringify(state.loading) !== JSON.stringify(page.loading)){
      changedState.loading = page.loading;
      stateChanged = true;            
  }
  
  if(stateChanged){
    return changedState;
  }
  return null;
}



  componentDidMount(){
    this.props.onGetCountries();
}



onChange = e => {

if(e.target.name === 'country'){
  let index = 0;
  let states = [];
  if(e.target.value !== "" ){
      index =  this.state.countries && this.state.countries.findIndex( x => `${x.name}` === e.target.value );
      states = cloneDeep(this.state.countries[index]);
  }
  this.setState({ 
      [e.target.name]: e.target.value,
      states: states.states
  });
}
  else if(e.target.name === 'state'){
  let ind = 0;
  let cities = [];
  if(e.target.value !== "" ){
      ind =  this.state.states && this.state.states.findIndex( x => `${x.name}` === e.target.value );
      cities = cloneDeep(this.state.states[ind]);
  }
  this.setState({ 
      [e.target.name]: e.target.value,
      cities: cities.cities
  });
}
else{
  this.setState({[e.target.name]: e.target.value});
}
}

onSubmit = e => {
  e.preventDefault();    
  // console.log('checking click handler');
  const { city , state, country, user } = this.state;

      if(user && user.userId){
        const userData = {
          country: country,
          city: city,
           province: state
         };
         console.log('checking data in onsubmit ', userData);
         this.props.onUpdateCurrentLocaiton(userData);
         this.props.history.push(`/index-${country}&${state}&${city}`);
        }
        else{
         console.log('i am into else');
          this.props.history.goBack();
      }
   }


    render() { 
      const { states , cities , city , state , countries , country , user} = this.state;

      console.log('checking the value of state : ', user)

        return ( 
            <React.Fragment>
                <div className="pxp-hero vh-100">
                  <div className="pxp-hero-bg pxp-cover pxp-cover-bottom" style={{backgroundColor:'#D4F4FF'}}/>
                  <div className="pxp-hero-opacity-select-location" />
                  <div className="pxp-hero-caption">
                    <div className="container">
                      <img src="assets/images/ic_logo_splash@2x.png" className="select-location-img" alt="logo" />
                      
                      <h3 className="text-black title-select-location">Own the way you sell your home</h3>
                      <form className="pxp-hero-search mt-4" onSubmit={this.onSubmit}  action="">
                        <div className="row">
                          <div className="col-sm-12 col-md-3">
                            <div className="form-group">
                              <select className="custom-select"
                              placeholder="Country"
                              name="country"
                              value={country}
                              onChange={this.onChange}
                              >
                                <option >Select Country</option>
                                {
                                 countries && countries.length ? countries.map( ( country, idx ) => (
                                     <option key={idx} value={country.name} > { country.name }</option>
                                 ) )
                                 : ""
                             }
                              </select>
                            </div>
                            </div>
                          <div className="col-sm-12 col-md-3">
                            <div className="form-group">
                              <select className="custom-select"
                              placeholder="City"
                              name="state"
                              value={state}
                              onChange={this.onChange}
                              >
                                <option >Select Province</option>
                             {
                                 states && states.length ? states.map( ( province, idx ) => (
                                     <option key={idx} value={province.name} > { province.name }</option>
                                 ) )
                                 : ""
                             }
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-3">
                            <div className="form-group">
                              <select className="custom-select"
                              placeholder="Prov/State"
                              name="city" required
                              value={city}
                              onChange={this.onChange}
                              >
                                <option >Select City</option>
                                    {
                                        cities && cities.length ? cities.map( ( city, idx ) => (
                                            <option key={idx} value={city.name} > { city.name }</option>
                                        ) )
                                        : ""
                                    }     
                              </select>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-2">
                            <button type="submit" className="btn btn-primary"  > FIND NOW</button>
                            </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                
            </React.Fragment>
         );
    }
}
const mapStateToProps = state => {
  return {
    auth: state.auth,
    page: state.page,
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetCountries: () => dispatch(actions.GetCountries()),
      onUpdateCurrentLocaiton: (data) =>  dispatch({type: actionTypes.SET_CURRENT_LOCATION, payload: data})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(selectLocation);