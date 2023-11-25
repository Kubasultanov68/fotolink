import React from 'react';
import Header from "../../Layout/Header/Header";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "../../Layout/Footer/Footer";

const Auth = () => {

    const {pathname} = useLocation()

    return (
        <>

            <Header/>
            <main className='auth'>
                <div className="container">

                    <div className="auth__content">
                        <div className="auth__info">

                            <p className="auth__subtitle">
                                Добро пожаловать в Фотолинк!
                            </p>

                            <p className="auth__title">
                                Первая <span>социальная сеть</span> для фотографов
                            </p>


                            <p className="auth__desc">
                                Войдите, чтобы просматривать материалы
                            </p>

                        </div>
                        <Outlet/>

                    </div>


                </div>
            </main>
            <Footer/>

        </>
    );
};

export default Auth;