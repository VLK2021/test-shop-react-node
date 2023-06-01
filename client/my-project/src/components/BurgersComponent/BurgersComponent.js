import React from 'react';
import {useSelector} from "react-redux";


import SingleProduct from "../SingleProduct/SingleProduct";
import './BurgersComponentStyle.css';


const BurgersComponent = () => {
    const {productsArr} = useSelector(store => store.products);
    const newProductsArr = productsArr.filter(item => item.shop === 'burgers shop')

    return (
        <div className={'styleComponentRender width'}>
            {
                productsArr &&
                newProductsArr.map(obj => <SingleProduct key={obj.id} obj={obj}/>)
            }
        </div>
    );
};

export default BurgersComponent;