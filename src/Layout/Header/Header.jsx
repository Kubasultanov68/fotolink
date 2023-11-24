import React from 'react';

import headerLogo from '../../assets/headerLogo.svg';
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <h1 className="header__logo">
                        <img src={headerLogo} alt="Logo"/>
                    </h1>
                    <div className="header__btns">
                        <NavLink to='/auth/register' component='button' className='header__btn'>
                            Регистрация
                        </NavLink>
                        <NavLink to='/auth/login' component='button' className='header__btn'>
                            Войти
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;