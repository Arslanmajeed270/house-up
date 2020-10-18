import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
class user extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: []
    };
  }
  static getDerivedStateFromProps(props, state) {
  
    let userPage = props.userPage;

    let stateChanged = false;
    let changedState = {};

    if(userPage && JSON.stringify(state.usersData) !== JSON.stringify(userPage.usersData)){
      changedState.usersData = userPage.usersData;  
      stateChanged = true;
    }

    if(stateChanged){
      return changedState;
    }
    return null;

  }

  componentDidMount() {
    this.props.onGetUsersData();
  }

  dateHandler = (date) => {
    return <strong className="h5 mb-0">{date.split('/')[0]}<sup className="smaller text-gray font-weight-normal">{date.split('/')[1]}</sup></strong>;
  }

    render() { 
      const { usersData } = this.state;

        return ( 
            <React.Fragment>
                <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="row">
                    {usersData && usersData.length ? 
                      usersData.map( (data, index) =>
                      <div key={index} className="col-lg-12">
                        <Link to={`/single-User-${data && data.userId && data.userId}`} className="message card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
                          <div className="row">
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              {this.dateHandler(data.createDate)}
                              <img src={data.profilePictureUrl ? data.profilePictureUrl : "assets/img/demo.png"} alt="..." style={{maxWidth: '3rem' , maxHeight:'3rem' , backgroundColor:'#008CF8'}} className="rounded-circle mx-3 my-2 my-lg-0" />
                                <h6 className="mb-0">{data.firstName} {data.lastName}</h6>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <h6 className="mb-0">{data.emailAddress}</h6>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <h6 className="mb-0">@{data.userName}</h6>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <h6 className="mb-0">{data.msisdn}</h6>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">{data.userStatusDesc}</div>
                            </div>                                       
                          </div></Link></div>
                      ) 
                      : ''
                    }            

                      {/* <div className="col-lg-12"><Link to="single-user" className="message card px-5 py-3 mb-4 bg-hover-gradient-primary no-anchor-style">
                          <div className="row">
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left"><strong className="h5 mb-0">14<sup className="smaller text-gray font-weight-normal">Aug</sup></strong><img src={"assets/img/avatar-2.jpg"} alt="..." style={{maxWidth: '3rem'}} className="rounded-circle mx-3 my-2 my-lg-0" />
                              <h6 className="mb-0">Ryan Gosling</h6>
                            </div>
                            <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <h6 className="mb-0">ryangosling@gmail.com</h6>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <h6 className="mb-0">@ryangoslingl</h6>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <h6 className="mb-0">+92 300 8134076</h6>
                            </div>
                            <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                              <div className="bg-gray-100 roundy px-4 py-1 mr-0 mr-lg-3 mt-2 mt-lg-0 text-dark exclode">Active</div>
                            </div>                                       
                          </div></Link></div> */}
                    </div></section>
                </div>
                <footer className="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 text-center text-md-left text-primary">
                        <p className="mb-2 mb-md-0">HouseUp © 2018-2020</p>
                      </div>
                    </div>
                  </div></footer>
              </div>
            </React.Fragment>
         );
    }
}
 

const mapStateToProps = state => {
  return {
    userPage: state.userPage
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetUsersData: () => dispatch(actions.getUsersData())
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(user);