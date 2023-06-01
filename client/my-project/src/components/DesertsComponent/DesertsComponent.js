import React from 'react';

import './DesertsComponentStyle.css';
import {useSelector} from "react-redux";

import SingleProduct from "../SingleProduct/SingleProduct";
import './DesertsComponentStyle.css';


const DesertsComponent = () => {
    const {productsArr} = useSelector(store => store.products);
    const newProductsArr = productsArr.filter(item => item.shop === 'deserts shop');

    return (
        <div className={'width styleComponentRender'}>
            {
                productsArr &&
                newProductsArr.map(obj => <SingleProduct key={obj.id} obj={obj}/>)
            }
        </div>
    );
};

export default DesertsComponent;