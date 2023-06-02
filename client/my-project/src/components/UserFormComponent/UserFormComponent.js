import React from 'react';
import {useForm} from "react-hook-form";

import './UserFormComponentStyle.css';


const UserFormComponent = ({setFormData}) => {
    const {register, handleSubmit, reset} = useForm();

    const submit = (data) => {
        setFormData(data);
    }


    return (
        <div className={'userFormComponent width'}>
            <p>Client information</p>

            <form onChange={handleSubmit(submit)}>
                <p className={'width text-start'}>Name:</p>
                <div><input type="text" {...register('name')}/></div>

                <p className={'width text-start'}>Email:</p>
                <div><input type="text" {...register('email')}/></div>

                <p className={'width text-start'}>Phone:</p>
                <div><input type="text" {...register('phone')}/></div>

                <p className={'width text-start'}>Address:</p>
                <div><input type="text" {...register('address')}/></div>
            </form>
        </div>
    );
};

export default UserFormComponent;