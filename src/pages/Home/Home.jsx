import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import SubUsers from "./SubUsers/SubUsers";
import Begin from "./Begin/Begin";
import Post from "../../components/Post/Post";
import Modal from "../../components/modal/ModalPost";
import * as PostR from '../../features/slices/post';

const Home = () => {

    const {user} = useSelector(store => store.auth)
    const {isLoading, posts} = useSelector(store => store.post.all)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(PostR.all())
    }, [])

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: 'calc(60% - (48px / 3))'
            }}>

                <SubUsers/>
                <Begin/>
                {
                    isLoading && <p>loading...</p>
                }

                <div style={{display: 'flex', flexDirection: "column", rowGap: '24px'}}>
                    {
                        posts.map((item, index) => (
                            <Post post={item} key={item._id || index}/>
                        ))
                    }
                </div>
            </div>
            <div style={{
                height: '500px'
            }} className='sidebar s'></div>
        </>
    );
};

export default Home;