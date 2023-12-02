import React from 'react';
import {Avatar} from "@mui/material";

export const UserItem = () => {
    return (
        <div className="subuser__item">
            <Avatar sx={{width: '50px', height: '50px'}} />
            <p className="subuser__item-name">
                aleks
            </p>
        </div>
    )
}

const SubUsers = () => {
    return (
        <div className='subuser'>
            <div className="subuser__info">
                <h4 className="subuser__title">
                    Мои подписки
                </h4>
                <button className="subuser__btn">
                    Показать всех
                </button>
            </div>
            <div className="subuser__list">
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>

                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
                <UserItem/>
            </div>
        </div>
    );
};

export default SubUsers;