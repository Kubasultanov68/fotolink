import React from 'react';
import Header from "../../Layout/Header/Header";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "../../Layout/Footer/Footer";
import {useMediaQuery} from "@mui/material";

const Auth = () => {

    const {pathname} = useLocation()

    const medium = useMediaQuery('(min-width:900px)');

    return (
        <>

            {medium ? (<Header/>) : ''}
                <main className='auth'>
                    <div className="container">

                        <div className="auth__content">
                            {
                                medium ? (
                                    <div className="auth__info">

                                        <p className="auth__subtitle">
                                            Добро пожаловать в Фотолинк!
                                        </p>

                                        <p className="auth__title">
                                           <span>Социальная сеть</span> для фотографов
                                        </p>


                                        <p className="auth__desc">
                                            Войдите, чтобы просматривать материалы
                                        </p>

                                    </div>
                                ) : ''
                            }

                            <Outlet/>

                        </div>


                    </div>
                </main>
            <Footer/>

        </>
    );
};

export default Auth;