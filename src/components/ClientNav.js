import {Link, NavLink} from 'react-router-dom';
import { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

function ClientNav() {

    const [togglerNav, setTogglerNav] = useState(false)
    const clickHandler = () => {
        setTogglerNav(!togglerNav)
    };
    return (
    <nav className=" h-auto md:h-20 p-2 bg-sky-600 w-full mx-auto text-white fixed font-bold bg-opacity-50 flex justify-between md:items-center">
        <Link to='/'>

        <h1 className="text-5xl ml-2"> ME.</h1>
        </Link>
        <div className={ togglerNav ? 'flex flex-col gap-4 md:inline' : 'hidden md:inline'}>
       
            
       
            <NavLink className='nav-link' onClick={clickHandler} to='/'>Welcome</NavLink>
            <NavLink className='nav-link' onClick={clickHandler} to='/Home'>Home</NavLink>
            <NavLink className='nav-link' onClick={clickHandler} to='/calendar'>Calendar</NavLink>
            <NavLink className='nav-link' onClick={clickHandler} to='/WhatIsMe'>About</NavLink>
        </div>
        <buttton className=' inline md:hidden self-start'
        onClick={clickHandler}>{togglerNav ? <AiOutlineClose/> : <FaBars/>}
        </buttton>
    </nav>
    );
};

export default ClientNav;