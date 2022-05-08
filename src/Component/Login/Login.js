import { faEnvelope, faEye, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import './Login.css';
import logo from '../../images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import axios from 'axios';
const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    const handleSignUp = () => {
        navigate('/register');
    }
    const [eye, setEye] = useState(false);
    const handleEyeButton = () => {
        setEye(!eye);
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        e.target.reset();

        const { data } = await axios.post('https://afternoon-tundra-03070.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });

    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return <Loading></Loading>;
    }
    const resetPassword = async () => {
        const unknownEmail = emailRef.current.value;
        if (unknownEmail) {
            await sendPasswordResetEmail(unknownEmail);
            toast.success('Sent email successfully! Please check your inbox.');
        }
        else {
            toast.error('Please enter your email address first !');
        }
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
                                    <input className="form-control" type="email" name="email" placeholder="Email Address" ref={emailRef} required />
                                </div>
                                <div className="form-group position-relative">
                                    <span className="input-icon"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></span>
                                    <input className=" form-control " type={eye ? "text" : "password"} name="password" placeholder="Password" required />
                                    <FontAwesomeIcon onClick={handleEyeButton} className='position-absolute' style={{ top: "10", right: "10", color: "grey", fontSize: "16px" }} icon={faEye}></FontAwesomeIcon>
                                </div>
                                <button className="btn signin">Login</button>
                                {
                                    error ?
                                        <p className='text-danger fs-6'>{error.message}</p>
                                        :
                                        ""
                                }
                                <span onClick={resetPassword} className="forgot-pass"><p style={{ cursor: "pointer" }}>Forgot Password?</p></span>
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