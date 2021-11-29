import React, {useState} from 'react';
import BtnBurger from "../../UI/BtnBurger/BtnBurger";
import {Link, useLocation} from "react-router-dom";
import cl from './LeftBtn.module.scss'

const LeftBtn = () => {
    let location = useLocation();
    const [] = useState()
    const leftBtn = () => {
        if (location.pathname === '/') {
            return <BtnBurger/>
        } else if (location.pathname === '/cart') {
            return (
                <Link to="/">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7188 10.5H3.28125" stroke="black" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M9.1875 4.59375L3.28125 10.5L9.1875 16.4062" stroke="black" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>


            )
        } else {
            return ''
        }
    }
    return (
        <div className={cl.wrapper}>
            {leftBtn()}
        </div>
    );
};

export default LeftBtn;