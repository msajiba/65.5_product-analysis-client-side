import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

const AddProduct = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        fetch('https://scenic-grand-canyon-86539.herokuapp.com/product', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            toast('Product add successful');
        })
    
    };


    return (
        <>
            <h2 className='text-center text-info'> Add Product </h2>

            <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto d-flex flex-column'>
                <input className='mb-2' placeholder='Product Name' {...register("name", { required: true} )} />
                <input className='mb-2' placeholder='Product Price' {...register("price", { required: true} )} />
                <input className='mb-2' placeholder='Product Image' {...register("img", { required: true} )} />

                <input className='bg-info border text-white' type="submit" value="Add Product" />
            </form>
            <ToastContainer> </ToastContainer>
        </>
    );
};

export default AddProduct;