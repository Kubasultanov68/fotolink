import React from 'react';
import {useSelector} from "react-redux";

const Home = () => {

    const {user} = useSelector(store => store.auth)

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: 'calc(60% - (24px / 3))'
            }}>


            </div>
        </>
    );
};

export default Home;