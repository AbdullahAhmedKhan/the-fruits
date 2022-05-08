import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
const AddInventory = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = data => {
        console.log(data)
        const url = `https://afternoon-tundra-03070.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast.success('Successfully Added');
    };
    return (
        <div className='container my-5 w-75 mx-auto border p-4 rounded'>
            <h2 className='text-center text-success mb-3'>Please add an inventory!</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2 border p-2 rounded' placeholder="Email" defaultValue={user.email} type="email" {...register("email", { required: true })} />
                <input className='mb-2 border p-2 rounded' placeholder='Product name' {...register("name", { required: true })} />
                <input className='mb-2 border p-2 rounded' placeholder='Title' {...register("title", { required: true })} />
                <input className='mb-2 border p-2 rounded' placeholder='Supplier name' {...register("supplier", { required: true })} />
                <input className='mb-2 border p-2 rounded' placeholder='Price' type="number" {...register("price", { required: true })} />
                <input className='mb-2 border p-2 rounded' placeholder='Quantity' type="number" {...register("quantity", { required: true })} />
                <input className='mb-2 border p-2 rounded' placeholder='Description' {...register("description", { required: true })} />
                <input className='mb-2 border p-2 rounded' placeholder='Photo URL' {...register("img", { required: true })} />
                <input className='mb-2 border p-2 rounded' placeholder="Ratings out of 5" defaultValue='5' type="number" {...register("ratings", { required: true })} />


                <input className='py-3 btn shadow btn-dark fs-5' type="submit" value="Add Inventory" />
            </form>
        </div>
    );
};

export default AddInventory;