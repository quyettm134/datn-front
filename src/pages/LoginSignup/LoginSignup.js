import React, { useState } from "react";
import "./index.css";

export default function LoginSignup() {
    const [signIn, setSignIn] = useState(true);
    const [signUp, setSignUp] = useState(false);

    return (
        <>
            <div className="container">
                <div className="brand-name">KQQ</div>

                <div className={signIn ? "input-field-sign-in" : "input-field-sign-up"}>
                    <div className="index">
                        <div className={signIn ? "sign-in-clicked" : "sign-in"} onClick={() => {
                            if (signIn === false && signUp === true) {
                                setSignIn(true);
                                setSignUp(false);
                            }
                        }}>SIGN IN</div>
                        <div className="line"></div>
                        <div className={signUp ? "sign-up-clicked" : "sign-up"} onClick={() => {
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
                            <input type="submit" value="SIGN IN"/>
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
                            <input type="submit" value="SIGN UP"/>
                        </div>
                    </form>}
                </div>

                {signIn && <div className="footer">
                    <div className="text">Privacy Policy</div>
                    <div className="line"></div>
                    <div className="text">Terms & Conditions</div>
                </div>}
            </div>
        </>
    )
}