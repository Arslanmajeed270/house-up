import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// importing actions
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';

class cardSelection extends Component {
    constructor(props){
        super(props);
        this.state = {
            allCards: []
        };
    }

    static getDerivedStateFromProps(props, state) {
        let errors = props.errors;
        let page = props.page; 
    
        let stateChanged = false;
        let changedState = {};

        if(page && page.allCards && JSON.stringify(state.allCards) !== JSON.stringify(page.allCards)){
            changedState.allCards = page.allCards;
            stateChanged = true;            
        }
    
        if(errors && JSON.stringify(state.errors) !== JSON.stringify(errors)){
          changedState.errors = errors;
          stateChanged = true;
        }
        
        if(page && JSON.stringify(state.loading) !== JSON.stringify(page.loading)){
            changedState.loading = page.loading;
            stateChanged = true;            
        }
        
        if(stateChanged){
          return changedState;
        }
        return null;
    }

    componentDidMount(){

    }
    render() { 
        const { allCards } = this.state;
        return ( 
            <React.Fragment>
                <Modal 
                    show={this.props.show}
                    aria-labelledby="contained-modal-title-vcenter"
                    onHide={() => this.props.closeCodelHanlder('cardSelection')}
                    centered
                    >
                    <Modal.Body >
                        
                    <div>
                    <div className="card-selection" style={{borderBottom:'1px solid #DEE2F2'}}>
                        <div className="dashboard-newsfeed-content"
                        >
                            <div >
                                <div className="row">
                                    <div className="col-md-3 logo-modal">
                                        <img  src={require("../../assets/images/ic_visa.svg")} 
                                        alt=""  
                                        style={{width:"46px", height:'14px', marginTop: "20px"}}
                                        />
                                    </div>
                                    <div className="col-md-9">
                                        <div class="card ">VISA Card</div>
                                        <div class="card-description"> **** **** **** 4545 </div>
                                        <img src={require('../../assets/images/ic_check_sel.svg')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="card-selection">
                        <div className="dashboard-newsfeed-content"
                        >
                            <div>
                                <div className="row">
                                    <div className="col-md-3 logo-modal">
                                        <img  src={require("../../assets/images/ic_visa_master_card.svg")} 
                                        alt=""  
                                        style={{width:"46px", height:'14px', marginTop: "20px"}}/>
                                    </div>
                                    <div className="col-md-9">
                                        <div class="card">Master Card</div>
                                        <div class="card-description"> **** **** **** 4545 </div>
                                        <img src={require('../../assets/images/ic_check_sel.svg')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div >
                        <div onClick={() => this.props.cardDetailsHandler('cardDetails') } className="dashboard-newsfeed-content dashed-button"
                        >
                            <div>
                                <button className="btn btn-lg"   > ADD NEW CARD</button>   
                            </div>
                        </div>
                    </div>
                    </div>
                    <button className="btn btn-primary card-btn" type="submit">
                        Submit
                    </button>
                   
                    </Modal.Body>
                </Modal>  
        
            </React.Fragment>
         );
    }
}
 
export default cardSelection;