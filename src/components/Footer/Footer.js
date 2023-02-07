import React from "react";
import "./Footer.css";
import footer from "../../assets/images/footer.png";

export default function Footer() {
    return (
        <div className="footer-container">
            <img src={footer} alt="footer" className="footer"/>
        </div>
    )
}