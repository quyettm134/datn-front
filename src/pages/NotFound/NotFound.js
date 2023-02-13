import React from "react";
import "./NotFound.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function NotFound() {
    return (
        <>
            <Header/>
            
            <div className="not-found-container">
                <h1>404 NOT FOUND!</h1>
            </div>

            <Footer />
        </>
    )
}