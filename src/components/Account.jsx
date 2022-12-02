import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  return (
    
    <div name="Stats" className='nav-link w-full h-screen bg-gradient-to-b from-sky-500 via-sky-500 to-sky-300 text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <p>User Email: {user && user.email}</p>
        </div>
    </div>
  );
};

export default Account;