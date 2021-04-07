import React from 'react'
import { Accordion, Card, Col, Row, Media, Dropdown, Badge, 
    // Pagination 
} from 'react-bootstrap';
import './style.css';
export default function VendorPots( { vendorPost } ) {

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
                Vendor Post
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Row>
                    { vendorPost.map( (data, index) => (
                            data.category === "Post" &&
                        <Col xs={6} key={index} >
                            <Media>
                                <img
                                    width={101}
                                    height={101}
                                    className="mr-3"
                                    src={ data.object && data.object.postImages && 
                                        data.object.postImages.length > 0 ?
                                        data.object.postImages[0].imageURL :require(`../../../../assets/images/prop-2-1-gallery.jpg`)}
                                    alt="Post"
                                />
                                <Media.Body style={{paddingTop: "10px", position: "relative", height: "101px", lineHeight: "20px"}}>
                                    <p style={{width: "100%"}} >
                                    {data.object && data.object.postText && data.object.postText} 
                                    </p>
                                    <p style={{width: "100%", position: "absolute",  fontSize: "16px", color: "#8E8E93", bottom: "0px", marginBottom: "0px"}}>
                                        {data.object && data.object.address && data.object.address} 
                                        {data.object && data.object.city && data.object.city}, 
                                        {data.object && data.object.state && data.object.state}, 
                                        {data.object && data.object.country && data.object.country}

                                            <span style={{float: "right"}} >
                                            <Badge variant={userStatusColorHandler(data.object && data.object.postStatusDesc && data.object.postStatusDesc)}>{data.object && data.object.postStatusDesc && data.object.postStatusDesc}</Badge>{' '}
                                        </span>
                                        </p>
                                    
                                </Media.Body>
                            </Media>
                            <Dropdown.Divider style={{ border: "1px solid #e9ecef"}} />
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