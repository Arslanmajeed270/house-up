import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Pagination, SplitButton, Dropdown } from 'react-bootstrap';

import { updateProperty, getProperties } from '../../store/actions';
import { dateHandler } from '../../utils/common'
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';

class Properties extends Component {

    state = {
      propertiesData:{
        properties: [],
        pagesCount: 0
      },
      currentPage: 1,
      loading: false
    };

  static getDerivedStateFromProps(props, state) {
  
    const { property, page } = props;
    const { loading, propertiesData } = state;

    let stateChanged = false;
    let changedState = {};

    if(property && JSON.stringify(propertiesData) !== JSON.stringify(property.propertiesData)){
      changedState.propertiesData = property.propertiesData; 
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
    const { onGetProperties } = this.props;
    const ReqPacket = {
			channel:"web",
			lat: 43.787083,
			lng: -79.497369,
			city: 'Toronto',
			state: "Ontario",
			country: "Canada",
			rentalListingYN:"No",
			pageNum:1,
			loggedInuserId: "11",
			searchText:"",
			phoneNo: "03335425231"
			}
			onGetProperties(ReqPacket);
  }

  
  updatePropertyState = (propertyStatusDesc , propertyId) =>
  {
    const { onUpdateProperty } = this.props;
    const userData = {
      propertyId,
      propertyStatusDesc
    };
    onUpdateProperty(userData);
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
    const { onGetProperties } = this.props;
    const ReqPacket = {
			channel:"web",
			lat: 43.787083,
			lng: -79.497369,
			city: 'Toronto',
			state: "Ontario",
			country: "Canada",
			rentalListingYN:"No",
			pageNum:pageNum,
			loggedInuserId: "11",
			searchText:"",
			phoneNo: "03335425231"
      }
      this.setState({
        currentPage: pageNum
      });
			onGetProperties(ReqPacket);
  }

    render() { 
      const { propertiesData, currentPage, loading  } = this.state;
      const totalPages = propertiesData && propertiesData.pagesCount ? propertiesData.pagesCount : 0 ;
      const properties = propertiesData && propertiesData.properties ? propertiesData.properties : [] ;
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
                          <th>  </th>
                          <th>  </th>
                          <th>Properties Title</th>
                          <th>Properties Fees</th>
                          <th>Status</th>
                          <th style={{width: '19%'}}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {  properties.length ? properties.map( (data, index) => (
                          <tr key={index} >
                          <td style={{verticalAlign: 'middle'}}>{data.propertId}</td>
                          <td style={{verticalAlign: 'middle'}}>{dateHandler(data.createDate)}</td>
                          <td style={{verticalAlign: 'middle'}}> <img src={data.imageList && data.imageList[0] && data.imageList[0].imageURL ? data.imageList[0].imageURL : "assets/img/demo.png"} 
                                  alt="Profile" style={{maxWidth: '48px', maxHeight:'48px' , backgroundColor:'#008CF8'}} /></td>
                          <td style={{verticalAlign: 'middle'}}> <Link to={`single-prop-${data.propertId}`}> { data.adTitle}</Link></td>
                          <td style={{verticalAlign: 'middle'}}>${data.price}</td>
                          <td style={{verticalAlign: 'middle', textAlign: 'center'}}>
                          <SplitButton
                            key={this.userStatusColorHandler(data.propertyStatusDesc)}
                            id={`dropdown-split-variants-${this.userStatusColorHandler(data.propertyStatusDesc)}`}
                            variant={this.userStatusColorHandler(data.propertyStatusDesc)}
                            title={data.propertyStatusDesc}
                          >
                            <Dropdown.Item eventKey="Active" active={ data.propertyStatusDesc === "Active" } >Active</Dropdown.Item>
                            <Dropdown.Item eventKey="Inactive"  active={ data.propertyStatusDesc === "Inactive" } >Inactive</Dropdown.Item>
                            <Dropdown.Item eventKey="In Review" active={ data.propertyStatusDesc === "In Review" }  >In Review</Dropdown.Item>
                            <Dropdown.Item eventKey="Approved"  active={ data.userStatusDesc === "Approved" } >Approved</Dropdown.Item>
                            <Dropdown.Item eventKey="Suspended" active={ data.propertyStatusDesc === "Suspended" }  >Suspended</Dropdown.Item>
                          </SplitButton>
                          </td>
                          <td style={{textAlign: 'center'}}>
                          <Button variant="primary">Edit</Button>{' '}
                          <Button variant="danger">Delete</Button>
                          </td>
                        </tr>
                      ) ) : <tr><td style={{textAlign: "center"}} colSpan="6">No Data Found</td></tr> }
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
    property: state.property,
    page: state.page
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onGetProperties: (data) => dispatch(getProperties(data)),
      onUpdateProperty : (userData)=> dispatch(updateProperty(userData))
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Properties);