import {useNavigate, useRoutes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import {useEffect} from "react";
import Auth from "../pages/auth/Auth";

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
                }
            ]
        }
    ])

    const navigate = useNavigate()

    useEffect(() => {navigate('/auth/login')}, [])
    return routes
}