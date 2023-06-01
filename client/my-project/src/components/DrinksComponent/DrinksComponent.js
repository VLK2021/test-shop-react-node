import React from 'react';

import './DrinksComponentStyle.css';
import {useSelector} from "react-redux";
import SingleProduct from "../SingleProduct/SingleProduct";


const DrinksComponent = () => {
    const {productsArr} = useSelector(store => store.products);
    const newProductsArr = productsArr.filter(item => item.shop === 'drinks shop');


    return (
        <div className={'width styleComponentRender'}>
            {
                productsArr &&
                newProductsArr.map(obj => <SingleProduct key={obj.id} obj={obj}/>)
            }
        </div>
    );
};

export default DrinksComponent;