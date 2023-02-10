import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { BsCart3, BsPerson, BsPinMap, BsSearch, BsTelephone } from "react-icons/bs";

export default function Header() {
    return (
        <Container fluid className="header-content">
            <Row className="d-flex" style={{
                color: "#ffffff",
                backgroundColor: "#000000",
                height: "35px",
                alignItems: "center"
            }}>
                <Col className="col-md-auto" style={{cursor: "pointer"}}><BsPinMap />{' '}Ho Chi Minh city - Vietnam</Col>
                <Col style={{cursor: "pointer"}}><BsTelephone />{' '}+84 987654321</Col>
                <Col className="col-md-auto"><BsPerson />{' '}<Link to="/signin" style={{
                    color: "#ffffff", 
                    textDecoration: "none"
                }}>Sign in</Link></Col>
                <Col className="col-md-auto"><BsCart3 />{' '}<Link to="/cart" style={{
                    color: "#ffffff", 
                    textDecoration: "none"
                }}>Cart</Link></Col>
                <Col className="col-sm-auto"><BsSearch style={{cursor: "pointer"}}/></Col>
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
                    <Col className="text-center fs-5"><p style={{cursor: "pointer"}}>What's new</p></Col>
                    <Col className="text-center fs-5"><p style={{cursor: "pointer"}}>Men</p></Col>
                    <Col className="text-center fs-5"><p style={{cursor: "pointer"}}>Women</p></Col>
                    <Col className="text-center fs-5"><p style={{cursor: "pointer"}}>Children</p></Col>
                    <Col className="text-center fs-5"><p style={{cursor: "pointer"}}>Handbags</p></Col>
                    <Col className="text-center fs-5"><p style={{cursor: "pointer"}}>Rings</p></Col>
                    <Col className="text-center fs-5"><p style={{cursor: "pointer"}}>Necklaces</p></Col>
                    <Col className="text-center fs-5"><p style={{cursor: "pointer"}}>Watches</p></Col>
                    <Col className="text-center fs-5"><p style={{cursor: "pointer"}}>Others</p></Col>
                </Row>
            </Row>
        </Container>
    )
}