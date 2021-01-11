/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import Contact from "../../components/Popups/others/contactUsPopup";
import ImagePreview from "../../components/Popups/others/ImagePreview";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Spinner from '../../components/common/Spinner';
import ButtonImagePreview from './components/buttonImagePreview'
class singleProp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      contactModalState: false,
      singlePropertyData: {},
      id: "",
      commentText: "",
      user: {},
      userId: "",
      imageToggle: false,
      vendorId: "",
      comments: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
		const {page, auth, property} = props;

    let stateChanged = false;
    let changedState = {};

    if (auth && JSON.stringify(state.user) !== JSON.stringify(auth.user)) {
      changedState.user = auth.user;
      stateChanged = true;
    }
    if (
      property &&
      JSON.stringify(state.singleVendorData) !==
        JSON.stringify(property.singleVendorData)
    ) {
      changedState.singleVendorData = property.singleVendorData;
      stateChanged = true;
      if (
        changedState.singleVendorData &&
        changedState.singleVendorData.propertyComments.length
      ) {
        changedState.comments = changedState.singleVendorData.propertyComments;
      }
    }
    if (
      changedState.indexPageData &&
      changedState.indexPageData &&
      changedState.indexPageData.vendorPostPropertiesList.length
    ) {
      console.log('checking changedState.indexPageData.vendorPostPropertiesList: ',changedState.indexPageData.vendorPostPropertiesList );
      changedState.indexPageData.vendorPostPropertiesList.map((data) => {
        if (
          state.category === "Property" &&
          data.category === state.category &&
          data &&
          data.propertyId &&
          data.propertyId === state.propertyId
        ) {
          changedState.comments = data.propertyComments
            ? data.propertyComments
            : [];
        }
        return data;
      });
    }
    if (
      property &&
      JSON.stringify(state.singlePropertyData) !==
        JSON.stringify(property.singlePropertyData)
    ) {
      changedState.singlePropertyData = property.singlePropertyData;
      stateChanged = true;
    }

    if ( page && JSON.stringify(state.loading) !== JSON.stringify(page.loading) ) {
			changedState.loading = page.loading;
			stateChanged = true;
    }
    
    if (stateChanged) {
      return changedState;
    }
    return null;
  }

  modelHanlder = (model, id) => {
    this.setState({
      [model]: !this.state[model],
      vendorId: id,
    });
  };
  closeCodelHanlder = (model) => {
    this.setState({
      [model]: false,
    });
  };

  componentDidMount() {
    const { user } = this.state;
    const id = this.props.match.params.id;

    const userId = user.userId ? user.userId : "";
    const profilePictureUrl = user.profilePictureUrl
      ? user.profilePictureUrl
      : "";

    this.setState({
      id,
      userId,
    });

    let userData = {
      propertyId: id,
    };
    this.props.onGetSinglePropertyData(userData, profilePictureUrl);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { id, commentText, userId, user, singlePropertyData } = this.state;

    const data = {
      postId: 0,
      category: "Property",
      storyImageId: 0,
      propertyId: Number(id),
      commentedOnUserId: singlePropertyData.user.userId,
      commentText: commentText,
      userId: userId,
      vendorId: 0,
      phoneNo: user.msisdn,
      channel: "web",
    };
    const indexValue = "";
    const userFullName = `${user.firstName} ${user.lastName}`;
    const userName = user.userName;
    const profilePictureUrl = user.profilePictureUrl;
    const date = moment(Date()).format("YYYY-MM-DD hh:mm:ss");
    if (
      user.userStatusDesc === "Inactive" ||
      user.userStatusDesc === "Rejected" ||
      user.userStatusDesc === "In Review"
    ) {
      this.props.modelHanlder(
        "alertPopup",
        `Your Account is been ${
          user.userStatusDesc === "Inactive"
            ? `${user.userStatusDesc} for 7 days `
            : `${user.userStatusDesc}`
        } due to ${user.rejectionReason}`
      );
    } else {
      this.props.onCommentAdded(
        data,
        indexValue,
        userFullName,
        userName,
        profilePictureUrl,
        date
      );
      this.setState({
        commentText: ""
      });
    }
  };

  ImagePreviewHandler = () => {
    this.setState({ imageToggle: !this.state.imageToggle });
  };

  render() {
    const { loading, singlePropertyData, commentText, imageToggle, user } = this.state;
    let pageContent = '';

		if (loading)
      pageContent = <Spinner />;
      else{
        pageContent=(<React.Fragment>
          <div className="pxp-content">
            <div className="pxp-single-property-top pxp-content-wrapper mt-100 pt-3">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-12">
                    <h2 className="pxp-sp-top-title">
                      {singlePropertyData && singlePropertyData.adTitle}
                    </h2>
                    <p className="pxp-sp-top-address pxp-text-light">
                      {singlePropertyData &&
                        singlePropertyData.currency &&
                        singlePropertyData.currency.symbol}{" "}
                      {singlePropertyData && singlePropertyData.price
                        ? singlePropertyData.price.toLocaleString()
                        : ""}{" "}
                      {singlePropertyData &&
                        singlePropertyData.currency &&
                        singlePropertyData.currency.lable}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid px-0 pxp-single-property-gallery-container">
              <div
                className="pxp-single-property-gallery"
                itemScope
                itemType="http://schema.org/ImageGallery"
              >
                <SRLWrapper>
                  <div style={{float: "left", width: "50%", height: '648px'}}>
                  <img 
                  width="647"
                  height="648"
                  style={{paddingTop: '2px'}}
                src={
                  singlePropertyData && 
                  singlePropertyData.imageList && 
                  singlePropertyData.imageList.length && 
                  singlePropertyData.imageList[0] && 
                  singlePropertyData.imageList[0].imageURL} 
                />
                  </div>
                  <div style={{float: "right", width: "50%"}} >
                {singlePropertyData &&
                singlePropertyData.imageList &&
                singlePropertyData.imageList.length
                  ? singlePropertyData.imageList.map((img, index) =>
                      index > 0 && index < 5 ? (
                        <img  width='322.5' height="323" style={{paddingTop: "2px", paddingRight: "2px"}} src={img && img.imageURL} />
                      
                      ) : (
                        ""
                      )
                    )
                  : ""}
                  </div>
                <ImagePreview
                  show={imageToggle}
                  close={this.ImagePreviewHandler}
                  propertyImg={singlePropertyData && singlePropertyData.imageList}
                />
              </SRLWrapper>
              </div>

              
            <ButtonImagePreview  imageToOpen={singlePropertyData.imageList} />
              <div className="clearfix" />
            </div>
  
            <div className="container mt-4">
              <div className="row">
                <div className="col-lg-8">
                  {singlePropertyData && singlePropertyData.address ? (
                    <div
                      style={{
                        color: "#000",
                        fontWeight: "300",
                        fontFamily: "Light",
                      }}
                    >
                      {" "}
                      <span className="property-details">Address:</span>{" "}
                      {singlePropertyData && singlePropertyData.address}
                    </div>
                  ) : (
                    ""
                  )}
                  {singlePropertyData && singlePropertyData.propertyType ? (
                    <div
                      style={{
                        color: "#000",
                        fontWeight: "300",
                        fontFamily: "Light",
                      }}
                    >
                      {" "}
                      <span className="property-details">
                        Property type:
                      </span>{" "}
                      {singlePropertyData && singlePropertyData.propertyType}{" "}
                    </div>
                  ) : (
                    ""
                  )}
                  {singlePropertyData && singlePropertyData.rentalListingYN ? (
                    <div
                      style={{
                        color: "#000",
                        fontWeight: "300",
                        fontFamily: "Light",
                      }}
                    >
                      <span className="property-details">Rental:</span>
                      {singlePropertyData && singlePropertyData.rentalListingYN}
                    </div>
                  ) : (
                    ""
                  )}
                  {singlePropertyData && singlePropertyData.createdDate ? (
                    <div
                      style={{
                        color: "#000",
                        fontWeight: "300",
                        fontFamily: "Light",
                      }}
                    >
                      <span className="property-details">Date listed:</span>{" "}
                      {singlePropertyData && singlePropertyData.createdDate}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="pxp-single-property-section mt-4 mt-md-5">
                    <div className="mt-3 mt-md-4">
                      {singlePropertyData && singlePropertyData.description ? (
                        <>
                          <h3>Description</h3>
                          <p>{singlePropertyData.description}</p>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                    <hr style={{ background: "#EFEFF4" }} />
                    <div>
                      <h3>Details</h3>
  
                      <div className="mt-3 mt-md-4 row ">
                        {singlePropertyData && singlePropertyData.buildingType ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Building type
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.buildingType}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData &&
                        singlePropertyData.noOfBathroomsValue ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Bathrooms
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.noOfBathroomsValue}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData && singlePropertyData.noOfBedrooms ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Bedrooms
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.noOfBedrooms}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData &&
                        singlePropertyData.lotDimensionLength &&
                        singlePropertyData.lotDimensionWidth ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Lot dimensions
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.lotDimensionLength}{" "}
                                x{" "}
                                {singlePropertyData &&
                                  singlePropertyData.lotDimensionWidth}{" "}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData && singlePropertyData.lotTotalArea ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Lot area
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.lotTotalArea}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData && singlePropertyData.basementType ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Basement
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.basementType}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData && singlePropertyData.garageType ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Garage
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.garageType}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData &&
                        singlePropertyData.finishedSqftArea ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Sqrt Area
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.finishedSqftArea}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData &&
                        singlePropertyData.primaryHeatingFuel ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Primary heating fuel
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.primaryHeatingFuel}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData && singlePropertyData.yearBuilt ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Year Built
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.yearBuilt}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData &&
                        singlePropertyData.yearFurnaceBuilt ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Year furnace installed
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.yearFurnaceBuilt}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData &&
                        singlePropertyData.yearRoofInstalled ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              {" "}
                              Year roof installed
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.yearRoofInstalled}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData && singlePropertyData.storeys ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Storeys
                              <div className="pt-2 text-secondary">
                                {singlePropertyData && singlePropertyData.storeys}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData &&
                        singlePropertyData.waterSourceType ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              {" "}
                              Water source
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.waterSourceType}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData &&
                        singlePropertyData.propertyType !== "House" &&
                        singlePropertyData &&
                        singlePropertyData.condoFee !== "null" &&
                        singlePropertyData.condoFee ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Condo fees (/month)
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.condoFee}
  
                                {console.log(singlePropertyData)}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                        {singlePropertyData &&
                        singlePropertyData.propertyType !== "House" &&
                        singlePropertyData &&
                        singlePropertyData.parkingSpaces ? (
                          <div className="col-sm-6 col-lg-4">
                            <div className="pxp-sp-amenities-item">
                              Parking Spaces
                              <div className="pt-2 text-secondary">
                                {singlePropertyData &&
                                  singlePropertyData.parkingSpaces}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="pxp-single-property-section mt-4 mt-md-5">
                    <h3>Amenities</h3>
                    <div className="row mt-3 mt-md-4">
                      {singlePropertyData &&
                      singlePropertyData.amenites &&
                      singlePropertyData.amenites.internet ? (
                        <div className="col-sm-6 col-lg-4">
                          <div className="pxp-sp-amenities-item">Internet</div>
                        </div>
                      ) : (
                        ""
                      )}
  
                      {singlePropertyData &&
                      singlePropertyData.amenites &&
                      singlePropertyData.amenites.garage ? (
                        <div className="col-sm-6 col-lg-4">
                          <div className="pxp-sp-amenities-item">Garage</div>
                        </div>
                      ) : (
                        ""
                      )}
                      {singlePropertyData &&
                      singlePropertyData.amenites &&
                      singlePropertyData.amenites.ac ? (
                        <div className="col-sm-6 col-lg-4">
                          <div className="pxp-sp-amenities-item">
                            Air Conditioning
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {singlePropertyData &&
                      singlePropertyData.amenites &&
                      singlePropertyData.amenites.dishWasher ? (
                        <div className="col-sm-6 col-lg-4">
                          <div className="pxp-sp-amenities-item">Dishwasher</div>
                        </div>
                      ) : (
                        ""
                      )}
                      {singlePropertyData &&
                      singlePropertyData.amenites &&
                      singlePropertyData.amenites.disposal ? (
                        <div className="col-sm-6 col-lg-4">
                          <div className="pxp-sp-amenities-item">Disposal</div>
                        </div>
                      ) : (
                        ""
                      )}
                      {singlePropertyData &&
                      singlePropertyData.amenites &&
                      singlePropertyData.amenites.balcony ? (
                        <div className="col-sm-6 col-lg-4">
                          <div className="pxp-sp-amenities-item">Balcony</div>
                        </div>
                      ) : (
                        ""
                      )}
                      {singlePropertyData &&
                      singlePropertyData.amenites &&
                      singlePropertyData.amenites.gym ? (
                        <div className="col-sm-6 col-lg-4">
                          <div className="pxp-sp-amenities-item">Gym</div>
                        </div>
                      ) : (
                        ""
                      )}
                      {singlePropertyData &&
                      singlePropertyData.amenites &&
                      singlePropertyData.amenites.playroom ? (
                        <div className="col-sm-6 col-lg-4">
                          <div className="pxp-sp-amenities-item">Playroom</div>
                        </div>
                      ) : (
                        ""
                      )}
                      {singlePropertyData &&
                      singlePropertyData.amenites &&
                      singlePropertyData.amenites.bar ? (
                        <div className="col-sm-6 col-lg-4">
                          <div className="pxp-sp-amenities-item">Bar</div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="row mt-100">
                    <div className="col-sm-12 col-lg-12">
                      <div className="pxp-agent-block w-100">
                        <div className="pxp-agent-comments m-0">
                          {/* <h4>3 Reviews</h4> */}
                          <div className="mt-3 mt-md-4">
                            {singlePropertyData &&
                            singlePropertyData.propertyComments &&
                            singlePropertyData.propertyComments.length
                              ? singlePropertyData.propertyComments.map(
                                  (da, index) => (
                                    <div
                                      key={index}
                                      className="media mt-2 mt-md-3"
                                    >
                                      <img
                                        src={da && da.profilePictureUrl}
                                        className="mr-3"
                                        alt="..."
                                      />
                                      <div className="media-body">
                                        <h5> {da && da.userFullName}</h5>
                                        <div className="pxp-agent-comments-date">
                                          {da && da.createDateTime}
                                        </div>
                                        <p> {da && da.commentText} </p>
                                      </div>
                                    </div>
                                  )
                                )
                              : ""}
                          </div>
                          <form
                            className="pxp-agent-comments-form mt-3 mt-md-4"
                            onSubmit={this.onSubmit}
                          >
                            {user && user.profilePictureUrl ? (
                              <>
                                <div className="row">
                                  <div className="col-sm-12 col-md-6"></div>
                                </div>
                                <div className="form-group comment-send-btn">
                                  <input
                                    className="form-control"
                                    placeholder="Write your review here..."
                                    style={{ height: "75px" }}
                                    name="commentText"
                                    value={commentText}
                                    onChange={this.onChange}
                                  />
                                  <button
                                    type="submit"
                                    className="send-btn-single-property"
                                  >
                                    <img
                                      src={require("../../assets/images/ic_sent.svg")}
                                      alt=""
                                    />
                                  </button>
                                </div>
                              </>
                            ) : (
                              ""
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <StickyBox offsetTop={120}>
                    <div className="pxp-single-property-section pxp-sp-agent-section mt-4 mt-md-5 mt-lg-0">
                      <h3>Listed By</h3>
                      <div className="pxp-sp-agent mt-3 mt-md-4">
                        <Link
                          to={`/single-vendor-${
                            singlePropertyData &&
                            singlePropertyData.user &&
                            singlePropertyData.user.userId
                              ? singlePropertyData.user.userId
                              : ""
                          }`}
                          className="pxp-sp-agent-fig pxp-cover rounded-lg user-profile"
                          style={{
                            backgroundImage: `url(${
                              singlePropertyData &&
                              singlePropertyData.user &&
                              singlePropertyData.user.profilePictureUrl
                                ? singlePropertyData.user.profilePictureUrl
                                : "assets/images/ic_profile_placeholder.png"
                            })`,
                          }}
                        />
                        <div className="pxp-sp-agent-info">
                          <div className="pxp-sp-agent-info-name">
                            <Link
                              to={`/single-vendor-${
                                singlePropertyData &&
                                singlePropertyData.user &&
                                singlePropertyData.user.userId
                                  ? singlePropertyData.user.userId
                                  : ""
                              }`}
                            >
                              {singlePropertyData &&
                              singlePropertyData.user &&
                              singlePropertyData.user.firstName
                                ? singlePropertyData.user.firstName
                                : ""}{" "}
                              {singlePropertyData &&
                              singlePropertyData.user &&
                              singlePropertyData.user.lastName
                                ? singlePropertyData.user.lastName
                                : ""}{" "}
                            </Link>
                          </div>
                          <div className="pxp-sp-agent-info-rating"></div>
                          <div className="pxp-sp-agent-info-phone">
                            {singlePropertyData &&
                            singlePropertyData.user &&
                            singlePropertyData.user.professionDesc
                              ? singlePropertyData.user.professionDesc
                              : ""}
                          </div>
                        </div>
                        <div className="clearfix" />
                        <div className="pxp-sp-agent-btns mt-3 mt-md-4">
                          {user.userId !== singlePropertyData.userId ? (
                            <button
                              className="pxp-sp-agent-btn-main"
                              data-toggle="modal"
                              onClick={
                                (user && user.userStatusDesc === "Inactive") ||
                                user.userStatusDesc === "Rejected" ||
                                user.userStatusDesc === "In Review"
                                  ? () =>
                                      this.props.modelHanlder(
                                        "alertPopup",
                                        `Your Account is been ${
                                          user.userStatusDesc === "Inactive"
                                            ? `${user.userStatusDesc} for 7 days`
                                            : `${user.userStatusDesc}`
                                        } due to ${user.rejectionReason}`
                                      )
                                  : user && user.profilePictureUrl
                                  ? () =>
                                      this.modelHanlder(
                                        "contactModalState",
                                        singlePropertyData.userId
                                      )
                                  : () => this.props.modelHanlder("phoneSignin")
                              }
                            >
                              Contact Us
                            </button>
                          ) : (
                            ""
                          )}
                          {this.state.contactModalState ? (
                            <Contact
                              show={this.state.contactModalState}
                              closeCodelHanlder={this.closeCodelHanlder}
                              vendorId={this.state.vendorId}
                            />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </StickyBox>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
      }
    return (
      <SimpleReactLightbox>
        {pageContent}
      </SimpleReactLightbox>
    )
  }
}

const mapStateToProps = (state) => {
  return {
		page: state.page,
    property: state.property,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCommentAdded: (
      data,
      index,
      userFullName,
      userName,
      profilePictureUrl,
      date
    ) =>
      dispatch(
        actions.AddCommentsUserProp(
          data,
          index,
          userFullName,
          userName,
          profilePictureUrl,
          date
        )
      ),
    onGetSinglePropertyData: (userData) =>
      dispatch(actions.getSingleProperty(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(singleProp);
