import React from 'react';
import {Outlet} from "react-router-dom";

import './LayoutStyle.css';
import Header from "../components/Header/Header";
import MenuComponent from "../components/MenuComponent/MenuComponent";


const Layout = () => {

    return (
        <main className={'layout width flexDirectionColumn'}>
            <Header/>

            <div className={'main width flex'}>
                <div className={'main-menu'}>
                    <MenuComponent/>
                </div>

                <div className={'main-outlet'}>
                    <Outlet/>
                </div>
            </div>

        </main>
    );
};

export default Layout;