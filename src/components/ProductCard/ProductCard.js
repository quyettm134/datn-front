import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartSlice";
import { Row, Col, Card, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { BsHeart, BsCart } from "react-icons/bs";
import 'react-toastify/dist/ReactToastify.css';
import "./ProductCard.css";

export default function ProductCard({ id, name, price, color }) {
    const dispatch = useDispatch();

    const notifyAddItem = () => toast.success("Item added to cart!");

    return (
        <Col className="col-md-auto product-card-content">
            <Card style={{backgroundColor: '#ffffff', boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)'}}>
                <Link to={`/product_details/${id}`} style={{textDecoration: 'none', color: '#000000'}}>
                    <Card.Img style={{width: '350px', height: '267px', objectFit: 'cover'}} variant="top" src="https://www.istockphoto.com/resources/images/PhotoFTLP/1035146258.jpg"/>
                </Link>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Text style={{fontWeight: "bold"}}>{name}</Card.Text>
                            <Card.Text>${' '}{price}</Card.Text>
                        </Col>
                        <Col style={{marginRight: '10px'}}>
                            <Row style={{paddingBottom: '10px'}}>
                                <Button variant="danger" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', borderRadius: '20px' }} onClick={() => {alert('heart button')}}>
                                    <span>Favourite</span>
                                    <BsHeart style={{width: '20px', height: '20px'}}/>
                                </Button>
                            </Row>
                            <Row>
                                <Button 
                                    variant="dark" 
                                    style={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-evenly', 
                                        alignItems: 'center', 
                                        borderRadius: '20px' 
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
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}