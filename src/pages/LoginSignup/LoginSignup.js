import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/user/userActions";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "./LoginSignup.css";
export default function LoginSignup() {
    const [signIn, setSignIn] = useState(true);
    const [signUp, setSignUp] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const notifyFail = () => toast.error("Unable to log in!");

    const handleSignIn = async (event) => {
        event.preventDefault();
    
        try {
            const response = await dispatch(loginUser({ username, password }));
            if (response.payload === true) {
                navigate('/profile');
            }
            else notifyFail();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="sign-in-content">
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
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>

                        <div className="input-container">
                            <label>PASSWORD</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className="button-container">
                            <Link to="/"><input type="submit" value="SIGN IN" onClick={handleSignIn}/></Link>
                        </div>

                        <div className="forgot-password">
                            Forgot your password ?
                        </div>
                        
                        <div className="trademark">®️KQQ 2022</div>
                    </form>}

                    {signUp && <form className="user-form-sign-up">
                        <div className="sign-up-form-container">
                            <div className="input-container-sign-up">
                                <label>FIRSTNAME</label>
                                <input type="text" name="firstname" />
                            </div>

                            <div className="input-container-sign-up">
                                <label>LASTNAME</label>
                                <input type="password" name="lastname" />
                            </div>
                            
                            <div className="input-container-sign-up">
                                <label>USERNAME</label>
                                <input type="text" name="username" />
                            </div>

                            <div className="input-container-sign-up">
                                <label>PASSWORD</label>
                                <input type="text" name="password" />
                            </div>

                            <div className="input-container-sign-up">
                                <label>EMAIL</label>
                                <input type="text" name="email" />
                            </div>

                            <div className="input-container-sign-up">
                                <label>DATE OF BIRTH</label>
                                <input type="text" name="dob" />
                            </div>
                        </div>

                        <div className="button-container">
                            <input type="submit" value="SIGN UP"/>
                        </div>

                        <div className="trademark2">®️KQQ 2022</div>
                    </form>}
                </div>

                {signIn && <div className="footer-sign-in">
                    <div className="text">Privacy Policy</div>
                    <div className="line"></div>
                    <div className="text">Terms & Conditions</div>
                </div>}

                <ToastContainer />
            </div>
        </div>
    )
}