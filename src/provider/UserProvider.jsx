import React, { useEffect, useState } from 'react';
import { UserContext } from '../context';

const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [showUserModal, setShowUserModal] = useState(false);

    console.log(userInfo)
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userInfo"));
        if (storedUser?.name) {
            console.log("stored User")
            setUserInfo(storedUser);
        }
        else {
            setShowUserModal(true);
        }

    }, []);

    const handleUserInfo = (user) => {
        setUserInfo(user);
        localStorage.setItem("userInfo", JSON.stringify(user));
        setShowUserModal(false);

    }


    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, showUserModal, setShowUserModal, handleUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;