import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddUser = () => {
    const { register, handleSubmit, reset  } = useForm(); // initialize the hook
    const onSubmit = (data) => {
      console.log(data);
      axios.post('http://localhost:7000/addUser', data)
      .then(res => {
          if (res.data.insertedId) {
              alert('added successfully');
              reset();
          }
      })

    };
    return (
        <div className="add-service">
        <h2>Please Add a User</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("Servicepackage")} placeholder="package in number" />
            <input {...register("img")} placeholder="image url" />
            <input type="submit" />
        </form>
    </div>
    );
};

export default AddUser;