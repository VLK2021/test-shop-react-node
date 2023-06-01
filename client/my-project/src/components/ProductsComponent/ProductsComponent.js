import React, {useCallback, useEffect, useState} from 'react';

import './ProductsComponentStyle.css';
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../store/slices/product.slice";
import SingleProduct from "../SingleProduct/SingleProduct";


const ProductsComponent = () => {
    const {productsArr} = useSelector(store => store.products);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllProducts())
    }, []);

    return (
        <div className={'styleComponentRender width'}>
            {
                productsArr &&
                productsArr.map(obj => <SingleProduct key={obj.id} obj={obj}/>)
            }
        </div>
    );
};

export default ProductsComponent;