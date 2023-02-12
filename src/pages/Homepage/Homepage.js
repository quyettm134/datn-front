import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Row, Col, Container, Carousel, Button, Image, Card } from "react-bootstrap";
import './Homepage.css';
import { BsArrowRight, BsCart, BsHeart } from "react-icons/bs";
export default function Homepage() {
    return (
        <div className="vw-100">
            <Header />

            <Container fluid className="homepage-content vw-auto">
                <Row className="d-flex justify-content-center align-items-stretch" style={{paddingBottom: '30px'}}> {/* Slider */}
                    <Carousel style={{
                        display: 'block',
                        margin: '0 auto',
                    }}>
                        <Carousel.Item interval={3000}>
                            <Row style={{
                                backgroundImage: "url(https://t4.ftcdn.net/jpg/05/36/11/29/360_F_536112946_VJTIpYNe3ldWcIlEQpu5SV97m7EkdvaX.jpg)",
                            }}>
                                <Col className="col-xxl-5 text-center align-self-center">
                                    <p className="fs-1 fw-bolder">BEST DEAL NOW!</p>
                                    <p className="fs-1 fw-bolder">0H:59M:59S</p>
                                    <Button variant="dark">SHOP NOW</Button>
                                </Col>
                                <Col className="col-md-4 align-self-center justify-content-center">
                                    <Col style={{
                                        marginTop: '20px',
                                        marginBottom: '20px',
                                    }}>
                                        <Image src="https://www.certina.com/sites/default/files/styles/nocrop_onethird_xl/public/maps-medias/C037.407.18.040.10_SLD.png?itok=Xf6NFjeQ"
                                            style={{
                                                width: "48%",
                                                height: "48%",
                                                display: "block",
                                                margin: "0 auto"
                                            }}
                                        />
                                    </Col>
                                </Col>
                                <Col className="col-sm-auto">
                                    <Col className="align-items-center justify-content-center" style={{
                                        marginTop: "80px",
                                    }}>
                                        <Row>
                                            <span className="rounded-circle fs-2" style={{
                                                backgroundColor: "white" ,color: "red"
                                            }}>54%</span>
                                        </Row>
                                        <Row style={{
                                            paddingLeft: "6px",
                                            }}>Discount
                                        </Row>
                                    </Col>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Row style={{
                                backgroundImage: "url(https://t4.ftcdn.net/jpg/05/36/11/29/360_F_536112946_VJTIpYNe3ldWcIlEQpu5SV97m7EkdvaX.jpg)",
                            }}>
                                <Col className="col-xxl-5 text-center align-self-center">
                                    <p className="fs-1 fw-bolder">BEST DEAL NOW!</p>
                                    <p className="fs-1 fw-bolder">0H:59M:59S</p>
                                    <Button variant="dark">SHOP NOW</Button>
                                </Col>
                                <Col className="col-md-4 align-self-center justify-content-center">
                                    <Col style={{
                                        marginTop: '20px',
                                        marginBottom: '20px',
                                    }}>
                                        <Image src="https://cdn.cliqueinc.com/posts/301582/best-investment-designer-handbags-2022-301582-1659651701540-image.700x0c.jpg"
                                            style={{
                                                width: "57%",
                                                height: "57%",
                                                display: "block",
                                                margin: "0 auto"
                                            }}
                                        />
                                    </Col>
                                </Col>
                                <Col className="col-sm-auto">
                                    <Col className="align-items-center justify-content-center" style={{
                                        marginTop: "80px",
                                    }}>
                                        <Row>
                                            <span className="rounded-circle fs-2" style={{
                                                backgroundColor: "white" ,color: "red"
                                            }}>54%</span>
                                        </Row>
                                        <Row style={{
                                            paddingLeft: "6px",
                                            }}>Discount
                                        </Row>
                                    </Col>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Row style={{
                                backgroundImage: "url(https://t4.ftcdn.net/jpg/05/36/11/29/360_F_536112946_VJTIpYNe3ldWcIlEQpu5SV97m7EkdvaX.jpg)",
                            }}>
                                <Col className="col-xxl-5 text-center align-self-center">
                                    <p className="fs-1 fw-bolder">BEST DEAL NOW!</p>
                                    <p className="fs-1 fw-bolder">0H:59M:59S</p>
                                    <Button variant="dark">SHOP NOW</Button>
                                </Col>
                                <Col className="col-md-4 align-self-center justify-content-center">
                                    <Col style={{
                                        marginTop: '20px',
                                        marginBottom: '20px',
                                    }}>
                                        <Image src="https://cdn.shopify.com/s/files/1/0593/2358/0601/files/cherrywood_shoes_cabello_mobile_1600x.png?v=1629677780"
                                            style={{
                                                width: "47%",
                                                height: "47%",
                                                display: "block",
                                                margin: "0 auto"
                                            }}
                                        />
                                    </Col>
                                </Col>
                                <Col className="col-sm-auto">
                                    <Col className="align-items-center justify-content-center" style={{
                                        marginTop: "80px",
                                    }}>
                                        <Row>
                                            <span className="rounded-circle fs-2" style={{
                                                backgroundColor: "white" ,color: "red"
                                            }}>54%</span>
                                        </Row>
                                        <Row style={{
                                            paddingLeft: "6px",
                                            }}>Discount
                                        </Row>
                                    </Col>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Row>

                <Row className="d-flex justify-content-center align-items-stretch" style={{paddingBottom: '30px'}}> {/* Trending */}
                    <Row className="row-xl-auto">
                        <Col>
                            <p className="fs-1 fw-bolder">TRENDING</p>
                        </Col>
                        <Col className="col-md-auto align-self-center" style={{paddingRight: '10px'}}>
                            <p className="fs-4 fw-bold" style={{cursor: 'pointer'}}>See all <BsArrowRight /></p>
                        </Col>
                    </Row>
                    <Row className="row-xl-auto">
                        <Col className="col-md-auto">
                            <Card style={{backgroundColor: '#ffffff'}}>
                                <Card.Img style={{width: '350px', height: '267px'}} variant="top" src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"/>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text>Ophidia GG medium totea</Card.Text>
                                            <Card.Text>$200</Card.Text>
                                        </Col>
                                        <Col>
                                            <Row style={{paddingBottom: '10px'}}>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsHeart style={{color: 'red', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                            <Row>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsCart style={{color: 'green', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-md-auto">
                            <Card style={{backgroundColor: '#ffffff'}}>
                                <Card.Img style={{width: '350px', height: '267px'}} variant="top" src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"/>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text>Ophidia GG medium totea</Card.Text>
                                            <Card.Text>$200</Card.Text>
                                        </Col>
                                        <Col>
                                            <Row style={{paddingBottom: '10px'}}>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsHeart style={{color: 'red', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                            <Row>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsCart style={{color: 'green', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-md-auto">
                            <Card style={{backgroundColor: '#ffffff'}}>
                                <Card.Img style={{width: '350px', height: '267px'}} variant="top" src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"/>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text>Ophidia GG medium totea</Card.Text>
                                            <Card.Text>$200</Card.Text>
                                        </Col>
                                        <Col>
                                            <Row style={{paddingBottom: '10px'}}>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsHeart style={{color: 'red', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                            <Row>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsCart style={{color: 'green', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-md-auto">
                            <Card style={{backgroundColor: '#ffffff'}}>
                                <Card.Img style={{width: '350px', height: '267px'}} variant="top" src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"/>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text>Ophidia GG medium totea</Card.Text>
                                            <Card.Text>$200</Card.Text>
                                        </Col>
                                        <Col>
                                            <Row style={{paddingBottom: '10px'}}>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsHeart style={{color: 'red', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                            <Row>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsCart style={{color: 'green', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Row>

                <Row className="d-flex justify-content-center align-items-stretch" style={{paddingBottom: '30px'}}> {/* Best seller */}
                    <Row className="row-xl-auto">
                        <Col>
                            <p className="fs-1 fw-bolder">BEST SELLERS</p>
                        </Col>
                        <Col className="col-md-auto align-self-center" style={{paddingRight: '10px'}}>
                            <p className="fs-4 fw-bold" style={{cursor: 'pointer'}}>See all <BsArrowRight /></p>
                        </Col>
                    </Row>
                    <Row className="row-xl-auto">
                        <Col className="col-md-auto">
                            <Card style={{backgroundColor: '#ffffff'}}>
                                <Card.Img style={{width: '350px', height: '267px'}} variant="top" src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"/>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text>Ophidia GG medium totea</Card.Text>
                                            <Card.Text>$200</Card.Text>
                                        </Col>
                                        <Col>
                                            <Row style={{paddingBottom: '10px'}}>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsHeart style={{color: 'red', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                            <Row>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsCart style={{color: 'green', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-md-auto">
                            <Card style={{backgroundColor: '#ffffff'}}>
                                <Card.Img style={{width: '350px', height: '267px'}} variant="top" src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"/>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text>Ophidia GG medium totea</Card.Text>
                                            <Card.Text>$200</Card.Text>
                                        </Col>
                                        <Col>
                                            <Row style={{paddingBottom: '10px'}}>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsHeart style={{color: 'red', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                            <Row>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsCart style={{color: 'green', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-md-auto">
                            <Card style={{backgroundColor: '#ffffff'}}>
                                <Card.Img style={{width: '350px', height: '267px'}} variant="top" src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"/>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text>Ophidia GG medium totea</Card.Text>
                                            <Card.Text>$200</Card.Text>
                                        </Col>
                                        <Col>
                                            <Row style={{paddingBottom: '10px'}}>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsHeart style={{color: 'red', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                            <Row>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsCart style={{color: 'green', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col-md-auto">
                            <Card style={{backgroundColor: '#ffffff'}}>
                                <Card.Img style={{width: '350px', height: '267px'}} variant="top" src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"/>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Text>Ophidia GG medium totea</Card.Text>
                                            <Card.Text>$200</Card.Text>
                                        </Col>
                                        <Col>
                                            <Row style={{paddingBottom: '10px'}}>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsHeart style={{color: 'red', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                            <Row>
                                                <Button style={{ backgroundColor: '#ffffff', borderColor: '#ffffff'}} className="text-end"><BsCart style={{color: 'green', width: '20px', height: '20px'}}/></Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}