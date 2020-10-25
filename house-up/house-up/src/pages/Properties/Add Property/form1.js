import React, { Component } from 'react';
import {Nav} from 'react-bootstrap';


class form1 extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="add-property-conatiner" style={{backgroundColor:'#F5F5F5'}}>
                <div className="row border-property">
                    <div className="col-md-12">
                        <h1 className="titles-property">List your property</h1>
                        <Nav variant="tabs"  >
                            <Nav.Item>
                                <Nav.Link className="tabs" onClick={() =>this.props.formShowHandler(0)}>Step 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tabs" onClick={() =>this.props.formShowHandler(1)}>Step 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tabs" onClick={() =>this.props.formShowHandler(2)} >Step 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-6">
                        <h6 className="titles-property">*Ad title</h6>
                        <input className="input-feilds-property" placeholder="Enter a title for your property..." name="title"  />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <h6 className="titles-property">Currency</h6>
                                <select className="input-feilds-property">
                                    <option >CAD</option>
                                    <option >USD</option>
                                </select>
                            </div>
                            <div className="col-md-8">
                                <h6 className="titles-property">*Price</h6>
                                <input type="text" className="input-feilds-property"  placeholder="$" name="price" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border-property">
                    <div className="col-md-12">
                        <h6 className="titles-property">Description</h6>
                        <textarea className="input-feilds-property"  placeholder="More detail about your property..." style={{height:'120px'}}/>
                    </div>
                </div>
                <br />
                <h1 className="titles-property">Contact info</h1>
                <p className="titles-property">You can edit your contact info anytime in your profile settings.</p>
                <div className="row">
                    <div className="col-md-4">
                        <h6 className="titles-property">Contact email</h6>
                        <input type="text" className="input-feilds-property" placeholder="email" name="email" />
                        <span className="title-property">Your email will not be shared.</span>
                    </div>
                    <div className="col-md-4">
                        <h6 className="titles-property">Contact name</h6>
                        <input type="text" className="input-feilds-property" placeholder="name" name="name" />
                    </div>
                    <div className="col-md-4">
                        <h6 className="titles-property">Contact number</h6>
                        <input type="text" className="input-feilds-property" placeholder="Contact number" name="contactNumber" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" />
                    <div className="col-md-6">
                            <div className="btn-div">
                                <button type="submit" className="btn btn-lg btn-primary btn-property" onClick={() =>this.props.formShowHandler(1)}>NEXT</button>
                            </div>
                        </div>
                    </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default form1;