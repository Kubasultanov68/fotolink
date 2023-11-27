import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = () => {
    return (
        <>

            <Header/>
            <main className='auth'>
                <div className="container">

                    <div className="auth__content">
                        <div className="auth__info">

                            <p className="auth__subtitle">
                                Добро пожаловать
                                {/*в Фотолинк*/}
                                !
                            </p>

                            {/*<p className="auth__title">*/}
                            {/*    <span>Социальная сеть</span> для фотографов*/}
                            {/*</p>*/}


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

export default Layout;