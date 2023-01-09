import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiMap, BiPhoneCall, BiUserCircle, BiCart, BiSearch } from "react-icons/bi";

export default function Header() {
    return (
        <div className="header-container">
            <div className="first-section-header">
                <div className="address-icon"><BiMap /></div>
                <div className="address">Ho Chi Minh City - Vietnam</div>
                <div className="phone-icon"><BiPhoneCall /></div>
                <div className="phone-number">+84 987654321</div>
                <div className="sign-in-icon"><Link to={"/signin"}><BiUserCircle /></Link></div>
                <div className="sign-in"><Link to={"/signin"}>Sign in</Link></div>
                <div className="cart-icon"><Link to={"/cart"}><BiCart /></Link></div>
                <div className="cart"><a href="#"><Link to={"/cart"}>Cart</Link></a></div>
                <div className="search"><a href="#"><BiSearch /></a></div>
            </div>

            <div className="second-section-header">
                <div className="brand-name-header"><Link to={"/"}>KQQ</Link></div>
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