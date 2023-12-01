import React from 'react';
import {Avatar} from "@mui/material";
import {FaRegHeart} from "react-icons/fa";

const Comment = () => {
    return (
        <div className='comment'>
            <Avatar/>
            <div className="comment__content">
                <p className="comment__user-name">
                    Denis_Armed
                </p>
                <p className="comment__text">
                    Респект Александру! Давно уже слежу за его творчеством. Думаю, что у нас в городе нет свадебного фотографа,
                    который справляется со своей работой лучше чем Саша
                </p>
                <div className="comment__bottom">
                    <div className="comment__bottom-left">
                        <p className="comment__time">
                            Сегодня в 6:30
                        </p>
                        <button className="comment__btn">
                            Ответить
                        </button>
                    </div>
                    <button className="comment__btn">
                        <FaRegHeart/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Comment;