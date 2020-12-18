import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class stories extends Component {

  constructor(props) {
    super(props);
    this.state = {
      storiesData:[]
    };
  }

  static getDerivedStateFromProps(props, state) {
  
    let propPage = props.propPage;

    let stateChanged = false;
    let changedState = {};

    if(propPage && JSON.stringify(state.storiesData) !== JSON.stringify(propPage.storiesData)){
      changedState.storiesData = propPage.storiesData;  
      stateChanged = true;
    }

    if(stateChanged){
      return changedState;
    }
    return null;
  }

  componentDidMount() {
    const data = {
			state: '',
			channel: 'web',
			lat: 43.787083,
			lng: -79.497369,
			city: '',
			limit: 10,
			offset: 0,
			country: '',
		};
    this.props.onGetStoriesData(data);
  }

  dateHandler = (date) => {
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    return <strong className="h5 mb-0">{date && date.split('-')[2]}<sup className="smaller text-gray font-weight-normal">{months[date && date.split('-')[1]-1]}</sup></strong>;
  }
   
    render() { 
      const { storiesData } = this.state;
      console.log('posts data from backend',storiesData)
        return ( 
            <React.Fragment>
                 <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="row">
                    {storiesData && storiesData.length ? 
                      storiesData.map( (data, index) =>
                          <div key={index} className="col-lg-12 message card px-5 py-3 mb-4">
                            <div className="row">
                              <div className="col-md-9">
                              <Link to={`/single-post-${data && data.postId}`} className="no-anchor-style" >
                                <div className="row">
                                <div className="col-lg-2 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                  {this.dateHandler(data.createdDate)}
                                  <img src={data.postImages && data.postImages[0] && data.postImages[0].imageURL ? data.postImages[0].imageURL : ""} 
                                  alt="Profile" style={{maxWidth: '48px', maxHeight:'48px' , backgroundColor:'#008CF8'}} 
                                  className="mx-3 my-2 my-lg-0" />
                                  {/* <h6 className="mb-0">{data.adTitle}</h6> */}
                              </div>
                              <div className="col-lg-10 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                <h6 className="mb-0">{data.postText}</h6>
                              </div>
                              </div>
                              </Link>
                              </div>
                              <div className="col-lg-3 d-flex align-items-center flex-column flex-lg-row text-center text-md-left">
                                <div className="row">
                                  {
                                    data.postStatusDesc === "In Review" ?
                                    <>
                                      <div className="col-md-6">
                                      <button className="btn btn-success status-btn" 
                                        onClick={()=>this.updatePropertyState("Approved" , data.postId)}>
                                          APPROVE
                                      </button>
                                      </div>
                                      <div className="col-md-6">
                                        <button className="btn btn-danger status-btn" 
                                          onClick={()=>this.updatePropertyState("Rejected" , data.postId)}>
                                            REJECT
                                        </button>
                                      </div>
                                    </>
                                    :
                                    <>
                                      <div className="col-md-6" />
                                      <div className="col-md-6">
                                        <button 
                                          className={`btn  ${data.postStatusDesc === "Approved" || data.postStatusDesc === "Active" ? "btn-success" : "btn-danger"} status-btn`}
                                        >
                                          {data.postStatusDesc === "Approved" || data.postStatusDesc === "Active" ? "APPROVED" : "REJECTED"}
                                        </button>
                                      </div>
                                    </>
                                  }
                                </div>
                              </div>
                           </div>
                          </div> 
                        )
                        : ''
                    }            
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
    propPage: state.propPage
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetStoriesData: (data) => dispatch(actions.getStoriesData(data)),
    onUpdatePropertyState : (userData)=> dispatch(actions.updatePropertyState(userData))
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(stories);