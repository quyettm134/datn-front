import React from "react";
import "./index.css";

export default function Login() {
    return (
        <>
            <div className="container">
                <div className="brand-name">KQQ</div>

                <div className="input-field">
                    <div className="index">
                        <div className="sign-in" onClick={() => alert("Sign in button clicked!")}>SIGN IN</div>
                        <div className="line"></div>
                        <div className="sign-up" onClick={() => alert("Sign up button clicked!")}>SIGN UP</div>

                        <div className="double-line">
                            <div className="sign-in-line"></div>
                            <div className="sign-up-line"></div>
                        </div>
                    </div>

                    <form className="user-form">
                        <div className="input-container">
                            <label>USERNAME</label>
                            <input type="text" name="username" />
                        </div>

                        <div className="input-container">
                            <label>PASSWORD</label>
                            <input type="password" name="password" />
                        </div>

                        <div className="button-container">
                            <input type="submit" value="SIGN IN"/>
                        </div>

                        <div className="forgot-password">
                            Forgot your password ?
                        </div>
                        
                        <div className="trademark">®️KQQ 2022</div>
                    </form>
                </div>

                <div className="footer">
                    <div className="text">Privacy Policy</div>
                    <div className="line"></div>
                    <div className="text">Terms & Conditions</div>
                </div>
            </div>
        </>
    )
}