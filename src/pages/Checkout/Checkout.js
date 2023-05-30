import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../redux/order/orderActions';
import { clearCart } from '../../redux/cart/cartSlice';
import { selectOrderStatus } from '../../redux/order/orderSelectors';
import { selectCart } from '../../redux/cart/cartSelectors';
import { Row, Col, Container, InputGroup, Form, Button, Badge } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Checkout.css';

export default function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const thisCart = useSelector(selectCart);
    const OrderStatus = useSelector(selectOrderStatus);

    const total = thisCart?.reduce((res, item) => {
        return res += item.price * item.quantity;
    }, 0);

    const handleCreateOrder = () => {
        const products_list = thisCart.map(item => {
            return {
                id: item.id,
                quantity: item.quantity
            }
        });

        const taxedTotal = total + 15;

        dispatch(createOrder({ products_list, taxedTotal }));

        if (OrderStatus) {
            dispatch(clearCart());
            navigate('/payment_success');
        }

        else {
            console.log('Error creating an order');
        }
    }

    const [addressType, setAddressType] = useState('');
    const [paymentType, setPaymentType] = useState('');

    return (
        <div className='vw-auto'>
            <Header />

            <Container fluid className='checkout-content vw-auto' style={{
                marginTop: '30px',
                marginLeft: '30px',
                marginRight: '30px',
                marginBottom: '30px'
            }}>
                <div class="py-5 text-center">
                    <h2>Checkout form</h2>
                    <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <Row className='d-flex flex-row'>
                    <Col className="col-md-4 order-md-2 mb-4" style={{marginRight: '50px'}}>
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Your cart</span>
                            <Badge bg="secondary">{thisCart?.length} items</Badge>
                        </h4>
                        <ul class="list-group mb-3">
                            {thisCart?.map((item, index) => (
                                <li key={index} class="list-group-item d-flex justify-content-between lh-condensed">
                                    <Row>
                                        <h6 class="my-0">{item.name}</h6>
                                        <small class="text-muted">Variation: {item.color}</small>
                                    </Row>
                                    <span class="text-muted">${item.price * item.quantity}</span>
                                </li>
                            ))}
                            <li class="list-group-item d-flex justify-content-between bg-light">
                                <Row class="text-success">
                                    <h6 class="my-0">Promo code</h6>
                                    <small>EXAMPLECODE</small>
                                </Row>
                                <span class="text-success">-$5</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>

                        <form class="card p-2">
                            <InputGroup className="mb-3">
                                        <Form.Control
                                            aria-label="promo-code"
                                            pattern='[a-zA-Z0-9]+'
                                            placeholder='Enter promo code'
                                        />
                                <div class="input-group-append">
                                    <Button variant='secondary'>Redeem</Button>
                                </div>
                            </InputGroup>
                        </form>
                    </Col>

                    <Col class="col-md-8 order-md-1">
                        <h4 class="mb-3">Billing address</h4>
                        <form class="needs-validation" novalidate>
                            <Row class="row">
                                <Col class="col-md-6 mb-3">
                                    <label for="firstName" style={{marginBottom: '10px'}}>First name</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="First name"
                                            aria-label="First name"
                                            pattern="[a-zA-Z]+"
                                        />
                                    </InputGroup>
                                </Col>
                                <Col class="col-md-6 mb-3">
                                    <label for="lastName" style={{marginBottom: '10px'}}>Last name</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Last name"
                                            aria-label="Last name"
                                            pattern="[a-zA-Z]+"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row class="mb-3">
                                <Col>
                                    <label for="username" style={{marginBottom: '10px'}}>Username</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Col>

                                <Col>
                                    <label for="email" style={{marginBottom: '10px'}}>Email <span class="text-muted">(Optional)</span></label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                        <Form.Control
                                            placeholder="Email"
                                            aria-label="Email"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>

                            <Row class="mb-3">
                                <Col>
                                    <label for="address" style={{marginBottom: '10px'}}>Address</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            aria-label="address"
                                            required
                                            pattern="[a-zA-Z0-9]+"
                                        />
                                    </InputGroup>
                                    <div class="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </Col>

                                <Col>
                                    <label for="address2" style={{marginBottom: '10px'}}>Address 2 <span class="text-muted">(Optional)</span></label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            aria-label="address2"
                                            pattern="[a-zA-Z0-9]+"
                                        />
                                    </InputGroup>
                                </Col>
                            </Row>


                            <Row className='d-flex flex-row' style={{marginBottom: '20px'}}>
                                <Col class="col-md-4 mb-3">
                                    <label for="country" style={{marginBottom: '10px'}}>Province / City</label>
                                    <Form.Select aria-label="Province / City" required>
                                        <option>Choose...</option>
                                        <option value="">Ho Chi Minh City</option>
                                        <option value="">Da nang</option>
                                        <option value="">Ha noi</option>
                                    </Form.Select>
                                    <div class="invalid-feedback">
                                        Please select a valid province.
                                    </div>
                                </Col>

                                <Col class="col-md-4 mb-3">
                                    <label for="country" style={{marginBottom: '10px'}}>District</label>
                                    <Form.Select aria-label="District" required>
                                        <option>Choose...</option>
                                        <option value="">District 1</option>
                                        <option value="">District 2</option>
                                        <option value="">District 3</option>
                                        <option value="">District 4</option>
                                        <option value="">District 5</option>
                                        <option value="">District 6</option>
                                        <option value="">District 7</option>
                                        <option value="">District 8</option>
                                        <option value="">District 9</option>
                                        <option value="">District 10</option>
                                    </Form.Select>
                                    <div class="invalid-feedback">
                                        Please select a valid district.
                                    </div>
                                </Col>

                                <Col class="col-md-4 mb-3">
                                <label for="country" style={{marginBottom: '10px'}}>Ward</label>
                                    <Form.Select aria-label="District" required>
                                        <option>Choose...</option>
                                        <option value="">Ward 1</option>
                                        <option value="">Ward 2</option>
                                        <option value="">Ward 3</option>
                                        <option value="">Ward 4</option>
                                        <option value="">Ward 5</option>
                                        <option value="">Ward 6</option>
                                        <option value="">Ward 7</option>
                                        <option value="">Ward 8</option>
                                        <option value="">Ward 9</option>
                                        <option value="">Ward 10</option>
                                        <option value="">Ward 11</option>
                                        <option value="">Ward 12</option>
                                    </Form.Select>
                                    <div class="invalid-feedback">
                                        Please select a valid ward.
                                    </div>
                                </Col>
                            </Row>

                            <Row className='d-flex flex-row'>
                                <label for="country" style={{marginBottom: '10px'}}>Contact phone number</label>
                                <Col class="col-md-auto mb-3">
                                    <Form.Select aria-label="Country code" required style={{width: '250px'}}>
                                        <option>Choose...</option>
                                        <option value="">+84 Vietnam</option>
                                    </Form.Select>
                                    <div class="invalid-feedback">
                                        Please select a valid country code.
                                    </div>
                                </Col>

                                <Col class="col-md-4 mb-3">
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            aria-label="phone number"
                                            pattern="[0-9]+"
                                            required
                                        />
                                    </InputGroup>
                                    <div class="invalid-feedback">
                                        Please enter a valid phone number.
                                    </div>
                                </Col>
                            </Row>

                            <Row className='d-flex flex-row'>
                                <label for="country" style={{marginBottom: '10px'}}>Address type</label>
                                <Col className="col-md-auto mb-3">
                                    <Button 
                                        variant={addressType === 'home' ? 'dark' : 'outline-dark'} 
                                        style={{width: '200px'}}
                                        onClick={() => setAddressType('home')}
                                    >Home</Button>
                                </Col>

                                <Col className="col-md-4 mb-3">
                                    <Button 
                                        variant={addressType === 'business' ? 'dark' : 'outline-dark'} 
                                        style={{width: '200px'}}
                                        onClick={() => setAddressType('business')}
                                    >Business</Button>
                                </Col>
                            </Row>

                            <hr class="mb-4" />

                            <Row className='d-flex flex-row'>
                                <label for="country" style={{marginBottom: '10px'}}>Payment type</label>
                                <Col className="col-md-auto mb-3">
                                    <Button 
                                        variant={paymentType === 'credit' ? 'dark' : 'outline-dark'} 
                                        style={{width: '200px'}}
                                        onClick={() => setPaymentType('credit')}
                                    >Credit card</Button>
                                </Col>

                                <Col className="col-md-auto mb-3">
                                    <Button 
                                        variant={paymentType === 'momo' ? 'dark' : 'outline-dark'} 
                                        style={{width: '200px'}}
                                        onClick={() => setPaymentType('momo')}
                                    >Momo</Button>
                                </Col>

                                <Col className="col-md-4 mb-3">
                                    <Button 
                                        variant={paymentType === 'banking' ? 'dark' : 'outline-dark'} 
                                        style={{width: '200px'}}
                                        onClick={() => setPaymentType('banking')}
                                    >Internet Banking / ATM</Button>
                                </Col>
                            </Row>           

                            <hr class="mb-4" />

                            <Row class="row mb-3">
                                <Col class="col-md-6 mb-3">
                                    <label for="cc-name">Name on card</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            aria-label="cc-name"
                                            pattern='[a-zA-Z]+'
                                            required
                                        />
                                    </InputGroup>
                                    <small class="text-muted">Full name as displayed on card</small>
                                    <div class="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </Col>
                                <Col class="col-md-6 mb-3">
                                    <label for="cc-number">Credit card number</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            aria-label="cc-number"
                                            pattern='[0-9]+'
                                            required
                                        />
                                    </InputGroup>
                                    <div class="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </Col>
                            </Row>

                            <Row class="row">
                                <Col class="col-md-3 mb-3">
                                    <label for="cc-expiration">Expiration</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            aria-label="cc-expiration"
                                            pattern='[0-9/]+'
                                            required
                                        />
                                    </InputGroup>
                                    <div class="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </Col>
                                <Col class="col-md-3 mb-3">
                                    <label for="cc-expiration">CVV</label>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            aria-label="cc-cvv"
                                            pattern='[0-9]+'
                                            required
                                        />
                                    </InputGroup>
                                    <div class="invalid-feedback">
                                        Security code required
                                    </div>
                                </Col>
                            </Row>
                            <hr class="mb-4" />
                            <button 
                                className="btn btn-dark btn-lg btn-block" 
                                type="button" style={{width: '250px'}}
                                disabled={thisCart?.length === 0}
                                onClick={() => handleCreateOrder()}
                            >Confirm order</button>
                        </form>
                    </Col>
                </Row>
            </Container>

            <Footer/>   
        </div>
    )
}