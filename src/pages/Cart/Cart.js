import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Cart.css';
import items from '../../assets/images/items.png';
import cart_summary from '../../assets/images/cart_summary.png';
export default function Cart() {
  return (
    <>
        <Header />
        
        <div className='cart-container'>
            <div className='cart-items'>YOUR SELECTION</div>
            <div className='selections-line'></div>
            <div className='cart-images'>
                <img src={items} alt='items' className='items'/>
                <Link to="/paymentsuccess"><img src={cart_summary} alt='cart_summary' className='cart_summary'/></Link>
            </div>
        </div>

        <Footer />
    </>
    
  )
}