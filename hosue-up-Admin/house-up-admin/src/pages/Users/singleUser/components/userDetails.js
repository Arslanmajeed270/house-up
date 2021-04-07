import React from 'react'
import { Accordion, Card, Col, Row, Media, Dropdown } from 'react-bootstrap';
import './style.css';
export default function UserDetails( { userDetail } ) {
    const { profilePictureUrl, emailAddress, firstName, lastName,
        userName, msisdn} = userDetail;
    return (
    <Accordion defaultActiveKey="0">
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                User Details
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
                            <h2 className="userDetailCardBlockHeading" >Username</h2>
                            <p className="userDetailCardBlockParagraph" > { (userName && userName !== "" ) ? userName : "" } </p>
                        </Col>
                        <Col>
                            <h2 className="userDetailCardBlockHeading" >Email</h2>
                            <p className="userDetailCardBlockParagraph" > { (emailAddress && emailAddress !== "" ) ? emailAddress : "" } </p>
                        </Col>
                        <Col>
                            <h2 className="userDetailCardBlockHeading" >Phone</h2>
                            <p className="userDetailCardBlockParagraph" > { (msisdn && msisdn !== "" ) ? msisdn : "" } </p>
                        </Col>
                    </Row>
                    <Dropdown.Divider />
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
    )
}
