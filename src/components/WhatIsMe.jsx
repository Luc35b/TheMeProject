import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from "react-router-dom"
const WhatIsMe = () => {
  return (
    
    <div name="About" className='nav-link w-full h-screen bg-gradient-to-b from-sky-500 via-sky-500 to-sky-300 text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-300'>
                    What is ME?
                </p>
            </div>
            <p className='text-xl mt-20'>
                ME is a project that we are building for a grade. Also mental health is important.
            </p>
            <br/>
            <p className='text-xl'>
                Create an account if you want, but your entries might not be stored
            </p>
                    <Link to="/Signup" className=" mt-20 shadow-md shadow-sky-600 group text-sky-500 font-bold w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-br from-sky-200 to-gray-200 cursor-pointer">
                    Sign Up Now!
                        <span className='group-hover:rotate-90 duration-300 '>
                        <MdOutlineKeyboardArrowRight  size={20} className="ml-1"/>
                        </span>
                    </Link>
        </div>
        
                
    </div>
  )
}

export default WhatIsMe