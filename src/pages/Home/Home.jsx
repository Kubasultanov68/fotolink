import React from 'react';
import {useSelector} from "react-redux";
import SubUsers from "./SubUsers/SubUsers";
import Begin from "./Begin/Begin";
import Post from "../../components/Post/Post";

const Home = () => {

    const {user} = useSelector(store => store.auth)

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: 'calc(60% - (48px / 3))'
            }}>

                <SubUsers/>
                <Begin/>

                <div>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </>
    );
};

export default Home;