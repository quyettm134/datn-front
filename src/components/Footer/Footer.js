import React from "react";
import "./Footer.css";
import { Col, Row, Container, Image, Form, Button } from "react-bootstrap";
import Logo from "../../assets/images/Logo.png";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
export default function Footer() {
    return (
        <Container fluid className="footer-content" style={{
            height: '190px',
            backgroundColor: '#000000',
            color: '#ffffff',
        }}>
            <Row className="d-flex justify-content-center">
                <Col className="col-md-3" style={{
                    marginTop: '15px',
                    marginRight: '35px'
                }}>
                    <Row>
                        <Col className="col-md-auto">
                            <Image src={Logo} style={{
                                width: '50px',
                                heigth: '50px',
                            }}/>
                        </Col>
                        <Col className="col-md-auto align-self-center fs-4" >KQQ</Col>
                    </Row>
                    <Row className="text-start">
                        Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.Cras egestas purus 
                    </Row>
                    <Row style={{
                        marginTop: '20px'
                    }}>
                        <Col className="col-md-auto"><BsFacebook /></Col>
                        <Col className="col-md-auto"><BsTwitter /></Col>
                        <Col className="col-md-auto"><BsInstagram /></Col>
                        <Col className="col-md-auto"><BsYoutube /></Col>
                        <Col className="col-md-auto"><BsLinkedin /></Col>
                    </Row>
                </Col>

                <Col className="col-md-2" style={{
                    marginTop: '25px',
                    marginLeft: '25px'
                }}>
                    <Row>CATEGORY</Row>
                    <Row style={{marginTop: '10px', cursor: 'pointer'}}>Handbags</Row>
                    <Row style={{marginTop: '5px', cursor: 'pointer'}}>Rings</Row>
                    <Row style={{marginTop: '5px', cursor: 'pointer'}}>Necklaces</Row>
                    <Row style={{marginTop: '5px', cursor: 'pointer'}}>Watches</Row>
                </Col>
                <Col className="col-md-2" style={{
                    marginTop: '25px',
                    marginRight: '25px'
                }}>
                    <Row>SUPPORT</Row>
                    <Row style={{marginTop: '10px', cursor: 'pointer'}}>Shipping Services</Row>
                    <Row style={{marginTop: '5px', cursor: 'pointer'}}>Payment Options</Row>
                    <Row style={{marginTop: '5px', cursor: 'pointer'}}>Return & Exchanges</Row>
                    <Row style={{marginTop: '5px', cursor: 'pointer'}}>Contact Us</Row>
                </Col>

                <Col className="col-md-3" style={{
                    marginTop: '25px',
                }}>
                    <Row>NEWSLETTER</Row>
                    <Row style={{
                        marginTop: '10px',
                    }}>
                        <Col className="col-sm-auto justify-content-start">
                            <Form.Control type="email" placeholder="Enter your email" style={{
                                width: '240px',
                            }}></Form.Control>
                        </Col>
                        <Col className="col-sm-1">
                            <Button variant="dark" style={{
                                backgroundColor: "#938484",
                            }}>SUBSCRIBE</Button>
                        </Col>
                    </Row>
                    <Row className="text-start" style={{
                        marginTop: '10px'
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}