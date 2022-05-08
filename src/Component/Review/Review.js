import { faAnglesRight, faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css';
const Review = () => {
    return (
        <div className='my-5 bg-violet p-5 '>
            
            <h4 className='text-center text-uppercase text-light'>
            <FontAwesomeIcon className='mx-3' icon={faAnglesRight}></FontAwesomeIcon>
                What out <span className='border-bottom border-4 border-warning'>customers</span> are saying</h4>
            <div className="card-group text-center">
                <div className="card m-3 border-0 shadow rounded">
                    <img style={{ width: "150px" }} className="card-img-top mx-auto rounded-circle mt-3 shadow" src="https://i.ibb.co/VvjBdyW/rizone.jpg" alt="Card image cap" />
                    <br />
                    <div className="card-body">
                        <h3 className="card-title rounded-pill border d-inline px-3 py-1 m-3 border-3 border-secondary shadow">Rizone Rakib</h3> <br /> <br />
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
                    <img style={{ width: "150px" }} className="card-img-top mx-auto rounded-circle mt-3" src="https://i.ibb.co/9wNGbdv/sadman.jpg" alt="Card image cap" />
                    <br />
                    <div className="card-body">
                        <h3 className="card-title rounded-pill border d-inline px-3 py-1 m-3 border-3 border-secondary shadow">Sadman Shakib</h3>
                        <br /> <br />
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
                    <img style={{ width: "150px" }} className="card-img-top mx-auto rounded-circle mt-3" src="https://i.ibb.co/F0WFJhf/sourov.jpg" alt="Card image cap" />
                    <br />
                    <div className="card-body">
                        <h3 className="card-title rounded-pill border d-inline px-3 py-1 m-3 border-3 border-secondary shadow">M. R. Sourov</h3>
                        <br /><br />
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