import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dashboardData: []
    };
}

  static getDerivedStateFromProps(props, state) {
  
    let page = props.page;

    let stateChanged = false;
    let changedState = {};


    if(page && JSON.stringify(state.loading) !== JSON.stringify(page.loading)){
      changedState.loading = page.loading;  
      stateChanged = true;
    }
    if(page && JSON.stringify(state.dashboardData) !== JSON.stringify(page.dashboardData)){
      changedState.dashboardData = page.dashboardData;  
      stateChanged = true;
    }

    if(stateChanged){
      return changedState;
    }
    return null;

  }

componentDidMount() {
  this.props.onGetDashboardData();
}


    render() { 
      const { dashboardData } = this.state;
     
        return ( 
            <React.Fragment>
                <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="row">
                      <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                        <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                          <div className="flex-grow-1 d-flex align-items-center">
                            <div className="dot mr-3 bg-violet" />
                            <div className="text">
                              <h6 className="mb-0"> {dashboardData && dashboardData.length && dashboardData[0].dashboardCountLabel } </h6><span className="text-gray"> {dashboardData && dashboardData.length && dashboardData[0].dashboardCount } </span>
                            </div>
                          </div>
                          <div className="icon text-white bg-violet"><i className="fas fa-user" /></div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                        <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                          <div className="flex-grow-1 d-flex align-items-center">
                            <div className="dot mr-3 bg-green" />
                            <div className="text">
                              <h6 className="mb-0"> {dashboardData && dashboardData.length && dashboardData[1].dashboardCountLabel }</h6><span className="text-gray">{dashboardData && dashboardData.length && dashboardData[1].dashboardCount }</span>
                            </div>
                          </div>
                          <div className="icon text-white bg-green"><i className="fas fa-user-tie" /></div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                        <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                          <div className="flex-grow-1 d-flex align-items-center">
                            <div className="dot mr-3 bg-blue" />
                            <div className="text">
                              <h6 className="mb-0">{dashboardData && dashboardData.length && dashboardData[2].dashboardCountLabel }</h6><span className="text-gray">{dashboardData && dashboardData.length && dashboardData[2].dashboardCount }</span>
                            </div>
                          </div>
                          <div className="icon text-white bg-blue"><i className="fas fa-map-marker-alt" /></div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                        <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                          <div className="flex-grow-1 d-flex align-items-center">
                            <div className="dot mr-3 bg-red" />
                            <div className="text">
                              <h6 className="mb-0">{dashboardData && dashboardData.length && dashboardData[3].dashboardCountLabel }</h6><span className="text-gray">{dashboardData && dashboardData.length && dashboardData[3].dashboardCount }</span>
                            </div>
                          </div>
                          <div className="icon text-white bg-red"><i className="fas fa-receipt" /></div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section>
                    <div className="row mb-4">
                      <div className="col-lg-7 mb-4 mb-lg-0">
                        <div className="card">
                          <div className="card-header">
                            <h2 className="h6 text-uppercase mb-0">Vendor Progress</h2>
                          </div>
                          <div className="card-body">
                            <p className="text-gray">Admin Can See Vendors Daily Progress.</p>
                            <div className="chart-holder">
                              <canvas id="lineChart1" style={{maxHeight: '14rem !important'}} className="w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 mb-4 mb-lg-0 pl-lg-0">
                        <div className="card mb-3">
                          <div className="card-body">
                            <div className="row align-items-center flex-row">
                              <div className="col-lg-5">
                                <h2 className="mb-0 d-flex align-items-center"><span>{dashboardData && dashboardData.length && dashboardData[4].dashboardCount }</span><span className="dot bg-green d-inline-block ml-3" /></h2><span className="text-muted text-uppercase small">{ dashboardData && dashboardData.length && dashboardData[4].dashboardCountLabel }</span>
                                <hr /><small className="text-muted">Lorem ipsum dolor sit</small>
                              </div>
                              <div className="col-lg-7">
                                <canvas id="pieChartHome1" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row align-items-center flex-row">
                              <div className="col-lg-5">
                                <h2 className="mb-0 d-flex align-items-center"><span>{ dashboardData && dashboardData.length && dashboardData[5].dashboardCount }</span><span className="dot bg-violet d-inline-block ml-3" /></h2><span className="text-muted text-uppercase small">{ dashboardData && dashboardData.length && dashboardData[5].dashboardCountLabel }</span>
                                <hr /><small className="text-muted">Lorem ipsum dolor sit</small>
                              </div>
                              <div className="col-lg-7">
                                <canvas id="pieChartHome2" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-5 mb-4 mb-lg-0">
                        <div className="card mb-3">
                          <div className="card-body">
                            <div className="row align-items-center mb-3 flex-row">
                              <div className="col-lg-5">
                                <h2 className="mb-0 d-flex align-items-center"><span>${dashboardData && dashboardData.length && dashboardData[6].dashboardCount }</span><span className="dot bg-violet d-inline-block ml-3" /></h2><span className="text-muted text-uppercase small">{dashboardData && dashboardData.length && dashboardData[6].dashboardCountLabel }</span>
                                <hr /><small className="text-muted">Lorem ipsum dolor sit</small>
                              </div>
                              <div className="col-lg-7">
                                <canvas id="pieChartHome3" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body">
                            <div className="row align-items-center flex-row">
                              <div className="col-lg-5">
                                <h2 className="mb-0 d-flex align-items-center"><span>${dashboardData && dashboardData.length && dashboardData[7].dashboardCount }</span><span className="dot bg-green d-inline-block ml-3" /></h2><span className="text-muted text-uppercase small">{dashboardData && dashboardData.length && dashboardData[7].dashboardCountLabel }</span>
                                <hr /><small className="text-muted">Lorem ipsum dolor sit</small>
                              </div>
                              <div className="col-lg-7">
                                <canvas id="pieChartHome4" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="card">
                          <div className="card-header">
                            <h2 className="h6 text-uppercase mb-0">Total Overdue</h2>
                          </div>
                          <div className="card-body">
                            <p className="text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <div className="chart-holder">
                              <canvas id="lineChart2" style={{maxHeight: '14rem !important'}} className="w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>                 
                  <section className="py-5">
                  </section>
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
    page: state.page
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetDashboardData: () => dispatch(actions.getDashboardData())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(index);