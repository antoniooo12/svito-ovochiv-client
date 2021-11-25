import React from 'react';
import cl from './Header.module.scss';
import BtnBurger from "../UI/BtnBurger/BtnBurger";
import IconUser from "../UI/Icon/IconUser";

const Header = () => {
    return (
        <div className={cl.wrapper}>
            <BtnBurger/>
            <div className={cl.address}>місто Полтава вул.Степанова 7а</div>
            <IconUser/>
        </div>
    );
};

export default Header;