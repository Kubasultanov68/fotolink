import React from 'react';
import {useSelector} from "react-redux";

const Home = () => {

    const {user} = useSelector(store => store.auth)

    return (
        <>
            {user && (
                <div>
                    {
                        Object.entries(user).map(([key, value], index) => (
                            <h2 key={index}>{key}: {value}</h2>
                        ))
                    }
                </div>
            )}
        </>
    );
};

export default Home;