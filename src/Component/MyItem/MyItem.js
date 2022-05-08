import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyItem = () => {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const handleUpdate = productId => {
        navigate(`/inventory/${productId}`);
    }
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?')
        if (proceed) {
            console.log('delete item', id)
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remaining = items.filter(fruit => fruit._id !== id);
                        setItems(remaining)
                    }
                })
        }
        toast('Successfully deleted');
    }
    const [user] = useAuthState(auth);
    useEffect(() => {

        const getNewInventory = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myInventory?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data)
        }
        getNewInventory()

    }, [user]);
    return (
        <div className='container my-5'>

            <h2 className='text-center text-secondary mb-3'>My Inventory Statement</h2>
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
                        items.map(fruit =>
                            <tr>
                                <td data-label="Name">{fruit.name}</td>
                                <td data-label="Price(per kg)">{fruit.price}tk</td>
                                <td data-label="Supplier">{fruit.supplier}</td>
                                <td data-label="Quantity">{fruit.quantity}</td>
                                <td>
                                    <button onClick={() => handleUpdate(fruit._id)} className=' text-dark btn fs-6 p-1 border-3 border-success me-3 rounded-pill'><FontAwesomeIcon className='mx-2 fs-6 text-success' style={{ cursor: "pointer" }} icon={faPenToSquare}></FontAwesomeIcon><span className='pe-2'>Update</span></button>
                                    <button onClick={() => handleDelete(fruit._id)} className=' text-dark btn fs-6 p-1 border-3 border-danger rounded-pill'><FontAwesomeIcon className='mx-2 fs-6 text-danger' style={{ cursor: "pointer" }} icon={faTrash}></FontAwesomeIcon><span className='pe-2'>Delete</span></button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>

            </table>


        </div>
    );
};

export default MyItem;