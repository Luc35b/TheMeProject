import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from "react-router-dom"
const WhatIsMe = () => {
  return (
    
    <div name="About" className='nav-link w-full h-screen bg-gradient-to-b from-sky-300 to-sky-500 text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-300'>
                    What is ME?
                </p>
            </div>
            <p className='text-xl mt-20'>
            ME is driven on tackling the social issues of Mental Health and Mental Illness. Mental health is one’s condition on emotional, psychological and social well being. It affects how we think, act, and feel in our daily lives. On the other hand mental illness is when there is an negative impact to one’s mental health. According to the CDC, more than 50% of americans are likely to be diagnosed with a mental illness at some point of their lifetime. This shows how common these issues we face in our community. If we do not take care of our mental health, we may develop mental illnesses like depression that can result in harmful behaviours. Which leads to the creation of ME, a diary app that would enable users to access free mental health resources and be able to self-regulate their mental health through journaling. 
            </p>
            <br/>
            <p className='text-xl'>
                
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