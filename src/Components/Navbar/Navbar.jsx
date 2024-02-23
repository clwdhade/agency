import React from 'react'

const Navbar = () => {
    return (
        <navbar className="flex flex-row justify-between px-12 py-4 bg-slate-300  ">
            <div className="logo text-2xl font-extrabold">Agency</div>
            <ul className='flex flex-row gap-4 text-xl'>
                <li >Home</li>
                <li >Services</li>
                <li >About</li>
                <li >Companies</li>
                <li >Contact</li>

            </ul>
        </navbar>
    )
}

export default Navbar
