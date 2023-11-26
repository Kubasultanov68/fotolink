import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useMediaQuery} from "@mui/material";
import {BeatLoader} from "react-spinners";
import {useDispatch, useSelector} from "react-redux";
import * as Auth from "../../features/slices/auth";

const Login = () => {

    const {user, isLoading} = useSelector(store => store.auth)

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            defaultValues
        },
        setError,
    } = useForm({
        defaultValues: {
            userName: '',
            password: '',
        },
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        const {payload} = await dispatch(Auth.login(values))
        if (payload?.response?.data) {
            setError(payload.response.data.input, {type: 'manual', message: payload.response.data.message})
        }
    }

    const medium = useMediaQuery('(max-width:600px)');

    React.useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])

    return (
        <div className={`form ${medium ? 'medium' : ''}`}>
            <h3 className="form__title">
                С возвращением!
            </h3>
            <p className="form__subtitle">
                Войдите в аккаунт
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__list">
                    <div className="form__item">
                        <label>Логин</label>
                        <input
                            type="text"
                            placeholder='Введите ваш логин'
                            className={`form__item-input ${errors?.userName?.message ? 'error' : ''}`}
                            {...register('userName', {required: '*Обязательное'})}
                        />
                        <p className="form__item-error">{errors?.userName?.message}</p>
                    </div>
                    <div className="form__item">
                        <label>Пароль</label>
                        <input
                            {...register('password', {required: '*Обязательное'})}
                            type="text"
                            placeholder='Введите пароль'
                            className={`form__item-input ${errors?.password?.message ? 'error' : ''}`}
                        />
                        <p className="form__item-error">{errors?.password?.message}</p>
                    </div>
                </div>
                <button className="form__btn" type='submit'>
                    Войти
                </button>
            </form>
            <div className="form__questions">
                <Link to='/auth/reset-password' className='form__questions-link'>
                    Забыли пароль?
                </Link>
                <Link to='/auth/register' className='form__questions-link'>
                    Создать аккаунт?
                </Link>
            </div>
            {isLoading && (
                <div className="form__loading">

                    <BeatLoader className='form__loading-icon' color="#7535FC" />
                </div>
            )}
        </div>
    );
};

export default Login;