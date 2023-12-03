import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SideBar from "./SideBar/SideBar";

const Layout = () => {
    return (
        <>
            <div className="container layout">
                <SideBar/>
                <Outlet/>
            </div>



        </>
    );
};

export default Layout;