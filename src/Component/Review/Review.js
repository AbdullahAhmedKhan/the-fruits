import { faAnglesRight, faQuoteLeft, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css';
const Review = () => {
    return (
        <div className='my-5 bg-violet p-5 '>
            
            <h5 className='text-center text-uppercase text-light'>
            <FontAwesomeIcon className='mx-1' icon={faAnglesRight}></FontAwesomeIcon>
                What out <span className='border-bottom border-4 border-warning'>customers</span> are saying</h5>
            <div className="card-group text-center">
                <div className="card m-3 border-0 shadow rounded">
                    <img style={{ width: "150px" }} className="card-img-top mx-auto rounded-circle mt-3 shadow" src="https://i.ibb.co/VvjBdyW/rizone.jpg" alt="Card image cap" />
                    <br />
                    <div className="card-body">
                        <h3 className="card-title rounded-pill border d-inline px-3 py-1 m-3 border-3 border-secondary shadow">Rizone Rakib</h3> <br /> <br />
                        <FontAwesomeIcon className='fs-2 text-secondary me-3' icon={faQuoteLeft}></FontAwesomeIcon>
                        <span className="card-text">Freshness is one of their characteristics. The quality of all the items enclosed is fantastic, so fresh and hardly any plastic in sight! Well done.</span>
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
                        <span className="card-text">Their service is much better. Lovely fruit box. 5 star from me.</span>
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
                        <span className="card-text">We have had 2 fruit and veg deliveries now and have been really pleased with the variety and quality. Friendly delivery drivers and good communication over Facebook.</span>
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