import React from 'react'

const Navbar = () => {
    return (
        <navbar className="flex flex-row justify-between px-12 py-4 bg-slate-300  ">
            <div className="logo text-2xl font-extrabold">Agency</div>
            <ul className='flex flex-row gap-4 text-xl'>
                <li className='hover:underline-offset-2 hover:underline cursor-pointer' >Home</li >
                <li className='hover:underline-offset-2 hover:underline cursor-pointer' >Services</li >
                <li className='hover:underline-offset-2 hover:underline cursor-pointer' >About</li >
                <li className='hover:underline-offset-2 hover:underline cursor-pointer' >Companies</li >
                <li className='hover:underline-offset-2 hover:underline cursor-pointer' >Contact</li>

            </ul>
        </navbar>
    )
}

export default Navbar
