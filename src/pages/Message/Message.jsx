import React from 'react';
import Companion from "./Companion/Companion";
import {FaSearch} from "react-icons/fa";
import {AiOutlineSend} from "react-icons/ai";

const Message = () => {
    return (
        <div style={{
            display: 'flex',
            width: 'calc(60% - (48px / 3))'
        }} className=''>
            <div className="companions">
                <Companion/>
                <Companion/>
                <Companion/>
                <Companion/>
                <Companion/>
                <Companion/>
                <Companion/>
                <Companion/>
                <Companion/>
                <Companion/>
            </div>
            <div className="message">

                <div className='message__item data'>
                    <span>24 ноября</span>
                </div>

                <div className='message__item user'>
                    <span>
                        Смотри, при выборе компонента в панели справа показываются все его состояния
                    </span>
                </div>
                <div className='message__item user'>
                    <span>
                        Я понял. У нас это называется экстренным сценарием.  Тогда мне нужна будет твоя помощь. Составь пожалуйста список основных таких экстренных сценариев.
                    </span>
                </div>
                <div className='message__item '>
                    <span>
                        Я понял. У нас это называется экстренным сценарием.  Тогда мне нужна будет твоя помощь. Составь пожалуйста список основных таких экстренных сценариев.
                    </span>
                </div>
                <div className='message__item user'>
                    <span>
                        Я понял. У нас это называется экстренным сценарием.  Тогда мне нужна будет твоя помощь. Составь пожалуйста список основных таких экстренных сценариев.
                    </span>
                </div>
                <div className='message__item'>
                    <span>
                        Я понял. У нас это называется экстренным сценарием.  Тогда мне нужна будет твоя помощь. Составь пожалуйста список основных таких экстренных сценариев.
                    </span>
                </div>
                <div className='message__item user'>
                    <span>
                        Я понял. У нас это называется экстренным сценарием.  Тогда мне нужна будет твоя помощь. Составь пожалуйста список основных таких экстренных сценариев.
                    </span>
                </div>
                <div className='message__item user'>
                    <span>
                        Я понял. У нас это называется экстренным сценарием.  Тогда мне нужна будет твоя помощь. Составь пожалуйста список основных таких экстренных сценариев.
                    </span>
                </div>

                <div className='message__item'>
                    <span>
                        Да, это я знаю
                    </span>
                </div>

                <div className='message__item user'>
                    <span>
                        Да, это я знаю
                    </span>
                </div>

                <div className='addcomment'>
                    <input type="text" className="addcomment__input" placeholder='Введите поисковый запрос'/>
                    <button className="addcomment__btn">
                        <AiOutlineSend />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Message;