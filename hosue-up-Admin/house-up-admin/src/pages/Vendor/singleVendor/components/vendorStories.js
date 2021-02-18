import React from 'react'
import { Accordion, Card, Col, Row, Dropdown, Pagination, Badge } from 'react-bootstrap';
import './style.css';
export default function vendorStories( { vendorsDetail } ) {
    return (
    <Accordion defaultActiveKey="0" style={{marginTop: "30px"}}>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                Vendor Story
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Row>
                        <Col>
                            <Card style={{ width: '210px' }}>
                                <Card.Img variant="top" src={require('../../../../assets/images/prop-7-3-gallery.jpg')} />
                                <Card.Body>
                                    <Card.Text>
                                        Concord, ON L4K 1Z8, Canada 12 June,2020 12:45 AM
                                        <span style={{float: "right"}} >
                                    <Badge variant="success">Active</Badge>{' '}
                                    </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '210px' }}>
                                <Card.Img variant="top" src={require('../../../../assets/images/prop-7-3-gallery.jpg')} />
                                <Card.Body>
                                    <Card.Text>
                                        Concord, ON L4K 1Z8, Canada 12 June,2020 12:45 AM
                                        <span style={{float: "right"}} >
                                    <Badge variant="success">Active</Badge>{' '}
                                    </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '210px' }}>
                                <Card.Img variant="top" src={require('../../../../assets/images/prop-7-3-gallery.jpg')} />
                                <Card.Body>
                                    <Card.Text>
                                        Concord, ON L4K 1Z8, Canada 12 June,2020 12:45 AM
                                        <span style={{float: "right"}} >
                                    <Badge variant="success">Active</Badge>{' '}
                                    </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '210px' }}>
                                <Card.Img variant="top" src={require('../../../../assets/images/prop-7-3-gallery.jpg')} />
                                <Card.Body>
                                    <Card.Text>
                                        Concord, ON L4K 1Z8, Canada 12 June,2020 12:45 AM
                                        <span style={{float: "right"}} >
                                    <Badge variant="success">Active</Badge>{' '}
                                    </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                    </Row>
                            <Dropdown.Divider style={{border: "1px solid #e9ecef"}} />
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
