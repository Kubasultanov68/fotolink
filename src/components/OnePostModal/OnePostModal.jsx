import React from 'react';
import Post from "../Post/Post";

const OnePostModal = () => {


    return (
        <>
            <div className='postmodal'>


                <div className="postmodal__content">
                    <Post modal='Сохраненное'/>
                </div>
            </div>
        </>
    );
};

export default OnePostModal;