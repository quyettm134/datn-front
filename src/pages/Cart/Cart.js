import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Cart() {
  return (
    <div>
        <Header />
        <div className='container'>
            <div className='title'>YOUR SELECTION</div>
            <div className='Product'>
                <div className='name'>Ophidia GG medium totea</div>
                <div className='variation'>Variation: Brown</div>
                <div className='size'>Size: L</div>
                <div className='edit'>Edit | Remove | Favourite</div>
                <div className='editQlt'>
                    <button></button>
                    <div className='qlt'>1</div>
                    <button></button>
                </div>
                <div className='price'>$200</div>
            </div>
            <div className='Summary'>
                <div className='title'>Order Summary</div>
                <div className='body'>
                    <div className='subtotal'>Subtotal: $200</div>
                    <div className='shippingfee'>Shippingfee: 5$</div>
                    <div className='tax'>Estimated tax: 20$</div>
                    <div className='total'>Estimated total: $225</div>
                </div>
                <div className='checkout'>
                    <button>Check out</button>
                    <div className='Or'>Or</div>
                    <button>Payment on delivery</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    
  )
}