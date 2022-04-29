import { faEnvelope, faEye, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Login.css';
import logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
const Register = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    const [eye, setEye] = useState(false);
    const handleEyeButton = () => {
        setEye(!eye);
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
                                    <span className="signup"><p>Already have an account? <span onClick={handleLogin} className='text-warning' style={{ cursor: "pointer" }}>Login</span></p></span>
                                </div>
                            </div>
                            <form className="form-horizontal">
                                <h3 className="title">Please Register!</h3>
                                <div className="form-group">
                                    <span className="input-icon"></span>
                                    <input className="form-control" type="text" placeholder="Full Name" />
                                </div>
                                <div className="form-group">
                                    <span className="input-icon"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>
                                    <input className="form-control" type="email" placeholder="Email Address" />
                                </div>

                                <div className="form-group position-relative">
                                    <span className="input-icon"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></span>
                                    <input className=" form-control " type={eye ? "text" : "password"} placeholder="Password" />
                                    <FontAwesomeIcon onClick={handleEyeButton} className='position-absolute' style={{ top: "10", right: "10", color: "grey", fontSize: "16px" }} icon={faEye}></FontAwesomeIcon>
                                </div>
                                <button className="btn signin">Signup</button>
                                <SocialLogin></SocialLogin>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;