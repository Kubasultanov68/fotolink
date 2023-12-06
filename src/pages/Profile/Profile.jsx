import React from 'react';
import UserProfile from "../../components/UserProfile/UserProfile";
import {useSelector} from "react-redux";

const Profile = () => {

    const {user} = useSelector(store => store.auth)

    return (
        <>
            <UserProfile user={user}/>
        </>
    );
};

export default Profile;