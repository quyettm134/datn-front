import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneOrder } from "../../redux/order/orderActions";
import { selectOrder } from "../../redux/order/orderSelectors";
import { selectUser } from "../../redux/user/userSelectors";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Button, Modal, Form } from "react-bootstrap";
import { BsBoxArrowLeft } from "react-icons/bs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import "./OrderDetails.css";

export default function OrderDetails() {
    const dispatch = useDispatch();
    const { id }= useParams();
    useEffect(() => {
        dispatch(fetchOneOrder({ id }));
    }, [dispatch, id]);

    const thisOrder = useSelector(selectOrder);
    const thisUser = useSelector(selectUser);
    const product_list = thisOrder?.product_list;
    const date = new Date(thisOrder?.order_day);

    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Header />

            <Container fluid className="order-details-content vw-auto">
                <Row className='row-xl-auto' style={{paddingTop: '15px', paddingLeft: '15px'}}>
                    <Col>
                        <p className='fs-2 fw-bold'>ORDER #{id}</p>
                    </Col>
                </Row>
                
                <hr />

                <Row className="d-flex flex-row">
                    {showModal &&
                        <Modal 
                            show={showModal} 
                            onHide={() => setShowModal(false)}
                            centered
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Return an item</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>Why do you want to return this item ?</Modal.Body>

                            <Modal.Body>
                                <Form.Select>
                                    <option>Pick a reason</option>
                                    <option value="1">Wrong item</option>
                                    <option value="2">Found a better item</option>
                                    <option value="3">Damaged item during shipping</option>
                                </Form.Select>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowModal(false)}>
                                    Cancel
                                </Button>
                                <Button variant="danger" onClick={() => {
                                    setShowModal(false);
                                }}>
                                    Send
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    }

                    <Col className="col-lg-auto">
                        {product_list ? product_list.map((item, index) => (
                            <div key={index}>
                                <Row 
                                    className='d-flex justify-content-center align-items-center' 
                                    style={{
                                        backgroundColor: 'white', 
                                        marginLeft: '10px', 
                                        marginTop: '20px', 
                                        marginBottom: '20px', 
                                        borderRadius: '10px',
                                        boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
                                        width: '920px',
                                        height: '200px'
                                    }}
                                >
                                    <Col className="col-lg-auto">
                                        <Image src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG' 
                                        style={{
                                            width: '160px', 
                                            height: '160px', 
                                            cursor: 'pointer',
                                        }}/>
                                    </Col>

                                    <Col className='col-lg-5'>
                                        <Row>
                                            <p className='fs-1 fw-bold'>{item.product.name}</p>
                                        </Row>
                                        
                                        <Row>
                                            <p className='fw-bold' style={{color: 'gray'}}>Variation: {item.product.color}</p>
                                        </Row>

                                        <Row>
                                            <p className='fw-bold' style={{color: 'gray'}}>Size: L</p>
                                        </Row>
                                    </Col>

                                    <Col xs={1}>
                                        <div className="vr" style={{
                                            height: '150px',
                                            width: '2px'
                                        }}></div>
                                    </Col>

                                    <Col className="d-flex flex-column justify-content-center">
                                        <Row style={{
                                            marginBottom: '40px',
                                            justifyContent: 'center',
                                        }}>
                                            
                                            <div className="fs-4" style={{ 
                                                display: "flex", 
                                                alignItems: "center",
                                                marginLeft: '100px'
                                            }}>
                                                <span>Price: </span>
                                                <p 
                                                    className="fw-bold" 
                                                    style={{ 
                                                        marginLeft: "10px", 
                                                        marginTop: "15px" 
                                                    }}>
                                                        ${' '}{item.product.price * item.quantity}   
                                                </p>
                                            </div>
                                        </Row>
                                        <Row>
                                            <Button 
                                                variant="outline-danger" 
                                                style={{
                                                    width: '170px', 
                                                    marginLeft: '50px'
                                                }}
                                                onClick={() => setShowModal(true)}    
                                            >
                                                <BsBoxArrowLeft/>{' '}Return this item
                                            </Button>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        )) : <Loading />}
                    </Col>

                    <Col className='d-flex flex-column col-md-auto' 
                        style={{
                            width: '500px', 
                            backgroundColor: '#FFFFFF', 
                            marginTop: '20px', 
                            marginBottom: '20px',
                            marginLeft: '20px',
                            borderRadius: '10px',
                            boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)'
                        }}>
                        <Row 
                            style={{
                                color: '#000000', 
                                marginTop: '10px', 
                                marginLeft: '10px'
                            }}>
                            <p className='fs-2'>Order Summary</p>
                        </Row>
                        
                        <hr style={{color: '#000000'}}/>

                        <Row 
                            style={{
                                color: '#000000', 
                                marginTop: '10px', 
                                marginLeft: '10px'
                            }}>
                            <Row>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span className='fs-4'>Subtotal: </span>
                                    <p 
                                        className="fw-bold fs-4" 
                                        style={{ 
                                            marginLeft: "10px", 
                                            marginTop: "15px" 
                                        }}>
                                            ${' '}{thisOrder?.total - 15}
                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span className='fs-4'>Shipping fee: </span>
                                    <p 
                                        className="fw-bold fs-4" 
                                        style={{
                                            marginLeft: "10px", 
                                            marginTop: "15px" 
                                        }}>
                                            ${' '}5
                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span className='fs-4'>Subtotal: </span>
                                    <p 
                                        className="fw-bold fs-4" 
                                        style={{ 
                                            marginLeft: "10px", 
                                            marginTop: "15px" 
                                        }}>
                                            ${' '}10
                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span className='fs-4'>Estimated total: </span>
                                    <p 
                                        className="fw-bold fs-4" 
                                        style={{ 
                                            marginLeft: "10px", 
                                            marginTop: "15px" 
                                        }}>
                                            ${' '}{thisOrder?.total}
                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <p>Importation fee included</p>
                            </Row>
                        </Row>

                        <hr style={{color: '#000000'}}/>
                        
                        <Row 
                            style={{
                                color: '#000000', 
                                marginTop: '10px', 
                                marginLeft: '10px'
                            }}>
                            <Row>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span className='fs-4'>Created at: </span>
                                    <p 
                                        className="fw-bold fs-4" 
                                        style={{ 
                                            marginLeft: "10px", 
                                            marginTop: "15px" 
                                        }}>
                                            {formattedDate}
                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span className='fs-4'>Shipping address: </span>
                                    <p 
                                        className="fw-bold fs-4" 
                                        style={{
                                            marginLeft: "10px", 
                                            marginTop: "15px" 
                                        }}>
                                            {thisOrder?.shipping_address}
                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span className='fs-4'>Receiver's name: </span>
                                    <p 
                                        className="fw-bold fs-4" 
                                        style={{ 
                                            marginLeft: "10px", 
                                            marginTop: "15px" 
                                        }}>
                                            {thisUser?.fullname}
                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div style={{ display: "flex", alignItems: "center", marginBottom: '20px' }}>
                                    <span className='fs-4'>Payment method: </span>
                                    <p 
                                        className="fw-bold fs-4" 
                                        style={{ 
                                            marginLeft: "10px", 
                                            marginTop: "15px" 
                                        }}>
                                            Payment on delivery
                                    </p>
                                </div>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}