import React, {useState} from 'react';
import cl from './Header.module.scss';
import BtnBurger from "../UI/BtnBurger/BtnBurger";
import IconUser from "../UI/Icon/IconUser";
import {useLocation} from "react-router-dom";
import LeftBtn from "./LeftBtn/LeftBtn";
import SearchPanel from "../UI/SarchPanel/SearchPanel";

const Header = () => {


    return (
        <div className={cl.wrapper}>
            <LeftBtn/>
            <div className={cl.address}>місто Полтава вул.Степанова 7а</div>
            <SearchPanel/>
        </div>
    );
};

export default Header;