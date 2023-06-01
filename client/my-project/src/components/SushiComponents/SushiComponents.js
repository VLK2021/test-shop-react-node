import React from 'react';

import './SushiComponentsStyle.css';
import {useSelector} from "react-redux";

import SingleProduct from "../SingleProduct/SingleProduct";
import './SushiComponentsStyle.css';


const SushiComponents = () => {
    const {productsArr} = useSelector(store => store.products);
    const newProductsArr = productsArr.filter(item => item.shop === 'sushi shop');


    return (
        <div className={'width styleComponentRender'}>
            {
                productsArr &&
                newProductsArr.map(obj => <SingleProduct key={obj.id} obj={obj}/>)
            }
        </div>
    );
};

export default SushiComponents;