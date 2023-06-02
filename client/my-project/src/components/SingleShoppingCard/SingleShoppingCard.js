import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import './SingleShoppingCardStyle.css';
import {cartActions} from "../../store/slices/cart.slice";
import {BiDownArrow, BiUpArrow} from "react-icons/bi";


const SingleShoppingCard = ({obj}) => {
    const {name, url, price, count} = obj;
    const [numberOfProducts, setNumberOfProducts] = useState(1);
    const dispatch = useDispatch();

    const minusProduct = () => {
        setNumberOfProducts(numberOfProducts - 1);
        if (numberOfProducts <= 1) {
            dispatch(cartActions.delProductFromCart(obj));
        }
    }

    const plusProduct = () => {
        setNumberOfProducts(numberOfProducts + 1);
        dispatch(cartActions.setProductInCart(obj));
    }


    return (
        <div className={'singleShoppingCard flex width'}>
            <div className={'singleShoppingCard-img'}>
                <img src={url} alt="foto"/>
            </div>

            <div className={'singleShoppingCard-info flexDirectionColumn'}>
                <div className={'name'}>{name}</div>

                <div className={'priceCount'}>{price * count}</div>

                <div className={'flex'}>
                    <div className={'count'}>{count}</div>

                    <div className={'arrows'}>
                        <div className={'BiUpArrow'}><BiUpArrow className={''} size={20} onClick={plusProduct}/></div>
                        <div className={'BiDownArrow'}><BiDownArrow className={''} size={20} onClick={minusProduct}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleShoppingCard;