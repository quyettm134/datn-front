import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess';
import NotFound from './pages/NotFound/NotFound';
import { 
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import './App.css';


export default function App() {
    return (
        <BrowserRouter className='app'>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/signin" element={<LoginSignup />}/>
                <Route path="/productdetails" element={<ProductDetails />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/paymentsuccess" element={<PaymentSuccess />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}