import React from "react";
import "./PaymentSuccess.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { AiFillCheckCircle } from "react-icons/ai";

export default function PaymentSuccess() {
    return (
        <>
            <Header />
            <div style={{
                fontSize: "200px",
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
            }}>
                <AiFillCheckCircle  />
            </div>

            <div style={{
                fontWeight: "bold",
                fontSize: "24px",
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
            }}>ORDER PLACED!</div>

            <div style={{
                fontSize: "24px",
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
                marginBottom: "50px"
            }}>Your order was placed successfully.
            For more details, check Order status.</div>
            
            <Footer/>
        </>
    )
}