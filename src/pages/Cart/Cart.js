import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, Form, Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem, clearCart } from '../../redux/cart/cartSlice';
import { createOrder } from '../../redux/order/orderActions';
import { selectCart } from '../../redux/cart/cartSelectors';
import { selectOrderStatus } from '../../redux/order/orderSelectors';
import { BsTrash } from 'react-icons/bs';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';

export default function Cart() {
    const dispatch = useDispatch();
    const UserCart = useSelector(selectCart);
    const OrderStatus = useSelector(selectOrderStatus);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    let initTotal = UserCart.reduce((res, item) => {
        return res += item.price * item.quantity;
    }, 0);

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ itemId: id, quantity: quantity }));
    }

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleCreateOrder = () => {
        const products_list = UserCart.map(item => {
            return {
                id: item.id,
                quantity: item.quantity
            }
        });

        const total = initTotal + 15;

        dispatch(createOrder({ products_list, total }));

        if (OrderStatus) {
            dispatch(clearCart());
            navigate('/payment_success');
        }

        else {
            console.log('Error creating an order');
        }
    }

    return (
        <div className='vw-100'>
            <Header />

            {UserCart.length === 0 ? 
                (
                    <div className="container-fluid mt-100">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 style={{fontWeight: 'bold'}}>Cart</h5>
                                    </div>
                                    <div className="card-body cart">
                                        <div className="col-sm-12 empty-cart-cls text-center">
                                            <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3"/>
                                            <h3><strong>Your Cart is Empty</strong></h3>
                                            <h4>Add something to make me happy</h4>
                                            <a href="/product_list" className="btn btn-primary cart-btn-transform m-3" data-abc="true">Continue shopping</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) 
                
                : 

                (<Container fluid className='cart-content vw-auto'>
                    <Row className='row-xl-auto' style={{paddingTop: '15px', paddingLeft: '15px'}}>
                        <Col>
                            <p className='fs-2 fw-bold'>YOUR SELECTIONS</p>
                        </Col>
                        <Col>
                            <Row className='justify-content-end'>
                                <Button 
                                    style={{
                                        width: '150px', 
                                        marginRight: '80px'
                                    }} 
                                    variant='outline-danger'
                                    onClick={() => setShowModal(true)}
                                >
                                        Clear cart{' '}<BsTrash />
                                    </Button>
                            </Row>
                        </Col>
                    </Row>

                    <hr/>

                    <Row className='d-flex align-items-start'>
                        {showModal &&
                            <Modal 
                                show={showModal} 
                                onHide={() => setShowModal(false)}
                                centered
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Confirm clear cart</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>Are you sure you want to delete all items in your cart ?</Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                                        Cancel
                                    </Button>
                                    <Button variant="danger" onClick={() => {
                                        handleClearCart();
                                        setShowModal(false);
                                    }}>
                                        Clear cart
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        }
                        
                        <Col className='col-sm-auto'>
                            {UserCart?.map((item, index) => (
                                <div key={index}>
                                    <Row 
                                        className='row-lg-5 d-flex justify-content-center align-items-center' 
                                        style={{
                                            backgroundColor: 'white', 
                                            marginLeft: '20px', 
                                            marginTop: '20px', 
                                            marginBottom: '20px', 
                                            borderRadius: '10px',
                                            boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)'
                                        }}>
                                        <Col>
                                            <Image src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG' style={{width: '160px', height: '160px', cursor: 'pointer'}}/>
                                        </Col>

                                        <Col className='col-lg-5'>
                                            <Row>
                                                <p className='fs-4 fw-bold'>{item.name}</p>
                                            </Row>
                                            
                                            <Row>
                                                <p className='fw-bold'>Variation: {item.color}</p>
                                            </Row>

                                            <Row>
                                                <p className='fw-bold'>Size: L</p>
                                            </Row>

                                            <Row>
                                                <Col className='col-sm-auto'>
                                                    <p style={{fontSize: '16px', cursor: 'pointer'}}>Edit</p>
                                                </Col>

                                                <Col xs={1} className='col-sm-auto'>
                                                    <div className="vr" style={{
                                                        height: '25px',
                                                        width: '2px'
                                                    }}></div>
                                                </Col>

                                                <Col className='col-sm-auto'>
                                                    <p style={{fontSize: '16px', cursor: 'pointer'}} 
                                                        onClick={() => handleRemoveItem(item.id)}
                                                    >Remove</p>
                                                </Col>

                                                <Col xs={1} className='col-sm-auto'>
                                                    <div className="vr" style={{
                                                        height: '25px',
                                                        width: '2px'
                                                    }}></div>
                                                </Col>

                                                <Col className='col-sm-auto'>
                                                    <p style={{fontSize: '16px', cursor: 'pointer'}}>Favourite</p>
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col xs={1}>
                                            <div className="vr" style={{
                                                height: '150px',
                                                width: '2px'
                                            }}></div>
                                        </Col>

                                        <Col>
                                            <Row style={{marginTop: '20px', marginRight: '20px'}}>
                                                <div className="input-group">
                                                    <Button 
                                                        className="btn btn-secondary" 
                                                        type="button" 
                                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                                                            -
                                                    </Button>
                                                    <Form.Control 
                                                        disabled 
                                                        type="number" 
                                                        value={item.quantity} 
                                                        style={{textAlign: "center"}}
                                                    />
                                                    <Button 
                                                        className="btn btn-secondary" 
                                                        type="button" 
                                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                                            +
                                                    </Button>
                                                </div>
                                            </Row>
                                            <Row style={{marginBottom: '70px'}}></Row>
                                            <Row>
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <span>Price: </span>
                                                    <p 
                                                        className="fw-bold" 
                                                        style={{ 
                                                            marginLeft: "10px", 
                                                            marginTop: "15px" 
                                                        }}>
                                                            ${item.price * item.quantity}   
                                                    </p>
                                                </div>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </Col>

                        <Col className='col-md-1'></Col>

                        <Col 
                            className='d-flex flex-column col-md-auto' 
                            style={{
                                width: '500px', 
                                backgroundColor: '#938484', 
                                marginTop: '20px', 
                                marginBottom: '20px',
                                marginLeft: '20px',
                                borderRadius: '10px',
                                boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)'
                            }}>
                            <Row 
                                style={{
                                    color: '#FFFFFF', 
                                    marginTop: '10px', 
                                    marginLeft: '10px'
                                }}>
                                <p className='fs-2'>Order Summary</p>
                            </Row>
                            
                            <hr style={{color: '#FFFFFF'}}/>

                            <Row 
                                style={{
                                    color: '#FFFFFF', 
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
                                                ${' '}{initTotal}
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
                                                ${' '}{initTotal + 15}
                                        </p>
                                    </div>
                                </Row>
                                <Row>
                                    <p>Importation fee included</p>
                                </Row>
                            </Row>

                            <hr style={{color: '#FFFFFF'}}/>
                            
                            <Row className="d-flex justify-content-center">
                                <Row className="justify-content-center">
                                    <Button 
                                        className='my-2' 
                                        style={{
                                            width: '300px', 
                                            backgroundColor: '#FFFFFF', 
                                            borderRadius: 30, 
                                            color: '#000000', 
                                            borderColor: '#FFFFFF', 
                                            boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)'
                                        }}
                                        onClick={() => navigate('/checkout')}
                                    >
                                        Check out
                                    </Button>
                                </Row>

                                <Row className="text-center" style={{marginTop: '10px'}}>
                                    <p style={{color: '#FFFFFF'}}>OR</p>
                                </Row>

                                <Row className="justify-content-center mb-3">
                                    <Button 
                                        className='mb-2' 
                                        style={{
                                            width: '300px', 
                                            backgroundColor: '#FFFFFF', 
                                            borderRadius: 30, 
                                            color: '#000000',
                                            borderColor: '#FFFFFF', 
                                            boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
                                            marginBottom: '15px'
                                        }}
                                        onClick={() => {
                                            handleCreateOrder();
                                        }}
                                    >
                                            Payment on Delivery
                                    </Button>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                </Container>)
            }

            <Footer />
        </div>
    )
}