import React from 'react';
import Header from '../../components/Header/Header';
import './ProductDetails.css';
import { Link } from 'react-router-dom';
import productdetails1 from '../../assets/images/productdetails1.png';
import productdetails2 from '../../assets/images/productdetails2.png';
import productdetails3 from '../../assets/images/productdetails3.png';
import productdetails4 from '../../assets/images/productdetails4.png';
import productdetails5 from '../../assets/images/productdetails5.png';
import addtocart from '../../assets/images/addtocart.png';
import footer from '../../assets/images/footer.png';

export default function ProductDetails() {
    return (
        <>
            <Header />

            <div className='product-details-container'>
                <div className='product-images'>
                    <img src={productdetails1} alt='productdetails1' className='productdetails1'/>
                    <img src={productdetails2} alt='productdetails2' className='productdetails2'/>
                    <img src={productdetails3} alt='productdetails3' className='productdetails3'/>
                    <img src={productdetails4} alt='productdetails4' className='productdetails4'/>
                    <img src={productdetails5} alt='productdetails5' className='productdetails5'/>
                    <Link to="/cart">
                        <img src={addtocart} alt='addtocart' className='addtocart'/>
                    </Link>
                </div>
            </div>

            <img src={footer} alt='footer' className='product-footer'/>
        </>
    )
}