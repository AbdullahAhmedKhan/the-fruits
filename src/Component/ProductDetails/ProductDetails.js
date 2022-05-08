import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductDetails from '../../hooks/useProductDetails';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useProductDetails(productId);

    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const handleManage = () => {
        navigate('/inventory');
    }

    const handleClose = () => setShow(false);
    const handleShow = e => setShow(true);

    const handleAdd = e => {
        e.preventDefault();
        const value = e.target.restock.value;
        fetch(`https://afternoon-tundra-03070.herokuapp.com/inventory/increase/${productId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'Application/json'
            },
            body: JSON.stringify({ quantity: value }),

        })
            .then(res => res.json())
            .then(data => {
                setProduct({ ...product, quantity: parseInt(product.quantity) + parseInt(value) })

            })
        toast.success("Successfully Restocked");
        setShow(false);
    }

    const handleDelivered = () => {
        fetch(`https://afternoon-tundra-03070.herokuapp.com/inventory/decrease/${productId}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                setProduct({ ...product, quantity: product.quantity - 1 })
            })
        toast.success("Successfully Delivered");
    }
    return (
        <div>
            <section>
                <div className="container py-3">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-4">
                            <div className="card shadow" style={{ borderRadius: "15px" }}>
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
                                            <p className="small text-muted">ID: {product._id}</p>
                                            <p className="small text-muted">{product.title}</p>
                                        </div>
                                        <div>
                                            <p className="small text-muted">Rated {product.ratings}/5</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-0" />
                                <div className="card-body pb-0">
                                    {product.description}
                                </div>
                                <hr className="my-0" />
                                <div className='d-flex bg-light m-3 rounded justify-content-between align-items-center shadow'>
                                    <div className='px-2'>
                                        <h5 className='fs-6 mt-2'>Supplier Name: {product.supplier}</h5>
                                        <h5 className='my-3 fs-6'>Quantity: {product.quantity}</h5>
                                    </div>
                                    <div className='bg-custom opacity-75 text-light rounded-left py-5 rounded-lg px-2'>
                                        <h4 className=' d-inline rounded'>{product.price}$</h4> <small>/per kg</small>

                                    </div>

                                </div>


                                <div className="card-body">
                                    <div className="d-flex justify-content-end align-items-center pb-2 mb-1">
                                        <button onClick={handleShow} type="button" className="btn btn-success">Re-stock</button>
                                        <button onClick={handleDelivered} type="button" className="btn btn-warning ms-2">Delivered</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-5'>
                    <button onClick={handleManage} className='btn d-block mx-auto btn-outline-success p-3 shadow-lg rounded'>Manage Inventories</button>
                </div>
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