import React, { useState } from "react";
import Pic from "../assets/images/profile.jpg";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItem = [
    {
      id: "Home",
      text: "Home",
    },
    {
      id: "About",
      text: "About",
    },
    {
      id: "Languages",
      text: "Languages",
    },

    {
      id: "Contact",
      text: "Contact",
    },
  ];

  return (
    <div
      className="max-w-screen-4xl mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-black text-white border-b "
      style={{ zIndex: 10 }}
    >
      <div className="flex justify-between h-16 items-center">
        <div className="flex space-x-2">
          <img src={Pic} alt="" className="w-12 h-12 rounded-full" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Uzai<span className="text-green-500 text-2xl">r</span>
            <p className="text-sm">Web developer</p>
          </h1>
        </div>
        {/* Desktop menu */}
        <div className="z-0">
          <ul className="md:flex space-x-8 hidden">
            {navItem.map(({ id, text }) => {
              return (
                <>
                  <li
                    key={id}
                    className="hover:scale-105 duration-200 cursor-pointer"
                  >
                    <Link
                      to={text}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <IoMdClose fontSize={24} /> : <IoMenu fontSize={24} />}
          </div>
        </div>
      </div>

      {menu && (
        <div className="md:hidden flex h-screen flex-col items-center justify-center space-y-3 font-bold text-xl">
          <ul>
            {navItem.map(({ id, text }) => {
              return (
                <>
                  <li
                    key={id}
                    className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  >
                    <Link
                      onClick={() => setMenu(!menu)}
                      to={text}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
