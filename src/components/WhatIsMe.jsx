import React from 'react'
import ClientNav from './ClientNav';

const WhatIsMe = () => {
  return (
    
    <div name="About" className='w-full h-screen bg-gradient-to-b from-sky-500 via-sky-500 to-sky-300 text-white '>
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
        </div>
    </div>
  )
}

export default WhatIsMe