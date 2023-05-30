import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartSlice";
import { Row, Col, Card, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { BsHeart, BsCart } from "react-icons/bs";
import 'react-toastify/dist/ReactToastify.css';
import defaultImage from "../../assets/images/Logo.png";
import "./ProductCard.css";

export default function ProductCard({ id, name, price, color, article_id }) {
    const dispatch = useDispatch();

    const notifyAddItem = () => toast.success("Item added to cart!");

    // const imagePath = require(`../../assets/images/products/0${article_id}.jpg`);
    const imageSrc = defaultImage;

    return (
        <Col className="col-md-auto product-card-content">
            <Card style={{backgroundColor: '#ffffff', boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)'}}>
                <Link to={`/product_details/${id}`} style={{textDecoration: 'none', color: '#000000'}}>
                    <Card.Img 
                        style={{width: '350px', height: '267px', objectFit: 'cover'}} variant="top" 
                        src={imageSrc}
                    />
                </Link>
                <Card.Body style={{maxWidth: '350px'}}>
                    <Row style={{marginBottom: '20px'}}>
                        <Col>
                            <Row>
                                <Card.Text style={{
                                    fontWeight: "bold",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    maxWidth: "100%",
                                    fontSize: "16px",
                                    wordWrap: "break-word",
                                }}>
                                    {name}
                                </Card.Text>
                            </Row>
                        </Col>
                        <Col>
                            <Card.Text>${' '}{price}</Card.Text>
                        </Col>
                    </Row>
                    <Row className="d-flex align-items-center justify-content-center">
                        <Row style={{paddingBottom: '10px'}}>
                            <Button 
                                variant="danger" 
                                style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-evenly', 
                                    alignItems: 'center', 
                                    borderRadius: '20px',
                                    maxWidth: '250px',
                                    marginLeft: '20px'
                                }} 
                                onClick={
                                    () => {alert('heart button')}
                                }>
                                    <span>Favourite</span>
                                    <BsHeart style={{width: '20px', height: '20px'}}/>
                            </Button>
                        </Row>
                        <Row style={{flexWrap: 'wrap'}}>
                            <Button 
                                variant="dark" 
                                style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-evenly', 
                                    alignItems: 'center', 
                                    borderRadius: '20px',
                                    maxWidth: '250px',
                                    marginLeft: '20px'
                                }} 
                                onClick={() => {
                                    dispatch(addItem({ 
                                        id: id, 
                                        name: name,
                                        price: price,
                                        color: color
                                    }));
                                    notifyAddItem();
                                }}
                            >
                                Add to cart
                                <BsCart style={{width: '20px', height: '20px'}}/>
                            </Button>

                            <ToastContainer />
                        </Row>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}