import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getDashboardData } from '../../store/actions/index';
import Footer from '../../components/footer';

class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dashboardData: [],
      loading: false
    };
}

  static getDerivedStateFromProps(props, state) {
  
    const { page } = props;
    const { loading, dashboardData } = state;

    let stateChanged = false;
    let changedState = {};


    if( loading !== page.loading ){
      changedState.loading = page.loading;  
      stateChanged = true;
    }

    if(page && JSON.stringify( dashboardData ) !== JSON.stringify(page.dashboardData)){
      changedState.dashboardData = page.dashboardData;  
      stateChanged = true;
    }

    if(stateChanged){
      return changedState;
    }
    return null;

  }

  componentDidMount() {
    const { onGetDashboardData } = this.props;
    onGetDashboardData();
  }


    render() { 
      const { loading, dashboardData } = this.state;
     
        return ( 
            <React.Fragment>
              {
                !loading &&
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
                  <section className="py-5">
                    <div className="row">
                      <div className="col-xl-3 col-lg-6 mb-4 mb-xl-0">
                        <div className="bg-white shadow roundy p-4 h-100 d-flex align-items-center justify-content-between">
                          <div className="flex-grow-1 d-flex align-items-center">
                            <div className="dot mr-3 bg-violet" />
                            <div className="text">
                              <h6 className="mb-0"> {dashboardData && dashboardData.length && dashboardData[4].dashboardCountLabel } </h6><span className="text-gray"> {dashboardData && dashboardData.length && dashboardData[4].dashboardCount } </span>
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
                              <h6 className="mb-0"> {dashboardData && dashboardData.length && dashboardData[5].dashboardCountLabel }</h6><span className="text-gray">{dashboardData && dashboardData.length && dashboardData[5].dashboardCount }</span>
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
                              <h6 className="mb-0">{dashboardData && dashboardData.length && dashboardData[6].dashboardCountLabel }</h6><span className="text-gray">{dashboardData && dashboardData.length && dashboardData[7].dashboardCountUnitLabel} {dashboardData && dashboardData.length && dashboardData[6].dashboardCount }</span>
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
                            <h6 className="mb-0">{dashboardData && dashboardData.length && dashboardData[7].dashboardCountLabel }</h6><span className="text-gray">{dashboardData && dashboardData.length && dashboardData[7].dashboardCountUnitLabel} {dashboardData && dashboardData.length && dashboardData[7].dashboardCount }</span>
                            </div>
                          </div>
                          <div className="icon text-white bg-red"><i className="fas fa-receipt" /></div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <Footer />
              </div>
            }
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
      onGetDashboardData: () => dispatch(getDashboardData())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(index);