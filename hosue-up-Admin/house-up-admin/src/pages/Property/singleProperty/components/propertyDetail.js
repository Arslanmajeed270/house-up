import React from 'react'
import {  Badge, Card, Col, Row, Media, Dropdown } from 'react-bootstrap';
import './style.css';
import ImageGallery from './imageGallery';
import GoogleMapReact from './googleMap';
import moment from 'moment';

export default function propertyDetail( { propertyDetail } ) {

    const propertyStatusColorHandler = (status) => {
        if( status === "Suspended" ){
          return "danger";
        }
        else if( status === "Inactive" ){
          return "warning";
        }
        else if( status === "In Review" ){
          return "secondary";
        }
        else if( status === "Approved" ){
          return "info";
        }
        else if( status === "Active" ){
          return "success";
        }
      }


    const { adTitle, price, address,contactName, createdDate, 
        currency, imageList, propertyStatusDesc, propertyType, rentalListingYN,
        user, buildingType, basementType, condoFee, description, finishedSqftArea, 
        garageType, latitude, longitude, lotDimensionLength, lotDimensionWidth,
        lotTotalArea, noOfBathrooms, noOfBedrooms, parkingSpaces,
        primaryHeatingFuel, propertyComments, 
        storeys, waterSourceType, yearBuilt, yearFurnaceBuilt, 
        yearRoofInstalled, amenites } = propertyDetail;
    return (
    <Card>
        <Row>
            <Col>
                <h1 className="propertiesImagesGridTitle" > {adTitle} </h1>
                <p className="propertiesImagesGridPrice" >${price} {currency && currency.lable && currency.lable }</p>
                <p className="propertiesImagesGridBasePrice" style={{float: "right", color: "#000000", paddingRight: "15px"}}>
                Basic ($10)
                <span style={{paddingLeft: "15px"}}> 
                    <Badge variant={propertyStatusColorHandler(propertyStatusDesc)} className="customStatus" >{propertyStatusDesc}</Badge>{' '}
                </span>
                </p>
            </Col>
        </Row>
        <Row>
            <Col>
            <div>
                <ImageGallery imageList={imageList && imageList.length ? imageList : [] }  />
            </div>
            </Col>
        </Row>
        <Card.Body>
        <Row>
            <Col>
                <Media>
                    <img
                        width={36}
                        height={36}
                        className="mr-3"
                        src={user && user.profilePictureUrl ? user.profilePictureUrl : require(`../../../../assets/img/avatar-1.jpg`)}
                        alt="property"
                    />
                    <Media.Body>
                        <h2 className="propertyDetailCardImgHeading" > { user && user.firstName &&  user.firstName } {user && user.lastName && user.lastName}</h2>
                    </Media.Body>
                </Media>
            </Col>
        </Row>
        <Row>
            <Col>
                <h2 className="propertyDetailCardBlockHeading" >Username</h2>
                <p className="propertyDetailCardBlockParagraph" > { user && user.userName && user.userName} </p>
            <Dropdown.Divider />
            </Col>
            <Col>
                <h2 className="propertyDetailCardBlockHeading" >Email</h2>
                <p className="propertyDetailCardBlockParagraph" > { user && user.emailAddress && user.emailAddress} </p>
            <Dropdown.Divider />
            </Col>
            <Col>
                <h2 className="propertyDetailCardBlockHeading" >Phone</h2>
                <p className="propertyDetailCardBlockParagraph" > { user && user.msisdn && user.msisdn} </p>
            <Dropdown.Divider />
            </Col>
        </Row> 
        <Row>
            <Col style={{paddingTop: "50px"}} >
                <h2 className="propertyDetailCardBlockHeading" >
                    Address: <span className="propertyDetailCardBlockParagraph" >
                    {address}
                    </span>
                </h2>
                <h2 className="propertyDetailCardBlockHeading" >
                    Property type: <span className="propertyDetailCardBlockParagraph" >
                        { propertyType }
                    </span>
                </h2>
                <h2 className="propertyDetailCardBlockHeading" >
                    Rental: <span className="propertyDetailCardBlockParagraph" >
                        {rentalListingYN}
                    </span>
                </h2>
                <h2 className="propertyDetailCardBlockHeading" >
                    For sale by: <span className="propertyDetailCardBlockParagraph" >
                        {contactName}
                    </span>
                </h2>
                <h2 className="propertyDetailCardBlockHeading" >
                    Date listed: <span className="propertyDetailCardBlockParagraph" >
                        { moment(createdDate).format('MMMM DD, YYYY') }
                    </span>
                </h2>
                <Dropdown.Divider />
            </Col>
        </Row>
        <Row>
            <Col style={{paddingTop: "30px"}} >
                <p className="propertyDetailHading" >
                Details
                </p>
            </Col>
        </Row>
        <Row>
            {propertyType &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Property type</h2>
                    <p className="propertyDetailCardBlockParagraph" >{propertyType}</p>
                <Dropdown.Divider />
                </Col>
            }
            {rentalListingYN &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Rent/Sell</h2>
                    <p className="propertyDetailCardBlockParagraph" >{rentalListingYN}</p>
                <Dropdown.Divider />
                </Col>
            }
            { propertyType === "House" && buildingType &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Building type</h2>
                    <p className="propertyDetailCardBlockParagraph" >{buildingType}</p>
                <Dropdown.Divider />
                </Col>            
            }
            { noOfBedrooms &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Bedrooms</h2>
                    <p className="propertyDetailCardBlockParagraph" >{noOfBedrooms}</p>
                <Dropdown.Divider />
                </Col>
            }
            { noOfBathrooms &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Bathrooms</h2>
                    <p className="propertyDetailCardBlockParagraph" >{noOfBathrooms}</p>
                <Dropdown.Divider />
                </Col>
            }
            { finishedSqftArea &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Finishes square feet</h2>
                    <p className="propertyDetailCardBlockParagraph" >{finishedSqftArea}</p>
                <Dropdown.Divider />
                </Col>
            }
            { propertyType === "House" && lotDimensionLength && lotDimensionWidth &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Lot dimensions (feet)</h2>
                    <p className="propertyDetailCardBlockParagraph" >{lotDimensionLength} * {lotDimensionWidth}</p>
                <Dropdown.Divider />
                </Col>
            }
            { propertyType === "House" && lotTotalArea &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Lot area</h2>
                    <p className="propertyDetailCardBlockParagraph" >{lotTotalArea}</p>
                <Dropdown.Divider />
                </Col>
            }
            { yearBuilt === "House" &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Year built</h2>
                    <p className="propertyDetailCardBlockParagraph" >{yearBuilt}</p>
                <Dropdown.Divider />
                </Col>
            }
            { propertyType === "House" && basementType &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Basement Type</h2>
                    <p className="propertyDetailCardBlockParagraph" >{basementType}</p>
                <Dropdown.Divider />
                </Col>
            }
            { propertyType === "House" && garageType &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Garage Type</h2>
                    <p className="propertyDetailCardBlockParagraph" >{garageType}</p>
                <Dropdown.Divider />
                </Col>
            }
             { propertyType === "House" && primaryHeatingFuel &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Primary heating fuel</h2>
                    <p className="propertyDetailCardBlockParagraph" >{ primaryHeatingFuel }</p>
                <Dropdown.Divider />
                </Col>
            }
            { propertyType === "House" && yearFurnaceBuilt &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Year furnace installed</h2>
                    <p className="propertyDetailCardBlockParagraph" >{yearFurnaceBuilt}</p>
                <Dropdown.Divider />
                </Col>
            }
            { propertyType === "House" && yearRoofInstalled &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Year roof installed</h2>
                    <p className="propertyDetailCardBlockParagraph" >{yearRoofInstalled}</p>
                <Dropdown.Divider />
                </Col>
            }
            { propertyType === "House" && storeys &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Storeys</h2>
                    <p className="propertyDetailCardBlockParagraph" >{storeys}</p>
                <Dropdown.Divider />
                </Col>
            }
            { propertyType === "House" && waterSourceType &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Water source</h2>
                    <p className="propertyDetailCardBlockParagraph" >{waterSourceType}</p>
                <Dropdown.Divider />
                </Col>
            }
            { propertyType !== "House" && parkingSpaces &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Parking spaces</h2>
                    <p className="propertyDetailCardBlockParagraph" >{parkingSpaces}</p>
                <Dropdown.Divider />
                </Col>
            }
            { propertyType !== "House" && condoFee &&
                <Col xs={4}>
                    <h2 className="propertyDetailCardBlockHeading" >Condo fees (/month)</h2>
                    <p className="propertyDetailCardBlockParagraph" >{condoFee}</p>
                <Dropdown.Divider />
                </Col>
            }
        </Row> 
        <Row>
            <Col style={{paddingTop: "30px"}} >
                <p className="propertyDetailHading" >
                Description
                </p>
            </Col>
        </Row>
        <Row>
        <Col>
            <p>
            { description }
            </p>
        </Col>
        </Row>
            <Dropdown.Divider />
        <Row>
            <Col style={{paddingTop: "30px"}} >
                <p className="propertyDetailHading" >
                Amenities
                </p>
            </Col>
        </Row>
        <Row>
            { amenites && amenites.internet &&
                <Col xs={4} >
                    <h2 className="propertyDetailCardBlockHeading" style={{padding: "15px"}} >Internet</h2>
                    <Dropdown.Divider />
                </Col>
            }
            { amenites && amenites.garage &&
                <Col xs={4} >
                    <h2 className="propertyDetailCardBlockHeading" style={{padding: "15px"}} >Garage</h2>
                    <Dropdown.Divider />
                </Col>
            }
             { amenites && amenites.ac &&
                <Col xs={4} >
                    <h2 className="propertyDetailCardBlockHeading" style={{padding: "15px"}} >Air Conditioning</h2>
                    <Dropdown.Divider />
                </Col>
            }
             { amenites && amenites.dishWasher &&
                <Col xs={4} >
                    <h2 className="propertyDetailCardBlockHeading" style={{padding: "15px"}} >Dishwasher</h2>
                    <Dropdown.Divider />
                </Col>
            }
             { amenites && amenites.disposal &&
                <Col xs={4} >
                    <h2 className="propertyDetailCardBlockHeading" style={{padding: "15px"}} >Disposal</h2>
                    <Dropdown.Divider />
                </Col>
            }
             { amenites && amenites.balcony &&
                <Col xs={4} >
                    <h2 className="propertyDetailCardBlockHeading" style={{padding: "15px"}} >Balcony</h2>
                    <Dropdown.Divider />
                </Col>
            }
             { amenites && amenites.gym &&
                <Col xs={4} >
                    <h2 className="propertyDetailCardBlockHeading" style={{padding: "15px"}} >Gym</h2>
                    <Dropdown.Divider />
                </Col>
            }
             { amenites && amenites.playroom &&
                <Col xs={4} >
                    <h2 className="propertyDetailCardBlockHeading" style={{padding: "15px"}} >Playroom</h2>
                    <Dropdown.Divider />
                </Col>
            }
             { amenites && amenites.bar &&
                <Col xs={4} >
                    <h2 className="propertyDetailCardBlockHeading" style={{padding: "15px"}} >Bar</h2>
                    <Dropdown.Divider />
                </Col>
            }
        </Row> 
        <Row>
            <Col style={{paddingTop: "30px"}} >
                <p className="propertyDetailHading" >
                Explore the Area
                </p>
            </Col>
        </Row>
        <Row>
             <Col>
                <p style={{fontSize: "16px"}}>
                    <span style={{paddingRight: "20px"}} > Transportation </span>
                    <span style={{paddingRight: "20px"}} > School </span>
                    <span style={{paddingRight: "20px"}} > SHopping </span>
                    <span style={{paddingRight: "20px"}} > Cafes & BARS </span>
                    <span style={{paddingRight: "20px"}} > ARTS & ENTERTAINMENT </span>
                    <span style={{paddingRight: "20px"}} > FITNESS </span>
                </p>
            </Col>
        </Row>
        <Row>
             <Col>
                <GoogleMapReact 
                latitude={latitude}
                longitude={longitude} />
            </Col>
        </Row>
        <Row style={{paddingTop: "20px"}}>
        {propertyComments && propertyComments.length && propertyComments.map( (data, idx) =>(
            <Col style={{paddingTop: "30px"}} key={idx} xs={12} >
            <Media style={{marginLeft: '7%', border: "2px solid #DEDEDE", padding: "10px", maxWidth: "80%"}}> 
                <img
                    width={50}
                    height={50}
                    style={{borderRadius: "50%"}}
                    src={data.profilePictureUrl ? data.profilePictureUrl : require(`../../../../assets/img/avatar-1.jpg`)}
                    alt="Vendor"
                />
                <Media.Body style={{paddingLeft: "10px"}}>
                    <h5> <span style={{color: "#8E8E93", fontSize: "20px" }}> by</span> {data.userFullName && data.userFullName} <span style={{color: "#8E8E93", fontSize: "20px" }}> - {data.createDateTime && data.createDateTime}</span></h5>
                    <p>
                        {data.commentText && data.commentText}
                    </p>
                </Media.Body>
            </Media>
            </Col>
        
        )) }
            </Row>
        </Card.Body>    
    </Card>

    )
}
