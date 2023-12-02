import React from 'react';
import {Avatar} from "@mui/material";
import {CiBookmark, CiHeart} from "react-icons/ci";
import Modal from "../../components/modal/ModalPost";

export const generateFakeData = (count) => {
    const fakeData = [];

    for (let i = 0; i < count; i++) {
        const fakeItem = {
            id: i + 1,
            name: `Item ${i + 1}`,
            description: `Description for Item ${i + 1}`,
            // Другие поля по вашему выбору
        };

        fakeData.push(fakeItem);
    }

    return fakeData;
};

const fakeArray = generateFakeData(10);

const UserProfile = () => {

    const [pageList, setPageList] = React.useState('post')

    const [selectedPost, setSelectedPost] = React.useState(null);


    const togglePageList = (p) => {
        setPageList(p)
    }

    const openModal = () => {
        setSelectedPost({id: 1});
    };

    const closeModal = () => {
        setSelectedPost(null);
    };


    return (
        <>
            <div className='profile'>
                <div className="profile__bg">
                    <img className='profile__bg-img' src="https://i0.wp.com/spartansboxing.com/wp-content/uploads/2023/08/Mike-Tyson.png?fit=1920%2C1080&ssl=1" alt=""/>
                    <Avatar className='profile__bg-avatar' sx={{width: '223px', height: '223px'}}/>
                </div>
                <div className="profile__content">
                    <div className="profile__begin">
                        <div className="profile__begin-item">
                            <span>181</span> Публикации
                        </div>
                        <div className="profile__begin-item">
                            <span>181</span> Публикации
                        </div>
                        <div className="profile__begin-item">
                            <span>181</span> Публикации
                        </div>
                    </div>
                    <h2 className="profile__username">
                        Denis_Armed
                    </h2>
                    <p className="profile__fio">
                        Денис Васильев
                    </p>
                    <p className="profile__profession">
                        📷 Свадебный фотограф Москва | КМС по бегу | Папа двух красавиц
                    </p>
                    <p className="profile__desc">
                        Зафиксирую вашу любовь в волшебных кадрах! Создаю уникальные и чувственные снимки, передаю эмоции и моменты вашего особенного дня. Доверьте мне ваши воспоминания, и вместе мы создадим историю, которая останется с вами навсегда!
                    </p>
                    <hr className="profile__hr"/>
                    <div className="profile__btns">
                        <button className="profile__btn active">
                            Редактировать профиль
                        </button>
                        <button className="profile__btn">
                            Подписаться
                        </button>
                    </div>
                </div>
                <div className='subuser begin'>
                    <div className="profile__bottom">
                        <button className={`profile__bottom-btn ${pageList === 'post' ? 'active' : ''}`} onClick={() => togglePageList('post')}>
                            Посты пользователя
                        </button>
                        <button className={`profile__bottom-btn ${pageList === 'bookmark' ? 'active' : ''}`} onClick={() => togglePageList('bookmark')}>
                            Сохраненные посты
                        </button>
                    </div>
                </div>
                <div className="profile__imagelist">
                    {

                        pageList === 'post' ?

                            generateFakeData(4).map((_, index) => (
                            <div key={index} className="profile__imagelist-item" onClick={() => openModal()}>
                                <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D" alt=""/>
                                <div className="profile__imagelist-item-ab">
                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                        <Avatar sx={{width: '60px', height: '60px'}}/>
                                    </div>
                                    <p>Denis_Armed</p>
                                    <div>
                                        <button>
                                            <CiHeart />
                                            24
                                        </button>
                                        <button>
                                            <CiBookmark />
                                            24
                                        </button>
                                    </div>
                                </div>
                                <div className='profile__imagelist-item-bg'>

                                </div>
                            </div>
                        ))
                            :
                            generateFakeData(10).map((_, index) => (
                                <div key={index} className="profile__imagelist-item" onClick={() => openModal()}>
                                    <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8fDA%3D" alt=""/>
                                    <div className="profile__imagelist-item-ab">
                                        <div style={{display: 'flex', justifyContent: 'center'}}>
                                            <Avatar sx={{width: '60px', height: '60px'}}/>
                                        </div>
                                        <p>Denis_Armed</p>
                                        <div>
                                            <button>
                                                <CiHeart />
                                                24
                                            </button>
                                            <button>
                                                <CiBookmark />
                                                24
                                            </button>
                                        </div>
                                    </div>
                                    <div className='profile__imagelist-item-bg'>

                                    </div>
                                </div>
                            ))

                    }
                </div>
            </div>
            {selectedPost && (
                <Modal onClose={closeModal} post={selectedPost}/>
            )}
        </>
    );
};

export default UserProfile;