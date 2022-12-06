import React from 'react';
import {Card,Button} from 'react-bootstrap'

const Diary = () => {
  return (
    <div name="About" className='nav-link w-full h-screen bg-gradient-to-b from-sky-300 to-sky-500  text-black '>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
      <div className="homePage">
      
        <div className="post">
      
        <div className="postHeader">
        
          <div className="title">
           
          </div>
          
        </div>
        <div className="postTextContainer text-center"> Dec 6,2022  </div>
        
        <div className="postTextContainer "> You felt: Happy  </div>
        <br/>
        <div className="postTextContainer "> You Slept: Great  </div>
        <br/>
        <div className="postTextContainer "> Notes:  </div>
        <div className="postTextContainer"> OMG I am going to spend $100 for a gacha character in Genshin Impact tonight!  </div>
        <br/>
        <h3> Written by Karl Ramos</h3>
        </div>
      </div>

      
    </div>
    </div>
   
  );
}

export default Diary