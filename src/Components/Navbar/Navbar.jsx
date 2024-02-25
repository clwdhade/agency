import React, { useState } from 'react'
import { BsXCircle } from "react-icons/bs"
import { FaBars } from "react-icons/fa"

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
        }
    }

    return (
        <div style={ResponsiveStyle} className={`${setIsResponsive ? "responsive" : ""} flex flex-row justify-between px-12 py-4 bg-slate-300 fixed top-0 w-full z-50`}>
            <div className="logo text-2xl font-extrabold">Agency</div>
            <ul className='nav_menu md:flex flex-row gap-4 text-xl hidden'>
                <li className='hover:underline-offset-2 hover:underline cursor-pointer' >Home</li >
                <li className='hover:underline-offset-2 hover:underline cursor-pointer' >Services</li >
                <li className='hover:underline-offset-2 hover:underline cursor-pointer' >About</li >
                <li className='hover:underline-offset-2 hover:underline cursor-pointer' >Companies</li >
                <li className='hover:underline-offset-2 hover:underline cursor-pointer' >Contact</li>
                <BsXCircle className='cursor-pointer md:hidden block' onClick={toggleResponsive} />
            </ul>
            <FaBars className="cursor-pointer md:hidden block" onClick={toggleResponsive} />
        </div>
    )
}

export default Navbar
