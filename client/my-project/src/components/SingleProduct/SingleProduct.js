import React from 'react';
import {useDispatch} from "react-redux";

import './SingleProductStyle.css';
import {cartActions} from "../../store/slices/cart.slice";


const SingleProduct = ({obj}) => {
const {name, price, shop, url, information} = obj;
const dispatch = useDispatch();


    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(cartActions.setProductInCart(obj));
    }


    return (
        <div className={'singleProduct flexDirectionColumn'}>
            <div className={'singleProduct-img width'}><
                img src={url} alt="foto"/>
            </div>

            <p>{information}</p>

            <div className={'singleProduct-block-price  width flex'}>
                <p>{name}</p>
                <div>{price}</div>
            </div>

            <div className={'singleProduct-btn'}>
                <button onClick={handleClick}>add to card</button>
            </div>
        </div>
    );
};


export default SingleProduct;