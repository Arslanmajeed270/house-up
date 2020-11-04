import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import{Alert } from 'react-bootstrap';
import Spinner from '../../components/common/Spinner';
class comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      indexPageData : {},
      user:{},
      contactEmail:'',
      contactName:'',
      commentText:'',
      userId:'',
      postId:'',
      storyImageId:'',
      propertyId:'',
      vendorId:'',
      category:'',
      data:[],
      comments:[]
    };
  }

  static getDerivedStateFromProps(props, state) {
    const auth = props.auth ? props.auth : {};
    const errors = props.errors;
    const page = props.page;

    let stateChanged = false;
    let changedState = {};
    
    if(page && JSON.stringify(state.indexPageData) !== JSON.stringify(page.indexPageData)){
      changedState.indexPageData = page.indexPageData;  
      stateChanged = true;
      if( changedState.indexPageData && changedState.indexPageData && 
          changedState.indexPageData.vendorPostPropertiesList.length
        ){
        changedState.comments = changedState.indexPageData.vendorPostPropertiesList.map(data => {
          if( state.category === "Property" && data.category === state.category && 
              data.object && data.object.propertId && data.object.propertId === state.propertId ){
                changedState.comments = data.object.propertyComments ? data.object.propertyComments : [];
          }
          if( state.category === "Post" && data.category === state.category && 
              data.object && data.object.postId && data.object.postId === state.postId ){
                changedState.comments = data.object.postComments ? data.object.postComments : [];
          }
        });
      }
    }

    if(auth && JSON.stringify(state.user) !== JSON.stringify(auth.user)){
      changedState.user = auth.user;  
      stateChanged = true;
    }
    if(errors && JSON.stringify(state.errors) !== JSON.stringify(errors)){
      changedState.errors= errors;
      stateChanged = true;
    }
    
    if(stateChanged){
      return changedState;
    }
    return null;
  }


  componentDidMount (){

    const { user }  = this.state;
    const contactEmail = user.emailAddress ? user.emailAddress : "";
    const firstName =  user.firstName ? user.firstName : "";
    const lastName =  user.lastName ? user.lastName : "";
    const contactName = `${firstName} ${lastName}`; 
    const userId = user.userId ? user.userId : "";
    
    this.setState({
      contactEmail,
      contactName,
      userId
    });

    const id = this.props.match.params.id;
    const category = this.props.match.params.category;
    this.setState({
      id: id,
      category: category
    });
    if(category === "Post"){
      this.setState({ postId : id });
    }
    else if(category === "Property"){
      this.setState({ propertyId : id });
    }
    }

onChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

onSubmit = e =>{
  e.preventDefault();

  const { userId , commentText , propertyId , postId , storyImageId , vendorId , category } = this.state;

  const data = {
    postId:Number(postId),
    category:category,
    storyImageId:Number(storyImageId),
    propertyId:Number(propertyId),
    commentText:commentText,
    userId:userId,
    vendorId:vendorId
}
  console.log('data pakage of comment api', data);

  this.props.onCommentAdded(data);

}

    render() { 

      let {loading ,data, indexPageData ,  contactName , contactEmail , commentText  , category ,postId , propertyId} = this.state;

      console.log("checking this.state in comments: ", this.state);

      let pageContent = '';

      if(loading){
        pageContent = <Spinner />
      }
      else{
        pageContent = "";
      }

      data = indexPageData  && indexPageData.vendorPostPropertiesList;
      console.log("checking data in comments: ", data);

    
      console.log( 'post and property data', data);
        return ( 
            <React.Fragment>
                <div className="row mt-100">
                <div className="col-sm-12 col-lg-1" />
                <div className="col-sm-12 col-lg-10">
                  <div className="pxp-agent-block">
                    <div className="pxp-agent-comments">
                    {
                      data && data.length ?
                      data[2].object.propertyComments.map((da , index) =>
                    
                      <div key={index} className="mt-3 mt-md-4">
                        <div className="media">
                          <img src={da.profilePictureUrl} className="mr-3" alt="..." />
                          <div className="media-body">
                            <h5>{da.userFullName}</h5>
                            <div className="pxp-agent-comments-date">{da.createDateTime}</div>
                            <p>{da.commentText}</p>
                          </div>
                        </div>
                      </div>
                      )
                      : ""
                    }
                      <h4 className="mt-4 mt-md-5">Leave a review</h4>
                      <form className="pxp-agent-comments-form mt-3 mt-md-4" onSubmit={this.onSubmit}>
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                              <label htmlFor="pxp-agent-comments-name">You Name</label>
                              <input type="text" className="form-control" id="pxp-agent-comments-name" nmae="contactName" value={contactName} placeholder="Enter your full name" onChange={this.onChange} />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                              <label htmlFor="pxp-agent-comments-email">You Email</label>
                              <input type="text" className="form-control" id="pxp-agent-comments-email" nmae="contactEmail" value={contactEmail} placeholder="Enter your email address" onChange={this.onChange} />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="pxp-agent-comments-review">Write a Review</label>
                          <textarea className="form-control" id="pxp-agent-comments-review" required rows={6} placeholder="Write your review here..." name="commentText" value={commentText} onChange={this.onChange}/>
                        </div>
                        <button type="submit" className="pxp-agent-comments-form-btn">Post Review</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {pageContent}
            </React.Fragment>
         );
    }
}
 
const mapStateToProps = state => {
  return {
    page: state.page,
    auth: state.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onCommentAdded : (data) => dispatch(actions.AddComments(data)),
    onGetIndexPageData: (userId) => dispatch(actions.getIndexPageData(userId)),
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(comments);