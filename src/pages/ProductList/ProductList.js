import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/product/productActions";
import { selectProductList } from "../../redux/product/productSelectors";
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { BsCaretRight } from "react-icons/bs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./ProductList.css";

export default function ProductList() {
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [date, setDate] = useState('');
    const dispatch = useDispatch();
    const productList = useSelector(selectProductList);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 9;

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };   

    return (
        <div className="vw-100">
            <Header/>

            <Container fluid className="product-list-content vw-auto">
                <Row className="d-flex justify-content-center my-5">
                    <Form style={{width: '85rem'}}>
                        <InputGroup className="mb-3">
                            <Form.Control 
                                style={{
                                    height: '3rem',
                                    boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)'
                                }} 
                                placeholder="Search something quick here..." 
                                aria-label="Search" 
                            />
                            <Button 
                                style={{
                                    height: '3rem', 
                                    width: '100px',
                                    boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)'
                                }} 
                                variant="dark" 
                                className="btn-dark" 
                                >
                                    Search
                                </Button>
                        </InputGroup>
                    </Form>
                </Row>

                <hr style={{width: '90%', marginLeft: '65px'}}/>

                <Row className="d-flex align-items-start" style={{paddingTop: '30px', paddingBottom: '30px'}}>
                    <Col 
                        className="col-sm-auto" 
                        style={{
                            marginLeft: '30px', 
                            paddingLeft: '20px', 
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            boxShadow: '1px 1px 5px 1px rgba(0, 0, 0, 0.1)'
                        }}>
                        <Row>
                            <Form>
                            <Col className="mt-2">
                                <p style={{fontWeight: 'bold'}}>Filters</p>

                                <hr style={{width: '20rem'}}/>

                                <p style={{fontWeight: 'bold'}}>All categories</p>

                                <Row 
                                    className="d-flex flex-row align-items-center justify-content-end" 
                                    onClick={() => setCategory(0)}
                                >
                                    <Col className="col-sm-auto">
                                        {category === 0 ? 
                                            <Form.Check type="radio" className="mb-1" checked/> : 
                                            <Form.Check type="radio" className="mb-1"/>
                                        }
                                    </Col>
                                    <Col>
                                        <p className="mb-1">Men</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end" style={{opacity: 0.5}}>
                                        <p className="mb-1">100</p>
                                    </Col>
                                </Row>
                                <Row 
                                    className="d-flex flex-row align-items-center justify-content-between" 
                                    onClick={() => setCategory(1)}
                                >
                                    <Col className="col-sm-auto">
                                        {category === 1 ? 
                                            <Form.Check type="radio" className="mb-1" checked/> : 
                                            <Form.Check type="radio" className="mb-1"/>
                                        }
                                    </Col>
                                    <Col>
                                        <p className="mb-1">Women</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end">
                                        <p className="mb-1" style={{opacity: 0.5}}>130</p>
                                    </Col>
                                </Row>
                                <Row 
                                    className="d-flex flex-row align-items-center justify-content-between" 
                                    onClick={() => setCategory(2)}
                                >
                                    <Col className="col-sm-auto">
                                        {category === 2 ? 
                                            <Form.Check type="radio" className="mb-1" checked/> : 
                                            <Form.Check type="radio" className="mb-1"/>
                                        }
                                    </Col>
                                    <Col className="col-sm-auto">
                                        <p className="mb-1">Children</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end">
                                        <p className="mb-1" style={{opacity: 0.5}}>92</p>
                                    </Col>
                                </Row>
                                <Row 
                                    className="d-flex flex-row align-items-center justify-content-between" 
                                    onClick={() => setCategory(3)}
                                >
                                    <Col className="col-sm-auto">
                                        {category === 3 ? 
                                            <Form.Check type="radio" className="mb-1" checked/> : 
                                            <Form.Check type="radio" className="mb-1"/>
                                        }
                                    </Col>
                                    <Col className="col-sm-auto">
                                        <p className="mb-1">Handbags</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end">
                                        <p className="mb-1" style={{opacity: 0.5}}>184</p>
                                    </Col>
                                </Row>
                                <Row 
                                    className="d-flex flex-row align-items-center justify-content-between" 
                                    onClick={() => setCategory(4)}
                                >
                                    <Col className="col-sm-auto">
                                        {category === 4 ? 
                                            <Form.Check type="radio" className="mb-1" checked/> : 
                                            <Form.Check type="radio" className="mb-1"/>
                                        }
                                    </Col>
                                    <Col className="col-sm-auto">
                                        <p className="mb-1">Rings</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end">
                                        <p className="mb-1" style={{opacity: 0.5}}>57</p>
                                    </Col>
                                </Row>
                                <Row 
                                    className="d-flex flex-row align-items-center justify-content-between" 
                                    onClick={() => setCategory(5)}
                                >
                                    <Col className="col-sm-auto">
                                        {category === 5 ? 
                                            <Form.Check type="radio" className="mb-1" checked/> : 
                                            <Form.Check type="radio" className="mb-1"/>
                                        }
                                    </Col>
                                    <Col className="col-sm-auto">
                                        <p className="mb-1">Necklaces</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end">
                                        <p className="mb-1" style={{opacity: 0.5}}>143</p>
                                    </Col>
                                </Row>
                                <Row 
                                    className="d-flex flex-row align-items-center justify-content-between" 
                                    onClick={() => setCategory(6)}
                                >
                                    <Col className="col-sm-auto">
                                        {category === 6 ? 
                                            <Form.Check type="radio" className="mb-1" checked/> : 
                                            <Form.Check type="radio" className="mb-1"/>
                                        }
                                    </Col>
                                    <Col className="col-sm-auto">
                                        <p className="mb-1">Watches</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end">
                                        <p className="mb-1" style={{opacity: 0.5}}>191</p>
                                    </Col>
                                </Row>
                                <Row 
                                    className="d-flex flex-row align-items-center justify-content-between" 
                                    onClick={() => setCategory(7)}
                                >
                                    <Col className="col-sm-auto">
                                        {category === 7 ? 
                                            <Form.Check type="radio" className="mb-1" checked/> : 
                                            <Form.Check type="radio" className="mb-1"/>
                                        }
                                    </Col>
                                    <Col className="col-sm-auto">
                                        <p className="mb-1">Others</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end">
                                        <p className="mb-1" style={{opacity: 0.5}}>238</p>
                                    </Col>
                                </Row>
                            </Col>
                            </Form>
                        </Row>

                        <hr style={{width: '20rem'}}/>

                        <Row>
                            <Col className="mt-2">
                                <p style={{fontWeight: 'bold'}}>Rating</p>

                                <Row className="d-flex flex-row align-items-center justify-content-start" onClick={() => setRating(0)}>
                                    <Col className="col-sm-auto">
                                        {rating === 0 ? 
                                            <Form.Check type="radio" className="mb-2" checked/> : 
                                            <Form.Check type="radio" className="mb-2"/>
                                        }
                                    </Col>
                                    <Col>
                                        <p className="mb-2">Show all</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end" style={{opacity: 0.5}}>
                                        <p>527</p>
                                    </Col>
                                </Row>

                                <Row className="d-flex flex-row align-items-center justify-content-start" onClick={() => setRating(1)}>
                                    <Col className="col-sm-auto">
                                        {rating === 1 ? 
                                            <Form.Check type="radio" className="mb-2" checked/> : 
                                            <Form.Check type="radio" className="mb-2"/>
                                        }
                                    </Col>
                                    <Col>
                                        <p className="mb-2">1 Star and higher</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end" style={{opacity: 0.5}}>
                                        <p>258</p>
                                    </Col>
                                </Row>

                                <Row className="d-flex flex-row align-items-center justify-content-start" onClick={() => setRating(2)}>
                                    <Col className="col-sm-auto">
                                        {rating === 2 ? 
                                            <Form.Check type="radio" className="mb-2" checked/> : 
                                            <Form.Check type="radio" className="mb-2"/>
                                        }
                                    </Col>
                                    <Col>
                                        <p className="mb-2">2 Star and higher</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end" style={{opacity: 0.5}}>
                                        <p>78</p>
                                    </Col>
                                </Row>

                                <Row className="d-flex flex-row align-items-center justify-content-start" onClick={() => setRating(3)}>
                                    <Col className="col-sm-auto">
                                        {rating === 3 ? 
                                            <Form.Check type="radio" className="mb-2" checked/> : 
                                            <Form.Check type="radio" className="mb-2"/>
                                        }
                                    </Col>
                                    <Col>
                                        <p className="mb-2">3 Star and higher</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end" style={{opacity: 0.5}}>
                                        <p>54</p>
                                    </Col>
                                </Row>

                                <Row className="d-flex flex-row align-items-center justify-content-start" onClick={() => setRating(4)}>
                                    <Col className="col-sm-auto">
                                        {rating === 4 ? 
                                            <Form.Check type="radio" className="mb-2" checked/> : 
                                            <Form.Check type="radio" className="mb-2"/>
                                        }
                                    </Col>
                                    <Col>
                                        <p className="mb-2">4 Star and higher</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end" style={{opacity: 0.5}}>
                                        <p>187</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <hr style={{width: '20rem'}}/>

                        <Row>
                            <Col className="mt-2 mb-3">
                                <p style={{fontWeight: 'bold'}}>Price</p>

                                <Row className="d-flex flex-row justify-content-between">
                                    <Col>
                                        <Form.Control pattern="[0-9]+" placeholder="From $" style={{width: '100px'}}/>
                                    </Col>
                                    -
                                    <Col>
                                        <Form.Control pattern="[0-9]+" placeholder="To $" style={{width: '100px'}}/>
                                    </Col>
                                    <Col>
                                        <Button variant="light" style={{border: '1px solid rgba(128, 128, 128, 0.5)'}}><BsCaretRight style={{color: 'rgba(128, 128, 128, 0.5)'}}/></Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <hr style={{width: '20rem'}}/>

                        <Row>
                            <Col className="mt-2">
                                <p style={{fontWeight: 'bold'}}>Date added</p>

                                <Row className="d-flex flex-row align-items-center justify-content-start" onClick={() => setDate(0)}>
                                    <Col className="col-sm-auto">
                                        {date === 0 ? 
                                            <Form.Check type="radio" className="mb-2" checked/> : 
                                            <Form.Check type="radio" className="mb-2"/>
                                        }
                                    </Col>
                                    <Col>
                                        <p className="mb-2">Any date</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end" style={{opacity: 0.5}}>
                                        <p>527</p>
                                    </Col>
                                </Row>

                                <Row className="d-flex flex-row align-items-center justify-content-start" onClick={() => setDate(1)}>
                                    <Col className="col-sm-auto">
                                        {date === 1 ? 
                                            <Form.Check type="radio" className="mb-2" checked/> : 
                                            <Form.Check type="radio" className="mb-2"/>
                                        }
                                    </Col>
                                    <Col>
                                        <p className="mb-2">Last year</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end" style={{opacity: 0.5}}>
                                        <p>346</p>
                                    </Col>
                                </Row>

                                <Row className="d-flex flex-row align-items-center justify-content-start" onClick={() => setDate(2)}>
                                    <Col className="col-sm-auto">
                                        {date === 2 ? 
                                            <Form.Check type="radio" className="mb-2" checked/> : 
                                            <Form.Check type="radio" className="mb-2"/>
                                        }
                                    </Col>
                                    <Col>
                                        <p className="mb-2">Last month</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end" style={{opacity: 0.5}}>
                                        <p>128</p>
                                    </Col>
                                </Row>

                                <Row className="d-flex flex-row align-items-center justify-content-start mb-3" onClick={() => setDate(3)}>
                                    <Col className="col-sm-auto">
                                        {date === 3 ? 
                                            <Form.Check type="radio" className="mb-2" checked/> : 
                                            <Form.Check type="radio" className="mb-2"/>
                                        }
                                    </Col>
                                    <Col>
                                        <p className="mb-2">Last week</p>
                                    </Col>
                                    <Col className="d-flex justify-content-end" style={{opacity: 0.5}}>
                                        <p>21</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        {productList &&
                            productList.reduce((rows, product, i) => {
                                if (i >= currentPage * productsPerPage && i < (currentPage + 1) * productsPerPage) {
                                    if (i % 3 === 0) rows.push([]);
                                    rows[rows.length - 1].push(
                                        <Col key={i} className="col-sm-auto mb-4">
                                            <ProductCard 
                                                id={product._id}
                                                name={product.name}
                                                price={product.price}
                                                color={product.color}
                                            />
                                        </Col>
                                    );
                                }
                                return rows;
                            }, []).map((row, i) => {
                                return (
                                    <Row key={i} className="mb-4">
                                        {row}
                                    </Row>
                                )
                            })
                        }
                        <div className="d-flex justify-content-center">
                            <ReactPaginate
                                pageCount={Math.ceil(productList?.length / productsPerPage)}
                                pageRangeDisplayed={2}
                                marginPagesDisplayed={1}
                                onPageChange={handlePageChange}
                                containerClassName="pagination"
                                activeClassName="active"
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                previousLinkClassName="page-link"
                                nextClassName="page-item"
                                nextLinkClassName="page-link"
                                nextLabel="Next >"
                                previousLabel="< Previous"
                                breakLabel="..."
                                renderOnZeroPageCount={null}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer/>
        </div>
    )
}