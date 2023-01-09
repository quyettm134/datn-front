import React from 'react';
import Homepage from './pages/Homepage/Homepage';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import { 
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/signin" element={<LoginSignup />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )
}