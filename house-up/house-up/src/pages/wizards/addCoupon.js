import React, { Component, PropTypes } from 'react';
import Dropzone from 'react-dropzone';
import RichTextEditor from 'react-rte';
import _ from "lodash";


class addProduct extends Component {
    constructor() {
        super();
        this.onDrop = (files) => {
          this.setState({files})
        };
        this.state = {
          files: [],
          value: RichTextEditor.createEmptyValue(),
          discountType:'',
        };
      }
  
    
      onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    render() { 
        const { tableContent, discountType } = this.state;

        // console.log('checking this.state :',this.state);

        const files = this.state.files.map(file => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
          ));
        return ( 
            <React.Fragment>
                <div className="add-property-conatiner" style={{backgroundColor:'#F5F5F5'}}>
                    <div className="row border-product">
                        <div className="col-md-12">
                            <h1 className="titles-property">Coupon Info</h1>
                        </div>
                    </div>
                    <div className="row border-product">
                        <div className="col-md-6 padding">
                            <h6 className="titles-property">Coupon  Name:</h6>
                            <input placeholder="Coupon Name" className="input-feilds-property" />
                        </div>
                        <div className="col-md-6 padding">
                            <h6 className="titles-property">Coupon  Code:</h6>
                            <input placeholder="Coupon Code" className="input-feilds-property" />
                        </div>
                        
                        <div className="col-md-12 padding">
                            <h6 className="titles-property">Tags:</h6>
                            <textarea typeof="text" className="input-feilds-property" />
                            <span>(Separate tags by comma ",")</span>
                        </div>
                        <div className="col-md-12 padding">
                            <h6 className="titles-property" >Description:</h6>
                            <RichTextEditor className="text-editor"
                                value={this.state.value}
                                name="value"
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col-md-12 padding">
                            <h6 className="titles-property" >Terms:</h6>
                            <RichTextEditor className="text-editor"
                                value={this.state.value}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col-md-12 padding">
                            <h1 className="titles-property" >Date & Amount</h1>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-md-4 padding">
                            <h6 className="title-property">Discount Type:</h6>
                            <select className="input-feilds-property" name="discountType" onChange={this.onChange} value={discountType}>
                                <option value="pmount">Amount</option>
                                <option value="percentage">Percentage</option>
                            </select>
                        </div>
                        {
                            discountType ==='percentage' ?
                            <>
                                <div className="col-md-4 padding">
                                    <h6 className="title-property">Discount: </h6>
                                    <input placeholder="Discount Price" className="input-feilds-discount" />
                                    <span className="percentage-sign">%</span>
                                </div>
                                <div className="col-md-4 padding">
                                    <h6 className="title-property">Currency: </h6>
                                    <select className="input-feilds-property" name="currency" onChange={this.onChange} disabled >
                                        <option value="CAD">CAD</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>
                            </>
                            :
                            <>
                                <div className="col-md-4 padding">
                                    <h6 className="title-property">Discount: </h6>
                                    <span className="dollar-sign">$</span>
                                    <input placeholder="Original Price" className="input-feilds-discount" />
                                </div>
                                <div className="col-md-4 padding">
                                    <h6 className="title-property">Currency: </h6>
                                    <select className="input-feilds-property" name="currency" onChange={this.onChange}>
                                        <option value="CAD">CAD</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>
                            </>
                        }
                        
                        <div className="col-md-6 padding">
                            <label htmlFor="date">Start Date: *</label>
                            <input type="date" className="input-feilds-property" />
                        </div>
                        <div className="col-md-6 padding">
                            <label htmlFor="date">End Date: *</label>
                            <input type="date" className="input-feilds-property" />
                        </div>
                        
                        <div className="col-md-6 " />
                    </div>
                    <div className="row border-product">
                        <div className="col-md-12 padding">
                            <h1 className="titles-property">Quantity & Maximum Use Amount</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 padding">
                            <h6 className="titles-property">Maximum Use Amount: *</h6>
                            <input placeholder="Maximum Use Amount" className="input-feilds-property" />
                        </div>
                        <div className="col-md-6 padding">
                            <h6 className="titles-property">Total Coupons Available: *</h6>
                            <input placeholder="Total Coupons Available" className="input-feilds-property" />
                        </div>
                        <div className="col-md-6 padding">
                            <h6 className="titles-property">Daily Limit per User: *</h6>
                            <input placeholder="Daily Limit per User" className="input-feilds-property" />
                        </div>
                        <div className="col-md-6 padding">
                            <h6 className="titles-property">Status</h6>
                            <select className="input-feilds-property">
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
         );
    }
}

export default addProduct;
    