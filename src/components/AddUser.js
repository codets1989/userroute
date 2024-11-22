import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const AddUser = () =>
{
    const nav = useNavigate();
    const{
        register,
        handleSubmit,
        formState:{errors},
    }= useForm();
    const onSumbit = (event) =>
    {
        event.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || []; 
        users.push(data);
        localStorage.setItem("users", JSON.stringify(users)); 
        nav('/Userlist/Userdetails');
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSumbit)}>
                <div>
                <label>Name</label>
                <input {...register('name',{required : 'Name is required'})}/>
                {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input
                            {...register('email', {required: 'Email is required',pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address',},})}/>
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                <label>Name</label>
                <input {...register('age',{required : 'Age is required'})}/>
                {errors.name && <p>{errors.name.message}</p>}
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    )
}
export default AddUser;