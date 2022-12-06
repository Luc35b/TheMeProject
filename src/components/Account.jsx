import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user } = UserAuth();

  return (
    
    <div name="Stats" className='nav-link w-full h-screen bg-gradient-to-b from-sky-300 to-sky-500 text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <p>User Name: Karl Ramos</p>
        <p>User Email: {user && user.email}</p>
        </div>
    </div>
  );
};

export default Account;