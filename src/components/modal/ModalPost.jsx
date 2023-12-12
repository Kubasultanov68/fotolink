import React from 'react';
import Post from "../Post/Post";
import {MdArrowBack} from "react-icons/md";

const Modal = ({ post, onClose }) => {

    React.useEffect(() => {
        document.body.style.overflow = 'hidden'; // Запрещаем прокрутку
        return () => {
            document.body.style.overflow = ''; // Восстанавливаем прокрутку при размонтировании
        };
    }, []);

    const handleModalClick = (e) => {
        // Предотвращаем всплытие события, чтобы не вызывать onClose при клике на самом контенте
        e.stopPropagation();
    };

    return (
        <div className="modal" style={{ display: post ? 'block' : 'none' }} onClick={() => onClose()}>
            <div className="modal-content" onClick={handleModalClick}>
                <span className='form__questions-link' onClick={() => onClose()}>
                    <MdArrowBack className='form__questions-link_logo'/>
                    Назад

                </span>
                <Post post={post}/>
            </div>
        </div>
    );
};


export default Modal;
