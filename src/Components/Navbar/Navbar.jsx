import React, { useState } from "react";
import { BsXCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [responsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!responsive);
  };

  const closeNavbar = () => {
    setIsResponsive(false); // Close the navbar
  };

  return (
    <div className={`flex justify-between items-center px-12 py-4 bg-slate-300 fixed top-0 w-full z-50 ${responsive ? 'flex-col items-center' : ''}`}>
      <div className="logo text-2xl font-extrabold">
        <span className="text-yellow-500">R</span>ecruitment{" "}
        <span className="text-yellow-500">A</span>gency
      </div>
      <ul className={`nav_menu md:flex ${responsive ? 'flex flex-col gap-4 h-[50dvh] transition-all ease-in-out justify-center items-center' : 'flex-row gap-4'} text-xl ${responsive ? '' : 'hidden'}`}>
        <li className="hover:underline-offset-2 hover:underline cursor-pointer decoration-yellow-500" onClick={closeNavbar}>
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline-offset-2 hover:underline cursor-pointer decoration-yellow-500" onClick={closeNavbar}>
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:underline-offset-2 hover:underline cursor-pointer decoration-yellow-500" onClick={closeNavbar}>
          <Link to="/about">About</Link>
        </li>
        <li className="hover:underline-offset-2 hover:underline cursor-pointer decoration-yellow-500" onClick={closeNavbar}>
          <Link to="/companies">Companies</Link>
        </li>
        <li className="hover:underline-offset-2 hover:underline cursor-pointer decoration-yellow-500" onClick={closeNavbar}>
          <Link to="/contact">Contact</Link>
        </li>
        <BsXCircle
          className={`cursor-pointer text-2xl hover:red-400 md:hidden ${responsive ? 'block' : 'hidden'}`}
          onClick={toggleResponsive}
        />
      </ul>
      <FaBars
        className={`cursor-pointer text-xl md:hidden ${responsive ? 'hidden' : 'block'}`}
        onClick={toggleResponsive}
      />
    </div>
  );
};

export default Navbar;
