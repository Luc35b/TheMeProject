import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { click } from "@testing-library/user-event/dist/click";

function ClientNav() {
  const [togglerNav, setTogglerNav] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const clickHandler = () => {
    setTogglerNav(!togglerNav);
  };

  const logOutHandler = () => {
    logout();
    clickHandler();
    navigate("/");
  };
  const links = [
    {
      id: 1,
      link: "/Home",
      name: "Home",
    },
    {
      id: 2,
      link: "/Account",
      name: "Profile"
    },
    {
      id: 3,
      link: "/calendar",
      name: "New Entry",
    },
    {
      id: 4,
      link: "/Diary",
      name: "Diary",
    },
    {
      id: 6,
      link: "/",
      name: "Logout",
    },
  ];

  const linksLogOut = [
    {
      id: 1,
      link: "/",
      name: "Welcome",
    },

    {
      id: 5,
      link: "/WhatIsMe",
      name: "About",
    },
    {
      id: 6,
      link: "/Signup",
      name: "Join Us",
    },
    {
        id: 7,
        link: "/Signin",
        name: "Login",
      },

  ];

  return (
    <div className="flex justify-between items-center w-full h-20 bg-sky-500 px-4 text-white fixed font-bold">
      <Link to="/">
        <h1 className="text-5xl ml-2"> ME.</h1>
      </Link>
      <ul className="hidden md:flex">
        {user
          ? links.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
              >
                {name !== "Logout" ? (
                  <Link to={link}>{name}</Link>
                ) : (
                  <p onClick={logOutHandler}>logout</p>
                )}
              </li>
            ))
          : linksLogOut.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
              >
                {name !== "logout" ? (
                  <Link to={link}>{name}</Link>
                ) : (
                  <li onClick={logOutHandler}>logout</li>
                )}
              </li>
            ))}
      </ul>
    
      <div onClick={()=> clickHandler()} className="cursor-pointer pr-4 z-10 text-sky-400 md:hidden">
            {togglerNav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {togglerNav &&(

        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-screen h-screen fill-sky-500 bg-sky-500 bg-gradient-to-b from-sky-500 to-sky-200 text-white">
        {user
                ? links.map(({ id, link, name }) => (
                    <li
                      key={id}
                      className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    >
                      {name !== "Logout" ? (
                        <Link to={link} onClick={()=> clickHandler()}>{name}</Link>
                      ) : (
                        <p onClick={logOutHandler}>logout</p>
                      )}
                    </li>
                  ))
                : linksLogOut.map(({ id, link, name }) => (
                    <li
                      key={id}
                      className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    >
                      {name !== "logout" ? (
                        <Link to={link} onClick={()=> clickHandler()}>{name}</Link>
                      ) : (
                        <li onClick={logOutHandler }>logout</li>
                      )}
                    </li>
            ))}
        </ul>
        )}
    </div>
    );
};
export default ClientNav;
