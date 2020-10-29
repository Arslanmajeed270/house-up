import React, { Component } from 'react';
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
          productType:'',
          tableContent : [{
              varient: '',
              quantity: '',
              price: ''
          }],
          
        };
      }

      addTableContent = () => {
        let tableContent = _.cloneDeep(this.state.tableContent);
        let newRow = {
            varient: '',
            quantity: '',
            price: ''
        } ;
        tableContent.push(newRow);         
        this.setState({
            tableContent: tableContent
        });
      }

      removeTableContent = ( index ) => {
        let tableContent = _.cloneDeep(this.state.tableContent);
        if( tableContent && tableContent.length ){
            tableContent = _.remove( tableContent, function( n, idx ) {
                return idx !== index;
            });
        }
        this.setState({
            tableContent: tableContent
        });
      }

      onChangeTableContent = (idx) => (e) => {
        if(idx){
            let tableContent = _.cloneDeep(this.state.tableContent);
            console.log("checking e.target.name: ", e.target.name);
            console.log("checking e.target.value: ", e.target.value);
            console.log("checking idx: ", idx);
            if(e.target.name === "varient"){
                tableContent[idx].varient = e.target.value;
            }
            else if(e.target.name === "quantity"){
                tableContent[idx].quantity = e.target.value;
            }
            else if(e.target.name === "price"){
                tableContent[idx].price = e.target.value;
            }
            this.setState({
            tableContent: tableContent
            });
        }
      }
      onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    render() { 
        const { tableContent, productType } = this.state;

        console.log('checking this.state :',this.state);

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
                            <h1 className="titles-property">Product Information</h1>
                        </div>
                    </div>
                    <div className="row border-product">
                        <div className="col-md-12">
                            <h6 className="titles-property">Product Name:</h6>
                            <input placeholder="Parduct Name" className="input-feilds-property" />
                        </div>
                        <div className="col-md-6">
                            <h6 className="titles-property">Offer:</h6>
                            <textarea typeof="text" className="text-feilds-property" />
                        </div>
                        <div className="col-md-6">
                            <h6 className="titles-property">Tags:</h6>
                            <textarea typeof="text" className="text-feilds-property" />
                            <span>(Separate tags by comma ",")</span>
                        </div>
                        <div className="col-md-12">
                            <h6 className="titles-property" >Description:</h6>
                            <RichTextEditor className="text-editor"
                                value={this.state.value}
                                name="value"
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col-md-12">
                            <h6 className="titles-property" >Terms:</h6>
                            <RichTextEditor className="text-editor"
                                value={this.state.value}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="col-md-12">
                            <h1 className="titles-property" >Pricing & Quantity</h1>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-md-6">
                            <span className="dollar-sign">$</span>
                            <input placeholder="Original Price" className="input-feilds-price" />
                        </div>
                        <div className="col-md-6">
                            <span className="dollar-sign">$</span>
                            <input placeholder="New Price" className="input-feilds-price" />
                            <span className="text-danger titles-property">Note: </span>
                            <span className="text-danger titles-property" style={{fontWeight:'bold'}}>Inlcude your local tax in price.</span>
                            <br />
                            <span className="text-danger titles-property">( i.e. $1.00 + tax 13% = $1.13 )</span>
                        </div>
                        <div className="col-md-6">
                            <label for="date">Start Date: *</label>
                            <input type="date" className="input-feilds-property" />
                        </div>
                        <div className="col-md-6">
                            <label for="date">End Date: *</label>
                            <input type="date" className="input-feilds-property" />
                        </div>
                        <div className="col-md-6" style={{marginTop:'20px'}}>
                            <h6 className="titles-property" >Propduct Type</h6>
                            <select className="input-feilds-property" name="productType" onChange={this.onChange} value={productType}>
                                <option value="simpleProduct">Simple Product</option>
                                <option value="variableProduct">Variable Product</option>
                            </select>
                        </div>
                        <div className="col-md-6" style={{marginTop:'20px'}}>
                            <h6 className="titles-property" >Status</h6>
                            <select className="input-feilds-property">
                                <option>Active</option>
                                <option>Inactive</option>
                                <option>Pending</option>
                            </select>
                        </div>
                        {
                            productType === 'variableProduct' ?
                            <>
                                <div className="col-md-6">
                                    <h6 className="titles-property" >Name: *</h6>
                                    <input className="input-feilds-property" placeholder="name" />
                                </div>
                                <div className="col-md-6" />
                                    <table className="col-md-12" style={{margin:'15px'}}>
                                        <thead>
                                            <tr>
                                                <th className="table-heading">Variant</th>
                                                <th className="table-heading">Quantity</th>
                                                <th className="table-heading">Price</th>
                                                <th className="table-heading"> </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableContent && tableContent.length ?
                                            tableContent.map( (data, idx) => (
                                            <tr key={idx}>
                                                <td>
                                                    <input type="text" className="input-feilds-property" name="varient" value={ data.varient } onChange={this.onChangeTableContent(idx)}  />
                                                </td>
                                                <td>
                                                    <input type="number" className="input-feilds-property" name="quanity" value={data.quantity} onChange={this.onChangeTableContent(idx)} />
                                                </td>
                                                <td>
                                                    <input type="number" className="input-feilds-property" name="price" value={data.price} onChange={this.onChangeTableContent(idx)} />
                                                </td>
                                                <td className="table-remove">
                                                    <span  onClick={() => this.removeTableContent(idx) } >x</span>
                                                </td>
                                            </tr>
                                            )) 
                                            : <tr></tr>
                                            }
                                        </tbody>
                                    </table>
                                    <button className="btn btn-primary" style={{margin:'15px'}}
                                    onClick={this.addTableContent}
                                    > +Add Variant</button>
                                </>
                            :
                                <div className="col-md-6">
                                    <h6 className="titles-property">Quantity: </h6>
                                    <input className="input-feilds-property" placeholder="Quantity" />
                                </div>
                        }
                        
                    </div>
                    
                    
                    <div className="row border-product">
                    <div className="col-md-12">
                            <h1 className="titles-property">Images</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Dropzone onDrop={this.onDrop} className="drop-zone" > 
                                {({getRootProps, getInputProps}) => (
                                <section className="container drop-zone">
                                    <div {...getRootProps({className: 'dropzone , drop-zone-inner'})}>
                                    <input type="file" {...getInputProps()} id="pictures"/>
                                    <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                    <aside>
                                    <h4>Files</h4>
                                    <ul>{files}</ul>
                                    </aside>
                                </section>
                                )}
                            </Dropzone>
                            <h6 className="titles-property">Upload a maximum of 25 photos. Click on a picture to select a cover photo, otherwise the first picture will be used.</h6>
                        </div>

                    </div>

                </div>
                
            </React.Fragment>
         );
    }
}
 
export default addProduct;