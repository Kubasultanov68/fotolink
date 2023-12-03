import React from 'react';
import Companion from "./Companion/Companion";

const Message = () => {
    return (
        <div style={{
            display: 'flex',
            width: 'calc(60% - (48px / 3))'
        }} className='message'>
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

            </div>
        </div>
    );
};

export default Message;