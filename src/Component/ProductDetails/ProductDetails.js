import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product] = useProductDetails(productId);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAdd = e => {
        e.preventDefault();
        const restock = e.target.restock.value;
        console.log(restock);
    }

    return (
        <div>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-4">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                                    data-mdb-ripple-color="light">
                                    <img src={product.img}
                                        style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }} className="img-fluid"
                                        alt="Laptop" />
                                    <a href="#!">
                                        <div className="mask"></div>
                                    </a>
                                </div>
                                <div className="card-body pb-0">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h3 className="text-dark">{product.name}</h3>
                                            <p className="small text-muted">{product.title}</p>
                                        </div>
                                        <div>
                                            <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <p className="small text-muted">Rated 4.0/5</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-0" />
                                <div className="card-body pb-0">
                                    {product.description}
                                </div>
                                <hr className="my-0" />
                                <div className='mx-2'>
                                    <h1 className='text-warning d-inline'>{product.price}$</h1> <small>(per kg)</small>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                        <button type="button" className="btn btn-warning">Delivered</button>
                                        <button onClick={handleShow} type="button" className="btn btn-success">Re-stock</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='btn d-block mx-auto btn-outline-success p-3 mb-3 shadow-lg rounded'>Manage Inventories</button>
            </section>
            {/* Modal  */}
            <Modal className='p-3' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Re-stock your product</Modal.Title>
                </Modal.Header>
                <Modal.Body> <img className='w-100 rounded' src={product.img} alt="" /> </Modal.Body>
                <Modal.Footer>
                    <form className='w-100 p-3' onSubmit={handleAdd}>
                        <div class="form-group my-2">
                            <input type="number" name="restock" class="form-control border-success border-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter quantity" />

                        </div>
                        <Button type="submit" className='px-5' variant="success">
                            Add
                        </Button>
                    </form>
                </Modal.Footer>
            </Modal>
            {/* Modal */}
        </div>
    );
};

export default ProductDetails;