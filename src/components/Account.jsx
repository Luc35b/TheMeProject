import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import pic from '../assets/placeholder2.png';
const Account = () => {
  const { user } = UserAuth();

  return (
<div name="Stats"className="nav-link w-full h-screen bg-gradient-to-b from-sky-300 to-sky-500 text-black ">
  <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <div className="homePage">
      <div className="post">
        <div className="postHeader">
          <div className="title justify-center text-center"><img src={pic} /> </div>
          
        </div>
        
        <div className="postTextContainer text-center">  </div>

        <div className="postTextContainer "> User Name : Karl Ramos </div>
        <br />
        <div className="postTextContainer "> <p>User Email: {user && user.email}</p> </div>
        
        
        
        
      </div>
    </div>
  </div>
</div>
  );
};

export default Account;