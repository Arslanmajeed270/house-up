import React from 'react'
import { Accordion, Card, Col, Row, Media, Dropdown } from 'react-bootstrap';
import './style.css';
import moment from "moment";
import { limitCharacterHandler } from '../../../../utils/common'
import Viewer from 'react-viewer';

export default function VendorDetails( { vendorsDetail } ) {
    const { profilePictureUrl, emailAddress, firstName, lastName,
        userName, msisdn, businessName, websiteLink, professionDesc,
        qualification, keywordsDescribeYourBusiness, businessStartDate,
        businessRegistrationDocURL, businessSupportingDocURL, userStatusDesc,
        countryDesc, stateDesc, streetAddress, streetAddress1, zipCode, 
        cityDesc, packageSubscribed } = vendorsDetail;

        const [ visibleDocument, setVisibleDocument ] = React.useState(false);
        const [ visibleSupport, setVisibleSupport ] = React.useState(false);


    return (
    <Accordion defaultActiveKey="0">
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                Vendor Details
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Row>
                        <Col>
                            <Media>
                                <img
                                    width={36}
                                    height={36}
                                    className="mr-3"
                                    src={ (profilePictureUrl && profilePictureUrl !== "" ) ? profilePictureUrl : require(`../../../../assets/img/avatar-1.jpg`)}
                                    alt="Vendor"
                                />
                                <Media.Body>
                                    <h2 className="vendorDetailCardImgHeading" > 
                                    { (firstName && firstName !== "" ) ? firstName : "" } { (lastName && lastName !== "" ) ? lastName : "" }
                                    </h2>
                                </Media.Body>
                            </Media>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Username</h2>
                            <p className="vendorDetailCardBlockParagraph" > { (userName && userName !== "" ) ? userName : "" } </p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Email</h2>
                            <p className="vendorDetailCardBlockParagraph" > { (emailAddress && emailAddress !== "" ) ? emailAddress : "" } </p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Phone</h2>
                            <p className="vendorDetailCardBlockParagraph" > { (msisdn && msisdn !== "" ) ? msisdn : "" } </p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Business Name</h2>
                            <p className="vendorDetailCardBlockParagraph" > { (businessName && businessName !== "" ) ? businessName : "Not provided" } </p>
                        </Col>
                    </Row>
                    <Dropdown.Divider />
                    <Row>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Website</h2>
                            <p className="vendorDetailCardBlockParagraph" > { (websiteLink && websiteLink !== "" ) ? websiteLink : "Not provided" } </p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Professional</h2>
                            <p className="vendorDetailCardBlockParagraph" > { (professionDesc && professionDesc !== "" ) ? professionDesc : "Not provided" } </p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Qualifications</h2>
                            <p className="vendorDetailCardBlockParagraph" > { (qualification && qualification !== "" ) ? qualification : "Not provided" } </p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Key words</h2>
                            <p className="vendorDetailCardBlockParagraph" > { (keywordsDescribeYourBusiness && keywordsDescribeYourBusiness !== "" ) ? keywordsDescribeYourBusiness : "Not provided" } </p>
                        </Col>
                    </Row>
                    <Dropdown.Divider />
                    <Row>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Business started</h2>
                            <p className="vendorDetailCardBlockParagraph" > { (businessStartDate && businessStartDate !== "" ) ? moment(businessStartDate).format('DD MMM YYYY') : "Not provided" }</p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Business registration</h2>
                            <p 
                            className="vendorDetailCardBlockParagraph" 
                            style={{color: "#007AFF", cursor: "pointer"}}
                            onClick={() => setVisibleDocument(true)} 
                            > { (businessRegistrationDocURL && businessRegistrationDocURL !== "" ) ? limitCharacterHandler(businessRegistrationDocURL) : "Not provided" } </p>
                        </Col>
                        <Viewer
                            visible={visibleDocument}
                            onClose={() => { setVisibleDocument(false); } }
                            images={[{src: businessRegistrationDocURL, alt: ''}]}
                            changeable={false}
                        />
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Supporting documents</h2>
                            <p 
                            className="vendorDetailCardBlockParagraph" 
                            style={{color: "#007AFF", cursor: "pointer"}}
                            onClick={() => setVisibleSupport(businessSupportingDocURL)} 
                             >{ (businessSupportingDocURL && businessSupportingDocURL !== "" ) ? limitCharacterHandler(businessSupportingDocURL) : "Not provided" }</p>
                        </Col>
                        <Viewer
                            visible={visibleSupport}
                            onClose={() => { setVisibleSupport(false); } }
                            images={[{src: businessSupportingDocURL, alt: ''}]}
                            changeable={false}
                        />
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >User Status</h2>
                            <p className="vendorDetailCardBlockParagraph" style={{color: "#00C121"}} > { (userStatusDesc && userStatusDesc !== "" ) ? userStatusDesc : "Not provided" } </p>
                        </Col>
                    </Row>
                    <Dropdown.Divider />
                    <Row>
                        <Col md={6}>
                            <h2 className="vendorDetailCardBlockHeading" >Address</h2>
                            <p className="vendorDetailCardBlockParagraph" >
                            {zipCode} {streetAddress} {streetAddress1}, {cityDesc}, {stateDesc}, {countryDesc}
                                </p>
                        </Col>
                       <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Subscribe Plan</h2>
                            <p className="vendorDetailCardBlockParagraph" > { (packageSubscribed && packageSubscribed.packageDetail ) ? packageSubscribed.packageDetail.packageName+" Plan ($"+packageSubscribed.packageDetail.packagePrice+")"  : "Not Subscribed yet" }</p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Plan Expire</h2>
                            <p className="vendorDetailCardBlockParagraph">  { (packageSubscribed && packageSubscribed.packageRenewalDate ) ? moment(packageSubscribed.packageRenewalDate).format('DD MMM, YYYY')  : "Not Subscribed yet" }
                            <span style={{color: "#007AFF", float: "right", cursor: "pointer"}}  >Auto new</span>
                            </p>
                        </Col>
                    </Row>
                    <Dropdown.Divider />
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
    )
}
