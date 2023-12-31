import React from 'react';
import {generateFakeData} from "../../components/UserProfile/UserProfile";
import {SearchUser} from "../Search/Search";

const Subscriptions = () => {
    return (

        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '0 24px 24px 24px',
                borderRadius: '10px',
                background: '#fff',
                width: 'calc(60% - (48px / 3))'
            }}>
                <h4 className="search__input-title" style={{
                    margin: '0',
                    paddingTop: '24px'
                }}>
                    Подписки
                </h4>
                {
                    generateFakeData(20).map((_, index) => (
                        <SearchUser key={index}/>
                    ))
                }

            </div>
            <div style={{
                height: '500px'
            }} className='sidebar s'></div>
        </>


    );
};

export default Subscriptions;