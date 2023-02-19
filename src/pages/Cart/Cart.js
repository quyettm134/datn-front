import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './Cart.css';

export default function Cart() {
    return (
        <div className='vw-100'>
            <Header />

            <Container fluid className='cart-content vw-auto'>
                <Row className='row-xl-auto' style={{paddingTop: '15px', paddingLeft: '15px'}}>
                    <p className='fs-2 fw-bold'>YOUR SELECTIONS</p>
                </Row>

                <hr/>

                <Row></Row>
            </Container>

            <Footer />
        </div>
    )
}