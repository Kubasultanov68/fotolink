import React from 'react';
import sidebarLogo from '../../assets/sidebarLogo.svg';
import {NavLink, useLocation} from "react-router-dom";
import {IoHomeOutline, IoSettings, IoSettingsOutline} from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import {HiMiniUsers, HiOutlineUsers} from "react-icons/hi2";
import {FiMessageCircle} from "react-icons/fi";
import {FaHeart, FaRegHeart, FaRegUser, FaSearch, FaUser} from "react-icons/fa";
import {AiFillMessage, AiOutlineMessage} from "react-icons/ai";
import {CiSearch} from "react-icons/ci";

const SideBarLink = ({to, Icon1, Icon2, text}) => {

    const {pathname} = useLocation()

    return (
        <NavLink to={to} className='sidebar__link'>
            {
                pathname === to ?
                    <Icon1 className='sidebar__link-icon'/>
                    :
                    <Icon2 className='sidebar__link-icon'/>

            }
            <p className='sidebar__link-text'>
                {text}
            </p>
        </NavLink>
    )
}

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                <img src={sidebarLogo} alt="logo"/>
            </div>

            <SideBarLink text='Главная' Icon1={IoHome} Icon2={IoHomeOutline} to='/'/>
            <SideBarLink text='Подписки' Icon1={HiMiniUsers} Icon2={HiOutlineUsers} to='/subscriptions'/>
            <SideBarLink text='Сообщения (2)' Icon1={AiFillMessage} Icon2={FiMessageCircle} to='/messages'/>
            <SideBarLink text='Активность' Icon2={FaRegHeart} Icon1={FaHeart} to='/active'/>
            <SideBarLink text='Поиск' Icon2={CiSearch} Icon1={FaSearch} to='/search'/>
            <SideBarLink text='Мой профиль' Icon2={FaRegUser} Icon1={FaUser} to='/profile'/>
            <SideBarLink text='Настройки' Icon2={IoSettingsOutline} Icon1={IoSettings} to='/settings'/>
        </div>
    );
};

export default SideBar;