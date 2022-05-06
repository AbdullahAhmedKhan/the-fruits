import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <div style={{ minHeight: '90vh',fontSize:"150px" }} className='w-100 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="warning" />
        </div>
        </div>
    );
};

export default Loading;