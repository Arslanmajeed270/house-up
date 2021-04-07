import React from 'react'
import { Accordion, Card, Col, Row, Media, Dropdown, Badge, 
    // Pagination 
} from 'react-bootstrap';
import './style.css';
export default function VendorProperties( { vendorProperties } ) {
    const userStatusColorHandler = (status) => {
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
    return (
    <Accordion defaultActiveKey="0" style={{marginTop: "30px"}}>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                Vendor Properties
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Row>
                        { vendorProperties.map( (data, index) => (
                            data.category === "Property" &&
                            <Col xs={6} key={index}>
                            <Media>
                                <img
                                    width={101}
                                    height={101}
                                    className="mr-3"
                                    src={data.object && data.object.imageList && 
                                            data.object.imageList.length > 0 ?
                                            data.object.imageList[0].imageURL : 
                                            require(`../../../../assets/images/prop-2-1-gallery.jpg`)
                                        }
                                    alt="Property"
                                />
                                <Media.Body style={{paddingTop: "10px"}}>
                                    <h3 className="vendorPropertiesCardImgHeading" > {data.object && data.object.adTitle && data.object.adTitle} </h3>
                                    <p className="vendorPropertiesCardImgDescription" > {data.object && data.object.description && data.object.description} </p>
                                    <p className="vendorPropertiesCardImgDescription" >${data.object && data.object.price ? data.object.price : 0}
                                    <span style={{float: "right"}} >
                                    <Badge variant={userStatusColorHandler(data.object && data.object.propertyStatusDesc && data.object.propertyStatusDesc)}> {data.object && data.object.propertyStatusDesc && data.object.propertyStatusDesc} </Badge>{' '}
                                    </span>
                                    </p>
                                </Media.Body>
                            </Media>
                            <Dropdown.Divider style={{marginTop: "-7px", border: "1px solid #e9ecef"}} />
                        </Col>
                        
                        )) }
                    </Row>
                    {/* <Pagination>
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
                    </Pagination> */}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
    )
}
