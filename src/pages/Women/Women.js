import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { BsHeart, BsCart } from "react-icons/bs";
import './Women.css';
import WomenSlide from "../../assets/images/women.png";

export default function Women() {
    return (
        <div className="vw-100">
            <Header />

            <Container fluid className="women-content vw-auto">
                <Row className="d-flex justify-content-center align-items-stretch" style={{paddingBottom: '30px'}}>
                    <Image src={WomenSlide} style={{height: '450px', zIndex: '0'}}/>
                    <div className="d-flex justify-content-center align-items-center h-100" style={{zIndex: '1', marginTop: '-270px'}}>
                        <p className="text-white fs-1 fw-bolder">WOMEN'S ACCESSORIES</p>
                    </div>
                </Row>

                <Row className="d-flex justify-content-center align-items-stretch" style={{paddingBottom: '30px'}}>
                    <Col className="col-md-1">
                        <p className="fs-5 fw-bolder trending text-center">All</p>
                    </Col>
                    <Col className="col-md-auto">
                        <select class="form-select" style={{width: '120px'}} aria-label="Default select example">
                            <option selected>Type</option>
                            <option value="1">Lastest</option>
                            <option value="2">Remain date</option>
                            <option value="3">In use</option>
                        </select>
                    </Col>
                    <Col className="col-md-auto">
                        <select class="form-select" style={{width: '120px'}} aria-label="Default select example">
                            <option selected>Season</option>
                            <option value="1">Lastest</option>
                            <option value="2">Remain date</option>
                            <option value="3">In use</option>
                        </select>
                    </Col>
                    <Col className="col-md-auto">
                        <select class="form-select" style={{width: '120px'}} aria-label="Default select example">
                            <option selected>Style</option>
                            <option value="1">Lastest</option>
                            <option value="2">Remain date</option>
                            <option value="3">In use</option>
                        </select>
                    </Col>
                    <Col className="col-md-auto">
                        <select class="form-select" style={{width: '120px'}} aria-label="Default select example">
                            <option selected>Price</option>
                            <option value="1">Lastest</option>
                            <option value="2">Remain date</option>
                            <option value="3">In use</option>
                        </select>
                    </Col>
                    <Col className="col-lg-5">
                        <select class="form-select" style={{width: '120px'}} aria-label="Default select example">
                            <option selected>Rating</option>
                            <option value="1">Lastest</option>
                            <option value="2">Remain date</option>
                            <option value="3">In use</option>
                        </select>
                    </Col>
                    <Col className="ms-auto p-0">
                        <select class="form-select" style={{width: '150px'}} aria-label="Default select example">
                            <option selected>Price H - L</option>
                            <option value="1">Lastest</option>
                            <option value="2">Remain date</option>
                            <option value="3">In use</option>
                        </select>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center align-items-stretch" style={{paddingBottom: '30px'}}>
                    <Row className="row-xl-auto" style={{paddingBottom: '30px'}}>
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