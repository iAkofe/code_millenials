import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = ({ theme, onToggleTheme }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex py-4 justify-between items-center navbar nav-shell">
     <a href='#' className="flex items-center gap-3"> 
       <img src={logo} alt="codecube" className="logo-mark w-[129px] h-[50px]" />
    </a> 

      <ul className="list-none sm:flex hidden justify-center items-center flex-1 gap-8">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            }`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="hidden sm:flex items-center gap-4">
       <Button />
       <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
        <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
       </button>
      </div>
      
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 glass absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-2xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mt-4">
            <Button />
            <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
              <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
