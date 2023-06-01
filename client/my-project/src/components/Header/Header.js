import React from 'react';
import {Link} from "react-router-dom";

import './HeaderStyle.css';


const Header = () => {


    return (
        <main className={'header width flex'}>
            <div className={'header-shop'}>
                <Link to={'/'}>Shop</Link>
            </div>
            <div className={'header-cart'}>
                <Link to={'/card'}>Shopping Cart</Link>
            </div>
        </main>
    );
};

export default Header;