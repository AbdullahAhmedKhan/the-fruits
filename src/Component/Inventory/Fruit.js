import { faBox, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Fruit.css';
const Fruit = ({ fruit }) => {
    const { id, name, title, description, img, quantity, supplier, ratings, price } = fruit;
    return (
        <div>

            <div className="row p-3 my-5 fruit-card">
                <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded-custom product-image w-100" src={img} /></div>
                <div className="col-md-6 mt-1">
                    <br />
                    <h2 className='fruit-name d-inline p-1'>{name}</h2>


                    <p className="text-justify mt-3">{description}</p>


                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1 p-3 price-div text-center">
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        <h2 className="mr-1 text-violet">${price}</h2><span className="strike-text">(Per Kg)</span>
                    </div>

                    <h6>Quantity: {quantity}</h6>
                    <p className="text-violet">
                        <FontAwesomeIcon className='mx-2' icon={faBox}></FontAwesomeIcon>
                        Free packaging</p>
                    <div className="d-flex flex-row mt-2 justify-content-center">
                        <div className="ratings mr-2">
                            <FontAwesomeIcon className='text-violet' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-violet' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-violet' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-violet' icon={faStar}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="d-flex flex-column mt-1 btn-div"><button className="btn btn-custom btn-sm mt-2" type="button">View Details</button></div>
                </div>
            </div>

        </div>
    );
};

export default Fruit;