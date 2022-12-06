import React from "react";
import {
  BsFillJournalBookmarkFill,
} from "react-icons/bs";
//import { VscGraphLine } from "react-icons/vsc";
import {CgProfile} from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import {GiOpenBook} from "react-icons/gi"
import { Link ,useNavigate} from "react-router-dom";

import { UserAuth } from "../context/AuthContext";
const Home = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();
  const logOutHandler = () => {
    logout();
    navigate("/");
  };

  return (
    <div
      name="Home"
      className="bg-gradient-to-b from-sky-300 to-sky-500 w-full
         text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
             w-full h-screen"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-sky-300">
            Home
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
                    px-12 sm:px-0 text-center icons-center"
        >
          <Link to="/calendar" className="rounded-lg w-fit">
            <span>
              <BsFillJournalBookmarkFill
                size={200}
                className="text-sky-200 cursor-pointer mb-2"
              />
            </span>
            New Entry
          </Link>
          <Link to="/Account" className="rounded-lg w-fit">
            <CgProfile size={200} className="text-sky-200 mb-2" />
            Profile
          </Link>
          <Link to="/Diary" className="rounded-lg w-fit">
            <GiOpenBook size={200} className="text-sky-200 mb-2" />
            Diary
          </Link>
          <Link to="/" onClick={logOutHandler} className="rounded-lg w-fit">
            <BiLogOut size={200} className="text-sky-200 mb-2" />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

/*
          <Link to="/" className="rounded-lg w-fit">
            <CgProfile size={200} className="text-sky-200  mb-2" />
            Profile Settings
          </Link>
          <Link to="/" className="rounded-lg w-fit">
            <BsFillPeopleFill size={200} className="text-sky-200 mb-2" />
            Community
          </Link>
 */