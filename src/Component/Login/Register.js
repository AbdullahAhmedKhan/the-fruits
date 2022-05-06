import { faEnvelope, faEye, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Login.css';
import logo from '../../images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import Loading from '../Loading/Loading';
const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = () => {
        navigate('/login');
    }
    const [eye, setEye] = useState(false);
    const handleEyeButton = () => {
        setEye(!eye);
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || updating) {
        return <Loading></Loading>;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        sendEmailVerification(auth.currentUser)
            .then(async () => {
                navigate(from, { replace: true });
            })
        console.log(name, email, password);

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
                            <form onSubmit={handleSubmit} className="form-horizontal">
                                <h3 className="title">Please Register!</h3>
                                <div className="form-group">
                                    <span className="input-icon"></span>
                                    <input className="form-control" type="text" name='name' placeholder="Full Name" required/>
                                </div>
                                <div className="form-group">
                                    <span className="input-icon"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>
                                    <input className="form-control" type="email" name='email' placeholder="Email Address" required/>
                                </div>

                                <div className="form-group position-relative">
                                    <span className="input-icon"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></span>
                                    <input className=" form-control " type={eye ? "text" : "password"} placeholder="Password" name='password' required/>
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