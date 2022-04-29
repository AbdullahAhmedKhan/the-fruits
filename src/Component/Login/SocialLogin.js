import React from 'react';
import googleIcon from '../../images/google.png';
const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'><span className='text-dark fw-bold fs-6'>or</span></p>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
            </div>

            <div>
                <button style={{backgroundColor:"white"}} className='btn w-100 fw-bold rounded-pill'><img width="35" className='mx-1' src={googleIcon} alt="" /><span className='text-light'>Google Sign In</span></button>
            </div>
        </div >
    );
};

export default SocialLogin;