import React from 'react';

import './ButtonComponentStyle.css';
import {NavLink} from "react-router-dom";


const ButtonComponent = ({obj}) => {
    const {id, name} = obj;


    return (
        <div className={'buttonComponent width'}>
            <NavLink to={id.toString()}>
                <button>{name}</button>
            </NavLink>
        </div>
    );
};

export default ButtonComponent;