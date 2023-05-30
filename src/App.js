import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile/Profile';
import Men from './pages/Men/Men';
import Women from './pages/Women/Women';
import Divided from './pages/Divided/Divided';
import Sport from './pages/Sport/Sport';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import ProductList from './pages/ProductList/ProductList';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import OrderDetails from './pages/OrderDetails/OrderDetails';
import Cart from './pages/Cart/Cart';
import PaymentDetails from './pages/PaymentDetails/PaymentDetails';
import Checkout from './pages/Checkout/Checkout';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess';
import NotFound from './pages/NotFound/NotFound';
import { 
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import 'react-bootstrap';
import './App.css';
import Children from './pages/Children/Children';


export default function App() {
    return (
        <BrowserRouter className='app'>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/signin" element={<LoginSignup />}/>
                <Route path="/men" element={<Men />}/>
                <Route path="/women" element={<Women />}/>
                <Route path="/divided" element={<Divided />} />
                <Route path="/sport" element={<Sport />} />
                <Route path="/children" element={<Children/>}/>
                <Route path="/product_list" element={<ProductList />}/>
                <Route path="/product_details/:id" element={<ProductDetails />}/>
                <Route path="/order_details/:id" element={<OrderDetails />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/payment_details" element={<PaymentDetails />}/>
                <Route path="/checkout" element={<Checkout />}/>
                <Route path="/payment_success" element={<PaymentSuccess />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}