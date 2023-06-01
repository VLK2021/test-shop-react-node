import React, {useState} from 'react';
import {useSelector} from "react-redux";

import './ShoppingCardStyle.css';


const ShoppingCard = () => {
    const [cartListVisible, setCartListVisible] = useState(false);
    const {cartArr, totalPrice} = useSelector(store => store.cart);

    return (
        <div className={'shoppingCard width'}>

        </div>
    );
};

export default ShoppingCard;