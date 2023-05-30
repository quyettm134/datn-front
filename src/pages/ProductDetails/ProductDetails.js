import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../../redux/product/productSelectors';
import { fetchOneProduct } from '../../redux/product/productActions';
import { addItem } from '../../redux/cart/cartSlice';
import { Container, Row, Col, Carousel, Image, Button, Form } from 'react-bootstrap';
import { BsArrowLeftSquare, BsHeart, BsPersonCircle, BsStarFill, BsStarHalf, BsTruck } from 'react-icons/bs';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './ProductDetails.css';

export default function ProductDetails() {
    const [showDetails, setShowDetails] = useState(true);
    const [showRating, setShowRating] = useState(false);
    const [showComments, setShowComments] = useState(5);
    const dispatch = useDispatch();
    const thisProduct = useSelector(selectProduct);
    const { id } = useParams();

    const notifyAddItem = () => toast.success("Item added to cart!");

    useEffect(() => {
        dispatch(fetchOneProduct({ id }));
    }, [dispatch, id]);

    return (
        <div className='vw-100'>
            <Header />

            <Container fluid className='product-details-content vw-auto' style={{marginTop: '80px'}}>
                <Row className="d-flex" style={{paddingTop: '30px', paddingBottom: '30px'}}>
                    <Row>
                        <Col>
                            <Row className='justify-content-end' style={{paddingBottom: '10px'}}>
                                <Image style={{
                                    width: '140px',
                                    height: '150px'
                                }} src={require(`../../assets/images/products/0126589006.jpg`)}/>
                            </Row>
                            <Row className='justify-content-end' style={{paddingBottom: '10px'}}>
                                <Image style={{
                                    width: '140px',
                                    height: '150px'
                                }} src={require(`../../assets/images/products/0126589006.jpg`)}/>
                            </Row>
                            <Row className='justify-content-end' style={{paddingBottom: '10px'}}>
                                <Image style={{
                                    width: '140px',
                                    height: '150px'
                                }} src={require(`../../assets/images/products/0126589006.jpg`)}/>
                            </Row>
                            <Row></Row>
                        </Col>

                        <Col>
                            <Carousel>
                                <Carousel.Item interval={3000} style={{
                                    width: '330px',
                                    height: '600px'
                                }}>
                                    <Image src={require(`../../assets/images/products/0126589006.jpg`)}/>
                                </Carousel.Item>
                                <Carousel.Item interval={3000} style={{
                                    width: '330px',
                                    height: '600px'
                                }}>
                                    <Image src={require(`../../assets/images/products/0126589006.jpg`)}/>
                                </Carousel.Item>
                                <Carousel.Item interval={3000} style={{
                                    width: '330px',
                                    height: '600px'
                                }}>
                                    <Image src={require(`../../assets/images/products/0126589006.jpg`)}/>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        
                        <Col style={{marginLeft: '20px'}}>
                            <Row>
                                <p className='fs-3 fw-bold'>{thisProduct?.prod_name}</p>
                            </Row>
                            <Row style={{paddingBottom: '15px'}}>
                                <Col>
                                    <BsStarFill style={{width: '25px', height: '25px'}}/><BsStarFill style={{width: '25px', height: '25px'}}/><BsStarFill style={{width: '25px', height: '25px'}}/><BsStarFill style={{width: '25px', height: '25px'}}/><BsStarHalf style={{width: '25px', height: '25px'}}/>
                                </Col>
                            </Row>
                            <Row>
                                <Row><p className='fs-4'>${' '}{thisProduct?.price}</p></Row>
                                <Row><p className='fs-4'>Color: Black</p></Row>
                            </Row>
                            <Row style={{paddingBottom: '30px'}}>
                                <Col>
                                    <Button variant='dark' style={{width: '250px', borderRadius: '25px'}} 
                                        onClick={() => {
                                            dispatch(addItem({ 
                                                id: thisProduct._id, 
                                                name: thisProduct.prod_name,
                                                price: thisProduct.price,
                                            }));
                                            notifyAddItem();
                                        }}>ADD TO CART</Button>
                                    <BsHeart style={{width: '30px', height: '30px', marginLeft: '25px', cursor: 'pointer'}}/>
                                </Col>
                            </Row>
                            <Row>
                                <div style={{width: '300px', height: '150px', border: '1px solid #B59797'}}>
                                    <Row style={{paddingTop: '15px', paddingBottom: '10px'}}>
                                        <Col>
                                            <BsTruck style={{width: '25px', height: '25px'}}/>{' '}<span style={{fontSize: '18px', marginLeft: '10px'}}>Free delivery</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <BsArrowLeftSquare style={{width: '25px', height: '25px'}}/>{' '}<span style={{fontSize: '18px', marginLeft: '10px'}}>Free return in 7 days</span>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        <p style={{fontSize: '14px', textDecoration: 'underline', cursor: 'pointer'}}>This product has shipping policies</p>
                                    </Row>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Row>

                <hr/>

                <Row className="d-flex">
                    <Row style={{paddingBottom: '30px'}}>
                        <Col>
                            <Row className='justify-content-end'>
                                <Button 
                                    variant={showDetails === true ? 'dark' : 'light'} 
                                    style={{width: '100px'}}
                                    onClick={() => {
                                        setShowDetails(true);
                                        setShowRating(false);
                                    }}
                                >Detail</Button>
                            </Row>
                        </Col>
                        <Col className='col-sm-auto'></Col>
                        <Col>
                            <Row>
                                <Button 
                                    variant={showRating === true ? 'dark' : 'light'} 
                                    style={{width: '100px'}}
                                    onClick={() => {
                                        setShowRating(true); 
                                        setShowDetails(false);
                                    }}
                                >Rating</Button>
                            </Row>
                        </Col>
                    </Row>

                    {showDetails && <Row>
                        <Col className='col-sm-1'></Col>
                        <Col>
                            <Row>
                                <p className='fs-4 fw-bold'>PRODUCT DETAILS</p>
                            </Row>
                            <Row>
                                <p>Accessories by ASOS DESIGN</p>
                            </Row>
                            <Row>
                                <p>• Accessorising is the best part</p>
                            </Row>
                            <Row>
                                <p>• Cobweb design</p>
                            </Row>
                            <Row>
                                <p>• Adjustable length</p>
                            </Row>
                            <Row>
                                <p>• Lobster clasp</p>
                            </Row>
                        </Col>

                        <Col style={{paddingRight: '30px'}}>
                            <Row>
                                <p className='fs-4 fw-bold'>PRODUCT CODE</p>
                            </Row>
                            <Row>
                                <p>120003210</p>
                            </Row>
                            <Row>
                                <p className='fs-4 fw-bold'>BRAND</p>
                            </Row>
                            <Row>
                                <p>
                                    This is ASOS DESIGN – your go-to for all the latest trends, 
                                    no matter who you are, where you’re from and what you’re up to. 
                                    Exclusive to ASOS, our universal brand is here for you, and comes 
                                    in all our fit ranges: ASOS Curve, Tall, ...
                                </p>
                            </Row>
                        </Col>
                        
                        <Col style={{paddingLeft: '30px'}}>
                            <Row>
                                <p className='fs-4 fw-bold'>PRODUCT CARE</p>
                            </Row>
                            <Row>
                                <p>Avoid contact with liquids</p>
                            </Row>
                            <Row>
                                <p className='fs-4 fw-bold'>ABOUT</p>
                            </Row>
                            <Row>
                                <p>Silver-tone base metal</p>
                            </Row>
                            <Row>
                                <p>Necklace: 80% Polyester, 20% Steel</p>
                            </Row>
                        </Col>
                    </Row>}

                    {showRating && <Row>
                        <Row style={{marginLeft: '50px', paddingBottom: '20px'}}>
                            <Col className='col-lg-3'></Col>

                            <Col className='col-md-auto'>
                                <Row className='justify-content-end'>
                                    <p className='fs-3 fw-bold'>4.5 / 5</p>
                                </Row>
                                <Row>
                                    <Col>
                                        <BsStarFill style={{width: '25px', height: '25px'}}/><BsStarFill style={{width: '25px', height: '25px'}}/><BsStarFill style={{width: '25px', height: '25px'}}/><BsStarFill style={{width: '25px', height: '25px'}}/><BsStarHalf style={{width: '25px', height: '25px'}}/>
                                    </Col>
                                </Row>
                            </Col>

                            <Col>
                                <Row>
                                    <Col className='col-sm-auto'>
                                        <Button 
                                            variant={showComments === 5 ? 'dark' : 'light'} 
                                            style={{width: '80px', height: '35px'}}
                                            onClick={() => setShowComments(5)}
                                        >5 Stars</Button>
                                    </Col>
                                    <Col className='col-sm-auto'>
                                        <Button 
                                            variant={showComments === 4 ? 'dark' : 'light'} 
                                            style={{width: '80px', height: '35px'}}
                                            onClick={() => setShowComments(4)}
                                        >4 Stars</Button>
                                    </Col>
                                    <Col className='col-sm-auto'>
                                        <Button 
                                            variant={showComments === 3 ? 'dark' : 'light'} 
                                            style={{width: '80px', height: '35px'}}
                                            onClick={() => setShowComments(3)}
                                        >3 Stars</Button>
                                    </Col>
                                    <Col className='col-sm-auto'>
                                        <Button 
                                            variant={showComments === 2 ? 'dark' : 'light'} 
                                            style={{width: '80px', height: '35px'}}
                                            onClick={() => setShowComments(2)}
                                        >2 Stars</Button>
                                    </Col>
                                    <Col>
                                        <Button 
                                            variant={showComments === 1 ? 'dark' : 'light'} 
                                            style={{width: '80px', height: '35px'}}
                                            onClick={() => setShowComments(1)}
                                        >1 Stars</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='d-flex justify-content-center' style={{paddingBottom: '20px'}}>
                            <Form.Control style={{
                                width: '800px',
                                height: '50px'
                            }} placeholder='Write something...'></Form.Control>
                        </Row>

                        <Row>
                            <Row style={{paddingBottom: '20px'}}>
                                <Col className='d-flex justify-content-end'>
                                    <BsPersonCircle style={{width: '30px', height: '30px'}}/>
                                </Col>
                                <Col className='col-lg-1'>
                                    <Row>James</Row>
                                    <Row>
                                        <Col style={{paddingLeft: 0, paddingRight: 0}}>
                                            <BsStarFill/>
                                            <BsStarFill/>
                                            <BsStarFill/>
                                            <BsStarFill/>
                                            <BsStarHalf/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        2022-10-20
                                    </Row>
                                </Col>
                                <Col>
                                    Great, abcxyz<br/>
                                    Free ship<br/>
                                    Ok
                                </Col>
                                <Col></Col>
                            </Row>

                            <Row>
                                <Col className='d-flex justify-content-end'>
                                    <BsPersonCircle style={{width: '30px', height: '30px'}}/>
                                </Col>
                                <Col className='col-lg-1'>
                                    <Row>James</Row>
                                    <Row>
                                        <Col style={{paddingLeft: 0, paddingRight: 0}}>
                                            <BsStarFill/>
                                            <BsStarFill/>
                                            <BsStarFill/>
                                            <BsStarFill/>
                                            <BsStarHalf/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        2022-10-20
                                    </Row>
                                </Col>
                                <Col>
                                    Great, abcxyz<br/>
                                    Free ship<br/>
                                    Ok
                                </Col>
                                <Col></Col>
                            </Row>
                        </Row>
                    </Row>}
                </Row>

                <hr/>

                <Row className="d-flex" style={{paddingBottom: '30px'}}>
                    <Row className='row-xl-auto' style={{paddingBottom: '20px'}}>
                        <p className='fs-4 fw-bold' style={{paddingLeft: '35px'}}>YOU MIGHT ALSO LIKE</p>
                    </Row>

                    <Row style={{paddingBottom: '30px'}}>
                        <Col className='d-flex justify-content-center'>
                            <Image src={require(`../../assets/images/products/0126589007.jpg`)}
                                style={{width: '160px', height: '200px', cursor: 'pointer'}}
                            />
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <Image src={require(`../../assets/images/products/0126589010.jpg`)}
                                style={{width: '160px', height: '200px', cursor: 'pointer'}}
                            />
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <Image src={require(`../../assets/images/products/0126589011.jpg`)}
                                style={{width: '160px', height: '200px', cursor: 'pointer'}}
                            />
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <Image src={require(`../../assets/images/products/0126589012.jpg`)}
                                style={{width: '160px', height: '200px', cursor: 'pointer'}}
                            />
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <Image src={require(`../../assets/images/products/0130035001.jpg`)}
                                style={{width: '160px', height: '200px', cursor: 'pointer'}}
                            />
                        </Col>
                    </Row>

                    <Row className='justify-content-center'>
                        <Button variant='dark' style={{width: '300px', borderRadius: '20px'}}>SEE MORE</Button>
                    </Row>
                </Row>

                <ToastContainer />
            </Container>

            <Footer/>
        </div>
    )
}