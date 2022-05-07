import { faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Review = () => {
    
    return (
        <div className='my-5 container'>
            <hr />
            <h2 className='text-center text-uppercase'>What out <span className='border-bottom border-4 border-primary'>customers</span> are saying</h2>
            <div className="card-group text-center">
                <div className="card m-3 border-0 shadow rounded">
                <img style={{ width: "150px" }} className="card-img-top mx-auto rounded-circle mt-3" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Card image cap" />
                        <div className="card-body">
                            <h3 className="card-title">Rizone Rakib</h3>
                            <FontAwesomeIcon className='fs-2 text-secondary me-3' icon={faQuoteLeft}></FontAwesomeIcon>
                            <span className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</span>
                            <FontAwesomeIcon className='fs-2 text-secondary ms-3' icon={faQuoteRight}></FontAwesomeIcon>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            </small>
                        </div>
                </div>
                <div className="card m-3 border-0 shadow rounded">
                <img style={{ width: "150px" }} className="card-img-top mx-auto rounded-circle mt-3" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Card image cap" />
                        <div className="card-body">
                            <h3 className="card-title">M. R. Sourov</h3>
                            <FontAwesomeIcon className='fs-2 text-secondary me-3' icon={faQuoteLeft}></FontAwesomeIcon>
                            <span className="card-text">This card has supporting text below as a natural lead-in to additional content.</span>
                            <FontAwesomeIcon className='fs-2 text-secondary ms-3' icon={faQuoteRight}></FontAwesomeIcon>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            </small>
                        </div>
                </div>
                <div className="card m-3 border-0 shadow rounded">
                <img style={{ width: "150px" }} className="card-img-top mx-auto rounded-circle mt-3" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Card image cap" />
                        <div className="card-body">
                            <h3 className="card-title">Hamidul Islam</h3>
                            <FontAwesomeIcon className='fs-2 text-secondary me-3' icon={faQuoteLeft}></FontAwesomeIcon>
                            <span className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</span>
                            <FontAwesomeIcon className='fs-2 text-secondary ms-3' icon={faQuoteRight}></FontAwesomeIcon>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            </small>
                        </div>
                </div>
            </div>
        </div >
    );


};

export default Review;