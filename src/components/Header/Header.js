import React from "react";
import "./index.css";
import { BiMap, BiPhoneCall, BiUserCircle, BiCart, BiSearch } from "react-icons/bi";

export default function Header() {
    return (
        <div className="container">
            <div className="first-section">
                <div className="address-icon"><BiMap /></div>
                <div className="address">Ho Chi Minh City - Vietnam</div>
                <div className="phone-icon"><BiPhoneCall /></div>
                <div className="phone-number">+84 987654321</div>
                <div className="sign-in-icon"><BiUserCircle /></div>
                <div className="sign-in"><a href="#">Sign in</a></div>
                <div className="cart-icon"><BiCart /></div>
                <div className="cart"><a href="#">Cart</a></div>
                <div className="search"><a href="#"><BiSearch /></a></div>
            </div>

            <div className="second-section">
                <div className="brand-name">KQQ</div>
                <div className="news"><a href="#">What's new</a></div>
                <div className="men"><a href="#">Men</a></div>
                <div className="women"><a href="#">Women</a></div>
                <div className="children"><a href="#">Children</a></div>
                <div className="handbags"><a href="#">Handbags</a></div>
                <div className="rings"><a href="#">Rings</a></div>
                <div className="necklaces"><a href="#">Necklaces</a></div>
                <div className="watches"><a href="#">Watches</a></div>
                <div className="others"><a href="#">Others</a></div>
            </div>
        </div>
    )
}