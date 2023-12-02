import React from 'react';
import {AiOutlineSend} from "react-icons/ai";
import {UserItem} from "../Home/SubUsers/SubUsers";
import {generateFakeData} from "../UserProfile/UserProfile";
import Post from "../../components/Post/Post";
import {CiSearch} from "react-icons/ci";
import {FaSearch} from "react-icons/fa";
import {Avatar} from "@mui/material";

export const SearchUser = () => {
    return (
        <div className='search__user'>
            <div className="search__user-info">
                <Avatar sx={{width: '120px', height: '120px'}}/>
                <div className="search__user-column">
                    <h5 className="search__user-name">
                        Denis_Armed
                    </h5>
                    <p className="search__user-fio">
                        Denis Armed
                    </p>
                    <p className="search__user-desc">
                        📷 Свадебный фотограф Москва | КМС по бегу | Папа двух красавиц
                    </p>
                </div>
            </div>
            <div>
                <button className="search__user-btn">
                    Подписаться
                </button>
            </div>
        </div>
    )
}


const Search = () => {

    const [pageList, setPageList] = React.useState('post')

    const [selectedPost, setSelectedPost] = React.useState(null);


    const togglePageList = (p) => {
        setPageList(p)
    }

    const fake = generateFakeData(20)

    return (
        <>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: 'calc(60% - (48px / 3))'
            }}>

                <div className='search__input'>
                    <h4 className="search__input-title">
                        Поиск
                    </h4>
                    <div className='addcomment'>
                        <input type="text" className="addcomment__input" placeholder='Введите поисковый запрос'/>
                        <button className="addcomment__btn fio">
                            <FaSearch />
                        </button>
                    </div>
                    <div className="profile__bottom" style={{marginTop: '24px'}}>
                        <button className={`profile__bottom-btn ${pageList === 'post' ? 'active' : ''}`} onClick={() => togglePageList('post')}>
                            Посты
                        </button>
                        <button className={`profile__bottom-btn ${pageList === 'user' ? 'active' : ''}`} onClick={() => togglePageList('user')}>
                            Пользователи
                        </button>
                    </div>
                </div>

                {
                    pageList === 'user' && (
                        <div className='subuser n'>
                            <div className="subuser__info">
                                <h4 className="subuser__title">
                                    Рекомендуемые профили
                                </h4>
                                <button className="subuser__btn">
                                    Показать всех
                                </button>
                            </div>
                            <div className="subuser__list">
                                {
                                    fake.map((_, index) => (
                                        <UserItem key={index}/>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }

                {
                    pageList === 'post' ? (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '24px',
                            marginTop: '24px'
                        }}>
                            {
                                fake.map((_, index) => (
                                    <Post key={index}/>
                                ))
                            }

                        </div>
                    ) : (
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginTop: '24px',
                            padding: '0 24px 24px 24px',
                            borderRadius: '10px',
                            background: '#fff'

                        }}>
                            {
                                generateFakeData(20).map((_, index) => (
                                    <SearchUser key={index}/>
                                ))
                            }

                        </div>
                    )
                }

            </div>

        </>
    );
};

export default Search;