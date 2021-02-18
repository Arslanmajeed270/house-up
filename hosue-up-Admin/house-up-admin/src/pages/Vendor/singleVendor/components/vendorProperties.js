import React from 'react'
import { Accordion, Card, Col, Row, Media, Dropdown, Badge, Pagination } from 'react-bootstrap';
import './style.css';
export default function vendorProperties( { vendorsDetail } ) {
    return (
    <Accordion defaultActiveKey="0" style={{marginTop: "30px"}}>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                Vendor Properties
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Row>
                        <Col>
                            <Media>
                                <img
                                    width={101}
                                    height={101}
                                    className="mr-3"
                                    src={require(`../../../../assets/images/prop-2-1-gallery.jpg`)}
                                    alt="Vendor"
                                />
                                <Media.Body style={{paddingTop: "10px"}}>
                                    <h3 className="vendorPropertiesCardImgHeading" >Chic Apartment in Downtown</h3>
                                    <p className="vendorPropertiesCardImgDescription" >7250 Keele St, Concord, ON L4K 1Z8, Canada</p>
                                    <p className="vendorPropertiesCardImgDescription" >$980,000
                                    <span style={{float: "right"}} >
                                    <Badge variant="success">Active</Badge>{' '}
                                    </span>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Dropdown.Divider style={{marginTop: "-7px", border: "1px solid #e9ecef"}} />
                        </Col>
                        <Col>
                            <Media>
                                <img
                                    width={101}
                                    height={101}
                                    className="mr-3"
                                    src={require(`../../../../assets/images/prop-2-1-gallery.jpg`)}
                                    alt="Vendor"
                                />
                                <Media.Body style={{paddingTop: "10px"}}>
                                    <h3 className="vendorPropertiesCardImgHeading" >Chic Apartment in Downtown</h3>
                                    <p className="vendorPropertiesCardImgDescription" >7250 Keele St, Concord, ON L4K 1Z8, Canada</p>
                                    <p className="vendorPropertiesCardImgDescription" >$980,000
                                    <span style={{float: "right"}} >
                                    <Badge variant="success">Active</Badge>{' '}
                                    </span>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Dropdown.Divider style={{marginTop: "-7px", border: "1px solid #e9ecef"}} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Media>
                                <img
                                    width={101}
                                    height={101}
                                    className="mr-3"
                                    src={require(`../../../../assets/images/prop-2-1-gallery.jpg`)}
                                    alt="Vendor"
                                />
                                <Media.Body style={{paddingTop: "10px"}}>
                                    <h3 className="vendorPropertiesCardImgHeading" >Chic Apartment in Downtown</h3>
                                    <p className="vendorPropertiesCardImgDescription" >7250 Keele St, Concord, ON L4K 1Z8, Canada</p>
                                    <p className="vendorPropertiesCardImgDescription" >$980,000
                                    <span style={{float: "right"}} >
                                    <Badge variant="success">Active</Badge>{' '}
                                    </span>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Dropdown.Divider style={{marginTop: "-7px", border: "1px solid #e9ecef"}} />
                        </Col>
                        <Col>
                            <Media>
                                <img
                                    width={101}
                                    height={101}
                                    className="mr-3"
                                    src={require(`../../../../assets/images/prop-2-1-gallery.jpg`)}
                                    alt="Vendor"
                                />
                                <Media.Body style={{paddingTop: "10px"}}>
                                    <h3 className="vendorPropertiesCardImgHeading" >Chic Apartment in Downtown</h3>
                                    <p className="vendorPropertiesCardImgDescription" >7250 Keele St, Concord, ON L4K 1Z8, Canada</p>
                                    <p className="vendorPropertiesCardImgDescription" >$980,000
                                    <span style={{float: "right"}} >
                                    <Badge variant="success">Active</Badge>{' '}
                                    </span>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Dropdown.Divider style={{marginTop: "-7px", border: "1px solid #e9ecef"}} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Media>
                                <img
                                    width={101}
                                    height={101}
                                    className="mr-3"
                                    src={require(`../../../../assets/images/prop-2-1-gallery.jpg`)}
                                    alt="Vendor"
                                />
                                <Media.Body style={{paddingTop: "10px"}}>
                                    <h3 className="vendorPropertiesCardImgHeading" >Chic Apartment in Downtown</h3>
                                    <p className="vendorPropertiesCardImgDescription" >7250 Keele St, Concord, ON L4K 1Z8, Canada</p>
                                    <p className="vendorPropertiesCardImgDescription" >$980,000
                                    <span style={{float: "right"}} >
                                    <Badge variant="success">Active</Badge>{' '}
                                    </span>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Dropdown.Divider style={{marginTop: "-7px", border: "1px solid #e9ecef"}} />
                        </Col>
                        <Col>
                            <Media>
                                <img
                                    width={101}
                                    height={101}
                                    className="mr-3"
                                    src={require(`../../../../assets/images/prop-2-1-gallery.jpg`)}
                                    alt="Vendor"
                                />
                                <Media.Body style={{paddingTop: "10px"}}>
                                    <h3 className="vendorPropertiesCardImgHeading" >Chic Apartment in Downtown</h3>
                                    <p className="vendorPropertiesCardImgDescription" >7250 Keele St, Concord, ON L4K 1Z8, Canada</p>
                                    <p className="vendorPropertiesCardImgDescription" >$980,000
                                    <span style={{float: "right"}} >
                                    <Badge variant="success">Active</Badge>{' '}
                                    </span>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Dropdown.Divider style={{marginTop: "-7px", border: "1px solid #e9ecef"}} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Media>
                                <img
                                    width={101}
                                    height={101}
                                    className="mr-3"
                                    src={require(`../../../../assets/images/prop-2-1-gallery.jpg`)}
                                    alt="Vendor"
                                />
                                <Media.Body style={{paddingTop: "10px"}}>
                                    <h3 className="vendorPropertiesCardImgHeading" >Chic Apartment in Downtown</h3>
                                    <p className="vendorPropertiesCardImgDescription" >7250 Keele St, Concord, ON L4K 1Z8, Canada</p>
                                    <p className="vendorPropertiesCardImgDescription" >$980,000
                                    <span style={{float: "right"}} >
                                    <Badge variant="success">Active</Badge>{' '}
                                    </span>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Dropdown.Divider style={{marginTop: "-7px", border: "1px solid #e9ecef"}} />
                        </Col>
                        <Col>
                            <Media>
                                <img
                                    width={101}
                                    height={101}
                                    className="mr-3"
                                    src={require(`../../../../assets/images/prop-2-1-gallery.jpg`)}
                                    alt="Vendor"
                                />
                                <Media.Body style={{paddingTop: "10px"}}>
                                    <h3 className="vendorPropertiesCardImgHeading" >Chic Apartment in Downtown</h3>
                                    <p className="vendorPropertiesCardImgDescription" >7250 Keele St, Concord, ON L4K 1Z8, Canada</p>
                                    <p className="vendorPropertiesCardImgDescription" >$980,000
                                    <span style={{float: "right"}} >
                                    <Badge variant="success">Active</Badge>{' '}
                                    </span>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Dropdown.Divider style={{marginTop: "-7px", border: "1px solid #e9ecef"}} />
                        </Col>
                    </Row>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
    )
}
