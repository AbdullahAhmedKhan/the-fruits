import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const navigate = useNavigate();
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    const handleUpdate = productId => {
        navigate(`/inventory/${productId}`);
    }
    return (
        <div className='container my-5'>

            <h2 className='text-center text-secondary mb-3'>Inventory Statement</h2> <button className='btn btn-outline-success d-block mx-auto mb-3 shadow'>Add New Item</button>
            <table className=''>

                <thead>

                    <tr className='bg-custom text-light'>
                        <th scope="col">Name</th>
                        <th scope="col">Price(per kg)</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Quantity</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        inventories.map(fruit =>
                            <tr>
                                <td data-label="Name">{fruit.name}</td>
                                <td data-label="Price(per kg)">{fruit.price}tk</td>
                                <td data-label="Supplier">{fruit.supplier}</td>
                                <td data-label="Quantity">{fruit.quantity}</td>
                                <td>
                                    <button onClick={() => handleUpdate(fruit._id)} className=' text-dark btn fs-6 p-1 border-3 border-success me-3 rounded-pill'><FontAwesomeIcon className='mx-2 fs-6 text-success' style={{ cursor: "pointer" }} icon={faPenToSquare}></FontAwesomeIcon><span className='pe-2'>Update</span></button>
                                    <button className=' text-dark btn fs-6 p-1 border-3 border-danger rounded-pill'><FontAwesomeIcon className='mx-2 fs-6 text-danger' style={{ cursor: "pointer" }} icon={faTrash}></FontAwesomeIcon><span className='pe-2'>Delete</span></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>


        </div>

    );
};

export default Inventory;
