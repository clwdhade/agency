import React from 'react'

const Navbar = () => {
    return (
        <Navbar className="flex flex-row justify-between px-12 py-1 bg-blur-lg text-white">
            <div className="logo">Agency</div>
            <ul className='flex flex-row gap-2 text-2xl'>
                <li className='font-bold text-blue-700'>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Companies</li>
                <li>Contact</li>

            </ul>
        </Navbar>
    )
}

export default Navbar
