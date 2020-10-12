import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class comments extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row mt-100">
                <div className="col-sm-12 col-lg-1" />
                <div className="col-sm-12 col-lg-10">
                  <div className="pxp-agent-block">
                    <div className="pxp-agent-comments">
                      <h4>3 Reviews</h4>
                      <div className="mt-3 mt-md-4">
                        <div className="media">
                          <img src="assets/images/customer-1.jpg" className="mr-3" alt="..." />
                          <div className="media-body">
                            <h5>Scott Goodwin</h5>
                            <div className="pxp-agent-comments-date">April 9, 2019 at 2:33 pm</div>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                            <div className="media mt-2 mt-md-3">
                              <img src="assets/images/customer-4.jpg" className="mr-3" alt="..." />
                              <div className="media-body">
                                <h5>Alayna Becker</h5>
                                <div className="pxp-agent-comments-date">April 9, 2019 at 2:33 pm</div>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="media mt-2 mt-md-3">
                          <img src="assests/images/customer-3.jpg" className="mr-3" alt="..." />
                          <div className="media-body">
                            <h5>Erika Tillman</h5>
                            <div className="pxp-agent-comments-date">April 9, 2019 at 2:33 pm</div>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                          </div>
                        </div>
                      </div>
                      <h4 className="mt-4 mt-md-5">Leave a review</h4>
                      <form action="/single-vendor" className="pxp-agent-comments-form mt-3 mt-md-4">
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                              <label htmlFor="pxp-agent-comments-name">You Name</label>
                              <input type="text" className="form-control" id="pxp-agent-comments-name" placeholder="Enter your full name" />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                              <label htmlFor="pxp-agent-comments-email">You Email</label>
                              <input type="text" className="form-control" id="pxp-agent-comments-email" placeholder="Enter your email address" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="d-block">Rate the Agent</label>
                          <span className="pxp-single-agent-rating"><span data-rating={5} /><span data-rating={4} /><span data-rating={3} /><span data-rating={2} /><span data-rating={1} /></span>
                          <div className="clearfix" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="pxp-agent-comments-review">Write a Review</label>
                          <textarea className="form-control" id="pxp-agent-comments-review" rows={6} placeholder="Write your review here..." defaultValue={""} />
                        </div>
                        <Link to="" className="pxp-agent-comments-form-btn">Post Review</Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
         );
    }
}
 
export default comments;