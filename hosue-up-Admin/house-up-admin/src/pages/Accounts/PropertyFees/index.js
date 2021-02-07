import React, { Component } from 'react';
import { Table,Badge, Button } from 'react-bootstrap';
import Footer from '../../../components/footer';

import { connect } from 'react-redux';
import { getPropertyFeesData } from '../../../store/actions';


class Index extends Component {
  
  state = {
    propertyFeesData:[],
    loading: false
  };

  static getDerivedStateFromProps(props, state) {
  
    const { account, page } = props;
    const { loading, propertyFeesData } = state;

    let stateChanged = false;
    let changedState = {};

    if(account && JSON.stringify(propertyFeesData) !== JSON.stringify(account.propertyFeesData)){
      changedState.propertyFeesData = account.propertyFeesData; 
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

  componentDidMount(){
    const { onGetPropertyFeesData } = this.props;
    const reqPacket = {
      channel:"web",
      phoneNo:"03335425231"
    };
    onGetPropertyFeesData( reqPacket );
  }

  packageStatusHandler = ( date ) => {
    const renewalDate = new Date( date ).getTime();
    const currentDate = new Date().getTime();
    if( renewalDate > currentDate ){
      return "Active";
    }
    else{
      return "Inactive";
    }
  }

    render() { 
      const { loading, propertyFeesData } = this.state;
        return ( 
            <React.Fragment>
              {!loading && 
              <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="row" style={{ height: "450px", overflowY: "auto" }}>
                    <Table responsive striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Full Name</th>
                          <th>Property Fee</th>
                          <th>Package Plan</th>
                          <th>Status</th>
                          <th style={{width: '19%'}}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      { propertyFeesData.length ? propertyFeesData.map( (data, index) => (
                        <tr>
                          <td style={{verticalAlign: 'middle'}}> {data.user_id} </td>
                          <td style={{verticalAlign: 'middle'}}> { data.user.firstName + " " + data.user.lastName } </td>
                          <td style={{verticalAlign: 'middle'}}>${data.amount}</td>
                          <td style={{verticalAlign: 'middle'}}>{ data.property_posting_fee_id && data.property_posting_fee_id === "1" ? "Free Listing" : 
                          data.property_posting_fee_id === "2" ? "Basic Plan" : data.property_posting_fee_id === "3" ? "Standard Plan" : "" }</td>
                          <td style={{verticalAlign: 'middle', textAlign: 'center'}}>
                            <Badge variant="success">{ this.packageStatusHandler(data.package_renewal_date)}</Badge>{' '}
                          </td>
                          <td style={{textAlign: 'center'}}>
                          <Button variant="primary">Edit</Button>{' '}
                          <Button variant="danger">Delete</Button>
                          </td>
                        </tr>
                      )):""
                      }

                      </tbody>
                    </Table>
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
    account: state.account,
    page: state.page
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetPropertyFeesData: (data) => dispatch(getPropertyFeesData(data))
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Index);