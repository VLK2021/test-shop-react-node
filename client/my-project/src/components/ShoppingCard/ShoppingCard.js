import React, {useState} from 'react';
import {useSelector} from "react-redux";

import './ShoppingCardStyle.css';
import SingleShoppingCard from "../SingleShoppingCard/SingleShoppingCard";
import UserFormComponent from "../UserFormComponent/UserFormComponent";


const ShoppingCard = () => {
    const {cartArr, totalPrice} = useSelector(store => store.cart);
    const [formData, setFormData] = useState();


    const handleSubmit = async () => {
        const order = JSON.stringify({...cartArr, totalPrice, formData});
        console.log(order);

        //отак записуємо дані в базу даних. Просто я не створив базу під ордери на бекенді але створюється вона
        // аналогічно до тих які є створені
        // await cartService.postOrder(order)
        //     .then(response => {
        //         if (response.data) {
        //             alert('order was created!')
        //         }
        //     });
    }


    return (
        <div className={'shoppingCard width flexDirectionColumn'}>
            <div className={'shoppingCard-info width flex'}>
                {
                    cartArr.length > 0 ?
                        <div className={'shoppingCard-info-form'}>
                            <UserFormComponent setFormData={setFormData}/>
                        </div> : null
                }

                <div className={'shoppingCard-info-product'}>
                    {
                        cartArr.length > 0 ?
                            cartArr.map(obj => <SingleShoppingCard key={obj.id} obj={obj}/>) :
                            <p className={'shoppingCard-title-text'}>кошик порожній!!!</p>
                    }
                </div>
            </div>

            <div className={'shoppingCard-price width flex'}>
                <p>Total price: {totalPrice} грн</p>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default ShoppingCard;