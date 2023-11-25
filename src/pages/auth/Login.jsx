import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const Login = () => {

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
        }
    })

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <div className='form'>
            <h3 className="form__title">
                С возвращением!
            </h3>
            <p className="form__subtitle">
                Войдите в аккаунт
            </p>
            <form>
                <div className="form__list">
                    <div className="form__item">
                        <label>Логин</label>
                        <input type="text" placeholder='Введите ваш логин'/>
                        {/*<p className="form__item-error"></p>*/}
                    </div>
                    <div className="form__item">
                        <label>Пароль</label>
                        <input type="text" placeholder='Введите пароль'/>
                        {/*<p className="form__item-error"></p>*/}
                    </div>
                </div>
                <button className="form__btn">
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
        </div>
    );
};

export default Login;