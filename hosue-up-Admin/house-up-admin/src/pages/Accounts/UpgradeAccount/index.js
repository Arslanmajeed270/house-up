import React, { Component } from 'react';
import { Table,Badge, Button } from 'react-bootstrap';
import Footer from '../../../components/footer';

import { connect } from 'react-redux';
import { getUpgradeAccountData } from '../../../store/actions';

class Index extends Component {

  state = {
    updateAccountData:[],
    loading: false
  };

  static getDerivedStateFromProps(props, state) {
  
    const { account, page } = props;
    const { loading, updateAccountData } = state;

    let stateChanged = false;
    let changedState = {};

    if(account && JSON.stringify(updateAccountData) !== JSON.stringify(account.updateAccountData)){
      changedState.updateAccountData = account.updateAccountData; 
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
    const { onGetUpgradeAccountData } = this.props;
    const reqPacket = {
      channel:"web",
      phoneNo:"03335425231"
    };
    onGetUpgradeAccountData( reqPacket );
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
      const { loading, updateAccountData } = this.state;
        return ( 
            <React.Fragment>
            {!loading && 
              <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="row" style={{ height: "450px", overflowY: "auto" }}>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Full Name</th>
                          <th>Upgrade Fees</th>
                          <th>Package Plan</th>
                          <th>Status</th>
                          <th style={{width: '19%'}}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      { updateAccountData.length ? updateAccountData.map( (data, index) => (
                          <tr key={index} >
                          <td style={{verticalAlign: 'middle'}}>{data.userId}</td>
                          <td style={{verticalAlign: 'middle'}}>{ data.user.firstName + " " + data.user.lastName }</td>
                          <td style={{verticalAlign: 'middle'}}>${data.amount}</td>
                          <td style={{verticalAlign: 'middle'}}>{ data.packageId && data.packageId === "1" ? "Monthly" : data.packageId === "2" ? "Annual" : "" }</td>
                          <td style={{verticalAlign: 'middle', textAlign: 'center'}}>
                            <Badge variant="success"> { this.packageStatusHandler(data.packageRenewalDate)}</Badge>{' '}
                          </td>
                          <td style={{textAlign: 'center'}}>
                          <Button variant="primary">Edit</Button>{' '}
                          <Button variant="danger">Delete</Button>
                          </td>
                        </tr>
                      ) ) : '' }


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
    onGetUpgradeAccountData: (data) => dispatch(getUpgradeAccountData(data))
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Index);