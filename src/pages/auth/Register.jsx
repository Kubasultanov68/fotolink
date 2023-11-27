import React from 'react';
import {Link, useNavigate} from "react-router-dom";

import { MdArrowBack } from "react-icons/md";
import {useForm} from "react-hook-form";
import {useMediaQuery} from "@mui/material";
import {BeatLoader} from "react-spinners";
import {useDispatch, useSelector} from "react-redux";
import * as Auth from "../../features/slices/auth";

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
                        <p className="form__item-error">{errors?.firstName?.message}</p>
                    </div>
                    <div className="form__item">
                        <label>Фамилия</label>
                        <input
                            type="text"
                            placeholder='Укажите фамилию'
                            className={`form__item-input ${errors?.lastName?.message ? 'error' : ''}`}
                            {...register('lastName', {required: '*Обязательное'})}
                        />
                        <p className="form__item-error">{errors?.lastName?.message}</p>
                    </div>
                    <div className="form__item">
                        <label>E-mail</label>
                        <input
                            type="email"
                            placeholder='Укажите вашу почту'
                            className={`form__item-input ${errors?.email?.message ? 'error' : ''}`}
                            {...register('email', {required: '*Обязательное'})}
                        />
                        <p className="form__item-error">{errors?.email?.message}</p>
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

    const {user, isLoading} = useSelector(store => store.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        formState: {
            errors,
            defaultValues
        },
        setValue,
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

    React.useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])

    const onSubmitOne = async ({firstName, lastName, email}) => {
        const {payload} = await dispatch(Auth.register({firstName, lastName, email}))

        if (payload?.response?.data?.input) {
            return setError(payload.response.data.input, {type: 'manual', message: payload.response.data.message})
        }

        if (payload.email) {
            Object.entries(payload).map(([key, value]) => {
                setValue(key, value);
            });
            return setPage(page + 1)
        }


    };


    const onSubmitTwo = async (values) => {
        const {payload} = await dispatch(Auth.register(values))

        if (payload?.response?.data?.input) {
            return setError(payload.response.data.input, {type: 'manual', message: payload.response.data.message})
        }
    }

    const medium = useMediaQuery('(min-width:600px)');


    console.log(user)

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
            {isLoading && (
                <div className="form__loading">

                    <BeatLoader className='form__loading-icon' color="#7535FC" />
                </div>
            )}
        </div>
    );
};

export default Register;