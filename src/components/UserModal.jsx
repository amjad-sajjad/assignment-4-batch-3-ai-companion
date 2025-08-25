import React, { useContext, useState } from 'react';
import { UserContext } from '../context';

const UserModal = () => {
    const [user, setUser] = useState({
        name:''
    });
    const {handleUserInfo} = useContext(UserContext);


    const handleChange = (e) => {
        const value= e.target.value;
        setUser({...user, name:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!user.name){
            alert("Please enter your name!")
            return
        }
        handleUserInfo(user)

    }


    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-[#000000cd] z-20  flex items-center justify-center border border-amber-400'>
            <form onSubmit={handleSubmit} action=" " className=' flex flex-col justify-center gap-3 items-center h-50 w-56 bg-zinc-900 rounded-2xl  '>
                <h3 className='font-bold text-xl  '>User Info</h3>
                <label className=''>
                    <p className='font-bold'>Name:</p>
                    <input onChange={handleChange} className='border rounded-2xl w-40 px-3 py-1' type="text" placeholder='Full Name' />
                </label>
                <button type="submit" className='bg-zinc-800 px-3 py-1 w-40 rounded-full mx-5 font-bold cursor-pointer'>Submit</button>
                
            </form>


        </div>
    );
};

export default UserModal;