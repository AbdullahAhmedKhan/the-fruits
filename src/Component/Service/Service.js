import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Service.css';
const Service = () => {
    return (
        <div className='mb-5'>
            <h1 className='text-center border-bottom w-75 mx-auto pb-3 border-3'>Our <span style={{color:"orangered"}}>Packages</span></h1>
            <div className="wrapper">
                <input type="radio" name="slider" id="tab-1" />
                <input type="radio" name="slider" id="tab-2" checked />
                <input type="radio" name="slider" id="tab-3" />
                <header>
                    <label for="tab-1" className="tab-1">Basic</label>
                    <label for="tab-2" className="tab-2">Standard</label>
                    <label for="tab-3" className="tab-3">Premium</label>
                    <div className="slider"></div>
                </header>
                <div className="card-area">
                    <div className="cards">
                        <div className="row row-1">
                            <div className="price-details">
                                <span className="price">20</span>
                                <p>For Regular</p>
                            </div>
                            <ul className="features ms-3">
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Efficient warehouse organization</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Maximum storage capacity</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>High productivity</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Push-back pallet racks</span></li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="price-details">
                                <span className="price">80</span>
                                <p>For Standard </p>
                            </div>
                            <ul className="features ms-3">
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Live pallet racking</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Efficient warehouse organization</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Maximum storage capacity</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Free packaging and boxing</span></li>
                            </ul>
                        </div>
                        <div className="row">
                            <div className="price-details">
                                <span className="price">200</span>
                                <p>For Premium</p>
                            </div>
                            <ul className="features ms-5">
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Conventional pallet racking</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Preservative free storage system</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Free packaging and boxing</span></li>
                                <li><FontAwesomeIcon className='fs-5 text-success' icon={faCircleCheck}></FontAwesomeIcon><span>Refund policy and 5% discount</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button>Choose plan</button>
            </div>
        </div>
    );
};

export default Service;