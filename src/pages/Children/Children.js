import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/product/productActions";
import { selectProductList, selectProductStatus } from "../../redux/product/productSelectors";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import Loading from "../../components/Loading/Loading";
import ProductCard from "../../components/ProductCard/ProductCard";
import './Children.css';
import ChildrenSlide from "../../assets/images/children.jpg";
export default function Children() {
    const dispatch = useDispatch();
    const productList = useSelector(selectProductList);
    const productStatus = useSelector(selectProductStatus);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 16;

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const menProductList = productList?.filter(product => product.index_group_name === 'Baby/Children');

    return (
        <div className="vw-100">
            <Header />

            <Container fluid className="children-content vw-auto" style={{marginTop: '30px'}}>
                <Row className="d-flex justify-content-center align-items-stretch" style={{paddingBottom: '30px', marginTop: '50px'}}>
                    <Image src={ChildrenSlide} style={{zIndex: '0', height: '500px'}}/>
                    <div className="d-flex justify-content-center align-items-center h-100" style={{zIndex: '1', marginTop: '-270px'}}>
                        <p className="text-white fs-1 fw-bolder">CHILDREN'S ACCESSORIES</p>
                    </div>
                </Row>

                <Row className="d-flex justify-content-center align-items-stretch" style={{paddingBottom: '30px'}}>
                    <Col className="col-md-1">
                        <p className="fs-5 fw-bolder trending text-center">All</p>
                    </Col>
                    <Col className="col-md-auto">
                        <select class="form-select" style={{width: '120px'}} aria-label="Default select example">
                            <option selected>Type</option>
                            <option value="1">Lastest</option>
                            <option value="2">Remain date</option>
                            <option value="3">In use</option>
                        </select>
                    </Col>
                    <Col className="col-md-auto">
                        <select class="form-select" style={{width: '120px'}} aria-label="Default select example">
                            <option selected>Season</option>
                            <option value="1">Lastest</option>
                            <option value="2">Remain date</option>
                            <option value="3">In use</option>
                        </select>
                    </Col>
                    <Col className="col-md-auto">
                        <select class="form-select" style={{width: '120px'}} aria-label="Default select example">
                            <option selected>Style</option>
                            <option value="1">Lastest</option>
                            <option value="2">Remain date</option>
                            <option value="3">In use</option>
                        </select>
                    </Col>
                    <Col className="col-md-auto">
                        <select class="form-select" style={{width: '120px'}} aria-label="Default select example">
                            <option selected>Price</option>
                            <option value="1">Lastest</option>
                            <option value="2">Remain date</option>
                            <option value="3">In use</option>
                        </select>
                    </Col>
                    <Col className="col-lg-5">
                        <select class="form-select" style={{width: '120px'}} aria-label="Default select example">
                            <option selected>Rating</option>
                            <option value="1">Lastest</option>
                            <option value="2">Remain date</option>
                            <option value="3">In use</option>
                        </select>
                    </Col>
                    <Col className="ms-auto p-0">
                        <select class="form-select" style={{width: '150px'}} aria-label="Default select example">
                            <option selected>Price H - L</option>
                            <option value="1">Lastest</option>
                            <option value="2">Remain date</option>
                            <option value="3">In use</option>
                        </select>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center align-items-stretch" style={{paddingBottom: '30px'}}>
                    {productStatus === 'pending' ? (
                            
                        <Row style={{ position: 'relative', height: '100%', marginTop: '250px',marginBottom: '250px' }}>
                            <div style={{ 
                                position: 'absolute', 
                                top: '50%', left: '50%', 
                                transform: 'translate(-50%, -50%)',
                                marginLeft: '750px',
                            }}>
                                <Loading />
                            </div>
                        </Row>
                        
                        ) :
                        (menProductList?.reduce((rows, product, i) => {
                            if (i >= currentPage * productsPerPage && i < (currentPage + 1) * productsPerPage) {
                                if (i % 4 === 0) rows.push([]);
                                rows[rows.length - 1].push(
                                    <Col key={i} className="col-md-auto">
                                        <ProductCard 
                                            id={product._id}
                                            name={product.prod_name}
                                            price={product.price}
                                            color={product.colour_group_name}
                                            article_id={product.article_id}
                                        />
                                    </Col>
                                );
                            }
                            return rows;
                        }, []).map((row, i) => {
                            return (
                                <Row key={i} className="row-xl-auto" style={{paddingBottom: '30px'}}>
                                    {row}
                                </Row>
                            )
                        }))
                    }

                    {productList &&
                        <div className="d-flex justify-content-center" style={{marginLeft: '20px'}}>
                            <ReactPaginate
                                pageCount={Math.ceil(menProductList?.length / productsPerPage)}
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
                    }
                </Row>
            </Container>

            <Footer />
        </div>
    )
}