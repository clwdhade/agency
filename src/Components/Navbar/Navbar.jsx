import React, { useState } from "react";
import { BsXCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [responsive, setIsResponsive] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!responsive);
  };

  const ResponsiveStyle = {
    ".responsive": {
      alignItems: "center",
    },

    ".responsive.nav_menu": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div
      style={ResponsiveStyle}
      className={`${
        setIsResponsive ? "responsive" : ""
      } flex flex-row justify-between px-12 py-4 bg-slate-300 fixed top-0 w-full z-50`}
    >
      <div className="logo text-2xl font-extrabold">
        <span className="text-yellow-500">R</span>ecruitment{" "}
        <span className="text-yellow-500">A</span>gency
      </div>
      <ul className="nav_menu md:flex flex-row gap-4 text-xl hidden ">
        <li className="hover:underline-offset-2 hover:underline cursor-pointer decoration-yellow-500">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline-offset-2 hover:underline cursor-pointer decoration-yellow-500">
          <Link to="/services">Services</Link>
        </li>
        <li className="hover:underline-offset-2 hover:underline cursor-pointer decoration-yellow-500">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:underline-offset-2 hover:underline cursor-pointer decoration-yellow-500">
          <Link to="/companies">Companies</Link>
        </li>
        <li className="hover:underline-offset-2 hover:underline cursor-pointer decoration-yellow-500">
          <Link to="/contact">Contact</Link>
        </li>
        <BsXCircle
          className="cursor-pointer md:hidden block"
          onClick={toggleResponsive}
        />
      </ul>
      <FaBars
        className="cursor-pointer md:hidden block"
        onClick={toggleResponsive}
      />
    </div>
  );
};

export default Navbar;
