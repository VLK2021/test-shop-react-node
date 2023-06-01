import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './MenuComponentStyle.css';
import {getAllTitles} from "../../store/slices/title.slice";
import ButtonComponent from "../ButtonComponent/ButtonComponent";


const MenuComponent = () => {
    const {titlesArr} = useSelector(store => store.titles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTitles());
    }, []);


    return (
        <div className={'menuComponent flexDirectionColumn width'}>
            {
                titlesArr &&
                    titlesArr.map(obj => <ButtonComponent key={obj.id} obj={obj}/>)
            }
        </div>
    );
};

export default MenuComponent;