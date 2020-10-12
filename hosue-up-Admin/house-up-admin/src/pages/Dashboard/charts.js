import React, { Component } from 'react';

class charts extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="row mb-4">
                      <div className="col-lg-8 mb-4 mb-lg-0">
                        <div className="card">
                          <div className="card-header">
                            <h2 className="h6 text-uppercase mb-0">Line chart Example</h2>
                          </div>
                          <div className="card-body">
                            <p className="mb-5 text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                            <div className="chart-holder mt-5 mb-5">
                              <canvas id="lineChartExample" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card mb-4">
                          <div className="card-header">
                            <h2 className="h6 text-uppercase mb-0">Line chart Example</h2>
                          </div>
                          <div className="card-body">
                            <div className="chart-holder">
                              <canvas id="lineCahrtsm1" />
                            </div>
                          </div>
                        </div>
                        <div className="card mb-3">
                          <div className="card-header">
                            <h2 className="h6 text-uppercase mb-0">Bar chart Example</h2>
                          </div>
                          <div className="card-body">
                            <div className="chart-holder">
                              <canvas id="barChartExample" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-lg-4">
                        <div className="card mb-4">
                          <div className="card-header">
                            <h2 className="h6 text-uppercase mb-0">Pie chart Example</h2>
                          </div>
                          <div className="card-body">
                            <div className="chart-holder">
                              <canvas id="pieChart1" />
                            </div>
                          </div>
                        </div>
                        <div className="card mb-4">
                          <div className="card-header">
                            <h2 className="h6 text-uppercase mb-0">Pie chart Example</h2>
                          </div>
                          <div className="card-body">
                            <div className="chart-holder">
                              <canvas id="pieChart2" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="card">
                          <div className="card-header">
                            <h2 className="h6 mb-0 text-uppercase">Bar chart Example</h2>
                          </div>
                          <div className="card-body">
                            <p className="mb-5 text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                            <div className="chart-holder mt-5 mb-5">
                              <canvas id="barChartExample1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card mb-4">
                          <div className="card-header">
                            <h2 className="h6 text-uppercase mb-0">Doughnut chart Example</h2>
                          </div>
                          <div className="card-body">
                            <p className="mb-3 text-gray">Lorem ipsum dolor sit amet.</p>
                            <div className="chart-holder">
                              <canvas id="doughnutChartExample" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card mb-4">
                          <div className="card-header">
                            <h2 className="h6 text-uppercase mb-0">Pie chart Example</h2>
                          </div>
                          <div className="card-body">
                            <p className="mb-3 text-gray">Lorem ipsum dolor sit amet.</p>
                            <div className="chart-holder">
                              <canvas id="pieChartExample" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card mb-4">
                          <div className="card-header">
                            <h2 className="h6 text-uppercase mb-0">Polar chart Example</h2>
                          </div>
                          <div className="card-body">
                            <p className="mb-3 text-gray">Lorem ipsum dolor sit amet.</p>
                            <div className="chart-holder">
                              <canvas id="polarChartExample" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="card mb-4">
                          <div className="card-header">
                            <h2 className="h6 text-uppercase mb-0">Radar chart Example</h2>
                          </div>
                          <div className="card-body">
                            <p className="mb-3 text-gray">Lorem ipsum dolor sit amet.</p>
                            <div className="chart-holder">
                              <canvas id="radarChartExample" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
 
export default charts;