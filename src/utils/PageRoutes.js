import {useNavigate, useRoutes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import {useEffect} from "react";
import Auth from "../pages/auth/Auth";
import ResetPassword from "../pages/auth/ResetPassword";

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
        }
    ])
    const user = {};

    const navigate = useNavigate()

    useEffect(() => {if (!user) {navigate('/auth/login')}}, [])
    return routes
}