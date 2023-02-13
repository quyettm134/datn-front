import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile/Profile';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
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
import 'react-bootstrap';
import './App.css';


export default function App() {
    return (
        <BrowserRouter className='app'>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/signin" element={<LoginSignup />}/>
                <Route path="/men" element={<Men/>}/>
                <Route path="/women" element={<Women/>}/>
                <Route path="/productdetails" element={<ProductDetails />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/paymentsuccess" element={<PaymentSuccess />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}