import React from 'react';
import { useForm } from "react-hook-form";
const AddInventory = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/inventory`;
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
    };
    return (
        <div className='container my-5 w-75 mx-auto border p-4 rounded'>
            <h2 className='text-center text-success mb-3'>Please add an inventory!</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 border p-2 rounded' defaultValue="" placeholder='name' {...register("name")} />
                <input className='mb-2 border p-2 rounded' placeholder='title' {...register("title")} />
                <input className='mb-2 border p-2 rounded' placeholder="Supplier" {...register("supplier")} />
                <input className='mb-2 border p-2 rounded' type="number" placeholder="Price" {...register("price")} />
                <input className='mb-2 border p-2 rounded' type="number" placeholder="Quantity" {...register("quantity")} />
                <input className='mb-2 border p-2 rounded' placeholder="Description" {...register("description")} />
                <input className='mb-2 border p-2 rounded' placeholder="Image Link" {...register("image")} />


                <input className='py-3 btn shadow border border-3 border-dark btn-warning fs-5' type="submit" value="Add Inventory" />
            </form>
        </div>
    );
};

export default AddInventory;