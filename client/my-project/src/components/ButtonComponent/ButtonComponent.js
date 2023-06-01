import React from 'react';

import './ButtonComponentStyle.css';


const ButtonComponent = ({obj}) => {
    const {id, name} = obj


    return (
        <div className={'buttonComponent width'}>
                <button>{name}</button>
        </div>
    );
};

export default ButtonComponent;