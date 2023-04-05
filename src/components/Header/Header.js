import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/user/userSelectors";
import { selectCart } from "../../redux/cart/cartSelectors";
import { Row, Col, Container, OverlayTrigger, Badge } from "react-bootstrap";
import { BsCart3, BsPerson, BsPinMap, BsSearch, BsTelephone } from "react-icons/bs";
import "./Header.css";

export default function Header() {
    const User = useSelector(selectUser);
    const Cart = useSelector(selectCart);

    return (
        <Container fluid className="header-content vw-auto">
            <Row className="d-flex" style={{
                color: "#ffffff",
                backgroundColor: "#000000",
                height: "35px",
                alignItems: "center"
            }}>
                <Col className="col-md-auto" style={{cursor: "pointer"}}><BsPinMap />{' '}Ho Chi Minh city - Vietnam</Col>
                <Col style={{
                    cursor: "pointer",
                    marginLeft: "15px"
                }}><BsTelephone />{' '}+84 987654321</Col>
                {User ? (
                <Col className="col-md-auto"><BsPerson />{' '}{' '}<Link to="/profile" style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    marginRight: "15px",
                    cursor: 'pointer'
                    }}>{User.fullname}</Link></Col>
                ) : (
                <Col className="col-md-auto"><BsPerson />{' '}<Link to="/signin" style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    marginRight: "15px",
                    cursor: 'pointer'
                    }}>Sign in</Link></Col>
                )}
                <Col className="col-md-auto">
                    <BsCart3 />
                    {' '}
                    {/* <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Container style={{ backgroundColor: 'white', width: '500px', height: '1000px', position: 'fixed', zIndex: 9999 }}>
                                <Col>
                                    <Row>Your items</Row>
                                </Col>
                            </Container>
                        }
                    > */}
                        <Link to="/cart" style={{
                            color: "#ffffff", 
                            textDecoration: "none",
                            marginRight: "15px",
                            cursor: 'pointer'
                        }}>
                            Cart{' '}
                            <Badge bg="danger">{Cart.length}</Badge>
                        </Link>
                    {/* </OverlayTrigger> */}
                </Col>
                <Col className="col-md-auto" style={{
                    marginRight: "15px",
                    paddingRight: "25px"
                }}><BsSearch style={{cursor: "pointer"}}/></Col>
            </Row>

            <Row className="d-flex" style={{
                color: "#ffffff",
                backgroundColor: "#1C1D20",
                height: "140px",
                alignItems: "center"
            }}>
                <Row>
                    <Col className="text-center brand-name-header" style={{
                        fontSize: "50px"
                    }}><Link to="/" style={{
                        color: "#ffffff", 
                        textDecoration: "none"
                    }}>KQQ</Link></Col>
                </Row>
                <Row style={{marginLeft: "10px"}}>
                    <Col className="text-center fs-5 header-link"><Link to="/" style={{textDecoration:'none', color: 'white'}}><p>What's new</p></Link></Col>
                    <Col className="text-center fs-5 header-link"><Link to="/men" style={{textDecoration:'none', color: 'white'}}><p>Men</p></Link></Col>
                    <Col className="text-center fs-5 header-link"><Link to="/women" style={{textDecoration:'none', color: 'white'}}><p>Women</p></Link></Col>
                    <Col className="text-center fs-5 header-link"><p>Children</p></Col>
                    <Col className="text-center fs-5 header-link"><p>Handbags</p></Col>
                    <Col className="text-center fs-5 header-link"><p>Rings</p></Col>
                    <Col className="text-center fs-5 header-link"><p>Necklaces</p></Col>
                    <Col className="text-center fs-5 header-link"><p>Watches</p></Col>
                    <Col className="text-center fs-5 header-link"><p>Others</p></Col>
                </Row>
            </Row>
        </Container>
    )
}