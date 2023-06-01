import React from 'react';
import {useSelector} from "react-redux";

import SingleProduct from "../SingleProduct/SingleProduct";
import './PizzaComponentStyle.css';


const PizzaComponent = () => {
    const {productsArr} = useSelector(store => store.products);
    const newProductsArr = productsArr.filter(item => item.shop === 'pizza shop');


    return (
        <div className={'width styleComponentRender'}>
            {
                productsArr &&
                newProductsArr.map(obj => <SingleProduct key={obj.id} obj={obj}/>)
            }
        </div>
    );
};

export default PizzaComponent;