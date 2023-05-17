import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../../redux/cart/cartSlice";
import { selectUser } from "../../redux/user/userSelectors";
import { selectCart } from "../../redux/cart/cartSelectors";
import { Row, Col, Container, Badge, Image, Form, Button } from "react-bootstrap";
import { BsCart3, BsPerson, BsSearch, BsChevronRight } from "react-icons/bs";
import "./Header.css";

export default function Header() {
    const dispatch = useDispatch();
    const User = useSelector(selectUser);
    const Cart = useSelector(selectCart);
    const [isHover, setIsHover] = useState(false);
    const [showCategory, setShowCategory] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    const handleMouseCategoryEnter = () => {
        setShowCategory(true);
    }

    const handleMouseCategoryLeave = () => {
        setShowCategory(false);
    }

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ itemId: id, quantity: quantity }));
    }

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    }

    return (
        <Container fluid className="header-content vw-auto">
            <Row className="d-flex" style={{
                color: "#ffffff",
                backgroundColor: "#000000",
                height: "60px",
                alignItems: "center",
            }}>
                
                <Col className="col-sm-auto brand-name-header d-flex align-items-center justify-content-center" style={{
                        fontSize: "50px",
                        marginLeft: "10px",
                    }}>
                    <Link to="/" 
                        style={{
                            color: "#ffffff", 
                            textDecoration: "none",
                    }}>
                        KQQ
                    </Link>
                </Col>

                <Col className="d-flex" style={{ marginLeft: '20px' }}>
                    <Row style={{ fontSize: '18px' }}>
                        <Col className="col-sm-auto nav-bar" style={{ marginLeft: '20px' }}><Link to="/" style={{color: 'white', textDecoration: 'none' }}>Home</Link></Col>
                        <Col className={`col-sm-auto nav-bar ${showCategory ? 'active' : ''}`} style={{ marginLeft: '20px' }}>
                            <Link to="/product_list" 
                                style={{color: 'white', textDecoration: 'none' }}
                                onMouseEnter={handleMouseCategoryEnter}
                            >
                                Categories
                            </Link>
                        </Col>
                        <Col className="col-sm-auto nav-bar" style={{ marginLeft: '20px' }}>About</Col>
                        <Col className="col-sm-auto nav-bar" style={{ marginLeft: '20px' }}>Payment</Col>
                        <Col className="col-sm-auto nav-bar" style={{ marginLeft: '20px' }}>Contact us</Col>
                    </Row>
                </Col>
                
                {User ? (

                <Col className="col-md-auto align-self-center nav-bar" >
                    <BsPerson />{' '}{' '}
                    <Link to="/profile" style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        marginRight: "15px",
                        cursor: 'pointer',
                        fontSize: '18px'
                    }}>
                        {User.fullname}
                    </Link>
                </Col>

                ) : (

                <Col className="col-md-auto align-self-center nav-bar" style={{fontSize: '18px'}}>
                    <BsPerson />{' '}
                    <Link to="/signin" style={{
                        color: "#ffffff",
                        textDecoration: "none",
                        marginRight: "15px",
                        cursor: 'pointer'
                    }}>
                        Sign in
                    </Link>
                </Col>
                )}

                <Col 
                    className={`col-md-auto align-self-center nav-bar ${isHover ? 'active' : ''}`} 
                    style={{fontSize: '18px'}}
                    onMouseEnter={handleMouseEnter}
                >
                    <BsCart3 />
                    {' '}
                    <Link to="/cart" style={{
                        color: "#ffffff", 
                        textDecoration: "none",
                        marginRight: "15px",
                        cursor: 'pointer'
                    }}>
                        Cart{' '}
                        <Badge bg="danger">{Cart.length}</Badge>
                    </Link>
                </Col>

                <Col className="col-md-auto align-self-center nav-bar" 
                    style={{
                        marginRight: "15px",
                        paddingRight: "25px",
                        fontSize: '18px'
                    }}
                >
                    <BsSearch style={{cursor: "pointer"}}/>
                </Col>
            </Row>

            {isHover && 
                <Container
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ 
                        backgroundColor: 'white',
                        width: '500px', 
                        height: '600px', 
                        position: 'fixed', 
                        zIndex: 9999,
                        right: 20,
                        boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
                        overflowY: 'auto',
                        borderRadius: '10px',
                    }}
                >
                    <Col>
                        {Cart.length === 0 ? 
                            (
                                <div className="card-body cart" style={{marginTop: '200px'}}>
                                    <div className="col-sm-12 empty-cart-cls">
                                        <div className="text-center">
                                            <img src="https://i.imgur.com/dCdflKN.png" alt="" width="130" height="130" className="img-fluid mb-4 mr-3"/>
                                            <h3><strong>Your Cart is Empty</strong></h3>
                                            <h4>Add something to make me happy</h4>
                                        </div>
                                    </div>
                                </div>
                            )

                            :

                            Cart.map((item, index) => (
                                <div key={index}>
                                    <Row 
                                        className='row-lg-5 d-flex justify-content-center align-items-center' 
                                        style={{
                                            backgroundColor: 'white', 
                                            marginLeft: '20px', 
                                            marginTop: '20px', 
                                            marginBottom: '20px', 
                                            borderRadius: '10px',
                                            boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
                                            maxHeight: '300px',
                                            maxWidth: '450px'
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
                                                    <p style={{fontSize: '16px', cursor: 'pointer'}} 
                                                        onClick={() => handleRemoveItem(item.id)}
                                                    >Remove</p>
                                                </Col>
                                            </Row>
                                        </Col>
    
                                        <Col xs={1}></Col>
    
                                        <Col>
                                            <Row style={{marginTop: '20px', marginRight: '20px'}}>
                                                <Col className="col-sm-auto">
                                                    Quantity:
                                                </Col>

                                                <Col>
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
                                                            style={{
                                                                maxWidth: '50px'
                                                            }}
                                                            className="text-center"
                                                        />
                                                        <Button 
                                                            className="btn btn-secondary" 
                                                            type="button" 
                                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                                                +
                                                        </Button>
                                                    </div>
                                                </Col>
                                            </Row>
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
                            ))
                        }
                    </Col>
                </Container>
            }

            {showCategory &&
                <Container
                    onMouseEnter={handleMouseCategoryEnter}
                    onMouseLeave={handleMouseCategoryLeave}
                    style={{ 
                        backgroundColor: 'white',
                        width: '200px', 
                        height: '170px', 
                        position: 'fixed', 
                        zIndex: 9999,
                        left: 270,
                        boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px',
                    }}
                >
                    <Col className="mt-2 mx-2">
                        <Row className="mt-2 align-items-center justify-content-between">
                            <Col xs="auto">
                                <span className="category-link"><Link to="/men" style={{textDecoration: 'none', color: 'black'}}>Menswear</Link></span>
                            </Col>
                            <Col xs="auto">
                                <BsChevronRight />
                            </Col>
                        </Row>
                        <Row className="mt-2 align-items-center justify-content-between">
                            <Col xs="auto">
                                <span className="category-link"><Link to="/women" style={{textDecoration: 'none', color: 'black'}}>Ladieswear</Link></span>
                            </Col>
                            <Col xs="auto">
                                <BsChevronRight />
                            </Col>
                        </Row>
                        <Row className="mt-2 align-items-center justify-content-between">
                            <Col xs="auto">
                                <span className="category-link">Divided</span>
                            </Col>
                            <Col xs="auto">
                                <BsChevronRight />
                            </Col>
                        </Row>
                        <Row className="mt-2 align-items-center justify-content-between">
                            <Col xs="auto">
                                <span className="category-link">Sport</span>
                            </Col>
                            <Col xs="auto">
                                <BsChevronRight />
                            </Col>
                        </Row>
                        <Row className="mt-2 align-items-center justify-content-between">
                            <Col xs="auto">
                                <span className="category-link">Baby/Children</span>
                            </Col>
                            <Col xs="auto">
                                <BsChevronRight />
                            </Col>
                        </Row>
                    </Col>
                </Container>
            }
        </Container>
    )
}