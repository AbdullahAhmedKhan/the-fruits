import React from 'react';
import notFound from '../../images/notfound.png';
const NotFound = () => {
    return (
        <div className='text-center'>
            <h2 className='mt-5 py-3 text-center text-secondary'>404 Not Found</h2>
            <img className="img-fluid" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;