import React, { useState } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState();
  const [expandMenu, setExpandMenu] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent bg-blur`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActiveTab("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            alt="logo"
            src={logo}
            className="w-15
           h-9 object-contain"
          ></img>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 px-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                activeTab === link.title ? "text-white" : "text-secondary"
              } hover:text-white hover:text-lg  hover:font-medium cursor-pointer`}
              onClick={() => setActiveTab(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center px-4">
          <img
            src={expandMenu ? close : menu}
            alt="menu"
            className="w-6 h-6"
            onClick={() => setExpandMenu(!expandMenu)}
          />
          <div
            className={`${
              expandMenu ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 z-10 rounded-xl min-w-[140px]`}
          >
            <ul className="list-none flex flex-col">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    activeTab === link.title ? "text-white" : "text-secondary"
                  } hover:text-white hover:text-lg font-medium font-poppins cursor-pointer p-2`}
                  onClick={() => {
                    setExpandMenu(false);
                    setActiveTab(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
