import React from 'react';

import './HeaderStyle.css';


const Header = () => {
    return (
        <main className={'header width flex'}>
            <div className={'header-shop'}>Shop</div>
            <div className={'header-cart'}>Shopping Cart</div>
        </main>
    );
};

export default Header;