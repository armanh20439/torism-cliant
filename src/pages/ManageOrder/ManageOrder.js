import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ManageOrder = () => {
    const { register, handleSubmit,reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
        

        fetch('https://shielded-coast-32872.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    // clearTheCart();
                    reset();
                }
            })
    };
    
    return (
        <div className="add-services">
            <h2>Please add services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} placeholder="Name" />
                <input defaultValue={user.email} {...register("email")} placeholder="Email" />
                <input type="number" {...register("Phonenumber")} placeholder="Phone" />
                <input  {...register("adress")} placeholder="Address" />
                <input type="submit" />
            </form>
            <Link className='btn btn-danger text-white' to='manageAllOrder'>Manage All Orders</Link>
        </div>
    );
};

export default ManageOrder;