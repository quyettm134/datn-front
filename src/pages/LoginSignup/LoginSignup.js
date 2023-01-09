import React, { useState } from "react";
import "./LoginSignup.css";
import { Link } from "react-router-dom";

export default function LoginSignup() {
    const [signIn, setSignIn] = useState(true);
    const [signUp, setSignUp] = useState(false);

    return (
        <>
            <div className="brand-name-sign-in">KQQ</div>

            <div className="sign-in-container">

                <div className={signIn ? "input-field-sign-in" : "input-field-sign-up"}>
                    <div className="index">
                        <div className={signIn ? "sign-in-clicked" : "sign-in-sign-in"} onClick={() => {
                            if (signIn === false && signUp === true) {
                                setSignIn(true);
                                setSignUp(false);
                            }
                        }}>SIGN IN</div>
                        <div className="line"></div>
                        <div className={signUp ? "sign-up-clicked" : "sign-up-sign-in"} onClick={() => {
                            if (signIn === true && signUp === false) {
                                setSignIn(false);
                                setSignUp(true);
                            }
                        }}>SIGN UP</div>

                        <div className="double-line">
                            <div className="sign-in-line"></div>
                            <div className="sign-up-line"></div>
                        </div>
                    </div>

                    {signIn && <form className="user-form-sign-in">
                        <div className="input-container">
                            <label>USERNAME</label>
                            <input type="text" name="username" />
                        </div>

                        <div className="input-container">
                            <label>PASSWORD</label>
                            <input type="password" name="password" />
                        </div>

                        <div className="button-container">
                            <Link to="/"><input type="submit" value="SIGN IN"/></Link>
                        </div>

                        <div className="forgot-password">
                            Forgot your password ?
                        </div>
                        
                        <div className="trademark">®️KQQ 2022</div>
                    </form>}

                    {signUp && <form className="user-form-sign-up">
                        <div className="input-container">
                            <label>FIRSTNAME</label>
                            <input type="text" name="firstname" />
                        </div>

                        <div className="input-container">
                            <label>LASTNAME</label>
                            <input type="password" name="lastname" />
                        </div>

                        <div className="input-container">
                            <label>USERNAME</label>
                            <input type="text" name="username" />
                        </div>

                        <div className="input-container">
                            <label>PASSWORD</label>
                            <input type="text" name="password" />
                        </div>

                        <div className="input-container">
                            <label>EMAIL</label>
                            <input type="text" name="email" />
                        </div>

                        <div className="input-container">
                            <label>DATE OF BIRTH</label>
                            <input type="text" name="dob" />
                        </div>

                        <div className="button-container">
                            <Link to="/"><input type="submit" value="SIGN UP"/></Link>
                        </div>
                    </form>}
                </div>

                {signIn && <div className="footer-sign-in">
                    <div className="text">Privacy Policy</div>
                    <div className="line"></div>
                    <div className="text">Terms & Conditions</div>
                </div>}
            </div>
        </>
    )
}