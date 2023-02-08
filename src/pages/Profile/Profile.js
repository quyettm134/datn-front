import React, { useState } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import { BsPersonCircle, BsBoxSeam, BsArrowLeftSquare, BsPersonLinesFill, BsFillCreditCardFill, BsHeart, BsGiftFill, BsKey, BsArrowBarLeft, BsQuestionSquare, BsClock } from "react-icons/bs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Logo from "../../assets/images/Logo.png";
import "./Profile.css";
export default function Profile() {
    const [pageIndex, setPageIndex] = useState(0);

    const [orderIndex, setOrderIndex] = useState(0);

    return (
        <>
            <Header/>

            <Container className="profile-content" fluid style={{
                backgroundColor: '#EDEBEB',
            }}>
                <Row className="d-flex justify-content-center">
                    <Col style={{
                        width: '10px'
                    }}></Col>
                    
                    <Col className="col-md-5 bg-light text-center" style={{
                        width: '400px',
                        marginTop: '30px',
                        marginBottom: '30px'
                    }}>
                        <Row className="d-flex row-sm-2 gy-5">
                            <Col className="col-sm-6 justify-content-center align-self-center">
                                <Image className="shadow" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" style={{
                                    width: '120px',
                                    height: '120px',
                                }} roundedCircle/>
                            </Col>
                            <Col className="col-sm-6 align-self-center text-start">
                                <p className="text fs-2">Hello,</p>
                                <p className="text fs-3 fw-bold">Thai Dinh Kha</p>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex row-sm-2" onClick={() => setPageIndex(0)}>
                            <Col className="col-sm-4 justify-content-start">
                                <BsPersonCircle style={{
                                    width: '30px',
                                    height: '30px'
                                }}/>
                            </Col>
                            <Col className="col-sm-6 gx-0 align-self-center text-start">
                                <p className={pageIndex === 0 ? "text fs-5 fw-bolder" : "text fs-5"}>Account overview</p>
                            </Col>
                        </Row>
                        
                        <hr/>

                        <Row className="d-flex row-sm-2" onClick={() => setPageIndex(1)}>
                            <Col className="col-sm-4 justify-content-start">
                                <BsBoxSeam style={{
                                    width: '30px',
                                    height: '30px'
                                }}/>
                            </Col>
                            <Col className="col-sm-6 gx-0 align-self-center text-start">
                                <p className={pageIndex === 1 ? "text fs-5 fw-bolder" : "text fs-5"}>My orders</p>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex row-sm-2" onClick={() => setPageIndex(2)}>
                            <Col className="col-sm-4 justify-content-start">
                                <BsArrowLeftSquare style={{
                                    width: '30px',
                                    height: '30px'
                                }}/>
                            </Col>
                            <Col className="col-sm-6 gx-0 align-self-center text-start">
                                <p className={pageIndex === 2 ? "text fs-5 fw-bolder" : "text fs-5"}>My returns</p>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex row-sm-2" onClick={() => setPageIndex(3)}>
                            <Col className="col-sm-4 justify-content-start">
                                <BsPersonLinesFill style={{
                                    width: '30px',
                                    height: '30px'
                                }}/>
                            </Col>
                            <Col className="col-sm-6 gx-0 align-self-center text-start">
                                <p className={pageIndex === 3 ? "text fs-5 fw-bolder" : "text fs-5"}>My details</p>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex row-sm-2" onClick={() => setPageIndex(4)}>
                            <Col className="col-sm-4 justify-content-start">
                                <BsFillCreditCardFill style={{
                                    width: '30px',
                                    height: '30px'
                                }}/>
                            </Col>
                            <Col className="col-sm-6 gx-0 align-self-center text-start">
                                <p className={pageIndex === 4 ? "text fs-5 fw-bolder" : "text fs-5"}>Payment methods</p>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex row-sm-2" onClick={() => setPageIndex(5)}>
                            <Col className="col-sm-4 justify-content-start">
                                <BsHeart style={{
                                    width: '30px',
                                    height: '30px'
                                }}/>
                            </Col>
                            <Col className="col-sm-6 gx-0 align-self-center text-start">
                                <p className={pageIndex === 5 ? "text fs-5 fw-bolder" : "text fs-5"}>Favorite items</p>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex row-sm-2" onClick={() => setPageIndex(6)}>
                            <Col className="col-sm-4 justify-content-start">
                                <BsGiftFill style={{
                                    width: '30px',
                                    height: '30px'
                                }}/>
                            </Col>
                            <Col className="col-sm-6 gx-0 align-self-center text-start">
                                <p className={pageIndex === 6 ? "text fs-5 fw-bolder" : "text fs-5"}>My vouchers</p>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex row-sm-2" onClick={() => setPageIndex(7)}>
                            <Col className="col-sm-4 justify-content-start">
                                <BsKey style={{
                                    width: '30px',
                                    height: '30px'
                                }}/>
                            </Col>
                            <Col className="col-sm-6 gx-0 align-self-center text-start">
                                <p className={pageIndex === 7 ? "text fs-5 fw-bolder" : "text fs-5"}>Change password</p>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex row-sm-2" onClick={() => setPageIndex(0)}>
                            <Col className="col-sm-4 justify-content-start">
                                <BsArrowBarLeft style={{
                                    width: '30px',
                                    height: '30px'
                                }}/>
                            </Col>
                            <Col className="col-sm-6 gx-0 align-self-center text-start">
                                <p className="text fs-5">Sign out</p>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex row-sm-2" onClick={() => setPageIndex(8)}>
                            <Col className="col-sm-4 justify-content-start">
                                <BsQuestionSquare style={{
                                    width: '30px',
                                    height: '30px'
                                }}/>
                            </Col>
                            <Col className="col-sm-6 gx-0 align-self-center text-start">
                                <p className={pageIndex === 8 ? "text fs-5 fw-bolder" : "text fs-5"}>Customer services</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="col-sm-1"></Col>

                    {pageIndex === 0 ? <Col className="col-md-6 bg-light gy-1" style={{
                        marginTop: '30px',
                        marginBottom: '30px'
                    }}>
                        <Row className="d-flex align-items-center text-start">
                            <Row className="fs-2 fw-bold"><p>Account overview</p></Row>
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
                                <p className="text fs-10">Maximum file size: 1 MB</p>
                                <p className="text fs-10">Format: .JPEG, .PNG</p>
                            </Row>
                        </Row>

                        <hr/>

                        <Row className="d-flex align-items-center justify-content-center">
                            <Col className="text-end">
                                <Row><p>Username</p></Row>
                                <Row><p>Full name</p></Row>
                                <Row><p>Age</p></Row>
                                <Row><p>Email</p></Row>
                                <Row><p>Phone</p></Row>
                                <Row><p>Gender</p></Row>
                                <Row><p>DoB</p></Row>
                                <Row><p>Address</p></Row>
                            </Col>

                            <Col xs={1}>
                                <div className="vr" style={{
                                    height: '310px'
                                }}></div>
                            </Col>

                            <Col className="text-start">
                                <Row><p>khathai01</p></Row>
                                <Row><p>Thai Dinh Kha</p></Row>
                                <Row><p>22</p></Row>
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
                        </Row>
                    </Col> : <></>}

                    {pageIndex === 1 ? <Col className="col-md-6 bg-light gy-1" style={{
                        marginTop: '30px',
                        marginBottom: '30px'
                    }}>
                        <Row className="d-flex align-items-center text-start">
                            <Row className="fs-2 fw-bold"><p>My orders</p></Row>
                            <Row><p>You can view all your orders here</p></Row>
                        </Row>

                        <hr/>
                    
                        <Row className="d-flex justify-content-center text-center fs-5">
                            <Col className={orderIndex === 0 ? "fw-bold" : ""} onClick={() => setOrderIndex(0)}><p style={{
                                cursor: 'pointer'
                            }}>All</p></Col>
                            <Col className={orderIndex === 1 ? "fw-bold" : ""} onClick={() => setOrderIndex(1)}><p style={{
                                cursor: 'pointer'
                            }}>Waiting for confirmation</p></Col>
                            <Col className={orderIndex === 2 ? "fw-bold" : ""} onClick={() => setOrderIndex(2)}><p style={{
                                cursor: 'pointer'
                            }}>Delivering</p></Col>
                            <Col className={orderIndex === 3 ? "fw-bold" : ""} onClick={() => setOrderIndex(3)}><p style={{
                                cursor: 'pointer'
                            }}>Delivered</p></Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex">
                            <Col className="col-sm-4 gx-xxl-5">
                                <Image className="shadow justify-content-start" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png" style={{
                                    width: '150px',
                                    height: '150px',
                                }}/>
                            </Col>

                            <Col className="col-sm-4 justify-content-start fs-5">
                                <Row className="gy-0">Ophidia GG medium totea</Row>
                                <Row className="gy-0">Variation: Brown</Row>
                                <Row className="gy-0">Size: L</Row>
                            </Col>

                            <Col xs={1}>
                                <div className="vr" style={{
                                    height: '130px'
                                }}></div>
                            </Col>

                            <Col className="col-sm-3 fs-5">
                                <Row className="gy-0 d-inline-block" style={{
                                    backgroundColor: '#F6F2F2'
                                }}>QTY: x1</Row>
                                <Row className="gy-0">Price: $2,155</Row>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex">
                            <Col className="col-sm-4 gx-xxl-5">
                                <Image className="shadow justify-content-start" src="https://media.istockphoto.com/id/1061837374/photo/diamond-pendant-isolated-on-white-background-n.jpg?s=612x612&w=0&k=20&c=i24LMIVt5LrQ982SApfbqlKIiohzIRjTcaGjcd1Va3g=" style={{
                                    width: '150px',
                                    height: '150px',
                                }}/>
                            </Col>

                            <Col className="col-sm-4 justify-content-start fs-5">
                                <Row className="gy-0">GG Canvas bucket hat</Row>
                                <Row className="gy-0">Variation: Brown</Row>
                                <Row className="gy-0">Size: L</Row>
                            </Col>

                            <Col xs={1}>
                                <div className="vr" style={{
                                    height: '130px'
                                }}></div>
                            </Col>

                            <Col className="col-sm-3 fs-5">
                                <Row className="gy-0 d-inline-block" style={{
                                    backgroundColor: '#F6F2F2'
                                }}>QTY: x1</Row>
                                <Row className="gy-0">Price: $780</Row>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex">
                            <Col className="col-sm-4 gx-xxl-5">
                                <Image className="shadow justify-content-start" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/c8041aad-dac0-42d2-b016-9b27bb6a365e/dri-fit-tiger-woods-legacy91-golf-hat-fsHzBn.png" style={{
                                    width: '150px',
                                    height: '150px',
                                }}/>
                            </Col>

                            <Col className="col-sm-4 justify-content-start fs-5">
                                <Row className="gy-0">GG Marmont thin belt</Row>
                                <Row className="gy-0">Variation: Brown</Row>
                                <Row className="gy-0">Size: L</Row>
                            </Col>

                            <Col xs={1}>
                                <div className="vr" style={{
                                    height: '130px'
                                }}></div>
                            </Col>

                            <Col className="col-sm-3 fs-5">
                                <Row className="gy-0 d-inline-block" style={{
                                    backgroundColor: '#F6F2F2'
                                }}>QTY: x1</Row>
                                <Row className="gy-0">Price: $640</Row>
                            </Col>
                        </Row>
                    </Col> : <></>}

                    {pageIndex === 6 ? <Col className="col-md-6 bg-light gy-1" style={{
                        marginTop: '30px',
                        marginBottom: '30px'
                    }}>
                        <Row className="d-flex align-items-center text-start">
                            <Row className="fs-2 fw-bold"><p>My vouchers</p></Row>
                            <Row><p>You can view all your vouchers here</p></Row>
                        </Row>

                        <hr/>
                    
                        <Row className="d-flex justify-content-center text-center fs-5">
                            <Col className="col-xl-6"><p style={{marginLeft: "200px"}}>Sort by:</p></Col>
                            <Col xs={1}>
                                <select class="form-select" style={{width: '120px'}} aria-label="Default select example">
                                    <option selected>Select</option>
                                    <option value="1">Lastest</option>
                                    <option value="2">Remain date</option>
                                    <option value="3">In use</option>
                                </select>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex shadow">
                            <Col className="col-sm-4 gx-xxl-5">
                                <Image className="shadow justify-content-start" src={Logo} style={{
                                    width: '150px',
                                    height: '150px',
                                }}/>
                            </Col>

                            <Col className="col-sm-4 justify-content-start fs-5">
                                <Row className="gy-0 fs-3" style={{color: "red"}}><p>5% off</p></Row>
                                <Row className="gy-0"><p>Minimum order <span style={{color: "red"}}>150$</span></p></Row>
                                <Row className="gy-0"><p>Maximum discount <span style={{color: "red"}}>50$</span></p></Row>
                                <Row className="gy-0" style={{color: "red"}}><p><BsClock /> Valid after: 1 day</p></Row>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex shadow">
                            <Col className="col-sm-4 gx-xxl-5">
                                <Image className="shadow justify-content-start" src={Logo} style={{
                                    width: '150px',
                                    height: '150px',
                                }}/>
                            </Col>

                            <Col className="col-sm-4 justify-content-start fs-5">
                                <Row className="gy-0 fs-3" style={{color: "red"}}><p>5% off</p></Row>
                                <Row className="gy-0"><p>Minimum order <span style={{color: "red"}}>150$</span></p></Row>
                                <Row className="gy-0"><p>Maximum discount <span style={{color: "red"}}>50$</span></p></Row>
                                <Row className="gy-0" style={{color: "red"}}><p><BsClock /> Valid after: 1 day</p></Row>
                            </Col>
                        </Row>

                        <hr/>

                        <Row className="d-flex shadow">
                            <Col className="col-sm-4 gx-xxl-5">
                                <Image className="shadow justify-content-start" src={Logo} style={{
                                    width: '150px',
                                    height: '150px',
                                }}/>
                            </Col>

                            <Col className="col-sm-4 justify-content-start fs-5">
                                <Row className="gy-0 fs-3" style={{color: "red"}}><p>5% off</p></Row>
                                <Row className="gy-0"><p>Minimum order <span style={{color: "red"}}>150$</span></p></Row>
                                <Row className="gy-0"><p>Maximum discount <span style={{color: "red"}}>50$</span></p></Row>
                                <Row className="gy-0" style={{color: "red"}}><p><BsClock /> Valid after: 1 day</p></Row>
                            </Col>
                        </Row>
                    </Col> : <></>}

                    <Col xs={1}></Col>
                </Row>
            </Container>

            <Footer/>
        </>
    )
}