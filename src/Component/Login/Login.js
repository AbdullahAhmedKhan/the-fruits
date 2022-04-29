import { faEnvelope, faEye, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Login.css';
import logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
const Login = () => {
    const navigate = useNavigate();
    const handleSignUp = () => {
        navigate('/register');
    }
    const [eye, setEye] = useState(false);
    const handleEyeButton = () => {
        setEye(!eye);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className="form-bg">
            <div className="container w-100 mx-auto">
                <div className="row">
                    <div className="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8">
                        <div className="form-container">
                            <div className="form-icon">
                                <img width="280" src={logo} alt="" /><br /><br />
                                <div className='bg-custom w-50 mx-auto rounded-pill'>
                                    <span className="signup"><p>Don't have account? <span onClick={handleSignUp} className='text-warning' style={{ cursor: "pointer" }}>Signup</span></p></span>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className="form-horizontal">
                                <h3 className="title">Please Login!</h3>
                                <div className="form-group">
                                    <span className="input-icon"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>
                                    <input className="form-control" type="email" name="email" placeholder="Email Address" />
                                </div>
                                <div className="form-group position-relative">
                                    <span className="input-icon"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></span>
                                    <input className=" form-control " type={eye ? "text" : "password"} name="password" placeholder="Password" />
                                    <FontAwesomeIcon onClick={handleEyeButton} className='position-absolute' style={{ top: "10", right: "10", color: "grey", fontSize: "16px" }} icon={faEye}></FontAwesomeIcon>
                                </div>
                                <button className="btn signin">Login</button>
                                <span className="forgot-pass"><p style={{ cursor: "pointer" }}>Forgot Password?</p></span>
                                <SocialLogin></SocialLogin>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;