import {useNavigate, useRoutes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import {useEffect} from "react";
import Auth from "../pages/auth/Auth";
import ResetPassword from "../pages/auth/ResetPassword";
import {useSelector} from "react-redux";
import Home from "../pages/Home/Home";

export default function  PageRoutes () {



    const routes = useRoutes([
        {
            path: '/auth/',
            element: <Auth/>,
            children: [
                {
                    path: 'login',
                    element: <Login/>
                },
                {
                    path: 'register',
                    element: <Register/>
                },
                {
                    path: 'reset-password',
                    element: <ResetPassword/>
                }
            ]
        },
        {
            path: '/privacy-policy',
            element: '/privacy-policy будет'
        },
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '',
                    element: <Home/>
                },
                {
                    path: 'subscriptions',
                    element: 'subscriptions'
                },
                {
                    path: 'messages',
                    element: 'messages'
                },
                {
                    path: 'active',
                    element: 'active'
                },

            ]
        }
    ])
    const {user} = useSelector(store => store.auth)

    const navigate = useNavigate()

    useEffect(() => {if (!user) {navigate('/auth/login')}}, [])
    return routes
}