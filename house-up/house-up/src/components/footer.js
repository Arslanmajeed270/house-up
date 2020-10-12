import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class footer extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="pxp-footer pt-100 pb-100 mt-100">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-12 col-lg-4">
                          <div className="pxp-footer-logo"> HouseUP</div>
                          <div className="pxp-footer-address mt-2">
                            90 Fifth Avenue, 3rd Floor<br />
                            San Francisco, CA 1980<br />
                            (123) 456-7890
                          </div>
                          <div className="pxp-footer-social mt-2">
                            <Link to=""><span className="fa fa-instagram" /></Link>
                            <Link to=""><span className="fa fa-facebook-square" /></Link>
                            <Link to=""><span className="fa fa-twitter" /></Link>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-8">
                          <div className="row">
                            <div className="col-sm-12 col-md-4">
                              <h4 className="pxp-footer-header mt-4 mt-lg-0">Company</h4>
                              <ul className="list-unstyled pxp-footer-links mt-2">
                                <li><Link to='/about'>About Us</Link></li>
                                <li><Link to='/vendors'>Vendors</Link></li>
                                <li><Link to='/blogs'>Resources</Link></li>
                                {/*   <li><Link to="">Demos</Link></li> */}
                                <li><Link href="/contact">Contact Us</Link></li>
                              </ul>
                            </div>
                            <div className="col-sm-12 col-md-4">
                              <h4 className="pxp-footer-header mt-4 mt-lg-0">Actions</h4>
                              <ul className="list-unstyled pxp-footer-links mt-2">
                                <li><Link to='/properties'>Buy Properties</Link></li>
                                <li><Link to='/properties'>Rent Properties</Link></li>
                                <li><Link to='/properties'>Sell Properties</Link></li>
                              </ul>
                            </div>
                            <div className="col-sm-12 col-md-4">
                              <h4 className="pxp-footer-header mt-4 mt-lg-0">Explore</h4>
                              <ul className="list-unstyled pxp-footer-links mt-2">
                                <li><Link to='/add-new-prop'>Homes for Rent</Link></li>
                                <li><Link to='/add-new-prop'>Apartments for Rent</Link></li>
                                <li><Link to='/add-new-prop'>Homes for Sale</Link></li>
                                <li><Link to='/add-new-prop'>Apartments for Sale</Link></li>
                                <li><Link to='/add-new-prop'>CRM</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pxp-footer-bottom mt-2">
                        <div><Link to='/privacy'>Terms &amp; Conditions</Link> and <Link to='/privacy'>Privacy Policy</Link></div>
                        <div className="pxp-footer-copyright">©  HouseUP All Rights Reserved. 2019</div>
                      </div>
                    </div>
                </div>

            </React.Fragment>
         );
    }
}
 
export default footer;