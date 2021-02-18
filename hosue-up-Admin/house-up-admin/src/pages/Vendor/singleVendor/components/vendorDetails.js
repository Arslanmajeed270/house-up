import React from 'react'
import { Accordion, Card, Col, Row, Media, Dropdown } from 'react-bootstrap';
import './style.css';
export default function vendorDetails( { vendorsDetail } ) {
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
                                    src={require(`../../../../assets/img/avatar-1.jpg`)}
                                    alt="Vendor"
                                />
                                <Media.Body>
                                    <h2 className="vendorDetailCardImgHeading" >Adnan Qureshi</h2>
                                </Media.Body>
                            </Media>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Username</h2>
                            <p className="vendorDetailCardBlockParagraph" >adnan.ahsan</p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Email</h2>
                            <p className="vendorDetailCardBlockParagraph" >adnan.ahsan21@gmail.com</p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Phone</h2>
                            <p className="vendorDetailCardBlockParagraph" >+923008134076</p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Business Name</h2>
                            <p className="vendorDetailCardBlockParagraph" >EnnVisions</p>
                        </Col>
                    </Row>
                    <Dropdown.Divider />
                    <Row>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Website</h2>
                            <p className="vendorDetailCardBlockParagraph" >www.ennvisions.com</p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Professional</h2>
                            <p className="vendorDetailCardBlockParagraph" >Lawyers</p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Qualifications</h2>
                            <p className="vendorDetailCardBlockParagraph" >LLB. LLM</p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Key words</h2>
                            <p className="vendorDetailCardBlockParagraph" >lawyers, Law, Legal,</p>
                        </Col>
                    </Row>
                    <Dropdown.Divider />
                    <Row>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Business started</h2>
                            <p className="vendorDetailCardBlockParagraph" >25 June, 2015</p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Business registration</h2>
                            <p className="vendorDetailCardBlockParagraph" style={{color: "#007AFF"}} >Business Doc.JPG</p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Supporting documents</h2>
                            <p className="vendorDetailCardBlockParagraph" style={{color: "#007AFF"}} >Supporting Doc.PNG</p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >User Status</h2>
                            <p className="vendorDetailCardBlockParagraph" style={{color: "#00C121"}} >ACTIVE</p>
                        </Col>
                    </Row>
                    <Dropdown.Divider />
                    <Row>
                        <Col md={6}>
                            <h2 className="vendorDetailCardBlockHeading" >Address</h2>
                            <p className="vendorDetailCardBlockParagraph" >7250 Keele St, Concord, ON L4K 1Z8, Canada</p>
                        </Col>
                       <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Subscribe Plan</h2>
                            <p className="vendorDetailCardBlockParagraph" >Monthly Plan ($9.00)</p>
                        </Col>
                        <Col>
                            <h2 className="vendorDetailCardBlockHeading" >Plan Expire</h2>
                            <p className="vendorDetailCardBlockParagraph">25 June, 2015
                            <span style={{color: "#007AFF", float: "right"}}  >Auto new</span>
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
