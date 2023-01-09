import React from "react";
import "./Footer.css";
import footer from "../../assets/images/footer.png";

export default function Footer() {
    return (
        <div className="footer-container">
            {/* <div className="first-section-footer">
                <div className="logo">
                    <div className="logo1">K</div>
                    <div className="logo2">Q</div>
                    <div className="brand-name-footer">KQQ</div>
                </div>
            </div> */}
            <img src={footer} alt="footer" className="footer"/>
        </div>
    )
}