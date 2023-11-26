import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {MdArrowBack} from "react-icons/md";
import {useForm} from "react-hook-form";
import {useMediaQuery} from "@mui/material";
import {BeatLoader} from "react-spinners";

const ResetPasswordOne = ({page, setPage, errors, handleSubmit , register, onSubmit}) => {
    return (
        <>
            <p className="form__subtitle">
                Введите E-mail указанный при регистрации
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__list">
                    <div className="form__item">
                        <label>E-mail</label>
                        <input {...register('email')} type="email" placeholder='Укажите вашу почту'/>
                        {/*<p className="form__item-error"></p>*/}
                    </div>
                </div>
                <button className="form__btn"
                        // onClick={() => setPage(page + 1)}
                    type='submit'
                >
                    Продолжить
                </button>
            </form>
            <div className='form__tabs'>
                <div className='form__tabs-item active'></div>
                <div className='form__tabs-item'></div>
                <div className='form__tabs-item'></div>
            </div>
            <div className="form__questions">
                <Link to='/auth/login' className='form__questions-link'>
                    <MdArrowBack className='form__questions-link_logo'/>
                    Назад

                </Link>
            </div>
        </>
    )
}

const ResetPasswordTwo = ({page, setPage, errors, handleSubmit, register, onSubmit}) => {
    return (
        <>
            <p className="form__subtitle">
                На указанный адрес было отправлено письмо с кодом подтверждения
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__list">
                    <div className="form__item">
                        <label>Код подтверждения</label>
                        <input type="number" {...register('resetCode')} placeholder='Ваш код'/>
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
                <div className='form__tabs-item'></div>
                <div className='form__tabs-item active'></div>
                <div className='form__tabs-item'></div>
            </div>
            <div className="form__questions">
                <button className='form__questions-link' onClick={() => setPage(page - 1)}>
                    <MdArrowBack className='form__questions-link_logo'/>
                    Назад

                </button>
                <span>
                    Отправить код повторно (0:59)
                </span>
            </div>
        </>
    )
}

const ResetPasswordThree = ({page, setPage, errors, handleSubmit, onSubmit, register}) => {

    const navigate = useNavigate()




    return (
        <>
            <p className="form__subtitle">
                Установите новый пароль для входа
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__list">
                    <div className="form__item">
                        <label>Новый пароль</label>
                        <input type="password" {...register('newPassword')} placeholder='Ваш новый пароль'/>
                        {/*<p className="form__item-error"></p>*/}
                    </div>
                </div>
                <button className="form__btn" type='submit'
                        // onClick={() => navigate('/auth/login')}
                >
                    Продолжить
                </button>
            </form>
            <div className='form__tabs'>
                <div className='form__tabs-item'></div>
                <div className='form__tabs-item'></div>
                <div className='form__tabs-item active'></div>
            </div>
            <div className="form__questions">
                <button className='form__questions-link' onClick={() => setPage(page - 1)}>
                    <MdArrowBack className='form__questions-link_logo'/>
                    Назад

                </button>
            </div>
        </>
    )
}

const ResetPassword = () => {

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
            resetCode: '',
            email: '',
            newPassword: '',
        }
    })

    const onSubmitOne = ({email}) => {
        console.log({email})
        setPage(page + 1)
    }

    const onSubmitTwo = ({resetCode}) => {
        console.log({resetCode})
        setPage(page + 1)
    }

    const onSubmitThree = ({newPassword}) => {
        console.log({newPassword})
    }

    const handlePage = () => {
        if (page === 3) {
            return <ResetPasswordThree
                page={page}
                setPage={setPage}
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
                onSubmit={onSubmitThree}
            />
        } else if (page === 2) {
            return <ResetPasswordTwo
                page={page}
                setPage={setPage}
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
                onSubmit={onSubmitTwo}
            />
        } else {
            return <ResetPasswordOne
                page={page}
                setPage={setPage}
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
                onSubmit={onSubmitOne}
            />
        }
    }

    const medium = useMediaQuery('(max-width:600px)');

    return (
        <div className={`form ${medium ? 'medium' : ''}`}>
            <h3 className="form__title">
                Восстановление пароля
            </h3>
            {handlePage()}
            {/*<div className="form__loading">*/}

            {/*    <BeatLoader className='form__loading-icon' color="#7535FC" />*/}
            {/*</div>*/}
        </div>
    );
};

export default ResetPassword;