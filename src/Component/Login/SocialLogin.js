import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../images/google.png';
import Loading from '../Loading/Loading';
const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let googleError;
    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        googleError =
            <p className='text-danger fs-6'>{error?.message}</p>
    }
    if(loading){
       return <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'><span className='text-dark fw-bold fs-6'>or</span></p>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
            </div>
            {googleError}
            <div>
                <button onClick={() => signInWithGoogle()} style={{ backgroundColor: "white" }} className='btn w-100 fw-bold rounded-pill'><img width="35" className='mx-1' src={googleIcon} alt="" /><span className='text-light'>Google Sign In</span></button>

            </div>
        </div >
    );
};

export default SocialLogin;