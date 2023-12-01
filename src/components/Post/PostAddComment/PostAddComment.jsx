import React from 'react';
import {AiOutlineSend} from "react-icons/ai";

const PostAddComment = () => {
    return (
        <div className='addcomment'>
            <input type="text" className="addcomment__input" placeholder='Введите текст комментария'/>
            <button className="addcomment__btn">
                <AiOutlineSend />
            </button>
        </div>
    );
};

export default PostAddComment;