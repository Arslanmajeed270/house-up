import React, { Component } from 'react';
import { Table,Badge, Button } from 'react-bootstrap';
import Footer from '../../../components/footer';

class Index extends Component {
    render() { 
        return ( 
            <React.Fragment>
              <div className="page-holder w-100 d-flex flex-wrap">
                <div className="container-fluid px-xl-5">
                  <section className="py-5">
                    <div className="row">
                    <Table responsive striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Full Name</th>
                          <th>Total Budget</th>
                          <th>Spend Money</th>
                          <th>Status</th>
                          <th style={{width: '19%'}}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{verticalAlign: 'middle'}}>1</td>
                          <td style={{verticalAlign: 'middle'}}>Adnan Qureshi</td>
                          <td style={{verticalAlign: 'middle'}}>$400.00</td>
                          <td style={{verticalAlign: 'middle'}}>Monthly</td>
                          <td style={{verticalAlign: 'middle', textAlign: 'center'}}><Badge variant="success">Success</Badge>{' '}</td>
                          <td style={{textAlign: 'center'}}>
                          <Button variant="primary">Edit</Button>{' '}
                          <Button variant="danger">Delete</Button>
                          </td>
                        </tr>


                      </tbody>
                    </Table>
                    </div>
                  </section>
                </div>
                <Footer />
              </div>
            </React.Fragment>
         );
    }
}
 
export default Index;