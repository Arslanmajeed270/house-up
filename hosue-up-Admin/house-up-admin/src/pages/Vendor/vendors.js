import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Pagination, SplitButton, Dropdown } from 'react-bootstrap';

import { getVendorsData, updateVendorState } from '../../store/actions/index';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';
import moment from 'moment';

class Vendors extends Component {
    
  state = {
    vendorsData: {
      vendors: [],
      totalPages: 0
    },
    currentPage: 1,
    loading: false,
  }

  static getDerivedStateFromProps(props, state) {
  
    const { vendor, page } = props;
    const { loading, vendorsData } = state;

    let stateChanged = false;
    let changedState = {};

    if(vendor && JSON.stringify(vendorsData) !== JSON.stringify(vendor.vendorsData)){
      changedState.vendorsData = vendor.vendorsData; 
      stateChanged = true;
    }

    if( loading !== page.loading ){
      changedState.loading = page.loading;  
      stateChanged = true;
    }

    if(stateChanged){
      return changedState;
    }
    return null;
  }

  componentDidMount() {
    const { onGetVendorsData } = this.props;
    const reqPacket = {
      userTypeId: 2,
      pageNum: 1
    };
    onGetVendorsData(reqPacket);
  }

  dateHandler = (date) => {
    return <strong className="h5 mb-0">{date.split('/')[0]}<sup className="smaller text-gray font-weight-normal">{date.split('/')[1]}</sup></strong>;
  }

  userStatusColorHandler = (status) => {
    if( status === "Suspended" ){
      return "danger";
    }
    else if( status === "Inactive" ){
      return "warning";
    }
    else if( status === "In Review" ){
      return "secondary";
    }
    else if( status === "Approved" ){
      return "info";
    }
    else if( status === "Active" ){
      return "success";
    }
  }

  paginationHandler = ( pageNum ) => {
    const { onGetVendorsData } = this.props;
    const reqPacket = {
      userTypeId: 2,
      pageNum: pageNum
    };
    this.setState({
      currentPage: pageNum
    });
    onGetVendorsData(reqPacket);
  }

  updateVendorState = ( userId, userStatus, currentActive ) =>
  {
    if( currentActive !== userStatus){
      const { onUpdateVendorState } = this.props;
      const reqPacket = {
        userId: userId,
        userStateDesc:userStatus,
        rejectionReason: ""
      };
      onUpdateVendorState(reqPacket);
    }
  }

    render() { 
      const { vendorsData, currentPage, loading } = this.state;
      const totalPages = vendorsData && vendorsData.totalPages ? vendorsData.totalPages : 0 ;
      console.log('checking this.state: ', this.state);
        return ( 
            <React.Fragment>
               {!loading && 
                <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="row"  style={{ height: "450px", overflowY: "auto" }}>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th></th>
                          <th></th>
                          <th>Full Name</th>
                          <th>Email Address</th>
                          <th>Mobile</th>
                          <th>Status</th>
                          <th style={{width: '19%'}}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {  vendorsData && vendorsData.vendors && vendorsData.vendors.length ? vendorsData.vendors.map( (data, index) => (
                          <tr key={index} >
                          <td style={{verticalAlign: 'middle'}}>{data.userId}</td>
                          <td style={{verticalAlign: 'middle', width: "70px", fontSize: "15px"}}>{ moment(data.createDate).format('DD MMM YYYY')}</td>
                          <td style={{verticalAlign: 'middle'}}><img width="28" height="28" src={data.profilePictureUrl} alt="" /></td>
                          <td style={{verticalAlign: 'middle'}}> <Link to={`single-vendor-${data.userId}`}> { data.firstName + " " + data.lastName }</Link></td>
                          <td style={{verticalAlign: 'middle'}}>{data.emailAddress}</td>
                          <td style={{verticalAlign: 'middle'}}>{ data.msisdn}</td>
                          <td style={{verticalAlign: 'middle', textAlign: 'center'}}>
                          <SplitButton
                            key={this.userStatusColorHandler(data.userStatusDesc)}
                            id={`dropdown-split-variants-${this.userStatusColorHandler(data.userStatusDesc)}`}
                            variant={this.userStatusColorHandler(data.userStatusDesc)}
                            title={data.userStatusDesc}
                          >
                            <Dropdown.Item 
                            eventKey="Active"    
                            active={ data.userStatusDesc === "Active" } 
                            onClick={() => this.updateVendorState( data.userId, "Active", data.userStatusDesc )}
                            >Active</Dropdown.Item>
                            <Dropdown.Item 
                            eventKey="Inactive"  
                            active={ data.userStatusDesc === "Inactive" } 
                            onClick={() => this.updateVendorState( data.userId, "Inactive", data.userStatusDesc )}
                            >Inactive</Dropdown.Item>
                            <Dropdown.Item 
                            eventKey="In Review" 
                            active={ data.userStatusDesc === "In Review" }  
                            onClick={() => this.updateVendorState( data.userId, "In Review", data.userStatusDesc )}
                            >In Review</Dropdown.Item>
                            <Dropdown.Item 
                            eventKey="Approved"  
                            active={ data.userStatusDesc === "Approved" } 
                            onClick={() => this.updateVendorState( data.userId, "Approved", data.userStatusDesc )}
                            >Approved</Dropdown.Item>
                            <Dropdown.Item 
                            eventKey="Suspended" 
                            active={ data.userStatusDesc === "Suspended" }  
                            onClick={() => this.updateVendorState( data.userId, "Suspended", data.userStatusDesc )}
                            >Suspended</Dropdown.Item>
                          </SplitButton>
                          </td>
                          <td style={{textAlign: 'center'}}>
                          <Button variant="primary">Edit</Button>{' '}
                          <Button variant="danger">Delete</Button>
                          </td>
                        </tr>
                      ) ) : <tr> <td style={{textAlign: "center"}} colSpan="6">No Data Found</td></tr> }
                      </tbody>
                    </Table>
                    </div>
                    {
                      totalPages > 1 &&
                      <Pagination style={{paddingLeft: "35%"}}>
                        { currentPage > 1 &&
                          <Pagination.First onClick={() => this.paginationHandler( 1 )} />
                        }
                        { currentPage > 1 &&
                          <Pagination.Prev onClick={() => this.paginationHandler( currentPage - 1 )} />
                        }
                        { currentPage > 5 &&
                          <Pagination.Item onClick={() => this.paginationHandler( currentPage - 5 )} >{currentPage - 5}</Pagination.Item>
                        }
                        { currentPage > 5 &&
                          <Pagination.Ellipsis />
                        }
                        { currentPage > 2 &&
                          <Pagination.Item onClick={() => this.paginationHandler( currentPage - 2 )} >{currentPage - 2}</Pagination.Item>
                        }
                        { currentPage > 1 &&
                        <Pagination.Item onClick={() => this.paginationHandler( currentPage - 1 )} >{currentPage - 1}</Pagination.Item>
                        }
                        <Pagination.Item active>{currentPage}</Pagination.Item>
                        { currentPage + 1 <= totalPages &&
                          <Pagination.Item onClick={() => this.paginationHandler( currentPage + 1 )} >{currentPage + 1}</Pagination.Item>
                        }
                        { currentPage + 2 < totalPages &&
                          <Pagination.Item onClick={() => this.paginationHandler( currentPage + 2 )} >{currentPage + 2}</Pagination.Item>
                        }
                        { currentPage + 5 < totalPages &&
                          <Pagination.Ellipsis />
                        }
                        { currentPage + 5 < totalPages &&
                          <Pagination.Item onClick={() => this.paginationHandler( currentPage + 5 )} >{currentPage + 5}</Pagination.Item>
                        }
                        { currentPage + 1 < totalPages &&
                          <Pagination.Next onClick={() => this.paginationHandler( currentPage + 1 )} />
                        }
                        { currentPage < totalPages &&
                          <Pagination.Last onClick={() => this.paginationHandler( totalPages )} />
                        }
                      </Pagination>
                    }
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
    page: state.page,
    vendor: state.vendor
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetVendorsData:(reqPacket) => dispatch( getVendorsData(reqPacket) ),
      onUpdateVendorState: (reqPacket)=> dispatch(updateVendorState(reqPacket))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Vendors);
