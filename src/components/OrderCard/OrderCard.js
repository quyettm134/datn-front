import React from "react";
import { Col, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "./OrderCard.css";

export default function OrderCard({ id, order_day, total, status, itemNumber }) {
    const date = new Date(order_day);

    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    const capitalizedStatus = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

    return (
        <>
            <Row className="d-flex order-card-content">
                <Col className="col-sm-4 gx-xxl-5">
                    <Image className="shadow justify-content-start" src={Logo} style={{
                        width: '150px',
                        height: '150px',
                    }}/>
                </Col>

                <Col className="col-sm-4 justify-content-start fs-5">
                    <Row className="mb-4">
                        <Col className="col-sm-auto">Status:</Col>
                        <Col>
                            <span>{capitalizedStatus}</span>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col className="col-sm-auto">Date:</Col>
                        <Col>
                            <span>{formattedDate}</span>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col className="col-sm-auto">Number of items:</Col>
                        <Col>
                            <span>{itemNumber}</span>
                        </Col>
                    </Row>
                </Col>

                <Col xs={1}>
                    <div className="vr" style={{
                        height: '130px'
                    }}></div>
                </Col>

                <Col className="col-sm-3 fs-5 d-flex flex-column justify-content-evenly">
                    <Row className="gy-0">
                        <Col className="col-sm-auto">Total:</Col>
                        <Col><span style={{color: '#85BB65'}}>${' '}{total}</span></Col>
                    </Row>

                    <Row>
                        <Link to={`/order_details/${id}`}>
                            <Button 
                                variant="outline-secondary" 
                                style={{width: '150px', marginRight: '30px'}}
                            >
                                Details
                            </Button>
                        </Link>
                    </Row>
                </Col>
            </Row>

            <hr style={{ width: '700px' }}/>
        </>
    )
}