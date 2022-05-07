import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner-1.jpg';
import banner2 from '../../images/banner/banner-2.jpg';
import banner3 from '../../images/banner/banner-3.jpg';
import banner4 from '../../images/banner/banner-4.jpg';
import banner5 from '../../images/banner/banner-5.jpg';
import logo from '../../images/logo.png';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block img-fluid"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="banner-text text-dark">
                            <img src={logo} alt="" className='img-fluid w-75' />
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block img-fluid"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="banner-text text-dark">
                            <img src={logo} alt="" className='img-fluid w-75' />
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="banner-text text-dark">
                            <img src={logo} alt="" className='img-fluid w-75' />
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="banner-text text-dark">
                            <img src={logo} alt="" className='img-fluid w-75' />
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="banner-text text-dark">
                            <img src={logo} alt="" className='img-fluid w-75' />
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;