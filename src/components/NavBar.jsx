import React, { useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from "react-router-dom";
import WhatIsMe from "./WhatIsMe";

const NavBar = () => {

    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: "Welcome"
        },
        {
            id: 2,
            link: "Home"
        },
        {
            id: 3,
            link: 'New Entry'
        },
        {
            id: 4,
            link: 'About'
        },
        {
            id: 5,
            link: 'Settings'
        },
        {

            id: 6,
            link: 'Log Out'
        },

    ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed font-bold">
        <div>
            <h1 className="text-5xl ml-2"> ME.</h1>
        </div>
         <ul className="flex">
            {links.map(({ id, link}) => (
             <li key={id} className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
                <Link to={link}>{link}</Link>
                
             </li>
            ))}
        </ul>
        <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 text-sky-500 ">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav &&(

        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen fill-sky-500 bg-gradient-to-b from-sky-500 to-sky-200 text-white ">
        {links.map(({ id, link}) => (
             <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
             </li>
            ))}
        </ul>
        )}
    </div>
  );
};

export default NavBar;