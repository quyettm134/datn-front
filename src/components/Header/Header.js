import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { BsCart3, BsPerson, BsPinMap, BsSearch, BsTelephone } from "react-icons/bs";

export default function Header() {
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
                <Col className="col-md-auto"><BsPerson />{' '}<Link to="/signin" style={{
                    color: "#ffffff", 
                    textDecoration: "none",
                    marginRight: "15px"
                }}>Sign in</Link></Col>
                <Col className="col-md-auto"><BsCart3 />{' '}<Link to="/cart" style={{
                    color: "#ffffff", 
                    textDecoration: "none",
                    marginRight: "15px"
                }}>Cart</Link></Col>
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