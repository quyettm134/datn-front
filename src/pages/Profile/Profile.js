import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Profile.css";
export default function Profile() {
    return (
        <>
            <Header/>
            
            <Container className="profile-content" fluid style={{
                backgroundColor: '#EDEBEB',
            }}>
                <Row className="d-flex justify-content-between align-items-center">
                    <Col xs={1}></Col>
                    
                    <Col className="col-md-5 bg-light text-center">
                        <Row className="d-flex gy-5">
                            <Col className="justify-content-start gy-2">
                                <Image className="shadow" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" style={{
                                    width: '200px',
                                    height: '200px',
                                }} roundedCircle/>
                            </Col>
                            <Col className="align-self-center text-start">
                                <p className="text fs-1">Hello,</p>
                                <p className="text fs-2 fw-bold">Thai Dinh Kha</p>
                            </Col>
                        </Row>

                        <Row className="d-flex gy-2">
                            <p>Account overview</p>
                        </Row>

                        <Row><p>My orders</p></Row>
                        <Row><p>My returns</p></Row>
                        <Row><p>My details</p></Row>
                        <Row><p>Payment methods</p></Row>
                        <Row><p>Favorite items</p></Row>
                        <Row><p>My vouchers</p></Row>
                        <Row><p>Change password</p></Row>
                        <Row><p>Sign out</p></Row>
                        <Row><p>Customer services</p></Row>
                    </Col>

                    <Col className="col-sm-1"></Col>

                    <Col className="col-md-4 bg-light">
                        <Row className="d-flex align-items-center text-start">
                            <Row className="fs-2"><p>Account overview</p></Row>
                            <Row><p>Manage profile information for account safety</p></Row>
                        </Row>

                        <hr/>
                    
                        <Row className="d-flex" style={{ overflow: 'hidden' }}>
                            <Row className="justify-content-center gy-2">
                                <Image className="shadow" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" style={{
                                    width: '200px',
                                    height: '200px',
                                }} roundedCircle/>
                            </Row>
                            
                            <Row className="justify-content-center gy-2">
                                <Button style={{width: '100px'}} variant="dark">Change</Button>
                            </Row>

                            <Row className="justify-content-center text-center gy-2">
                                <p>Maximum file size: 1 MB</p>
                                <p>Format: .JPEG, .PNG</p>
                            </Row>
                        </Row>

                        <hr/>

                        <Row className="d-flex align-items-center justify-content-center">
                            <Col className="text-end">
                                <Row><p>Username</p></Row>
                                <Row><p>Full name</p></Row>
                                <Row><p>Email</p></Row>
                                <Row><p>Phone</p></Row>
                                <Row><p>Gender</p></Row>
                                <Row><p>DoB</p></Row>
                                <Row><p>Address</p></Row>
                            </Col>

                            <Col xs={1}>
                                <div className="vr" style={{
                                    height: '272px'
                                }}></div>
                            </Col>

                            <Col className="text-start">
                                <Row><p>khathai01</p></Row>
                                <Row><p>Thai Dinh Kha</p></Row>
                                <Row><p>khathai01@gmail.com</p></Row>
                                <Row><p>0123456789</p></Row>
                                <Row><p>Male</p></Row>
                                <Row><p>01/01/2001</p></Row>
                                <Row><p>Ho Chi Minh City</p></Row>
                            </Col>                            
                        </Row>

                        <hr/>

                        <Row className="justify-content-center">
                            <Button style={{width: '100px'}} variant="dark">Edit</Button>

                            <Row className="gy-3"></Row>
                        </Row>
                    </Col>

                    <Col xs={1}></Col>
                </Row>
            </Container>

            <Footer/>
        </>
    )
}