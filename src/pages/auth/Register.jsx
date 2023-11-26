import React from 'react';
import {Link} from "react-router-dom";

import { MdArrowBack } from "react-icons/md";
import {useForm} from "react-hook-form";
import {useMediaQuery} from "@mui/material";
import {BeatLoader} from "react-spinners";

const RegisterOne = ({page, setPage, register, handleSubmit, onSubmit, errors}) => {
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__list">
                    <div className="form__item">
                        <label>Имя</label>
                        <input
                            type="text"
                            placeholder='Укажите ваше имя'
                            {...register('firstName')}
                            className='form__item-input'
                        />
                        {/*<p className="form__item-error"></p>*/}
                    </div>
                    <div className="form__item">
                        <label>Фамилия</label>
                        <input
                            type="text"
                            placeholder='Укажите фамилию'
                            {...register('lastName')}
                            className='form__item-input'
                        />
                        {/*<p className="form__item-error"></p>*/}
                    </div>
                    <div className="form__item">
                        <label>E-mail</label>
                        <input
                            type="email"
                            placeholder='Укажите вашу почту'
                            {...register('email')}
                            className='form__item-input'
                        />
                        {/*<p className="form__item-error"></p>*/}
                    </div>
                </div>
                <button className="form__btn" type='submit'
                        // onClick={() => setPage(page + 1)}
                >
                    Продолжить
                </button>
            </form>
            <div className='form__tabs'>
                <div className='form__tabs-item active'></div>
                <div className='form__tabs-item'></div>
            </div>
            <div className="form__questions">
                <Link to='/auth/login' className='form__questions-link'>
                    Уже есть аккаунт?
                </Link>
            </div>
        </>
    )
}

const RegisterTwo = ({page, setPage, register, defaultValues, errors, handleSubmit, onSubmit}) => {



    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__list">
                    <div className="form__item">
                        <label>Логин</label>
                        <input type="text" {...register('userName')} placeholder='Придумайте логин'/>
                        {/*<p className="form__item-error"></p>*/}
                    </div>
                    <div className="form__item">
                        <label>Пароль</label>
                        <input
                            type="password"
                            {...register('password')}
                            placeholder='Задайте пароль для входа'
                            className='form__item-input'
                        />
                        {/*<p className="form__item-error"></p>*/}
                    </div>
                    <div className='form__item-checkbox'>
                        <input type="checkbox"  className='form__item-input' {...register('checkbox')}/>
                        <p>Я согласен с <Link to='/privacy-policy' className='form__item-checkbox-span'>политикой конфиденциальности</Link></p>
                    </div>
                </div>
                <button className="form__btn">
                    Продолжить
                </button>
            </form>
            <div className='form__tabs'>
                <div className='form__tabs-item'></div>
                <div className='form__tabs-item active'></div>
            </div>
            <div className="form__questions">
                <button className='form__questions-link' onClick={() =>  setPage(page - 1)}>
                    <MdArrowBack className='form__questions-link_logo'/>
                    Назад

                </button>
            </div>
        </>
    )
}

const Register = () => {

    const [page, setPage] = React.useState(1)

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
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            password: '',
            checkbox: ''
        }
    })

    const onSubmitOne = ({firstName, lastName, email}) => {
        console.log({firstName, lastName, email})
        setPage(page + 1)
    }

    const onSubmitTwo = (values) => {
        console.log(values)
    }

    const medium = useMediaQuery('(min-width:600px)');


    return (
        <div className='form'>
            <h3 className="form__title">
                Добро пожаловать!
            </h3>
            <p className="form__subtitle">
                Создайте аккаунт
            </p>
            {
                page === 1
                    ?
                    <RegisterOne
                        page={page}
                        setPage={setPage}
                        onSubmit={onSubmitOne}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        register={register}
                        defaultValues={defaultValues}
                    />
                    :
                    <RegisterTwo
                        page={page}
                        setPage={setPage}
                        onSubmit={onSubmitTwo}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        register={register}
                        defaultValues={defaultValues}
                    />
            }
            {/*<div className="form__loading">*/}

            {/*    <BeatLoader className='form__loading-icon' color="#7535FC" />*/}
            {/*</div>*/}
        </div>
    );
};

export default Register;