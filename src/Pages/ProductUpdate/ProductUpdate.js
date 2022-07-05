import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

const ProductUpdate = () => {
    const {id} = useParams();
    const { register, handleSubmit } = useForm();
    const [product, setProduct] = useState({});

    useEffect(()=> {

        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setProduct(data));

    },[]);



    const onSubmit = data => {

        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            toast('Product update successful');
        })
        .catch(error=> console.log(error));
    
    };



    return (
        <>
            <h2 className='text-center'> Product Name : {product.name}  </h2>

            <form onSubmit={handleSubmit(onSubmit)} className='w-50 mx-auto d-flex flex-column'>
                <input className='mb-2' placeholder={product.name} {...register("name" )} />
                <input className='mb-2' placeholder={product.price} {...register("price" )} />
                <input className='bg-info border text-white' type="submit" value="Update Product" />
            </form>
            <ToastContainer> </ToastContainer>
        </>
    );
};

export default ProductUpdate;