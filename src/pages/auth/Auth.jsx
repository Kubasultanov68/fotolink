import React from 'react';
import Header from "../../Layout/Header/Header";
import {Outlet, useLocation} from "react-router-dom";
import Footer from "../../Layout/Footer/Footer";
import {useMediaQuery} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import * as auth from '../../features/slices/auth'

const Auth = () => {

    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const {user} = useSelector(store => store.auth)

    const medium = useMediaQuery('(min-width:900px)');

    React.useEffect(() => {

            dispatch(auth.me({token: localStorage.getItem('token')}))
    }, [])

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
                                            Добро пожаловать

                                            {/*в Фотолинк*/}

                                            !
                                        </p>

                                        <p className="auth__title">
                                           <span>Социальная сеть</span>

                                            {/*для фотографов*/}
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