import React from "react";
import {
  BsCalendar3,
  BsFillJournalBookmarkFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { VscGraphLine } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const Home = () => {
 

  return (
    <div
      name="Home"
      className="bg-gradient-to-b from-sky-300 to-sky-500 w-full
         text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
             w-full h-full"
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
          <Link to="/" className="rounded-lg w-fit">
            <VscGraphLine size={200} className="text-sky-200 mb-2" />
            Stats
          </Link>
          <Link to="/signin" className="rounded-lg w-fit">
            <BiLogOut size={200} className="text-sky-200 mb-2" />
            Login
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