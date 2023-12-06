import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SideBar from "./SideBar/SideBar";
import Lheader from "./Lheader/Lheader";
import {useSelector} from "react-redux";

const Layout = () => {

    const navigate = useNavigate()

    const {user} = useSelector(store => store.auth)

    React.useEffect(() => {
        if (!user) {
            navigate('/auth/login')
        }
    }, [user])

    return (
        <>
            <Lheader/>
            <div style={{height: '80px'}}></div>
            <div className="container layout">
                <SideBar/>
                <Outlet/>
            </div>



        </>
    );
};

export default Layout;